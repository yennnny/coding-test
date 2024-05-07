function solution(n, control) {
    return [...control].reduce((acc, cur)=>{
       return cur === "w" ? acc + 1 : cur ==="s" ? acc - 1 : cur ==="d" ? acc + 10 : acc - 10;
    }, n)
}