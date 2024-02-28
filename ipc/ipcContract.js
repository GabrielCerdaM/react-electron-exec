const { ipcMain } = require("electron");
const ContractService = require("../Services/ContractService");

function ipcContract() {
  const handleGetAll = async () => {
    try {
      const resp = await ContractService.getAll();
      if (resp) {
        return resp.map(c => c.dataValues)
      }
    } catch (error) {
      console.log({ error });
      return null
    }

  };

  const handleGetAllFiltered = async (payload) => {
    const resp = await ContractService.getAllFiltered(payload);
    if (resp) {
      return resp.map(c => c.dataValues)
    }
    return null
  };

  const handleFind = async (payload) => {
    console.log("handleFind", { payload });
    return await ContractService.getAll();
  };

  const handleFindById = async (id) => {
    return await ContractService.findById(id);
  };

  const handleCreate = async ({ payload }) => {
    return await ContractService.create(payload);
  };
  const handleUpdate = async ({ id, payload }) => {
    return await ContractService.update(id, payload);
  };
  const handleDelete = async (id) => {
    return await ContractService.delete(id);
  };

  // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // In the main process
  ipcMain.handle("contract-operation", async (event, data) => {
    const { action, payload, id } = data;
    let result;
    switch (action) {
      case "getAll":
        result = handleGetAll();
        break;
      case "getAllFiltered":
        result = handleGetAllFiltered(payload);
        break;
      case "find":
        result = handleFind(payload);
        break;
      case "findById":
        result = await handleFindById(id);
        break;
      case "create":
        result = handleCreate({ payload });
        break;
      case "update":
        result = handleUpdate({ id, payload });
        break;
      case "delete":
        result = handleDelete(id);
        break;
      default:
        console.error("Invalid action:", action);
        result = event.reply("crud-operation-reply", {
          success: false,
          error: "Invalid action",
        });
        break;
    }
    return result;
  });
}
module.exports = { ipcContract };
