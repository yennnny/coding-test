function solution(array) {
    const copy = [...array];
    const max = array.sort((a, b) => b - a)[0];
    const idx = copy.indexOf(max)
    return [max, idx];
}