/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let result = 0;

    for (let number = start; number <= end; number++) {
        if ((number & 1) == 0) result += number;
    }

    return result;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let count = 0;

    while (true) {
        let result = a / 2;
        count++;

        if (result <= 0.1) return count;
        a = result;
    }

    return count;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let result = '';

    if (message.length == 0) return result;

    let count = 0;
    do {
        let symbol = (count + 1) % 3 != 0 ? message[count] : '_';
        result += symbol;
        count++;
    } while (count < message.length);

    return result;
}
