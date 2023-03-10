'use strict';

{
function draw(){
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// 外枠の描画
ctx.beginPath();
ctx.rect(50, 50, 500, 500);
ctx.strokeStyle = 'white';
ctx.stroke();
// ペナルティエリアの描画
ctx.beginPath();
ctx.rect(150, 450, 300, 100);
ctx.strokeStyle = 'white';
ctx.stroke();

// PKスポットの描画
ctx.beginPath();
ctx.arc(300, 475, 1, 0, Math.PI*2);
ctx.strokeStyle = 'white';
ctx.stroke();

// ゴールエリアの描画
ctx.beginPath();
ctx.rect(225, 500, 150, 50);
ctx.strokeStyle = 'white';
ctx.stroke();

// センターアークの描画
ctx.beginPath();
ctx.arc(300, 50, 70,0,  Math.PI,false);
ctx.strokeStyle = 'white';
ctx.stroke();

ctx.beginPath();
ctx.ellipse(300, 450, 70, 50,0,0,Math.PI, true );
ctx.strokeStyle = 'white';
ctx.stroke();
}
draw();
}