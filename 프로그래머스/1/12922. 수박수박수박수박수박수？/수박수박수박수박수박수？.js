function solution(n) {
    let answer = '';
    for(let i = 0; i < n; i += 1){
        i % 2 === 0 ? answer += '수' : answer += '박';        
    }
    return answer;
}