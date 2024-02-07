export async function deleteById(id) {
    try {
      return await window.api.contractOperation({
        action: "delete",
        payload: null,
        id,
      });
    } catch (error) {
      console.log({ error });
    }
    return null;
  }
  