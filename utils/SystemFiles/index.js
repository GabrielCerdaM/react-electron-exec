const copyFile = (src, folderName) => {
  const fs = require("fs");
  const path = require("path");
  const os = require("os");
  const { constants } = require("fs/promises");

  try {
    console.log({ homedir: os.homedir() });
    const folderDest = path.join(
      os.homedir(),
      `Documents\/contratos\/${folderName}`
    );
    if (!fs.existsSync(folderDest)) {
      fs.mkdirSync(folderDest, { recursive: true });
    }

    const fileName = path.basename(src);

    const dest = path.join(folderDest, fileName);

    console.log({ src, dest });

    fs.copyFileSync(src, dest, constants.COPYFILE_EXCL);

    return null;
  } catch (error) {
    return error;
  }
};

module.exports = { copyFile };
