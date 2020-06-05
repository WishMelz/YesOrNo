
console.log(`%c 你连决定都需要靠程序吗？那和废物有什么区别！`,
    `
font-size:12px;
color:#fff;
background:#5fb079;
padding:10px 5px;
border-radius:3px;
margin:30px 0;
`
);
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}
function randomArr(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        let index = Math.floor(Math.random() * i);
        let temp = arr[index];
        arr[index] = arr[i];
        arr[i] = temp;
    }
    return arr
}


for (var i = 0; i < 200000; i++) {
    randomArr(imgList)
}
document.querySelector('#img').src = imgList[randomNum(0, imgList.length - 1)]
setTimeout(() => {
    document.querySelector('.loaging').style.display = 'none';
}, 10000)
