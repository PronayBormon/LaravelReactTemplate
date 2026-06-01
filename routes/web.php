<?php

use App\Http\Controllers\Web\Frontend\PageController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::get('/privacy-policy', [PageController::class, 'privacyPolicy'])->name('privacy-policy');
Route::get('/terms-and-conditions', [PageController::class, 'termsAndConditions'])->name('terms-and-conditions');

require __DIR__ . '/backend.php';
require __DIR__ . '/settings.php';
