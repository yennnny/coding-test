function solution(strArr) {
    return strArr.map((str, idx)=> idx % 2 === 1 ? str.toUpperCase() : str. toLowerCase())
}