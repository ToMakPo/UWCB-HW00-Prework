var box = document.getElementById('box')

var grew = false
var blued = false
var faded = false
var moved = false
var rotated = false
var rounded = false
var has_border = false

var grow_box = function() {
    grew = !grew
    box.style.width = `${grew ? 200 : 150}px`
    box.style.height = `${grew ? 200 : 150}px`
    box.style.top = `${grew ? 0 : 25}px`
    box.style.left = `${grew ? 0 : 25}px`
}

var make_blue = function() {
    blued = !blued
    box.style.background = `${blued ? 'Cyan' : 'GoldenRod'}`
    box.style.border  = `${blued ? 'DarkCyan' : 'DarkGoldenRod'} solid ${has_border ? 10 : 0}px`
}

var faded = false
var fade_box = function() {
    faded = !faded
    box.style.opacity = `${faded ? 35 : 100}%`
}

var move_box = function() {
    moved = !moved
    box.style.transform = `translateX(${moved ? 150 : 0}px) rotate(${rotated ? 30 : 0}deg)`
}
var rotate_box = function() {
    rotated = !rotated
    box.style.transform = `translateX(${moved ? 150 : 0}px) rotate(${rotated ? 30 : 0}deg)`
}

var rounde_box = function() {
    rounded = !rounded
    box.style.borderRadius  = `${rounded ? 50 : 0}%`
}

var add_border = function() {
    has_border = !has_border
    box.style.border  = `${blued ? 'DarkCyan' : 'DarkGoldenRod'} solid ${has_border ? 10 : 0}px`
}

var reset = function() {
    box.style.width = '150px'
    box.style.height = '150px'
    box.style.top = '25px'
    box.style.left = '25px'
    grew = false

    box.style.background = 'goldenrod'
    blued = false

    box.style.opacity = '100%'
    faded = false

    box.style.transform = 'translateX(0px) rotate(0deg)'
    moved = false
    rotated = false
    
    box.style.borderRadius  = '0%'
    rounded = false
    
    box.style.border  = 'DarkOrange solid 0px'
    has_border = false
}

document.getElementById('button1').addEventListener('click', grow_box)
document.getElementById('button2').addEventListener('click', make_blue)
document.getElementById('button3').addEventListener('click', fade_box)
document.getElementById('button5').addEventListener('click', move_box)
document.getElementById('button6').addEventListener('click', rotate_box)
document.getElementById('button7').addEventListener('click', rounde_box)
document.getElementById('button8').addEventListener('click', add_border)
document.getElementById('button4').addEventListener('click', reset)