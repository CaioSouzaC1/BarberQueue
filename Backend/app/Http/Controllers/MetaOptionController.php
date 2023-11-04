<?php

namespace App\Http\Controllers;

use App\Models\MetaOption;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MetaOptionController extends Controller
{

    public function create_meta(Request $request)
    {

        foreach ($request->all() as $meta_option) {

            $validator = Validator::make($meta_option, [
                "key" => 'required|string',
                "value" => 'required',
            ]);



            if ($validator->fails()) {
                return response()->json([
                    'errors' => $validator->errors(), 'meta_option' => $meta_option,
                ], 400);
            }

            $meta = MetaOption::where('option_key', $meta_option["key"])->first();

            if ($meta) {
                $meta->option_value = $meta_option["value"];
                $meta->save();
            } else {
                $meta = new MetaOption(
                    ['option_key' => $meta_option["key"], 'option_value' => $meta_option["value"],]
                );

                $meta->save();
            }
        }

        return response()->json(['message' => 'Meta created successfully',], 200);
    }

    public function get_meta(Request $request)
    {

        // i want to return all meta options in a array with option_key and option_value

        $meta = MetaOption::all();

        $meta_array = [];

        foreach ($meta as $meta_option) {
            $meta_array[$meta_option->option_key] = $meta_option->option_value;
        }

        return response()->json(['meta' => $meta_array], 200);

    }
}
