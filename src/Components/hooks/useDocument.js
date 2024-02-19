import { findById } from "../../Modules/documents/utils/findById";

const { useEffect, useState } = require("react");

const useDocument = (id) => {
  const [documents, setDocuments] = useState(null);

  const getDocuments = async (id) => {
    // const resp = await findById(id);
    const resp = [
      { path: "path example", name: "IMG_3014.JPG" },
      { path: "path example", name: "IMG_3015.JPG" },
      { path: "path example", name: "IMG_3016.JPG" },
      { path: "path example", name: "IMG_3017.JPG" },
      { path: "path example", name: "IMG_3018.JPG" },
      { path: "path example", name: "IMG_3019.JPG" },
      { path: "path example", name: "IMG_3010.JPG" },
    ];
    console.log({ resp });
    setDocuments(resp);
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
