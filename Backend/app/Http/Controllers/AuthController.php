<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


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

        return response()->json(
            [
                'message' => 'User created successfully',
            ],
            201
        );
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
            ], 401);
        }

        $user = $request->user();

        $token = $user->createToken('Access Token');

        $user->access_token = $token->accessToken;

        return response()->json([
            'user' => $user,
        ], 200);
    }

}
