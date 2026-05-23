<?php

namespace App\Repository\Backend;

use App\Models\Setting;

class SystemRepository
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }


    public function show($id)
    {
        return Setting::find($id);
    }
}
