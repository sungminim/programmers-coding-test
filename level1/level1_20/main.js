function solution(x) {
    let arrX = x.toString().split('')
    let arrSum = arrX.reduce((stack, el)=>{
        return stack + Number(el);
    }, 0);

    if(x % arrSum === 0){
        return true
    }else{
        return false
    }
}

/* 
1. [1] [2]
2. reduce로 배열 다 더하기
3. 더한값 / 120 = 나누기가 0이면 true
*/

solution(120)