function solution(num_list) {
    const lastItem = num_list[num_list.length - 1];
    const lastPrevItem = num_list[num_list.length - 2];
    console.log(lastItem, lastPrevItem)
    let resultItem = 0;
    resultItem = lastItem > lastPrevItem ? lastItem - lastPrevItem : lastItem * 2
    
    return [...num_list, resultItem];
}