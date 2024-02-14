function solution(price, money, count) {    
    let play = 0;
    let answer = 0;
    for(let i = price; i <= price * count; i += price){
       play += i;        
    }
    if(money < play){
        answer = play - money
    }
    return answer;
}