function solution(s) {

    let wordLen = s.length
    let wordIndex = Math.floor(wordLen / 2)
    // console.log(s.slice(1, 2))

    if(wordLen % 2 === 0){
        return s.slice(wordIndex-1, wordIndex+1)
    }else{
        return s.slice(wordIndex, wordIndex+1)
    }

}
