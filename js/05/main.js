
function increaseCount() {
    var counter = parseInt(document.getElementById('num').innerHTML, 10);
    counter++;
    document.getElementById('num').innerHTML = counter;

    if (counter < 0 ){
        document.getElementById('num').style.color = '#E71D36'
    } else if (counter > 0){
        document.getElementById('num').style.color = '#2EC4B6'
    } else {
        document.getElementById('num').style.color = '#222'
    }
}

function decreaseCount() {
    var counter = parseInt(document.getElementById('num').innerHTML, 10);
    counter--;
    document.getElementById('num').innerHTML = counter;

    if (counter < 0 ){
        document.getElementById('num').style.color = '#E71D36'
    } else if (counter > 0){
        document.getElementById('num').style.color = '#2EC4B6'
    } else {
        document.getElementById('num').style.color = '#222'
    }
}
