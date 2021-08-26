<?php

namespace App\Http\Controllers\Api;

use Illuminate\Auth\Events\Verified;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\User;


class VerifyController extends Controller
{
    public function verify($userId, Request $request)
    {
        if (!$request->hasValidSignature()) {
            return redirect('/login?verification_status=error');
        }

        $user = User::findOrFail($userId);

        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
        }

        return redirect('/login?verification_status=success');
    }

    public function resend(User $user)
    {
        if (!$user) {
            return response()->json(["msg" => "Invalid user."], 400);
        } elseif ($user->hasVerifiedEmail()) {
            return response()->json(["msg" => "Email already verified."], 400);
        }

        $user->sendEmailVerificationNotification();

        return response()->json(["msg" => "Email verification link sent on your email."]);
    }
}
