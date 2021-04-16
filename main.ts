let cantidad_Lluvia = 0
let promedio = 0
input.onButtonPressed(Button.A, function () {
    cantidad_Lluvia = 0
    for (let index = 0; index < 7; index++) {
        cantidad_Lluvia += randint(1, 6)
    }
    basic.showNumber(cantidad_Lluvia)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    promedio = 0
    promedio = cantidad_Lluvia / 7
    basic.showNumber(promedio)
    basic.clearScreen()
})
