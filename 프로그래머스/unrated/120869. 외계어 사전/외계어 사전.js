function solution(spell, dic) {
    let result = 2; 
    dic.forEach((d) => {
        let exist = 0;
        spell.forEach((s) => {
            if (d.includes(s)) {
                exist += 1;
            }
        });
        if (exist === spell.length) {
            result = 1;
        }
    });
    return result;
}