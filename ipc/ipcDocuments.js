const { ipcMain, app } = require("electron");
const DocumentService = require("../Services/DocumentService");

function ipcDocument() {
  // const DESTINY = path.join(__dirname,'../');

  const handleFindById = async (id) => {
    console.log({ action: "document service findbyid" });
    return await DocumentService.findById(id);
  };

  const handleSave = async (payload) => {
    try {
      if (payload && payload.length > 0) {
        payload.map(async (doc) => {
          await DocumentService.create(doc);
        });
      }
    } catch (error) {
      console.log({ error });
    }
    // return await DocumentService.create(payload);
  };

  ipcMain.handle("document-operation", (event, data) => {
    const { action, payload, id } = data;
    let result;
    switch (action) {
      case "add":
        result = handleSave(payload);
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
