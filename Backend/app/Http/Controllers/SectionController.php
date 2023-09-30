<?php

namespace App\Http\Controllers;

use App\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class SectionController extends Controller
{
    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'user_id' => 'required|string|exists:users,id',
            'date_timestamp' => 'required|string',
            'type' => 'required|string',
            'cancelled' => 'required|boolean',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 400);
        }

        $section = new Section([
            'user_id' => $request->user_id,
            'date_timestamp' => $request->date_timestamp,
            'type' => $request->type,
            'cancelled' => $request->cancelled,
        ]);

        $section->save();

        return response()->json(
            [
                'message' => 'Section created successfully',
            ],
            201
        );
    }
}
