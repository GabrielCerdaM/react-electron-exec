import { useEffect, useState } from "react";
import { List } from "./List";
import { useParams } from "react-router-dom";
import useDocument from "../../Components/hooks/useDocument";
export function Documents() {
  const { documents, getDocuments } = useDocument();

  const [docs, setDocs] = useState(null);

  const { contractId } = useParams();

  useEffect(() => {
    getDocuments(contractId);
  }, [contractId]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const payload = docs.map((doc) => ({
        path: doc.path,
        name: doc.name,
      }));

      if (payload.length < 1) {
        throw new Error("No se han seleccionado archivos");
      }

      const resp = await window.api.documentOperation({
        action: "add",
        payload,
        id: contractId,
      });

      console.log({ resp });
    } catch (error) {
      console.log({ error });
    }
  };

  const handleChange = (e) => {
    setDocs([...e.target.files]);
  };

  const handleDelete = (indexDeleted) => {
    const newArray = docs.filter((doc, index) => {
      console.log({ doc, index });
      return index !== indexDeleted;
    });
    setDocs(newArray);
  };

  return (
    <>
      <section className="p-4 flex flex-col items-center">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col items-center w-full"
        >
          <input
            className="ml-auto p-5"
            type="file"
            name="documents"
            multiple
            onChange={handleChange}
          />
          <div className="flex justify-around w-full gap-5">
            <div className="w-full">
              <h1 className="text-center">Documentos del contrato</h1>
              <List docs={documents} />
            </div>
            <div className="w-full">
              <h1 className="text-center">Seleccionados</h1>
              <List docs={docs} handleDelete={handleDelete} />
            </div>
          </div>
          <button className="pt-5">Guardar</button>
        </form>
      </section>
    </>
  );
}
