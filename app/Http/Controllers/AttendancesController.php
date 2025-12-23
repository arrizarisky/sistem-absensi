<?php

namespace App\Http\Controllers;

use App\Models\Attendances;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Guard;

class AttendancesController extends Controller
{
    public function submit(Request $request)
    {
        $request->validate([
            'status' => 'required',
            'description' => 'required_if:status,sick,leave,permit,business_trip,remote|max:288'
        ]);

        Attendances::create([
            'user_id' => auth()->guard()->id(),
            'status' => $request->status,
            'description' => $request->description
        ]);
        return redirect()->route('dashboard')->with('success', 'Absent di catat');
    }
}
