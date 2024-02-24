const { ipcMain, dialog } = require("electron");
const DocumentService = require("../Services/DocumentService");
const ContractService = require("../Services/ContractService");
const path = require("path");
const { copyFile } = require("../utils/SystemFiles");

function ipcDocument() {

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
    } catch (error) {
      console.log({ error });
    }
  };

  const handleCopyFile = async (id, payload) => {
    try {
      console.log({ payload });
      if (payload && payload.length > 0) {
        const response = await ContractService.findById(id);
        console.log({ response });
        if (response) {
          const { dataValues: contract } = response
          console.log({ response, payload });
          payload.map(file => {
            const error = copyFile(file.path, `${contract.nameDeceased}`)
            if(error){
              console.log({error});
            }
          })
        }
      }
      // payload.map(file => { 

      // })      
    } catch (error) {
      console.log({ error });
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
      case "copyFiles":
        result = await handleCopyFile(id, payload);
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
