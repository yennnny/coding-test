function solution(numbers) {
    const numString = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    numString.map((num, idx) => {
        numbers = numbers.replaceAll(num, idx);
    })
        return numbers * 1;
}
