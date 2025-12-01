import { readFile } from 'fs/promises';

export class FileUtils {
    readAttachedDocument = async (path: string): Promise<string[]> => {
        const file = await readFile(path, 'utf-8');
        return file.split(/\r?\n/);
    }
}