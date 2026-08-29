<?php

namespace App\Repositories\Auth;

use App\Models\User;

class AuthRepository
{
    public function createUser(array $data): User
    {
        return User::create($data);
    }

    public function findByEmail(string $email): ?User
    {
        return User::where('email', $email)->first();
    }

    public function delete(User $user): bool
    {
        return $user->delete();
    }
}
