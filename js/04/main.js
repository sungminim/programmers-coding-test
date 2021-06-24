

function appearMsg(){
    let msgKey = document.getElementById('msg').value;
    let appearArea = document.getElementById('history');
    let errorMsg = document.getElementById('errorMsg');

    // input 내의 value 값이 없을 때
    if(msgKey === ""){
        errorMsg.classList.add("show");
        setTimeout(function () {
            errorMsg.classList.remove("show");
        }, 1000);
    }else{
        appearArea.innerHTML = msgKey
    }
}


var input = document.getElementById("msg");

// input에 enter시 상위 버튼 클릭 함수 적용
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        appearMsg()
    }
});