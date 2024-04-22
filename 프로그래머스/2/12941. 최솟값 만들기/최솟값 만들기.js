function solution(A,B){
// 처음 푼 방식
    // const aGroup = [...A].sort((a, b) => a - b);
    // const bGroup = [...B].sort((a, b) => b - a);
    // let result = 0;

    // for(let i = 0; i < aGroup.length; i += 1){
    //     result += (aGroup[i] * bGroup[i]);     
    // }
    // return result;
    
    // reduce를 활용한 방식
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    return A.reduce((acc, cur, idx) => {
        return acc + cur * B[idx];
    }, 0);
}