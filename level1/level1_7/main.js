function solution(array, commands) {
    var answer = [];
  
    commands.forEach(command => {
      let newArr = array.slice(command[0]-1, command[1])
      newArr.sort((a, b) => {
        return a-b
      })
      answer.push(newArr[command[2]-1])
    });
  
    return answer;
  }