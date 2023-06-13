<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('product_name');
            $table->string('product_presentation');

             $table->unsignedBigInteger('id_brand_fke')->nullable();
            $table->foreign('id_brand_fke')
            ->references('id')
            ->on('brands')
            ->onDelete('cascade');

            $table->unsignedBigInteger('id_category_fke')->nullable();
            $table->foreign('id_category_fke')
            ->references('id')
            ->on('categories')
            ->onDelete('cascade');

            $table->unsignedBigInteger('id_provider_fke')->nullable();
            $table->foreign('id_provider_fke')
            ->references('id')
            ->on('providers')
            ->onDelete('cascade');

            $table->unsignedBigInteger('id_user_fke')->nullable();
            $table->foreign('id_user_fke')
            ->references('id')
            ->on('users')
            ->onDelete('cascade');

            $table->date('product_date_in');
            $table->date('product_date_caducity')->nullable();
            $table->tinyInteger('product_quantity');
            $table->tinyInteger('product_buy_price');
            $table->tinyInteger('product_sell_price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
