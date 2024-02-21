const { ipcMain, dialog } = require("electron");
const DocumentService = require("../Services/DocumentService");
const ContractService = require("../Services/ContractService");
const path = require("path");

function ipcDocument() {

  const handleFindByContractId = (id) => {
    return DocumentService.findByContractId(id);
  };

  const saveDocumentContract = async (document, contractId) => {
    try {
      const fs = require('fs');
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
      } else {
        console.log('existSync');
      }
      fs.copyFileSync(document.path, `${pathDest}/${document.name}`, fs.constants.COPYFILE_EXCL,);
      return true;
    } catch (error) {
      let message;
      console.log({code: error.code});
      if(error.code === 'EEXIST'){
        message = 'Ya existe un archivo con este nombre';
      }
      const dialogType = 'showMessageBoxSync';
      const dialogConfig = {
        message: message ? message: JSON.stringify(error),
        type: "warning",
        buttons: ["Aceptar"],
        defaultId: 1,
        title: "Error",
        detail: "",
      }
      dialog[dialogType](dialogConfig);
      return false;
    }
  };

  const handleSave = async (id, payload) => {
    try {
      if (!payload || payload.length < 1) {
        throw new Error("Listado vacio");
      }

      payload.map(async (doc) => {
        const saved = await saveDocumentContract(doc, id);
        console.log({ saved });
        if (!saved) {
          throw new Error("Error al copiar documento");
        }
        doc.ContractId = id;
        await DocumentService.create(doc);
      });
    } catch (error) {
      console.log({ error });
    }
  };

  ipcMain.handle("document-operation", async (event, data) => {
    const { action, payload, id } = data;
    let result;
    switch (action) {
      case "add":
        result = await handleSave(id, payload);
        break;
      case "findByContractId":
        result = handleFindByContractId(id);
        break;
      default:
        return {
          success: false,
          error: "Invalid action",
        };
    }
    console.log('document-operation', { result });

    return result;
  });
}

module.exports = { ipcDocument };
