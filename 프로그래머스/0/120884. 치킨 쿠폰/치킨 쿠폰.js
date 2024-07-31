function solution(chicken) {
    let coupon = 0;
    
    while(chicken >= 10){
        coupon += Math.floor(chicken / 10) // 치킨 먹은 횟수로 받은 쿠폰
        
        //그외 반복
        chicken = (chicken % 10) + Math.floor(chicken / 10)
    }
    return coupon;
        
}