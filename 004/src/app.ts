import { FileUtils } from "./file.util";

const fileUtils = new FileUtils();

const main = async () => {
    const diagram = await fileUtils.readAttachedDocument("./puzzle_input.txt");

    for (let i = 0; i < diagram.size; i++) {
        for (let j = 0; j < diagram.get(i)!.length; j++) {
            let counter = 0;

            if (diagram.get(i)![j]) {
                if (diagram.get(i)![j++] && diagram.get(i)![j] === diagram.get(i)![j++]) counter++;
                if (diagram.get(i)![j--] && diagram.get(i)![j] === diagram.get(i)![j--]) counter++;
                if (diagram.get(i--)![j]) console.log(diagram.get(i--)![j])
            }


            console.log(counter)
        }
    }

    console.log(`Total output for silverJoltage : ${diagram}`);
    console.log(`Total output for goldJoltage : ${diagram}`);
}

main();