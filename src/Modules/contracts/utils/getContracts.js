export async function getContracts() {
  try {
    return await window.api.contractOperation({
      action: "getAll",
      payload: null,
    });
  } catch (error) {
    console.log({ error });
  }
  return null;
}
