const { app, BrowserWindow } = require("electron");
const path = require("path");

const { insertData, syncDataBase } = require("./db/index");

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "./preload.js"),
      nodeIntegration: true,
      contextIsolation: true,
    },
  });

  window.openDevTools();

  // Load the React app

  // const url = path.join(__dirname, 'build', 'index.html');
  try {
    if (true) {
      window.loadURL("http://localhost:3000");
    } else {
      const url = path.join(__dirname, "build", "index.html");
      console.log({ url });
      window.loadFile(url);
    }
  } catch (error) {
    console.log(error);
  }
};

const { ipcHandler } = require("./ipc/ipcHandler");

ipcHandler();

app.whenReady().then(async () => {
  await syncDataBase();
  await insertData();
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
