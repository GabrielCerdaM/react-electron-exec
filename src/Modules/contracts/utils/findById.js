export async function findById(id) {
  try {
    return await window.api.contractOperation({
    action: "findById",
      payload: null,
      id,
    });
  } catch (error) {
    console.log({ error });
  }
  return null;
}
