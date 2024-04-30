function solution(myString) {
    return [...myString]
        .map( s => s === "a"  || s === "A"
             ? s.toUpperCase() : s.toLowerCase()).join("")
    
}