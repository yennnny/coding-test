function solution(s) {
    return s == parseInt(s) && (s.length === 4 || s.length === 6) ? true : false;
    // return (s.length === 4 || s.length === 6) && s == parseInt(s)
}