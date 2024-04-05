function solution(start, end) {
    // Array.from 사용해 문제 풀기
    return Array.from({length : end - start + 1}, (_, i)=> start + i)
}