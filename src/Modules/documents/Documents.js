import { useEffect, useState } from "react";
import { List } from "./List";
import { useNavigate, useParams } from "react-router-dom";
import useDocument from "../../Components/hooks/useDocument";
import useElectronDialog from "../../Components/hooks/useElectronDialog";


export function Documents() {
  const navigate = useNavigate();

  const { confirmed, showDialog } = useElectronDialog();
  const { documents, getDocuments } = useDocument();

  const [docs, setDocs] = useState(null);

  const { contractId } = useParams();

  useEffect(() => {
    getDocuments(contractId);
    // getContractById(contractId);
  }, [contractId]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (docs && docs.length < 1) {
        return;
      }

      if (docs && docs.length < 1) {
        throw new Error("No se han seleccionado archivos");
      }
      await window.api.documentOperation({
        action: 'copyFiles',
        payload: docs,
        id: contractId
      });


      await window.api.documentOperation({
        action: "add",
        payload: docs,
        id: contractId,
      });
      getDocuments(contractId);

      // navigate(`/document/${contractId}`)
      // navigate('.')
    } catch (error) {
      console.log({ error });
    }
  };

  const handleChange = (e) => {
    // setDocs([...e.target.files]);
  };

  const handleSelectFiles = async (e) => {
    try {
      e.preventDefault()
      const { dialogConfig: config } = require('../../utils/configs/dialogConfig');
      const { files } = config
      const { dialogType, dialogConfig } = files
      const response = await showDialog({ dialogType, dialogConfig });
      if (response.canceled) {
        return;
      }
      if (response.filePaths) {
        console.log('2', { response });
        const { filePaths } = response;
        const files = filePaths.map((file) => {
          return {
            name: file.replace(/^.*[\\/]/, ''),
            path: file
          }
        })
        setDocs(files)
      }
    } catch (error) {
      console.log({ error });
      alert(error)
    }
  }

  const handleDeleteLocal = ({ index, path }) => {
    const newArray = docs.filter((doc, idx) => {
      console.log({ doc, index });
      return idx !== index;
    });
    setDocs(newArray);
  };

  const handleDeleteFile = async ({ index, path }) => {
    try {
      const respDeleteFile = await window.api.documentOperation({
        action: 'deleteFile',
        payload: path,
        id: null
      });
      console.log({ respDeleteFile });
    } catch (error) {
      console.log({ error });
    }
    getDocuments(contractId);
  }

  return (
    <>
      <section className="p-4 flex flex-col items-center">
        {/* <input
            className="ml-auto p-5"
            type="file"
            name="documents"
            multiple
            onChange={handleChange}
            /> */}
        <button onClick={handleSelectFiles} className="bg-gray-200 p-5 border border-sky-500">
          Seleccionar Archivos
        </button>
        <div className="flex justify-around w-full gap-5">
          <div className="w-full">
            <h1 className="text-center">Documentos del contrato</h1>
            <List docs={documents} handleDelete={handleDeleteFile} />
          </div>
          <div className="w-full">
            <h1 className="text-center">Seleccionados</h1>
            <List docs={docs} handleDelete={handleDeleteLocal} />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full"
        >
          <button type="submit" className="pt-5">Guardar</button>
        </form>
      </section>
    </>
  );
}
