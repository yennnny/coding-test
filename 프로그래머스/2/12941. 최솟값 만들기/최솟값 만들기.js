function solution(A,B){
    const aGroup = [...A].sort((a, b) => a - b);
    const bGroup = [...B].sort((a, b) => b - a);
    
    let result = 0;
    
    for(let i = 0; i < aGroup.length; i += 1){
        result += (aGroup[i] * bGroup[i]);     
    }
    return result;
}