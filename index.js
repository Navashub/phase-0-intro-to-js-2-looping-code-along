// Code your solutions in this file
function writeCards(names) {
    const messageArray = [];
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        messageArray.push(message);
    }
    return messageArray;   
}

function countDown(number) {
    let i = 0;
    while (number >= i) {
        console.log(number);
        number--;
    }
}

countDown(10);