<?php

namespace App\Http\Controllers\Web\Backend;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::query()

            ->when($request->search, function ($query, $search) {

                $query->where(function ($q) use ($search) {

                    $q->where('name', 'like', "%{$search}%")
                        ->orWhere('email', 'like', "%{$search}%");
                });
            })

            ->when($request->join_date, function ($query, $joinDate) {

                $query->whereDate('created_at', $joinDate);
            })

            ->latest()

            ->paginate(10)

            ->withQueryString();

        return Inertia::render('users/index', [
            'users' => $users,
            'filters' => $request->only([
                'search',
                'join_date',
            ]),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'min:6'],
        ]);

        User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
        ]);

        return back()->with('success', 'User created successfully');
    }

    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users,email,' . $user->id],
        ]);

        $user->update($validated);

        return back()->with('success', 'User updated successfully');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return back()->with('success', 'User deleted successfully');
    }
}
