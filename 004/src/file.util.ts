import { readFile } from 'fs/promises';

export class FileUtils {
    readAttachedDocument = async (path: string): Promise<Map<number, string[]>> => {
        const map = new Map();
        const file = await readFile(path, 'utf-8');
        const lines: string[] = file.split(/\r?\n/);

        for (let i = 0; i < lines.length; i++) {
            map.set(i, lines[i]!.split(""));
        }
        
        return map;
    }
}