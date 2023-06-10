import React from 'react'
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import Swal from 'sweetalert2';

function ModalProducts() {
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
    <Modal show={modal} onClose={closeModal}>
      <h2 className="text-lg text-center mt-2 font-medium ">
        {title}
      </h2>
      <form onSubmit={save} className="p-6 ">
        <div className='flex justify-center gap-10'>

          <div className='w-60 text-gray-900'>

            <div className='mt-3 text-gray-900'>
              <InputLabel forInput="name" value="Producto" />
              <TextInput
                name="name"
                type="text"
                className="mt-1 block w-full"
                autoComplete="name"
                isFocused={true}
              />
            </div>
            <div className='mt-3'>
              <InputLabel forInput="name" value="SKU" />
              <TextInput
                name="name"
                type="text"
                className="mt-1 block w-full"
                autoComplete="name"
                isFocused={true}
              />
            </div>
            <div className='mt-3'>
              <InputLabel forInput="name" value="Categoría" />
              <TextInput
                name="name"
                type="text"
                className="mt-1 block w-full"
                autoComplete="name"
                isFocused={true}
              />
            </div>
            <div className='mt-3'>
              <InputLabel forInput="name" value="SubCategoría" />
              <TextInput
                name="name"
                type="text"
                className="mt-1 block w-full"
                autoComplete="name"
                isFocused={true}
              />
            </div>
            <div className='mt-3'>
              <InputLabel forInput="name" value="Marca" />
              <TextInput
                name="name"
                type="text"
                className="mt-1 block w-full"
                autoComplete="name"
                isFocused={true}
              />
            </div>
          </div>

          <div className='w-96'>
            <div className='mt-3'>
              <InputLabel forInput="name" value="Presentación" />
              <TextInput
                name="name"
                type="text"
                className="mt-1 block w-full"
              />
            </div>
            <div className='flex gap-2'>
              <div className='mt-3'>
                <InputLabel forInput="name" value="Precio unitario" />
                <TextInput
                  name="name"
                  type="text"
                  className="mt-1 block w-full"
                  autoComplete="name"
                  isFocused={true}
                />
              </div>
              <div className='mt-3'>
                <InputLabel forInput="name" value="Cantidad" />
                <TextInput
                  name="name"
                  type="number"
                  className="mt-1 block w-full"
                  autoComplete="name"
                  isFocused={true}
                />
              </div>
              <div className='mt-3'>
                <InputLabel forInput="name" value="Lote" />
                <TextInput
                  name="name"
                  type="text"
                  className="mt-1 block w-full"

                  autoComplete="name"
                  isFocused={true}
                />
              </div>
            </div>
            <div className='mt-3'>
              <InputLabel forInput="name" value="Proveedor" />
              <TextInput
                name="name"
                type="text"
                className="mt-1 block w-full"
                autoComplete="name"
                isFocused={true}
              />
            </div>
            <div className='mt-3'>
              <InputLabel forInput="name" value="Fecha de caducidad" />
              <TextInput
                name="name"
                type="date"
                className="mt-1 block w-full"
                autoComplete="name"
                isFocused={true}
              />
            </div>
            <div className='mt-3'>
              <InputLabel forInput="name" value="Tipo de movimiento" />
              <TextInput
                name="name"
                type="text"
                className="mt-1 block w-full"
                autoComplete="name"
                isFocused={true}
              />
            </div>
            <div className='mt-3'>
              <InputLabel forInput="name" value="Fecha de movimiento" />
              <TextInput
                name="name"
                type="date"
                className="mt-1 block w-full"
                autoComplete="name"
                isFocused={true}
              />
            </div>
          </div>

        </div>


        <div className="mt-6 flex justify-end gap-4 ">
          <PrimaryButton className='' onClick={closeModal}>
            Save
          </PrimaryButton>
          <SecondaryButton className='' onClick={closeModal}>Cancel</SecondaryButton>
        </div>
      </form>
    </Modal>
  )
}

export default ModalProducts
