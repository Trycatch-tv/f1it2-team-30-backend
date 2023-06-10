import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useRef } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";

export function Products({ products, movements }) {
    return (
        <div class="content-center">
            <table className="border table-auto gray-400">
                <thead>
                    <tr className="bbg-gray-100">
                        <th className="px-2 py-2 border border-gray-400">Id</th>
                        <th className="px-2 py-2 border border-gray-400">Nombre Producto</th>
                        <th className="px-2 py-2 border border-gray-400">Descripción</th>
                        <th className="px-2 py-2 border border-gray-400">Presentacion</th>
                        <th className="px-2 py-2 border border-gray-400">Sku</th>
                        <th className="px-2 py-2 border border-gray-400">Subcategoría</th>
                        <th className="px-2 py-2 border border-gray-400">Estado</th>
                        <th className="px-2 py-2 border border-gray-400">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, i) => {
                        /*
                    const movement = movements.find(
                        (movement) => movement.id_product_fk === product.id
                    );
                    const marca = movement ? movement.id_brands_fk : "N/A";
                    const precioUnitario = movement
                        ? movement.price_unitary
                        : "N/A";
                    */

                        return (
                            <tr key={product.id}>
                                <td className="px-2 py-2 border border-gray-400">
                                    {i + 1}
                                </td>
                                <td className="px-2 py-2 border border-gray-400">
                                    {product.product_name}
                                </td>
                                <td className="px-2 py-2 border border-gray-400">
                                    {product.product_description}
                                </td>
                                <td className="px-2 py-2 border border-gray-400">
                                    {product.product_presentation}
                                </td>
                                <td className="px-2 py-2 border border-gray-400">
                                    {product.sku}
                                </td>
                                <td className="px-2 py-2 border border-gray-400">
                                    {product.id_subcategory_fk}
                                </td>
                                <td className="px-2 py-2 border border-gray-400">
                                    {product.id_state_fk}
                                </td>

                                <td className="px-2 py-2 border border-gray-400">
                                    <PrimaryButton
                                        className="m-1"
                                        onClick={() => openModal(1)}
                                    >
                                        <i className="fa-solid fa-plus-circle"></i>
                                        Editar
                                    </PrimaryButton>
                                    <DangerButton
                                        className="m-1"
                                        onClick={() => openModal(1)}
                                    >
                                        <i className="fa-solid fa-plus-circle"></i>
                                        Borrar
                                    </DangerButton>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default function Inicio(props) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const openModal = (op) => {
        setModal(true);
        setOperation(op);
        if (op == 1) {
            setTitle("Nuevo Producto");
        } else {
            setTitle("Editar Producto");
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    const save = () => {
        setModal(false);
    };

    return (
        <>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-900">
                        Lista de Productos
                    </h2>
                }
            >
                <Head title="Products" />

                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                            <PrimaryButton className="m-2" onClick={() => openModal(1)}>
                                <i className="fa-solid fa-plus-circle"></i>
                                Añadir
                            </PrimaryButton>
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <Products
                                    products={props.products}
                                    movements={props.movements}
                                />
                            </div>
                            <Modal show={modal} onClose={closeModal}>
                                <h2 className="mt-2 text-lg font-medium text-center ">
                                    {title}
                                </h2>
                                <form onSubmit={save} className="p-6 ">
                                    <div className="flex justify-center gap-10">
                                        <div className="text-gray-900 w-60">
                                            <div className="mt-3 text-gray-900">
                                                <InputLabel
                                                    forInput="name"
                                                    value="Producto"
                                                />
                                                <TextInput
                                                    name="name"
                                                    type="text"
                                                    className="block w-full mt-1"
                                                    autoComplete="name"
                                                    isFocused={true}
                                                />
                                            </div>
                                            <div className="mt-3">
                                                <InputLabel
                                                    forInput="name"
                                                    value="Descripción"
                                                />
                                                <TextInput
                                                    name="name"
                                                    type="text"
                                                    className="block w-full mt-1"
                                                    autoComplete="name"
                                                    isFocused={true}
                                                />
                                            </div>
                                            <div className="mt-3">
                                                <InputLabel
                                                    forInput="name"
                                                    value="SKU"
                                                />
                                                <TextInput
                                                    name="name"
                                                    type="text"
                                                    className="block w-full mt-1"
                                                    autoComplete="name"
                                                    isFocused={true}
                                                />
                                            </div>
                                        </div>

                                        <div className="w-96">
                                            <div className="mt-3">
                                                <InputLabel
                                                    forInput="name"
                                                    value="Presentación"
                                                />
                                                <TextInput
                                                    name="name"
                                                    type="text"
                                                    className="block w-full mt-1"
                                                />
                                            </div>
                                            <div className="mt-3">
                                                <InputLabel
                                                    forInput="name"
                                                    value="Estado"
                                                />
                                                <TextInput
                                                    name="name"
                                                    type="select"
                                                    className="block w-full mt-1"
                                                    autoComplete="name"
                                                    isFocused={true}
                                                />
                                            </div>
                                            <div className="mt-3">
                                                <InputLabel
                                                    forInput="name"
                                                    value="SubCategoría"
                                                />
                                                <TextInput
                                                    name="name"
                                                    type="select"
                                                    className="block w-full mt-1"
                                                    autoComplete="name"
                                                    isFocused={true}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end gap-4 mt-6 ">
                                        <PrimaryButton
                                            className=""
                                            onClick={closeModal}
                                        >
                                            Guardar
                                        </PrimaryButton>
                                        <SecondaryButton
                                            className=""
                                            onClick={closeModal}
                                        >
                                            Cancelar
                                        </SecondaryButton>
                                    </div>
                                </form>
                            </Modal>
                        </div>
                    </div>
                </div>
                
            </AuthenticatedLayout>
        </>
    );
}
