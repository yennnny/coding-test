function solution(myString) {
    let result = ''
    const alphabet = [..."abcdefghijklmnopqrstuvwxyz"]
    for(let i of myString){
        if(alphabet.indexOf(i) < 11) {
            result += "l"
        } else{
            result += i
        }
    }
    return result
}