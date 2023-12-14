function solution(numbers, k) {
    let answer = 1;
    for(let i = 0; i < k - 1; i += 1){
        if(answer > numbers.length - 1) answer -= numbers.length;
        answer += 2;
    }
    return answer;
}