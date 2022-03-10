let createDial = (i) =>{  
    let div = document.createElement('div');
    let container = document.getElementById('container');     
    container.appendChild(div);             
    div.classList.add('button');  
    div.textContent= i;           
  }
  for(let i = 0; i < 10; i++)
    createDial(i);