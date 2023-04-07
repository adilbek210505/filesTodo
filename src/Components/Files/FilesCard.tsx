import React from 'react';
import {IFile} from "../Todo/Interface";
import FilesModal from "./FilesModal";

interface IFiles {
    el: IFile
    deleteHandle: (id: number) => void
    upDataFile: (id: number, text: string, image: string) => void
}

const FilesCard = ({el,deleteHandle,upDataFile}: IFiles) => {


    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">{el.title[0].toUpperCase() + el.title.slice(1)}</h1>
            <img width={200} src={el.image} alt="img"/>
            <div className="my-6 flex justify-between">
                <FilesModal el={el} upDataFile={upDataFile}/>
                <button onClick={() => deleteHandle(el.id)} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        delete
                    </span>
                </button>
            </div>
        </div>
    );
};

export default FilesCard;