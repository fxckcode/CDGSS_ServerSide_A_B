<?php

namespace App\Http\Controllers;

use App\Models\Departamentos;
use Illuminate\Http\Request;

class DepartamentosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            if (auth()->user()->rol == 'ADMINISTRADOR') {
                $departamentos = Departamentos::all();
                return response()->json([$departamentos], 200);
            } else {
                return response()->json([
                    'mensaje' => 'usuario no autorizado'
                ], 422);
            }
        } catch (\Exception $e) {
            return response()->json([
                'mensaje' => 'información no procesada'
            ], 422);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            if (auth()->user()->rol == 'ADMINISTRADOR') {
                $request->validate([
                    'departamento' => 'required|string'
                ]);
    
                $departamento = new Departamentos();
                $departamento->departamento = $request->departamento;
                $departamento->save();
    
                $response = [
                    "id" => $departamento->id,
                    "departamento" => $departamento->departamento
                ];
    
                return response()->json($response, 201);
            } else {
                return response()->json([
                    'mensaje' => 'usuario no autorizado'
                ], 422);
            }
        } catch (\Exception $e) {
            return response()->json([
                'mensaje' => 'información no procesada'
            ], 422);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            if (auth()->user()->rol == "ADMINISTRADOR") {
                if (Departamentos::find($id)) {
                    $departamento = Departamentos::find($id);
                    $response = [
                        'id' => $departamento->id,
                        'departamento' => $departamento->departamento
                    ];
                    return response()->json($response, 200);
                } else {
                    return response()->json([
                        'mensaje' => 'usuario no autorizado'
                    ], 422);
                }
            }
        } catch (\Exception $e) {
            return response()->json([
                'mensaje' => 'información no procesada'
            ], 422);
        }

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            if (auth()->user()->rol == 'ADMINISTRADOR') {
                if (Departamentos::find($id)) {
                    $request->validate([
                        'id' => 'required|integer',
                        'departamento' => 'required|string'
                    ]);

                    $departamento = Departamentos::findOrFail($id)->update($request->all());

                    if ($departamento) {
                        return response([
                            'id' => Departamentos::find($id)->id,
                            'departamento' => Departamentos::find($id)->departamento
                        ], 200);
                    }

                } else {
                    return response()->json([
                        'mensaje' => 'información no procesada'
                    ], 422);
                }
            } else {
                return response()->json([
                    'mensaje' => 'usuario no autorizado'
                ], 422);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'mensaje' => 'información no procesada'
            ], 422);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
