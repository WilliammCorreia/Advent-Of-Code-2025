import { FileUtils } from './file.utils.js';

const fileUtils = new FileUtils();

const main = async (): Promise<void> => {
    let dial: number = 50;
    let counter: number = 0;
    const lines: String[] = await fileUtils.readAttachedDocument('attached_document.txt');

    for (const line of lines) {
        const isLeft: boolean = line[0] === "L" ? true : false;
        let rotation: number = parseInt(line.slice(1));

        if (rotation > 100) {
            const centil: number = Math.floor(rotation / 100);
            rotation -= centil * 100;
        }

        if (isLeft) {
            if (dial - rotation < 0) {
                dial = 100 + dial - rotation;
            } else {
                dial -= rotation;

                if (dial === 0) {
                    counter++;
                }
            }
        } else {
            if (dial + rotation > 99) {
                dial = dial + rotation - 100;
                
                if (dial === 0) {
                    counter++;
                }
            } else {
                dial += rotation;
            }
        }
    }

    console.log(`Dial left pointed at 0 : ${counter} times.`)
};

main();