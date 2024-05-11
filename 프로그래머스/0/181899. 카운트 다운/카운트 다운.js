function solution(start_num, end_num) {
    //  Array.from({ length: start_num - end_num + 1 }).reduce((acc, cur)=>{
    //    array.push(cur)
    // }, start_num);
    
    let answer = [];
    for(let i = start_num; i >= end_num; i -= 1){
        answer.push(i)
    }    
    return answer;
}
