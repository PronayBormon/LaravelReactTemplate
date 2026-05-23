<?php

use App\Http\Controllers\Web\Backend\DashboardController;
use App\Http\Controllers\Web\Backend\SystemSettingsController;
use App\Http\Controllers\Web\Backend\UserController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');


require __DIR__ . '/backend.php';
require __DIR__ . '/settings.php';
