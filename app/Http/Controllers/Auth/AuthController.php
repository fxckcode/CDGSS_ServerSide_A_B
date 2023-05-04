<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function registro(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'nombre' => 'required|string|min:3',
                'email' => 'required|email|unique:users',
                'password' => 'required|string|min:3'
            ]); 

            if ($validator->fails()) {
                return response()->json([
                    'mensaje' => 'inicio de sesión invalido',
                ], 422);
            } elseif ($validator->passes()) {
                $usuario = new User();
                $usuario->nombre = $request->nombre;
                $usuario->email = $request->email;
                $usuario->password = bcrypt($request->password);
                $usuario->api_token = null;
                $usuario->rol = 2;
                $usuario->save();

                $user = User::find($usuario->id);
                $token = $user->createToken('token')->plainTextToken;
                $user->api_token = $token;
                $user->save();

                return response()->json($user, 201);
            }
        } catch (\Exception $e) {
            return response()->json([
                'mensaje' => 'inicio de sesión invalido'
            ], 422);
        }
    }

    public function login(Request $request)
    {
        try {
            if (!Auth::attempt($request->only('email', 'password'))) {            
                return response()->json([
                    'mensaje' => 'inicio de sesión invalido'
                ], 400);
            }
            $user = User::where('email', $request['email'])->firstOrFail();
    
            $token = $user->createToken('api_token')->plainTextToken;
    
            return response()->json([$user, $token], 200);
        } catch (\Exception $e) {
            return response()->json([
                'mensaje' => 'inicio de sesión invalido'
            ], 400);
        }
    }

    public function logout(Request $request)
    {
        if (auth()->check()) {
            $request->user()->currentAccessToken()->delete();
            return response()->json([
                'mensaje' => 'cierre de sesión correcto'
            ], 200);
        } else {
            return response()->json([
                'mensaje' => 'usuario no autorizado'
            ], 401);
        }
    }

}
