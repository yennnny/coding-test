function solution(arr) {
    if (arr.length === 1) return [-1];
    const smallIdx = arr.indexOf(Math.min(...arr))
    arr.splice(smallIdx, 1)
    return arr;
}