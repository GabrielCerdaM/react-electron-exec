const { ipcMain } = require("electron");
const DocumentService = require("../Services/DocumentService");
const ContractService = require("../Services/ContractService");
const path = require("path");
const { copyFile } = require("../utils/SystemFiles");
const fs = require("fs");
const os = require("os");

function ipcDocument() {

  const findFolder = async (contractId) => {
    try {
      let files = [];
      let folderName;
      const folderDest = path.join(os.homedir(), `Documents\/contratos\/`);
      files = fs.readdirSync(`${folderDest}`);
      files.map((file) => {
        const id = file.split("-")[0];
        if (contractId == id) {
          folderName = file;
        }
        console.log(
          { contractId, id },
          { boolean: contractId == id },
          { folderName }
        );
      });
      return folderName;
    } catch (error) {
      console.log({ error });
    }
  };

  const handleGetAllDocuments = async (id) => {
    try {
      let files;
      const response = await ContractService.findById(id);
      if (!response) {
        throw new Error("Error al cargar contrato");
      }
      const { dataValues: contract } = response;

      const folderName = await findFolder(contract.id);

      if (!folderName) {
        throw new Error("No se encontro nombre de carpeta");
      }

      const folderDest = path.join(
        os.homedir(),
        `Documents\/contratos\/${folderName}`
      );

      console.log({ folderDest });

      files = fs.readdirSync(`${folderDest}`);
      if (files) {
        const data = files.map(file => ({
          name: file,
          path: `${folderDest}\/${file}`
        }))
        return data
      }
    } catch (error) {
      console.log({ error });
      return error;
    }
    return "asd;";
  };

  const handleFindByContractId = (id) => {
    return DocumentService.findByContractId(id);
  };

  const handleSave = async (id, payload) => {
    try {
      if (!payload || payload.length < 1) {
        throw new Error("Listado vacio");
      }

      payload.map(async (doc) => {
        doc.ContractId = id;
        await DocumentService.create(doc);
      });
      return null;
    } catch (error) {
      console.log({ error });
      return error;
    }
  };

  const handleCopyFile = async (id, payload) => {
    try {
      if (payload && payload.length > 0) {
        const response = await ContractService.findById(id);
        console.log({ response });
        if (response) {
          const { dataValues: contract } = response;
          console.log({ response, payload });
          payload.map((file) => {
            const error = copyFile(
              file.path,
              `${contract.id}-${contract.nameDeceased}`
            );
            if (error) {
              console.log({ error });
            }
          });
        }
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const handleDeleteFile = async (path) => {
    try {
      console.log({ path });
      const resp = fs.unlinkSync(path)
      console.log({resp});
      return null
    } catch (error) {
      console.log({ error });
      return error;
    }
  }

  ipcMain.handle("document-operation", async (event, data) => {
    const { action, payload, id } = data;
    console.log({ action, payload, id });
    let result;
    switch (action) {
      case "add":
        result = await handleSave(id, payload);
        break;
      case "getFiles":
        result = await handleGetAllDocuments(id);
        break;
      case "copyFiles":
        result = await handleCopyFile(id, payload);
        break;
      case "deleteFile":
        result = await handleDeleteFile(payload);
        break;
      case "findByContractId":
        result = await handleFindByContractId(id);
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
