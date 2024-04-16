function solution(s){
    // 처음에 푼 문제풀이
//     let pGroup = 0;
//     let yGroup = 0;
    
//     for(let i of s){
//         i = i.toLowerCase();
//         if(i === 'p') pGroup += 1;
//         if(i === 'y') yGroup += 1;
//     }
//     return pGroup === yGroup ? true : false;
    
    // reduce를 이용한 풀이
    return [...s.toLowerCase()].reduce((acc, cur)=> {
        if(cur === 'p') acc += 1;
        if(cur === 'y') acc -= 1;
        return acc;
    }, 0) ? false : true;
    
}