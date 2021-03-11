input.onButtonPressed(Button.A, function () {
    motor_angle += 5
    basic.pause(50)
    if (motor_angle <= -1) {
        motor_angle = 0
    } else if (motor_angle >= 181) {
        motor_angle = 180
    }
    servos.P0.setAngle(motor_angle)
})
input.onButtonPressed(Button.AB, function () {
    motor_angle = 90
    servos.P0.setAngle(motor_angle)
})
input.onButtonPressed(Button.B, function () {
    motor_angle += -5
    basic.pause(50)
    if (motor_angle <= -1) {
        motor_angle = 0
    } else if (motor_angle >= 181) {
        motor_angle = 180
    }
    servos.P0.setAngle(motor_angle)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    flag_waver = 0
    flag_wover = 180
    servos.P0.setAngle(flag_waver)
    for (let index = 0; index < 20; index++) {
        flag_waver += 10
        servos.P0.setAngle(flag_waver)
        basic.pause(500)
        flag_wover += -10
        servos.P0.setAngle(flag_wover)
        basic.pause(500)
    }
})
let flag_wover = 0
let flag_waver = 0
let motor_angle = 0
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
basic.clearScreen()
motor_angle = 90
servos.P0.setAngle(motor_angle)
basic.forever(function () {
	
})
