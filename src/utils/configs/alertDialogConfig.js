export const alertDialogDonfig = (title, message, detail) => {
  return {
    dialogType: "showMessageBoxSync",
    dialogConfig: {
      title: `${title}`,
      message: `${message}`,
      type: "warning",
      buttons: ["Aceptar"],
      detail: `${detail}`,
    },
  };
};
