const { app } = require("electron");
const DocumentRepository = require("../Repository/DocumentRepository");
const { existsSync, mkdir, copyFile, readFileSync } = require("fs");

class DocumentService {
  getAll() {
    return DocumentRepository.getAll();
  }

  async create(payload) {
    // const path = require("path");
    const { path, name } = payload;
    console.log({ path, name });
    return DocumentRepository.create(payload);
    // const fileContent = readFileSync(path);

    // Guardar el archivo PDF donde sea necesario
    // Por ejemplo, en la carpeta 'downloads'
    // const fileName = path.basename(path);
    // console.log({ fileName });

    // const destinationPath = path.join(app.getPath("downloads"), fileName);

    // fs.writeFileSync(destinationPath, fileContent);

    // mkdir("./archivos", { recursive: true }, (err) => {
    //   if (err) console.log({ err });
    // });

    // const newFile = copyFile(path, `./archivos/${name}`, (err) => {
    //   console.log({ err });
    // });

    // console.log({ newFile });
  }

  async findById(payload) {
    return await DocumentRepository.findById(payload);
  }
}

module.exports = new DocumentService();
