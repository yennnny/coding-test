function solution(arr, k) {
//     let answer = [];
    
//     if(k % 2 === 0){
//         arr.map((it)=>{
//             answer.push(it + k)
//         })
//     } else{
//       arr.map((it)=>{
//             answer.push(it * k)
//         })  
//     }
//     return answer;
    
    // 또다른 풀이법
    return k % 2 !== 0 ? arr.map(it => it * k) : arr.map(it => it + k);
}