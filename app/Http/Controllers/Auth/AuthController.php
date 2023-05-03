<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function registro(Request $request)
    {
        try {
            $request->validate([
                'nombre' => 'required|string|min:3',
                'email' => 'required|email|unique:users',
                'password' => 'required|string|min:3'
            ]);

            $usuario = new User();
            $usuario->nombre = $request->nombre;
            $usuario->email = $request->email;
            $usuario->password = bcrypt($request->password);
            $usuario->api_token = null;
            $usuario->rol = 2;
            $usuario->save();

            return response()->json($usuario, 201);

        } catch (\Exception $e) {
            return response()->json([
                'mensaje' => 'información no procesada',
                $e
            ], 422);
        }
    }

}
