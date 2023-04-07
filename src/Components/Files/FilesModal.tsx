import React, {useState} from 'react';
import {IFile} from "../Todo/Interface";

interface IModals {
    el: IFile
    upDataFile: (id: number, text: string, image: string) => void
}


const FilesModal = ({el,upDataFile}: IModals) => {
    const [modals,setModals] = useState<boolean>(true)
    const [newFile, setNewFile] = useState<string | ArrayBuffer | any>(el.image)
    const [newValues,setNewValues] = useState<IFile>({
        id: el.id,
        image: newFile,
        title: el.title
    })

    const fileReader = new FileReader()

    fileReader.onloadend = () => setNewFile(fileReader.result)


    const handleChane = (e: React.ChangeEvent<any>) => {
        setNewValues({...newValues, [e.target.name]: e.target.name !== "image" ? e.target.value : fileReader.readAsDataURL(e.target.files[0])})
    }


    return (
        <div>
            <button onClick={() => setModals(!modals)} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        modal
                    </span>
            </button>

            <div hidden={modals}>
                <div  className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                    <div className="relative left-[35%] top-[20%] w-full h-full max-w-md md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button onClick={() => setModals(true)} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal"><svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="px-6 py-6 lg:px-8">
                                <h3 className="mb-4 text-xl text-center font-medium text-gray-900 dark:text-white">upData files</h3>
                                <input type="search" onChange={handleChane} defaultValue={el.title} name={"title"}  className="bg-gray-50 outline-0 my-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name" required/>
                                <img src={newFile} alt="img"/>
                                <input type="file"  onChange={handleChane} name={"image"} className="bg-gray-50 my-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                <button onClick={() => {
                                    upDataFile(el.id, newValues.title,newFile)
                                    setModals(true)
                                }} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">UpDate Status</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilesModal;