export async function findByContractId(id) {
  try {
    return await window.api.documentOperation({
      action: "findByContractId",
      payload: null,
      id: id,
    });
  } catch (error) {
    console.log({ error });
  }
  return null;
}
