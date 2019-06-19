const el = require('electron');
const {ipcRenderer} = el;

const ul = document.querySelector('ul');

ipcRenderer.on('item:add',(e,item)=>{
   const li = document.createElement('li');
    li.innerHTML = item;
    ul.appendChild(li);
});
