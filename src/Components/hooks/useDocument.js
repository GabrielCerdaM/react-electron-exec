import { findByContractId } from "../../Modules/documents/utils/findByContractId";

const { useEffect, useState } = require("react");

const useDocument = (id) => {
  const [documents, setDocuments] = useState(null);

  const getDocuments = (id) => {
    if (id) {
      findByContractId(id).then(resp => {
        console.log('findByContractId', { resp });
        if(resp){
          const data = resp.map(doc => doc.dataValues)
          setDocuments(data)
        }
      }).catch(error=>console.log({error}))
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
