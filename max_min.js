function findMinMax(arr) {
    let min = Infinity;
    let max = -Infinity;

    for (let num of arr) {
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }

    return [min, max];
}

let array = [1, 5, 8, 9, 7, 4, 3, 2];
let [min, max] = findMinMax(array);
console.log(`Nilai terendah: ${min}, Nilai tertinggi: ${max}`);
