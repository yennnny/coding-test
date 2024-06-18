function solution(n) {
    const nLength = n.toString("2").split("").reduce((acc, cur)=> (+acc) + (+cur));
    
    while(true){
        n += 1;
        const n2Length = n.toString("2").split("").reduce((acc, cur)=> (+acc) + (+cur));
        if(nLength === n2Length) return n;
    }
}