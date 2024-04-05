// 처음 문제 풀이법
// function solution(start_num, end_num) {
//     let answer = [];
//     let plusNum = start_num
//     while(plusNum < end_num){
//         answer.push(plusNum);
//         plusNum += 1
//     }
//     answer.push(end_num)
//     return answer;
// }

// Array.from 사용해 다시 풀기
function solution(start, end) {
    return Array.from({length : end - start + 1}, (_, i)=> start + i)
}