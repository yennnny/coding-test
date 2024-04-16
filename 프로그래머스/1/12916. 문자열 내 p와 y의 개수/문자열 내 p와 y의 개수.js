function solution(s){
    let pGroup = 0;
    let yGroup = 0;
    
    for(let i of s){
        i = i.toLowerCase();
        if(i === 'p') pGroup += 1;
        if(i === 'y') yGroup += 1;
    }
    return pGroup === yGroup ? true : false;
}