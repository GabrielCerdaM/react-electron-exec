export const dialogConfig = {
    files: {
        dialogType: "showOpenDialog",
        dialogConfig: {
            title:"Seleccionar documentos para guardar en el contrato",
            properties: [
                'openFile',
                'multiSelections'
            ],
            message: "Archivos a guardar",
            filters: [
                { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
                { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
                { name: 'Custom File Type', extensions: ['as'] },
                { name: 'All Files', extensions: ['*'] }
            ]
        }
    }
}