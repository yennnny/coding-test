function solution(a, b) {
    return Math.max((a.toString() + b.toString() * 1), (b.toString() + a.toString() * 1))
}