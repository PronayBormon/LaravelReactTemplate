<?php

// use App\Http\Controllers\Settings\ProfileController;
use App\Http\Controllers\Web\Backend\DashboardController;
use App\Http\Controllers\Web\Backend\ProfileController;
use App\Http\Controllers\Web\Backend\SystemSettingsController;
use App\Http\Controllers\Web\Backend\UserController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard.index');

    // User APIs controller 
    Route::get('/users', [UserController::class, 'index'])->name('admin.user.index');
    Route::get('/users/create', [UserController::class, 'create'])->name('admin.users.create');
    Route::post('/users', [UserController::class, 'store'])->name('admin.users.store');
    Route::get('/user/edit/{id}', [UserController::class, 'edit'])->name('admin.users.edit');
    Route::get('/user/show/{id}', [UserController::class, 'show'])->name('admin.users.show');
    Route::put('/users/{id}', [UserController::class, 'update'])->name('admin.users.update');
    Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('admin.users.destroy');


    // System setting here 
    Route::get('/settings/system', [SystemSettingsController::class, 'index'])->name('admin.settings.system.index');
    Route::post('/settings/system/update', [SystemSettingsController::class, 'update'])->name('admin.settings.system.index');


    //profile routes and controller
    Route::get('/admin/profile', [ProfileController::class, 'index'])->name('admin.profile.index');
});
