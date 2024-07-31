function solution(s) {
    const numbers = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    Number(numbers.forEach((n, idx) => s = s.replaceAll(n, idx)))
    return Number(s)
    

}

