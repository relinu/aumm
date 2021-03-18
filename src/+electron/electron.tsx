import * as fs from 'fs';

declare global {
    interface Window {
        api: {
            ipcSend(channel: string, ...data: any[]): void,
            ipcReceive(channel: string, func: any): void,
            openFolder(path: string): Promise<string>,
        },
        fs: typeof fs,
    }
}