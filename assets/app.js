let createDial = (i) => {
    let div = document.createElement('div');
    let container = document.getElementById('container');
    container.appendChild(div);
    div.classList.add('button');
    div.textContent = i;
}
for (let i = 0; i < 10; i++)
    createDial(i);



const createCode = (codeLength) => {
    let count = 0;
    let code = [];
    for (let i = 0; i < codeLength; i++) 
    {
        code.push(Math.floor(Math.random() * 10));
    }
    return code;
}
code = createCode(4);
codeString = code.join(''); 
console.log(`code secret => ${codeString}`);