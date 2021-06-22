/** div creation for white and black node */
const piano = document.getElementById('container') 

var playNote = (which, id) => {
    var audio;
    switch (which) {
        case "white":
            audio = new Audio(`assets/flat${id}.mp3`);
            break;
        case "black":
            audio = new Audio(`assets/note${id}.mp3`);
            break;
        default:
            break;
    }
    audio.play();
}
var whiteNodes = [];
var blackNodes = [];
for(let i=0; i<14; i++){
        // create white node
    whiteNodes[i] = document.createElement('div');
    whiteNodes[i].id = `white${i}`;
    whiteNodes[i].className = 'whiteNode';
    whiteNodes[i].style.left = `${i * 60}px`;
    whiteNodes[i].onclick = function() {
        whiteNodes[i].style.backgroundColor = "#ebebeb";
        setTimeout(() => {
            whiteNodes[i].style.backgroundColor = "#ffffff";
        }, 100)
        playNote("white", i); 
    }
    piano.append(whiteNodes[i]);
}


var leftMargin = 45;
var group = 2;
var count = 0;
for (let i=0; i<10; i++) {
    // create black node
    blackNodes[i] = document.createElement('div');
    blackNodes[i].id = `black${i}`;
    blackNodes[i].className = 'blackNode';
    blackNodes[i].style.marginLeft = `${leftMargin}px`;
    count++;
    leftMargin += 60;
    if (group === 2) {
        if (count === 2) {
            group = 3;
            count = 0;
            leftMargin += 60;
        }
    } else {
        if (count === 3) {
            group = 2;
            count = 0;
            leftMargin += 60;
        }
    }
    blackNodes[i].onclick = function() { 
        blackNodes[i].style.backgroundColor = "#36454F";
        setTimeout(() => {
            blackNodes[i].style.backgroundColor = "#000000";
        }, 100)
        playNote("black", i); 
    }
    piano.appendChild(blackNodes[i]);
}
