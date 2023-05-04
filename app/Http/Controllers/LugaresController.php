<?php

namespace App\Http\Controllers;

use App\Models\Lugares;
use Illuminate\Http\Request;

class LugaresController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {      
        try {
            $lugares = Lugares::join('departamentos', 'departamentos.id', '=', 'lugares.departamento_id')
                ->select('lugares.*', 'departamentos.departamento as departamento_id')->get();
            return response()->json($lugares, 200);
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
            if (auth()->user()->rol == "TURISTA") {
                $request->validate([
                    'nombre' => 'required|string',
                    'descripcion' => 'required|string',
                    'imagen' => 'required|image',
                    'departamento_id' => 'required|integer'
                ]);
    
                $imagen = $request->file('imagen');
                $nombreImagen = $imagen->getClientOriginalName();
                $imagen->move(public_path('images'), $nombreImagen);
    
                $lugar = new Lugares();
                $lugar->nombre = $request->nombre;
                $lugar->descripcion = $request->descripcion;
                $lugar->imagen = $nombreImagen;
                $lugar->departamento_id = $request->departamento_id;
                $lugar->save();
    
                return response()->json($lugar, 201);
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
            if (Lugares::find($id)) {
                $lugar = Lugares::find($id);
                return response()->json($lugar, 200);
            } else {
                return response()->json([
                    'mensaje' => 'información no procesada'
                ], 422);    
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            if (auth()->user()->rol == "ADMINISTRADOR") {
                if (Lugares::find($id)) {
                    Lugares::destroy($id);
                    return response()->json([
                        'mensaje' => 'eliminación correcta'
                    ], 200);
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
        } catch (\Exception $e) {
            return response()->json([
                'mensaje' => 'información no procesada'
            ], 422);
        }
    }
}
