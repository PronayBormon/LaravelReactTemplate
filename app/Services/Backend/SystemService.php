<?php

namespace App\Services\Backend;


use App\Repository\Backend\SystemRepository;

class SystemService
{
    protected $repo;

    public function __construct(
        SystemRepository $repo
    ) {
        $this->repo = $repo;
    }

    public function show($request, $id)
    {
        return $this->repo->show($id);
    }
}
