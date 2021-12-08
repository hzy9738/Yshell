const {app} = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
const AppWindow = require('./src/AppWindow')

let mainWindow

app.on('ready', () => {
  const mainWindowConfig = {
    width: 800,
    height: 600,
  }
  const urlLocation = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, './index.html')}`
  mainWindow = new AppWindow(mainWindowConfig, urlLocation)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
})