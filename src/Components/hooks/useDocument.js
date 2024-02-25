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
        const files = getFiles.map((file) => {
          console.log({ file });
          return { name: file, path: null };
        });

        console.log({ getFiles });
        setDocuments(files);
      }
    }
  };

  const copyFile = () => {};

  useEffect(() => {
    getDocuments(id);
    return () => {
      console.log("return useDocument");
    };
  }, [id]);

  return { documents, getDocuments };
};

export default useDocument;
