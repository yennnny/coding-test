function solution(arr) {
    return arr.map((a)=>{
        return Array(a).fill(a)
    }).flat()
}