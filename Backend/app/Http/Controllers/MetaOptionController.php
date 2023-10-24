<?php

namespace App\Http\Controllers;

use App\Models\MetaOption;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MetaOptionController extends Controller
{

    public function create_meta(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'option_key' => 'required|string',
            'option_value' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 400);
        }

        $meta = MetaOption::where('option_key', $request->option_key)->first();

        if ($meta) {

            $meta->option_value = $request->option_value;
            $meta->save();

            return response()->json(['message' => 'Meta updated successfully',], 200);
        }

        $meta = new MetaOption([
            'option_key' => $request->option_key,
            'option_value' => $request->option_value,
        ]);

        $meta->save();

        return response()->json(['message' => 'Meta created successfully',], 200);
    }
}
