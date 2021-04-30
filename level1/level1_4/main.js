
function solution(s){
    let txt = s.toUpperCase();
    let arr = txt.split('')

    let countS = arr.filter((e) => 'P' === e).length
    let countY = arr.filter((e) => 'Y' === e).length
    console.log(countS)
    console.log(countY)

    if (countS === countY) {
        return true
    }else if(countS === 0 && countY === 0){
        return true
    }else {
        return false
    }
}