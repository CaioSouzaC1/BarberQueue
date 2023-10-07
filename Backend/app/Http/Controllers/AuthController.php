<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{
    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'whatsapp' => 'required|string|unique:users',
            'name' => 'required|string',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 400);
        }


        $user = new User([
            'whatsapp' => $request->whatsapp,
            'name' => $request->name,
            'password' => bcrypt($request->password),
        ]);

        $user->save();

        // return response()->json(
        //     [
        //         'message' => 'User created successfully',
        //     ],
        //     201
        // );

        return $this->login($request);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'whatsapp' => 'required|string',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 400);
        }

        $credentials = request(['whatsapp', 'password']);

        if (!auth()->attempt($credentials)) {
            return response()->json([
                'message' => 'Unauthorized',
            ], 401, [
                'X-Error-Message' => 'Credenciais inválidas',
            ]);
        }

        $user = $request->user();

        $token = $user->createToken('Access Token');

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

        $user = User::where('id', $accessToken->tokenable_id)->first();

        return response()->json(["user" => $user], 200);
    }

    public function logout(Request $request)
    {
        $token = $request->input('user.token');

        $accessToken = PersonalAccessToken::where('token', $token)->first();

        $accessToken->delete();

        return response()->json(['message' => 'Logged out'], 200);
    }
}
