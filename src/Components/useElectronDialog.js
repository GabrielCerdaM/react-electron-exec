import { useEffect, useState } from 'react';

const useElectronDialog = () => {
    const [confirmed, setConfirmed] = useState(null);

    const showDialog = async ({ message = "", title = "Alerta de sistema" }) => {
        try {
            const dialogType = 'showMessageBoxSync';
            const dialogConfig = {
                message,
                type: "warning",
                buttons: ["Aceptar"],
                defaultId: 1,
                title,
                detail: "",
            }

            const response = await window.api.dialog(dialogType, dialogConfig);
            setConfirmed(response);
        } catch (error) {
            console.error('Error al llamar al diálogo:', error);
        }
    };

    return { showDialog, confirmed };
};

export default useElectronDialog;