import { findById } from "../../Modules/contracts/utils/findById";

const { useEffect, useState } = require("react");
const { getContracts } = require("../../Modules/contracts/utils/getContracts");
const {
  getAllFiltered: getAllF,
} = require("../../Modules/contracts/utils/getAllFiltered");

const useContract = () => {
  const [contracts, setContracts] = useState(null);
  const [contract, setContract] = useState(null);

  const getContractById = async (id) => {
    try {
      const resp = await findById(id);
      if (resp) {
        const { dataValues } = resp;
        setContract(dataValues);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const getAll = async () => {
    try {
      const resp = await getContracts();
      if (!resp) {
        throw new Error('Error al encontrar contrato')
      }
      const c = resp.map(contract => contract.dataValues)
      setContracts(c);
    } catch (error) {
      console.log({error});
    }

  };

  const getAllFiltered = async (payload) => {
    const resp = await getAll(payload);
    console.log("useContract getAllFiltered", { resp });
    setContracts(resp);
  };

  useEffect(() => {
    // getAll();
    return () => {
      console.log("return useContract");
    };
  }, []);

  return { contract, contracts, getContractById, getAll, getAllFiltered };
};

export default useContract;
