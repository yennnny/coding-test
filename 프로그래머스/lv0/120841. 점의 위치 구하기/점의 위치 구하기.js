function solution(dot) {
    const [x, y] = dot;
    
    return x > 0 ? (y > 0 ? 1 : 4) : (y > 0 ? 2 : 3);
    
    // if(x > 0){
    //     if(y > 0) return 1;
    //     else return 4;
    // } else {
    //     if(y > 0) return 2;
    //     else return 3;
    // }
}