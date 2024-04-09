function solution(a, b) {
    const oddA = a % 2 !== 0;
    const oddB = b % 2 !== 0;
    
    if(oddA && oddB) return a**2 + b** 2
    if(oddA || oddB) return 2 * (a + b)
    if (!oddA && !oddB) return Math.abs(a - b);
}