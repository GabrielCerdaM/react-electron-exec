import { findById } from "../../Modules/contracts/utils/findById";

const { useEffect, useState } = require("react");
const { getContracts } = require("../../Modules/contracts/utils/getContracts");
const {
  getAllFiltered: getAllF,
} = require("../../Modules/contracts/utils/getAllFiltered");

const useContract = () => {
  const [contracts, setContracts] = useState(null);

  const [reload, setReload] = useState(false);

  const getContractById = async (id) => {
    return await findById(id);
  };

  const getAll = async () => {
    const resp = await getContracts();
    console.log("useContract", { resp });
    setContracts(resp);
  };

  const getAllFiltered = async (payload) => {
    const resp = await getAllF(payload);
    console.log("useContract", { resp });
    setContracts(resp);
  };

  useEffect(() => {
    getAll();
    return () => {
      console.log("return useContract");
      //   second;
    };
  }, []);

  return { contracts, getContractById, getAll, getAllFiltered };
};

export default useContract;
