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
            $table->string('product_description');
            $table->string('product_presentation');
            $table->string('sku');

            $table->unsignedBigInteger('id_subcategory_fk')->nullable();
            $table->foreign('id_subcategory_fk')
                ->references('id')
                ->on('subcategories')
                ->onDelete('cascade');

            $table->unsignedBigInteger('id_state_fk')->nullable();
            $table->foreign('id_state_fk')
                ->references('id')
                ->on('states')
                ->onDelete('cascade');

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
