<?php

namespace App\Http\Controllers\Web\Backend;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use App\Services\Backend\SystemService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SystemSettingsController extends Controller
{
    protected $service;

    public function __construct(
        SystemService $service
    ) {
        $this->service = $service;
    }

    public function index(Request $request)
    {
        $setting = Setting::first();

        if ($setting) {
            $setting = $this->service->show(
                $request,
                $setting->id
            );
        }

        return Inertia::render(
            'backend/settings/system',
            [
                'setting' => $setting,
            ]
        );
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'site_name' => ['nullable', 'string'],
            'site_email' => ['nullable', 'email'],
            'site_phone' => ['nullable', 'string'],
            'site_address' => ['nullable', 'string'],
            'timezone' => ['nullable', 'string'],
            'currency' => ['nullable', 'string'],
            'maintenance_mode' => ['nullable', 'boolean'],
            'meta_title' => ['nullable', 'string'],
            'meta_description' => ['nullable', 'string'],
            'facebook' => ['nullable', 'string'],
            'twitter' => ['nullable', 'string'],
            'linkedin' => ['nullable', 'string'],
            'instagram' => ['nullable', 'string'],

            'footer_text' => ['nullable', 'string'],
            'copyright_text' => ['nullable', 'string'],

            'light_logo' => [
                'nullable',
                'mimes:jpg,jpeg,png,webp,svg',
                'max:10480',
            ],

            'dark_logo' => [
                'nullable',
                'mimes:jpg,jpeg,png,webp,svg',
                'max:10480',
            ],

            'favicon' => [
                'nullable',
                'mimes:jpg,jpeg,png,ico,webp',
                'max:6024',
            ],
        ]);

        $setting = Setting::first();

        if (!$setting) {
            $setting = new Setting();
        }

        /*
        |--------------------------------------------------------------------------
        | Upload Light Logo
        |--------------------------------------------------------------------------
        */

        if ($request->hasFile('light_logo')) {
            if (
                $setting->light_logo &&
                Storage::disk('public')->exists(
                    $setting->light_logo
                )
            ) {
                Storage::disk('public')->delete(
                    $setting->light_logo
                );
            }

            $validated['light_logo'] =
                $request
                ->file('light_logo')
                ->store(
                    'settings',
                    'public'
                );
        }

        /*
        |--------------------------------------------------------------------------
        | Upload Dark Logo
        |--------------------------------------------------------------------------
        */

        if ($request->hasFile('dark_logo')) {
            if (
                $setting->dark_logo &&
                Storage::disk('public')->exists(
                    $setting->dark_logo
                )
            ) {
                Storage::disk('public')->delete(
                    $setting->dark_logo
                );
            }

            $validated['dark_logo'] =
                $request
                ->file('dark_logo')
                ->store(
                    'settings',
                    'public'
                );
        }

        /*
        |--------------------------------------------------------------------------
        | Upload Favicon
        |--------------------------------------------------------------------------
        */

        if ($request->hasFile('favicon')) {
            if (
                $setting->favicon &&
                Storage::disk('public')->exists(
                    $setting->favicon
                )
            ) {
                Storage::disk('public')->delete(
                    $setting->favicon
                );
            }

            $validated['favicon'] =
                $request
                ->file('favicon')
                ->store(
                    'settings',
                    'public'
                );
        }

        $setting->fill($validated);

        $setting->save();

        return back()->with(
            'success',
            'System settings updated successfully.'
        );
    }
}
