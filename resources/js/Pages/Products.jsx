import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import Select from "@/Components/Select";
//import Select from "react-select";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useRef } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function Inicio(props) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const product_nameInput = useRef();
    const product_descriptionInput = useRef();
    const product_presentationInput = useRef();
    const skuInput = useRef();
    const id_subcategory_fkInput = useRef();
    const id_state_fkInput = useRef();
    const {
        data,
        setData,
        deletete: destroy,
        post,
        put,
        processing,
        reset,
        errors,
    } = useForm({
        id: "",
        product_name: "",
        product_description: "",
        product_presentation: "",
        sku: "",
        id_subcategory_fk: "",
        id_state_fk: "",
        created_at: "",
        updated_at: ""
    });
    const openModal = (
        op,
        id,
        product_name,
        product_description,
        product_presentation,
        sku,
        id_subcategory_fk,
        id_state_fk,
        created_at,
        updated_at
    ) => {
        setModal(true);
        setOperation(op);
        setData({
            product_name: '',
            product_description: '',
            product_presentation: '',
            sku: '',
            id_subcategory_fk: '',
            id_state_fk: '',
        });
        if (op == 1) {
            setTitle("Nuevo Producto");
        } else {
            setTitle("Editar Producto");
            setData({
                id: id,
                product_name: product_name,
                product_description: product_description,
                product_presentation: product_presentation,
                sku: sku,
                id_subcategory_fk: id_subcategory_fk,
                id_state_fk: id_state_fk,
                created_at: created_at,
                updated_at: updated_at,
            });
        }
    };
    const closeModal = () => {
        setModal(false);
    };

    const save = (e) => {
        e.preventDefault();
        if (operation === 1) {
            post(route("store"), {
                onSuccess: () => {
                    ok("Producto guardado");
                },
                onError: () => {
                    if (errors.product_name) {
                        reset("product_name");
                        product_nameInput.current.focus();
                    }
                    if (errors.product_description) {
                        reset("product_description");
                        product_descriptionInput.current.focus();
                    }
                    if (errors.product_presentation) {
                        reset("product_presentation");
                        product_presentationInput.current.focus();
                    }
                    if (errors.sku) {
                        reset("sku");
                        skuInput.current.focus();
                    }
                    if (errors.id_subcategory_fk) {
                        reset("id_subcategory_fk");
                        id_subcategory_fkInput.current.focus();
                    }
                    if (errors.id_state_fk) {
                        reset("id_state_fk");
                        id_state_fkInput.current.focus();
                    }
                },
            });
        } else {
            put(route("products.update", data.id), {
                onSuccess: () => {
                    ok("Producto modificado");
                },
                onError: () => {
                    if (errors.product_name) {
                        reset("product_name");
                        product_nameInput.current.focus();
                    }
                    if (errors.product_description) {
                        reset("product_description");
                        product_descriptionInput.current.focus();
                    }
                    if (errors.product_presentation) {
                        reset("product_presentation");
                        product_presentationInput.current.focus();
                    }
                    if (errors.sku) {
                        reset("sku");
                        skuInput.current.focus();
                    }
                    if (errors.id_subcategory_fk) {
                        reset("id_subcategory_fk");
                        id_subcategory_fkInput.current.focus();
                    }
                    if (errors.id_state_fk) {
                        reset("id_state_fk");
                        id_state_fkInput.current.focus();
                    }
                },
            });
        }
    };
    const ok = (mensaje) => {
        reset();
        closeModal();
        Swal.fire({ title: mensaje, icon: "success" });
    };
    const eliminar = (id, name) => {
        const alerta = Swal.mixin({ buttonsStyling: true });
        alerta
            .fire({
                title: "Seguro de eliminar el producto " + name,
                text: "Se perderá el producto",
                icon: "question",
                showCancelButton: true,
                confirmButtonText:
                    '<i class="fa-solid fa-check"></i> Si, eliminar',
                cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancelar',
            })
            .then((result) => {
                if (result.isConfirmed) {
                    destroy(route("products.destroy", id), {
                        onSuccess: () => {
                            ok("Producto eliminado");
                        },
                    });
                }
            });
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
                            <PrimaryButton
                                className="m-2"
                                onClick={() => openModal(1)}
                            >
                                <i className="fa-solid fa-plus-circle"></i>
                                Añadir
                            </PrimaryButton>
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <table className="border table-auto gray-400">
                                    <thead>
                                        <tr className="bbg-gray-100">
                                            <th className="px-2 py-2 border border-gray-400">
                                                Id
                                            </th>
                                            <th className="px-2 py-2 border border-gray-400">
                                                Nombre Producto
                                            </th>
                                            <th className="px-2 py-2 border border-gray-400">
                                                Descripción
                                            </th>
                                            <th className="px-2 py-2 border border-gray-400">
                                                Presentacion
                                            </th>
                                            <th className="px-2 py-2 border border-gray-400">
                                                Sku
                                            </th>
                                            <th className="px-2 py-2 border border-gray-400">
                                                Subcategoría
                                            </th>
                                            <th className="px-2 py-2 border border-gray-400">
                                                Estado
                                            </th>
                                            <th className="px-2 py-2 border border-gray-400">
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
                                                        products.product_description
                                                    }
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
                                                    {products.id_subcategory_fk}
                                                </td>
                                                <td className="px-2 py-2 border border-gray-400">
                                                    {products.id_state_fk}
                                                </td>

                                                <td className="px-2 py-2 border border-gray-400">
                                                    <PrimaryButton
                                                        className="m-1"
                                                        onClick={() =>
                                                            openModal(
                                                                2,
                                                                products.id,
                                                                products.product_name,
                                                                products.product_description,
                                                                products.product_presentation,
                                                                products.sku,
                                                                products.id_subcategory_fk,
                                                                products.id_state_fk,
                                                                products.created_at,
                                                                products.updated_at
                                                            )
                                                        }
                                                    >
                                                        <i className="fa-solid fa-plus-circle"></i>
                                                        Editar
                                                    </PrimaryButton>
                                                    <DangerButton
                                                        onClick={() =>
                                                            eliminar(
                                                                products.id,
                                                                products.product_name,
                                                                products.product_description,
                                                                products.product_presentation,
                                                                products.sku,
                                                                products.id_subcategory_fk,
                                                                products.id_state_fk,
                                                                products.created_at,
                                                                products.updated_at
                                                            )
                                                        }
                                                    >
                                                        <i className="fa-solid fa-trash"></i>
                                                        Borrar
                                                    </DangerButton>
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
                                                <div className="mt-3">
                                                    <InputLabel
                                                        for="product_name"
                                                        value="Nombre de Producto"
                                                    ></InputLabel>
                                                    <TextInput
                                                        id="product_name"
                                                        type="text"
                                                        name="product_name"
                                                        ref={product_nameInput}
                                                        value={
                                                            data.product_name
                                                        }
                                                        required="required"
                                                        handleChange={(e) =>
                                                            setData(
                                                                "product_name",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="block w-full mt-1"
                                                        isFocused
                                                    ></TextInput>
                                                    <InputError
                                                        message={
                                                            errors.product_name
                                                        }
                                                        classNamemt-2
                                                    ></InputError>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="mt-3">
                                                    <InputLabel
                                                        for="product_description"
                                                        value="Descripción de Producto"
                                                    ></InputLabel>
                                                    <TextInput
                                                        id="product_description"
                                                        type="text"
                                                        name="product_description"
                                                        ref={
                                                            product_descriptionInput
                                                        }
                                                        value={
                                                            data.product_description
                                                        }
                                                        required="required"
                                                        handleChange={(e) =>
                                                            setData(
                                                                "product_description",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="block w-full mt-1"
                                                        isFocused
                                                    ></TextInput>
                                                    <InputError
                                                        message={
                                                            errors.product_description
                                                        }
                                                        classNamemt-2
                                                    ></InputError>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <InputLabel
                                                    for="sku"
                                                    value="SKU"
                                                ></InputLabel>
                                                <TextInput
                                                    id="sku"
                                                    type="text"
                                                    name="sku"
                                                    ref={skuInput}
                                                    value={data.sku}
                                                    required="required"
                                                    handleChange={(e) =>
                                                        setData(
                                                            "sku",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="block w-full mt-1"
                                                    isFocused
                                                ></TextInput>
                                                <InputError
                                                    message={errors.sku}
                                                    classNamemt-2
                                                ></InputError>
                                            </div>
                                        </div>

                                        <div className="w-96">
                                            <div className="mt-3">
                                                <InputLabel
                                                    for="product_presentation"
                                                    value="Presentación de producto"
                                                ></InputLabel>
                                                <TextInput
                                                    id="product_presentation"
                                                    type="text"
                                                    name="product_presentation"
                                                    ref={
                                                        product_presentationInput
                                                    }
                                                    value={
                                                        data.product_presentation
                                                    }
                                                    required="required"
                                                    handleChange={(e) =>
                                                        setData(
                                                            "product_presentation",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="block w-full mt-1"
                                                    isFocused
                                                ></TextInput>
                                                <InputError
                                                    message={
                                                        errors.product_presentation
                                                    }
                                                    classNamemt-2
                                                ></InputError>
                                            </div>
                                            <div className="mt-3">
                                                <InputLabel
                                                    for="id_subcategory_fk"
                                                    value="Subcategoría"
                                                ></InputLabel>
                                                <Select
                                                    id="id_subcategory_fk"
                                                    name="id_subcategory_fk"
                                                    ref={id_subcategory_fkInput}
                                                    value={
                                                        data.id_subcategory_fk
                                                    }
                                                    required="required"
                                                    handleChange={(e) =>
                                                        setData(
                                                            "id_subcategory_fk",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="block w-full mt-1"
                                                    options={[
                                                        "Arroz y granos",
                                                        "Aceite",
                                                        "Leche",
                                                        "Huevos",
                                                        "Hortalizas",
                                                        "Frutas",
                                                        "Pescados y Mariscos",
                                                        "Carne Res",
                                                        "Panadería Artesanal",
                                                        "Dulces y postres",
                                                    ]}
                                                ></Select>
                                                <InputError
                                                    message={
                                                        errors.id_subcategory_fk
                                                    }
                                                    classNamemt-2
                                                ></InputError>
                                            </div>
                                            <div className="mt-3">
                                                <InputLabel
                                                    for="id_state_fk "
                                                    value="Estado"
                                                ></InputLabel>
                                                <Select
                                                    id="id_state_fk"
                                                    name="id_state_fk"
                                                    ref={id_state_fkInput}
                                                    value={data.id_state_fk}
                                                    required="required"
                                                    handleChange={(e) =>
                                                        setData(
                                                            "id_state_fk",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="block w-full mt-1"
                                                    options={[
                                                        "Activo",
                                                        "Inactivo",
                                                    ]}
                                                ></Select>
                                                <InputError
                                                    message={errors.id_state_fk}
                                                    classNamemt-2
                                                ></InputError>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end gap-4 mt-6 ">
                                        <PrimaryButton
                                            processing={processing}
                                            className=""
                                        >
                                            <i className="fa-solid fa-save"></i>
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
