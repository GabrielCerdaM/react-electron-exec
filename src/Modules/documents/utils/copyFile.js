export async function copyFile(id) {
    try {
      return await window.api.documentOperation({
        action: "copyFile",
        payload: null,
        id: id,
      });
    } catch (error) {
      console.log({ error });
    }
    return null;
  }
  