<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Products;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Asi es como estaba antes:
        // $products = Products::all();
        // return $products;

        $products = Products::with('brand', 'category', 'provider', 'user')->get();
        return $products;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product = new Products();
        $product->product_name = $request->product_name;
        $product->product_presentation = $request->product_presentation;
        $product->id_brand_fk = $request->id_brand_fk;
        $product->id_category_fk = $request->id_category_fk;
        $product->id_provider_fk = $request->id_provider_fk;
        $product->id_user_fk = $request->id_user_fk;
        $product->product_date_in = $request->product_date_in;
        $product->product_date_caducity = $request->product_date_caducity;
        $product->product_quantity = $request->product_quantity;
        $product->product_buy_price = $request->product_buy_price;
        $product->product_sell_price = $request->product_sell_price;
        $product->save();
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Products::find($id);
        return $product;
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $product = Products::findOrFail($request->id);
        $product->product_name = $request->product_name;
        $product->product_presentation = $request->product_presentation;
        $product->id_brand_fk = $request->id_brand_fk;
        $product->id_category_fk = $request->id_category_fk;
        $product->id_provider_fk = $request->id_provider_fk;
        $product->id_user_fk = $request->id_user_fk;
        $product->product_date_in = $request->product_date_in;
        $product->product_date_caducity = $request->product_date_caducity;
        $product->product_quantity = $request->product_quantity;
        $product->product_buy_price = $request->product_buy_price;
        $product->product_sell_price = $request->product_sell_price;
        $product->save();
        return $product;
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Products::destroy($id);
        return $product;
    }
}
