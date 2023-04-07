import React, {useState} from 'react';
import {IProduct, IValue} from "../Interface";
import axios from "axios";

interface IFormComponents {
    addNewProduct: (products: IProduct) => void
    setModal: (b: boolean) => void
}

const FormComponents = ({addNewProduct,setModal}: IFormComponents) => {
    const [error,setError] = useState("")
    const [values, setValues] = useState<IValue>({
        title: "",
        price: "",
        description: ""
    })

    const newProduct: IProduct = {
        id: 1,
        title: values.title,
        price: +values.price,
        description: values.description,
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
            rate: 1.13,
            count: 7.7,
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    const formClick = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (values.title.trim().length !== 0 && values.description.trim().length !== 0 && values.price.trim().length !== 0) {
            setModal(true)
            setError("")
            await axios.post(`https://fakestoreapi.com/products`, newProduct)
            addNewProduct(newProduct)
            setValues({title: "", description: "", price: ""})
        } else {
            setError("Error")
        }
    }

    return (
        <div>
            <form action="" onSubmit={formClick}>
                <div className="fixed flex justify-evenly  flex-col items-center w-[500px] h-[60%] bg-white left-[35%]  bottom-40">
                    <input type="text" value={values.title} onChange={handleChange} name={"title"} className="w-[200px] outline-0 border-2 border-black rounded  p-2" placeholder="title"/>
                    {error && <p>{error}</p>}
                    <input value={values.price} onChange={handleChange} name={"price"}  type="text" className="w-[200px] outline-0 border-2 border-black rounded  p-2" placeholder="price"/>
                    {error && <p>{error}</p>}
                    <textarea  value={values.description} onChange={handleChange} name={"description"} className="w-[200px] outline-0 border-2 border-black rounded  p-2" placeholder="description"/>
                    {error && <p>{error}</p>}
                    <button onClick={() => formClick} className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">add</button>
                </div>
            </form>
        </div>
    );
};

export default FormComponents;