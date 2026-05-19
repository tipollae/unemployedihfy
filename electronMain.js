const { app, BrowserWindow } = require('electron');

const server = require("./index.js");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080
  })

  win.loadURL("http://localhost:3000");
}

app.whenReady().then(() => {
  createWindow()
})