const { ipcMain } = require("electron");
const ContractService = require("../Services/ContractService");

function ipcContract() {
  const handleFind = async () => {
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
  ipcMain.handle("contract-operation", (event, data) => {
    console.log({ event });
    const { action, payload, id } = data;
    let result;
    switch (action) {
      case "find":
        result = handleFind();
        break;
      case "findById":
        result = handleFindById(id);
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
        return event.reply("crud-operation-reply", {
          success: false,
          error: "Invalid action",
        });
    }
    return result;
  });
}
module.exports = { ipcContract };
