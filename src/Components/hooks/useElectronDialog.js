import { useEffect, useState } from 'react';

const useElectronDialog = () => {
    const [confirmed, setConfirmed] = useState(null);

    const showDialog = async ({ dialogType, dialogConfig }) => {
        try {
            const resp = await window.api.dialog(dialogType, dialogConfig);
            console.log({ resp });
            return resp
        } catch (error) {
            console.error('Error al llamar al diálogo:', error);
        }
    };

    return { showDialog, confirmed };
};

export default useElectronDialog;