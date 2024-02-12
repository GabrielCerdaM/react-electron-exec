import { useEffect, useState } from 'react';

const useElectronDialog = () => {
    const [confirmed, setConfirmed] = useState(null);

    const showDialog = async () => {
        try {
            const dialogType = 'showMessageBoxSync';
            const dialogConfig = {
                message: "Alerta",
                type: "warning",
                buttons: ["Cancelar", "Aceptar"],
                defaultId: 0,
                title: "Alerta de sistema",
                detail: "",
                cancelId: 0,
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