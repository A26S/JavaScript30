const secondsHand = document.querySelector('.second-hand')
const minutesHand = document.querySelector('.min-hand')
const hoursHand = document.querySelector('.hour-hand')

setInterval(() => {
    const date = new Date()
    const currentSecond = date.getSeconds()
    const currentMinute = date.getMinutes()
    const currentHour = date.getHours()
    // if (currentSecond * 6 + 90 == 360) {
    //     secondsHand.style.transform = ''
    //     setTimeout(() => {
    //         secondsHand.style.transform = `rotate(${(currentSecond * 6) + 90}deg)`
    //     }, 100)
    // }
    secondsHand.style.transform = `rotate(${(currentSecond * 6) + 90}deg)`
    minutesHand.style.transform = `rotate(${(currentMinute * 6) + 90}deg)`
    hoursHand.style.transform = `rotate(${(currentHour * 6) + 90}deg)`
    console.log(currentSecond, currentMinute, currentHour)
}, 1000)