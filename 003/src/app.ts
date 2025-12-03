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

        for (let i = 0; i < blank.length - 1; i++) {
            let actualNb = parseInt(blank[i] || "0", 10);

            if (actualNb > tens) {
                tens = actualNb;
                index = i +1;

                if (tens === 9) break;
            }
        }

        const rightSide = blank.slice(index);

        for (let i = 0; i < rightSide.length; i++) {
            let actualNb = parseInt(rightSide[i] || "0", 10);

            if (actualNb > units) {
                units = actualNb;

                if (units === 9) break;
            }
        }

        silverJoltage += (tens * 10) + units;

        let counter = blank.length - 11;

        for (let i = 0; i < counter; i++) {
            counter--;


        }

    }

    console.log(`Total output for silverJoltage : ${silverJoltage}`);
}

main();