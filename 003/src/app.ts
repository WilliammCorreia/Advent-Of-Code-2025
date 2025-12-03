import { FileUtils } from "./file.util";

const fileUtils = new FileUtils();

const main = async () => {
    const batteries = await fileUtils.readAttachedDocument("./puzzle_input.txt");
    let silverJoltage = 0;
    let goldJoltage = 0;

    for (const blank of batteries) {
        let tens = 0;
        let units = 0;
        let index = 0;
        let square = 11;

        for (let i = 0; i < blank.length - 1; i++) {
            let actualJolt = parseInt(blank[i] || "0", 10);

            if (actualJolt > tens) {
                tens = actualJolt;
                index = i + 1;

                if (tens === 9) break;
            }
        }

        const rightSide = blank.slice(index);

        for (let i = 0; i < rightSide.length; i++) {
            let actualJolt = parseInt(rightSide[i] || "0", 10);

            if (actualJolt > units) {
                units = actualJolt;

                if (units === 9) break;
            }
        }

        silverJoltage += (tens * 10) + units;

        let counter = blank.length - 11;
        let counter2 = 0;
        let jolt: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        index = 0;

        for (let i = 0; i < counter; i++) {
            let actualJolt = parseInt(blank[i] || "0", 10);

            if (actualJolt > (jolt[i] || 0)) {
                jolt[counter2] = actualJolt;
                index = i + 1;
            }

            if (i === counter - 1) counter2 += 1;
            
                console.log(counter2)

            if (i === counter - 1 && jolt[11] === 0) {
                counter += 1;
                i = index;
            }
        }

        for (let i = 0; i < 12; i++) {
            goldJoltage += Math.pow(10, square) * (jolt[i] || 0);
            square -= 1;
        }
    }

    console.log(`Total output for silverJoltage : ${silverJoltage}`);
    console.log(`Total output for goldJoltage : ${goldJoltage}`);
}

main();