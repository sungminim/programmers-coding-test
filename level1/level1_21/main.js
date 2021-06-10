function solution(n) {
    let sqrtNum = Math.sqrt(n)

    if(Number.isInteger(sqrtNum) === true){
        return Math.pow(sqrtNum, 2)
    }else{
        return -1
    }
}
