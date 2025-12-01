import { FileUtils } from './file.utils.js';

const fileUtils = new FileUtils();

const main = async (): Promise<void> => {
    let dial: number = 50;
    let zeroCounter: number = 0;
    let rotationCounter: number = 0;
    const lines: string[] = await fileUtils.readAttachedDocument('attached_document.txt');

    for (const line of lines) {
        const isLeft: boolean = line.startsWith('L');
        let rotation: number = parseInt(line.slice(1), 10);

        if (rotation >= 100) {
            const hundredth: number = Math.floor(rotation / 100);
            rotationCounter += hundredth;
            rotation -= hundredth * 100;
        }

        if (isLeft) {
            if (dial - rotation < 0) {
                if (dial !== 0) {
                    rotationCounter++;
                }

                dial = 100 + dial - rotation;
            } else {
                dial -= rotation;

                if (dial === 0 && rotation !== 0) {
                    zeroCounter++;
                    rotationCounter++;
                }
            }
        } else {
            if (dial + rotation > 99) {
                dial = dial + rotation - 100;
                rotationCounter++;
                
                if (dial === 0) {
                    zeroCounter++;
                }
            } else {
                dial += rotation;
            }
        }
    }

    console.log(`Dial left pointed at 0 : ${zeroCounter} times.`)
    console.log(`Dial pointed at 0 : ${rotationCounter} times.`)
};

main();