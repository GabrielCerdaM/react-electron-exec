export async function findById(id) {
  try {
    const resp = await window.api.contractOperation({
    action: "findById",
      payload: null,
      id,
    });
    console.log('findById',{resp});
    return resp;
  } catch (error) {
    console.log({ error });
  }
  return null;
}
