<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\IctItemName as IctItemName;
use App\IctSpecification as IctSpecification;
use Illuminate\Support\Facades\Auth;

class IctItemNameController extends Controller
{
    public function fetchall(){
        return response()->json([
            'ict_item_names' => IctItemName::orderBy('id','desc')->get(),
            'ict_specifications' => IctSpecification::all()
        ]);
    }
    public function insert(Request $request){
    	$ict_item_name = $request->input('ict_item_name');
    	$specifications = $request->input('specifications');
        $specs = array();
    	$this->validate($request, [
	        'ict_item_name' => 'required|max:255'
	    ]);
    	$count = count($specifications);
    	if ($count) {
    		$ictItemName = new IctItemName;
	    	$ictItemName->name = $ict_item_name;
            $ictItemName->created_by = Auth::user()->name;
	    	$ictItemName->save();
	    	foreach ($specifications as $key => $value) {
                $ictSpecs = new IctSpecification;
                $ictSpecs->ict_item_id = $ictItemName->id;
                $ictSpecs->specification = $value;
                $ictSpecs->created_by = Auth::user()->name;
                $ictSpecs->save();
                array_push($specs, $ictSpecs);
            }
            return response()->json([
                'ict_item_name' => $ict_item_name,
                'specs'         => $specs
            ]);
    	}else {
    		return response()->json(array('error' => ['Incomplete ict specifications']), 422);
    	}
    	
    }
}
