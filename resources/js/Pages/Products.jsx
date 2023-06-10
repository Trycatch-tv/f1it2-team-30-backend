import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Head } from "@inertiajs/react";

export default function Inicio(props) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState('');
    const [operation, setOperation] = useState(1);
    const openModal = (op) => {
      setModal(true);
      setOperation(op);
      if (op == 1) {
        setTitle('Nuevo Producto');
      } else {
        setTitle('Editar Producto');
      }
    }

    const closeModal = () => {
      setModal(false);
    }

    const save = () => {
      setModal(false);
    }
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
                            <PrimaryButton onClick={() => openModal(1)}>
                                <i className="fa-solid fa-plus-circle"></i>
                                Añadir
                            </PrimaryButton>
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <table className="border table-auto gray-400">
                                    <thead>
                                        <tr className="bbg-gray-100">
                                            <th className="px-2 py-2">SKU</th>
                                            <th className="px-2 py-2">
                                                Producto
                                            </th>
                                            <th className="px-2 py-2">
                                                Presentacion
                                            </th>
                                            <th className="px-2 py-2">Marca</th>
                                            <th className="px-2 py-2">
                                                Precio unitatio
                                            </th>

                                            <th className="px-2 py-2">
                                                Categoria
                                            </th>
                                            <th className="px-2 py-2">
                                                Acciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.products.map((products, i) => (
                                            <tr key={products.id}>
                                                <td className="px-2 py-2 border border-gray-400">
                                                    {i + 1}
                                                </td>
                                                <td className="px-2 py-2 border border-gray-400">
                                                    {products.product_name}
                                                </td>
                                                <td className="px-2 py-2 border border-gray-400">
                                                    {
                                                        products.product_presentation
                                                    }
                                                </td>
                                                <td className="px-2 py-2 border border-gray-400">
                                                    {products.sku}
                                                </td>
                                                <td className="px-2 py-2 border border-gray-400">
                                                    {products.sku}
                                                </td>
                                                <td className="px-2 py-2 border border-gray-400">
                                                    {products.id_subcategory_fk}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
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
                                            <div className="mt-3">
                                                <InputLabel
                                                    forInput="name"
                                                    value="Categoría"
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
                                                    value="SubCategoría"
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
                                                    value="Marca"
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
                                            <div className="flex gap-2">
                                                <div className="mt-3">
                                                    <InputLabel
                                                        forInput="name"
                                                        value="Precio unitario"
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
                                                        value="Cantidad"
                                                    />
                                                    <TextInput
                                                        name="name"
                                                        type="number"
                                                        className="block w-full mt-1"
                                                        autoComplete="name"
                                                        isFocused={true}
                                                    />
                                                </div>
                                                <div className="mt-3">
                                                    <InputLabel
                                                        forInput="name"
                                                        value="Lote"
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
                                            <div className="mt-3">
                                                <InputLabel
                                                    forInput="name"
                                                    value="Proveedor"
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
                                                    value="Fecha de caducidad"
                                                />
                                                <TextInput
                                                    name="name"
                                                    type="date"
                                                    className="block w-full mt-1"
                                                    autoComplete="name"
                                                    isFocused={true}
                                                />
                                            </div>
                                            <div className="mt-3">
                                                <InputLabel
                                                    forInput="name"
                                                    value="Tipo de movimiento"
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
                                                    value="Fecha de movimiento"
                                                />
                                                <TextInput
                                                    name="name"
                                                    type="date"
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
                                            Save
                                        </PrimaryButton>
                                        <SecondaryButton
                                            className=""
                                            onClick={closeModal}
                                        >
                                            Cancel
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
