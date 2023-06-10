<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Products;
use App\Models\Movements;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Products::all();
        //$movements = Movements::all();
        return Inertia::render('Products', [
            'products' => $products,
            //'movements' => $movements,
        ]);
    }



    public function store(Request $request)
    {

        $request->validate([
            'product_name' => 'required | max: 100',
            'product_description' => 'required | max: 100',
            'product_presentation' => 'required | max: 100',
            'sku' => 'required | max: 100',
            'id_subcategory_fk' => 'required | max: 100',
            'id_state_fk' => 'required | max: 100'
        ]);
        $products = new Products($request->input());
        $products->save();
        return redirect('Products');
    }




    public function update(Request $request, $id)
    {
        $products = Products::find($id);
        $products->fill($request->input())->saveOrFail();
        return redirect('Products');
    }


    public function destroy($id)
    {
        $products = Products::find($id);
        $products->delete();
        return redirect('Products');

    }
}
