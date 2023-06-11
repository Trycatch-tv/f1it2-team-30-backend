<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Inertia\Inertia;
class ProductController extends Controller
{
    public function index()
    {
        $products = Products::all();
        return Inertia::render('Products', ['products' => $products]);
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
        return redirect('products');
    }


    public function update(Request $request, $id)
    {
        $products = Products::find($id);
        $products->fill($request->input())->saveOrFail();
        return redirect('products');
    }

    public function destroy($id)
    {
        $products = Products::find($id);
        $products->delete();
        return redirect('products');
    }
}
