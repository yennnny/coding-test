function solution(t, p) {
    let answer = 0;
    for (let i = 0; i < t.length - p.length + 1; i += 1){
        t.substr(i, p.length) <= p ? answer += 1 : answer;
    }
    return answer;
}