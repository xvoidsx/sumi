// preload bridge — native open/save for the sumi Electron app
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('sumiNative', {
  isElectron: true,
  saveFile: (content, currentPath, suggestedName) =>
    ipcRenderer.invoke('sumi:save-file', { content, currentPath, suggestedName }),
  openFile: () => ipcRenderer.invoke('sumi:open-file'),
});
