export async function getAllFiltered(payload) {
  try {
    return await window.api.contractOperation({
      action: "getAllFiltered",
      payload,
    });
  } catch (error) {
    console.log({ error });
  }
  return null;
}
