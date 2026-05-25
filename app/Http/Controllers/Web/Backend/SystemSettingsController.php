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
            $setting = $this->service->first(
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
        $this->service->update($request);

        return back()->with(
            'success',
            'System settings updated successfully.'
        );
    }
}
