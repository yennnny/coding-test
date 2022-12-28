function solution(numbers) {
    var answer = 0;
    [1,2,3,4,5,6,7,8,9].forEach((i)=>{
        if(!numbers.includes(i)) answer += i;
           
    })
    
    
    return answer;    
}