export const create = async (payment, contractId) => {
  try {
    const resp = await window.api.paymentOperation({
      action: "add",
      payload: payment,
      id: contractId,
    });
    if (resp) {
      return resp.dataValues;
    }
  } catch (error) {
    return null;
  }
};
