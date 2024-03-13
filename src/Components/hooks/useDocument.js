// import { findByContractId } from "../../Modules/documents/utils/findByContractId";
const { useEffect, useState } = require("react");

const useDocument = (id) => {
  const [documents, setDocuments] = useState(null);

  const getDocuments = async (id) => {
    if (id) {
      const getFiles = await window.api.documentOperation({
        action: "getFiles",
        payload: null,
        id,
      });

      if (getFiles && getFiles.length > 0) {
        const files = getFiles.map(({ name, path }) => {
          return { name, path };
        });

        console.log({ getFiles });
        setDocuments(files);
      }
    }
  };

  useEffect(() => {
    getDocuments(id);
    return () => {
      console.log("return useDocument");
    };
  }, [id]);

  return { documents, getDocuments };
};

export default useDocument;
