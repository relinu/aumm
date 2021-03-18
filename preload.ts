import { contextBridge, ipcRenderer, shell } from "electron";
import * as fs from 'fs';

contextBridge.exposeInMainWorld(
    "api",
    {
        ipcSend: (channel: string, ...data: any[]) => {
            ipcRenderer.send(channel, ...data);
        },
        ipcReceive: (channel: string, func: any) => {
            ipcRenderer.on(channel, (event, ...args) => func(...args));
        },
        openFolder: (path: string) => {
            return shell.openPath(path);
        }
    }
);

contextBridge.exposeInMainWorld("fs", fs);