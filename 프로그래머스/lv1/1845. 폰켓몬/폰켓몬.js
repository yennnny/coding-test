function solution(nums) {
    const answer = nums.reduce((acc, cur) => acc.includes(cur) ? acc : [...acc, cur], []);
    return answer.length >= nums.length / 2 ? nums.length / 2 : answer.length;
}