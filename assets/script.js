let txt1 = document.querySelector('#txtInput1');
let txt2 = document.querySelector('#txtInput2');
let out1 = document.querySelector('#txtOutput1');
let btn = document.querySelector('#FindText');

let txt3 = document.querySelector('#tInp3');
let out2 = document.querySelector('#tOut3');
let cnt = document.querySelector('#CountBtn');


btn.addEventListener('click',function(){
    let str = txt1.value.toLowerCase(); // In case of being case-sensitive
    let fd = txt2.value.toLowerCase();

    let res = str.includes(fd);

    out1.innerText = res ? "Found" : "Not Found";
    console.log(res);
});

cnt.addEventListener('click',function(){
    let strng = txt3.value.trim();

    let rsl = strng.length;
    out2.innerText = rsl;
});