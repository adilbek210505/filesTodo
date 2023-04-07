import React, {useEffect, useState} from 'react';
import axios from "axios";
import TodoItems from "./TodoItems";
import Modal from "./Modal";
import {IProduct} from "./Interface";

const Todo = () => {
    const [product, setProduct] = useState<IProduct[]>([])
    const [leader,setLeader] = useState<boolean>(false)

    const getProduct = async () => {
        setLeader(true)
        const url = await axios<IProduct[]>(`https://fakestoreapi.com/products?limit=1`)
        setProduct(url.data)
        setLeader(false)
    }

    const deleteProduct = async (id: number) => {
        await axios.delete(`https://fakestoreapi.com/products/`+id)
    }


    const addNewProduct = (products: IProduct) => {
        setProduct(prevState => [...prevState, products])
    }


    useEffect(() => {
        getProduct()
    }, [])

    if (leader) {
        return <h1>leading...</h1>
    }

    return (
        <div>
            <Modal addNewProduct={addNewProduct}/>
            {
                product.map(el => <TodoItems  deleteProduct={deleteProduct} el={el}/>)
            }
        </div>
    );
};

export default Todo;