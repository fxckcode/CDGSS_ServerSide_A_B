<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\DepartamentosController;
use App\Http\Controllers\LugaresController;
use App\Http\Controllers\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('v1')->group(function () {
    Route::prefix('auth')->group(function() {
        Route::post('login', [AuthController::class, 'login']);
        Route::get('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
    });

    Route::post('registro', [AuthController::class, 'registro']);
    Route::middleware('auth:sanctum')->group(function() {
        Route::apiResource('users', UsersController::class);
        Route::apiResource('departamentos', DepartamentosController::class);
        Route::apiResource('lugares', LugaresController::class);
    });
}); 