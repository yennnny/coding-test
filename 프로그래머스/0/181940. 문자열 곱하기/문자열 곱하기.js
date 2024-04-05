function solution(my_string, k) {
    // 내가 푼 방법
    // return new Array(k).fill(my_string).join("");
    
    // repeat 사용하면 더 쉽다!
    return my_string.repeat(k);
}