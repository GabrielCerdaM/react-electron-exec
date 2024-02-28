export const create = async (payment, contractId) => {
  try {
    const resp = await window.api.paymentOperation({
      action: "add",
      payload: payment,
      id: contractId,
    });
    console.log({ resp });
    if (resp) {
      //   const { dataValues } = resp;
      return true;
    }
    // return resp;
  } catch (error) {
    console.log({ error });
    return false;
  }
};
