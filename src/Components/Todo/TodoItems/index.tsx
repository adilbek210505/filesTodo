import React, {useState} from 'react';
import {IProduct} from "../Interface";


interface ITodoProps {
    el: IProduct
    deleteProduct: (id: any) => void
}

const TodoItems = ({el,deleteProduct}: ITodoProps) => {
    const [view, setView] = useState(true)



    return (
        <div className="flex justify-center items-center">
            <div className="w-[300px] m-10">
                <img width={300} src={el.image} alt=""/>
                <h1>{el.title}</h1>
                <p>{el.price}</p>
                <button onClick={() => deleteProduct(el.id)}  className="w-full text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">delete</button>
                <button className="w-[300px] border-2 border-amber-700 rounded" onClick={() => setView(!view)}>
                    view
                    <p className="border-2 transition-shadow border-amber-700 " hidden={view}>{el.description}</p>
                </button>
            </div>
        </div>
    );
};

export default TodoItems;