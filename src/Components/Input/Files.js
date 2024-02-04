import { useState } from "react";

export default function Files() {
    const [selectedFiles, setSelectedFiles] = useState(null);

    const handleFiles = (event) => {
        const files = event.target.files;
        setSelectedFiles(files);
    };

    const uploadFiles = () => {
        console.log({selectedFiles});
        if (selectedFiles) {
            for (let i = 0; i < selectedFiles.length; i++) {
                const file = selectedFiles[i];
                console.log(`File ${i + 1}: ${file.name}, Type: ${file.type}, Size: ${file.size} bytes`);
                // You can perform additional actions with each file, such as uploading to a server.
            }
        }
    };

    return (<>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">Upload multiple files</label>
        <input onChange={handleFiles} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple />
        <button onClick={uploadFiles} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Button
        </button>
    </>)
}