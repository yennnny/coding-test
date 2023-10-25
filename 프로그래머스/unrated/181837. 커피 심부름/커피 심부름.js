function solution(order) {
    let money = 0;
    order.forEach((c) => {
        c.includes('latte') ? money += 5000 : money += 4500;
    })
    return money;
}