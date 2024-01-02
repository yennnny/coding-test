function solution(num_list) {
    let division = 0;
    num_list.forEach((num) => {        
        while(num > 1) {
          num = num % 2 === 0 ? num / 2 : (num - 1) / 2;
            division += 1;
        } 
    });
    return division;
}