function solution(num_list) {
    let odd = 0;
    let even = 0;
    for(let i = 0; i < num_list.length; i += 1){
        if(i % 2 === 0){
            odd += num_list[i]
        } else{
            even += num_list[i]
        }
    }
    return Math.max(odd, even);
}