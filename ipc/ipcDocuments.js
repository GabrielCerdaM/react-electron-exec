const { ipcMain, app } = require("electron");
const DocumentService = require("../Services/DocumentService");
const ContractService = require("../Services/ContractService");
const path = require("path");

function ipcDocument() {
  // const DESTINY = path.join(__dirname,'../');

  const handleFindById = async (id) => {
    console.log({ action: "document service findbyid" });
    return await DocumentService.findById(id);
  };

  const saveDocumentContract = async (document, contractId) => {
    try {
      const contract = await ContractService.findById(contractId);
      if (!contract) {
        throw new Error("Contrato no encontrado");
      }
      const { dataValues } = contract;

      const pathDest = path.join(
        __dirname,
        `../archivos/${dataValues.rutDeceased}-${dataValues.nameDeceased}/`
      );

      if (!fs.existsSync(pathDest)) {
        fs.mkdirSync(pathDest, { recursive: true });
      }
      fs.copyFileSync(document.path, `${pathDest}/${document.name}`);
      return true;
    } catch (error) {
      console.log({ error });
      return false;
    }
  };

  const handleSave = async (id, payload) => {
    try {
      const fs = require("fs");

      if (!payload || payload.length < 1) {
        throw new Error("Listado vacio");
      }

      payload.map(async (doc) => {
        if (!saveDocumentContract(doc, id)) {
          throw new Error("Error al copiar documento");
        }
        await DocumentService.create(doc);

        // const pathDest = path.join(
        //   __dirname,
        //   `../archivos/${dataValues.rutDeceased}-${dataValues.nameDeceased}/`
        // );

        // if (resp) {
        //   const contract = await ContractService.findById(id);
        //   if (contract) {
        //     const { dataValues } = contract;
        //     const pathDest = path.join(
        //       __dirname,
        //       `../archivos/${dataValues.rutDeceased}-${dataValues.nameDeceased}/`
        //     );
        //     if (!fs.existsSync(pathDest)) {
        //       fs.mkdirSync(pathDest, { recursive: true });
        //     }
        //     fs.copyFileSync(doc.path, `${pathDest}/${doc.name}`);
        //   }
        // }
      });
    } catch (error) {
      console.log({ error });
    }
  };

  ipcMain.handle("document-operation", (event, data) => {
    const { action, payload, id } = data;
    let result;
    switch (action) {
      case "add":
        result = handleSave(id, payload);
        break;
      case "findById":
        result = handleFindById(id);
        break;
      default:
        return {
          success: false,
          error: "Invalid action",
        };
    }
    return result;
  });
}

module.exports = { ipcDocument };
