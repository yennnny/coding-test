function solution(order) {
    let money = 0;
    const lattes = [
        "icecafelatte", "cafelatteice", "hotcafelatte", "cafelattehot", "cafelatte"
    ]
    order.forEach((c) => {
        c.includes('latte') ? money += 5000 : money += 4500;
    })
    return money;
}