var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

var widthInBlocks = width / document.querySelector('canvasBlockSize').innerHTML;
var heightInBlocks = height / document.querySelector('canvasBlockSize').innerHTML;
document.querySelector('canvasBlockSize').innerHTML = '';

function drawText(text, size, font, color, x, y, align, baseline)
{
    ctx.font = size + " " + font;
    ctx.fillStyle = color;
    ctx.textAlign = align;
    ctx.textBaseline = baseline;
    ctx.fillText(text, x, y);
};

function fillQuad(x, y, sizeX, sizeY, color) 
{
    ctx.fill
    ctx.fillRect(x, y, sizeX, sizeY);
}

function strokeQuad(x, y, sizeX, sizeY, color, weight) 
{
    ctx.strokeStyle = color;
    ctx.lineWidth = weight;
    ctx.strokeRect(x, y, sizeX, sizeY);
}

function Id(id) 
{
    document.getElementById(id)
}

function Class(Class) 
{
    document.getElementsByClassName(Class)
}

function Name(Name) 
{
    document.getElementsByName(Name)
}

function $(selector) 
{
document.querySelector(selector)
}

function string(int) 
{
    int.toString();
}

function int(str) 
{
    parseInt(str);
}

function html(html)
{
    document.write(html)
}
