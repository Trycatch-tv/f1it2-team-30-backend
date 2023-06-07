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
        Schema::create('movements', function (Blueprint $table) {
            $table->id();
            $table->integer('price_unitary');
            $table->string('lote');
            $table->date('movement_caducity');
            $table->integer('movement_quantity');

            $table->unsignedBigInteger('id_provider_fk')->nullable();
            $table->foreign('id_provider_fk')
            ->references('id')
                ->on('providers')
                ->onDelete('cascade');

            $table->unsignedBigInteger('id_brands_fk')->nullable();
            $table->foreign('id_brands_fk')
            ->references('id')
                ->on('brands')
                ->onDelete('cascade');

            $table->unsignedBigInteger('id_users_fk')->nullable();
            $table->foreign('id_users_fk')
            ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->unsignedBigInteger('id_document_fk')->nullable();
            $table->foreign('id_document_fk')
            ->references('id')
                ->on('documents')
                ->onDelete('cascade');

            $table->unsignedBigInteger('id_type_movement_fk')->nullable();
            $table->foreign('id_type_movement_fk')
            ->references('id')
                ->on('type_movements')
                ->onDelete('cascade');

            $table->unsignedBigInteger('id_product_fk')->nullable();
            $table->foreign('id_product_fk')
            ->references('id')
                ->on('products')
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
        Schema::dropIfExists('movements');
    }
};
