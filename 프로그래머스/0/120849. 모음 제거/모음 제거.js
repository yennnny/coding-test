function solution(my_string) {
    const 모음 = ["a", "e", "i", "o", "u"];
    return [...my_string].filter(x => !모음.includes(x)).join("");
}