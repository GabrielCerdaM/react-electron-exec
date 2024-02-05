const { ipcMain } = require("electron");
const UserService = require("../Services/UserService");
const ContractService = require("../Services/ContractService");
const { getAll: getAllDocuments } = require("../Repository/DocumentRepository");
const { getAll: getAllPayments } = require("../Repository/PaymentRepository");

function ipcContract() {
  const handleFind = async (payload) => {
    return await ContractService.getAll();
  };

  const handleCreate = async (payload) => {
    return await ContractService.create(payload);
  };
  const handleUpdate = async ({ id, payload }) => {
    return await ContractService.update(id, payload);
  };
  const handleDelete = async ({ id }) => {
    return await ContractService.update(id);
  };

  // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // In the main process
  ipcMain.handle("contract-operation", (event, data) => {
    console.log({ event });
    const { action, payload, id = null } = data;
    let result;
    switch (action) {
      case "find":
        result = handleFind();
        break;
      case "create":
        result = handleCreate(payload);
        break;
      case "update":
        result = handleUpdate({ id, payload });
        break;
      case "delete":
        result = handleDelete({ id });
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
