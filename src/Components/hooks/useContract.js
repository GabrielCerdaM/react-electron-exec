// import { findById } from "../../Modules/contracts/utils/findById";

// const { useEffect, useState } = require("react");
// const { getAll } = require("../../Modules/contracts/utils/getAll");

// const useContract = (temp) => {
//   const [contracts, setContracts] = useState(null);

//   const getContractById = async (id) => {
//     try {
//       const resp = await findById(id);
//       console.log({resp});
//       if (resp) {
//         const { dataValues } = resp;
//         console.log('dataValues',dataValues);
//         setContracts([dataValues]);
//       }
//     } catch (error) {
//       console.log({ error });
//     }
//   };

//   // const getAll = async () => {
//   //   try {
//   //     const resp = await getContracts();
//   //     if (!resp) {
//   //       throw new Error('Error al encontrar contrato')
//   //     }
//   //     const c = resp.map(contract => contract.dataValues)
//   //     setContracts(c);
//   //   } catch (error) {
//   //     console.log({error});
//   //   }

//   // };

//   const getAllFiltered = async (payload) => {
//     const resp = await getAll(payload);
//     console.log("useContract getAllFiltered", { resp });
//     setContracts(resp);
//   };

//   useEffect(() => {
//     console.log("useEffect useContract");
//     return () => {
//       console.log("return useContract");
//     };
//   }, [temp]);

//   return { contracts, getContractById, getAllFiltered };
// };

// export default useContract;
