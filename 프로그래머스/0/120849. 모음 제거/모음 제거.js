function solution(my_string) {
    let answer = '';
    const 모음 = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < my_string.length; i++) {
    if (!모음.includes(my_string[i])) answer += my_string[i];
  }
  return answer;
}