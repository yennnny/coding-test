function solution(start_num, end_num) {
    let answer = [];
    let plusNum = start_num
    while(plusNum < end_num){
        answer.push(plusNum);
        plusNum += 1
    }
    answer.push(end_num)
    return answer;
    
}