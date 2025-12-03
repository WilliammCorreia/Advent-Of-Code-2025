const PUZZLE_INPUT = "52-75,71615244-71792700,89451761-89562523,594077-672686,31503-39016,733-976,1-20,400309-479672,458-635,836793365-836858811,3395595155-3395672258,290-391,5168-7482,4545413413-4545538932,65590172-65702074,25-42,221412-256187,873499-1078482,118-154,68597355-68768392,102907-146478,4251706-4487069,64895-87330,8664371543-8664413195,4091-5065,537300-565631,77-115,83892238-83982935,6631446-6694349,1112-1649,7725-9776,1453397-1493799,10240-12328,15873-20410,1925-2744,4362535948-4362554186,3078725-3256936,710512-853550,279817-346202,45515-60928,3240-3952";

const splitByLength = (str: string, length: number): string[] => {
    const result: string[] = [];
    const strLength = Math.floor(str.length / length);

    for (let x = 0; x < strLength; x++) {
        result.push(str.slice(0, length));
        str = str.slice(length);
    }

    return result;
}

const main = (): void => {
    const idsRangeArray = PUZZLE_INPUT.split(",");
    let silver = 0;
    let gold = 0;
    
    for (const ids of idsRangeArray) {
        const extremum = ids.split("-");
        let rangeLength = 0;
        let firstId = 0;
        let secondId = 0;

        if (extremum[0] && extremum[1]) { 
            firstId = parseInt(extremum[0], 10);
            secondId = parseInt(extremum[1], 10);
            rangeLength = secondId - firstId + 1;
        }

        for (let i = 0; i < rangeLength; i++) {
            const id = firstId + i;
            const stringId = id.toString();
            const length = stringId.length;

            for (let j = Math.floor(length/2); j > 0; j--) {
                if (length % j === 0) {
                    const splitedStringId = splitByLength(stringId, j);
                    let isInvalidId = true;

                    for (let k = 1; k < splitedStringId.length; k++) {
                        if (splitedStringId[0] !== splitedStringId[k]) { 
                            isInvalidId = false;
                            break;
                        }
                    }

                    if (isInvalidId) {
                        if (j === Math.floor(length/2)) {
                            silver += id;
                        } else {
                            gold += id;
                        }
                        break;
                    }
                }
            }
        }
    }

    gold += silver;

    console.log("Sum of all invalid IDs for silver medal :", silver);
    console.log("Sum of all invalid IDs for gold medal:", gold);
}

main();