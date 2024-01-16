function solution(my_string) {
    let result = 0;
    my_string.split("").forEach((a)=>{
        if(a > 0) result += ( a * 1)
    })
    return result;
}