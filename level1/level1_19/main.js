function solution(phone_number) {
    let numLength = phone_number.length - 4;
    let num = phone_number.substr(numLength)
    let answer = '*'.repeat(numLength) + num
    return answer
}

solution("01033334444")
