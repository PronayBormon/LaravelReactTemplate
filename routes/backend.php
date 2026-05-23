<?php

use App\Http\Controllers\Web\Backend\DashboardController;
use App\Http\Controllers\Web\Backend\SystemSettingsController;
use App\Http\Controllers\Web\Backend\UserController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard.index');

    // User APIs controller 
    Route::get('/users', [UserController::class, 'index'])->name('admin.user.index');
    Route::post('/users', [UserController::class, 'store'])->name('admin.users.store');
    Route::put('/users/{user}', [UserController::class, 'update'])->name('admin.users.update');
    Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('admin.users.destroy');


    // System setting here 
    Route::get('/settings/system', [SystemSettingsController::class, 'index'])->name('admin.settings.system.index');
    Route::post('/settings/system/update', [SystemSettingsController::class, 'update'])->name('admin.settings.system.index');
});
