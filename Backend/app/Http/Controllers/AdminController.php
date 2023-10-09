<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\PersonalAccessToken;

class AdminController extends Controller
{
    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|string|unique:admins',
            'name' => 'required|string',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 400);
        }

        $admin = new Admin([
            'email' => $request->email,
            'name' => $request->name,
            'password' => bcrypt($request->password),
        ]);

        $admin->save();

        return $this->login($request);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 400);
        }

        $credentials = $request->only('email', 'password');

        $admin = Admin::where('email', $credentials['email'])->first();

        if (!$admin || !Hash::check($credentials['password'], $admin->password)) {
            return response()->json([
                'message' => 'Unauthorized',
            ], 401, [
                'X-Error-Message' => 'Credenciais inválidas',
            ]);
        }

        $token = $admin->createToken('Access Token');

        $token->token = $token->accessToken->token;

        return response()->json(['user' => $token], 200);
    }

    public function validate_token(Request $request)
    {
        $token = $request->input('token');

        $accessToken = PersonalAccessToken::where('token', $token)->first();

        if (!$accessToken) {
            return response()->json(['message' => 'Token inválido'], 401);
        }

        if ($accessToken->expires_at && now()->gte($accessToken->expires_at)) {
            return response()->json(['message' => 'Token expirado'], 401);
        }

        $user = Admin::where('id', $accessToken->tokenable_id)->first();

        return response()->json(["user" => $user], 200);
    }
}
