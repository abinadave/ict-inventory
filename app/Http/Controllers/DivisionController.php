<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Division as Division;
use Illuminate\Support\Facades\Auth;

class DivisionController extends Controller
{
	public function fetch(){
		$divisions = Division::orderBy('id','desc')->get();
		return response()->json($divisions);
	}
    public function insert(Request $request){
    	 $this->validate($request, [
	        'division_name' => 'required|unique:divisions|max:100'
	    ]);
    	return $this->saveDivision($request->input('division_name'));
    }
    private function saveDivision($divisionName){
    	$division = new Division;
    	$division->division_name = $divisionName;
    	$division->created_by = Auth::user()->name;
    	$division->save();
    	return response()->json($division);
    }
}
