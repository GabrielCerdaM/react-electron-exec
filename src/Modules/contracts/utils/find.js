export async function find(search) {
  try {
    return await window.api.contractOperation({
      action: "find",
      payload: search,
    });
  } catch (error) {
    console.log({ error });
  }
  return null;
}
