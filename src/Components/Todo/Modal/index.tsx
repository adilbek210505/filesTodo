import React, {useState} from 'react';
import FormComponents from "../FormComponents/FormComponents";
import {IProduct} from "../Interface";


interface IModal {
    addNewProduct: (products: IProduct) => void
}

const Modal = ({addNewProduct}: IModal) => {
    const [modal, setModal] = useState(true)
    return (
        <div>
            <button onClick={() => setModal(!modal)}
                    className="fixed text-3xl pb-2  w-[40px] h-[40px] bg-gray-600 right-10 bottom-10 rounded-[80px]">+
            </button>

            <div onClick={() => setModal(true)} hidden={modal} className="fixed w-full h-full bg-black/50 top-0 left-0 "></div>

            <div hidden={modal}>
                <div>
                    <FormComponents setModal={setModal} addNewProduct={addNewProduct}/>
                </div>
            </div>
        </div>
    );
};

export default Modal;