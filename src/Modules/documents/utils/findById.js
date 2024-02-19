export async function findById(id) {
  try {
    return await window.api.documentOperation({
      action: "findById",
      payload: null,
      id: id,
    });
  } catch (error) {
    console.log({ error });
  }
  return null;
}
