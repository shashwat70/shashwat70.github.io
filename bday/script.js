const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const currentTime = new Date()
let yearOfTheEvent = currentTime.getFullYear()
let eventDate = new Date( yearOfTheEvent, 04, 16 )

var backgrounds = new Array(
    'images/starry.jpg',
    'images/moon.jpg',
    'images/space.jpg',
    'images/snow.jpg',
    'images/lights.jpg',
)

backgrounds.forEach((img) => {
    new Image().src = img
})

var once = false

document.addEventListener('DOMContentLoaded', () => {
    const now = new Date()

    if ( now > eventDate ) {
      eventDate = new Date( yearOfTheEvent + 1, 01, 04 )
    } else if ( now.getFullYear() === eventDate.getFullYear() + 1 ) {
      eventDate = new Date( now.getFullYear(), 01, 04 )
    }

    const currentTime = now.getTime()
    const eventTime = eventDate.getTime()
    const remainingTime = eventTime - currentTime

    let s = Math.floor( remainingTime / 1000 )
    let m = Math.floor( s / 60 )
    let h =  Math.floor( m / 60 )
    let d = Math.floor( h / 24 )

    h %= 24
    m %= 60
    s %= 60

    days.innerHTML = d
    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s

    if(remainingTime.toString().length>10) {
        days.innerHTML=0
        hours.innerHTML=0
        minutes.innerHTML=0
        seconds.innerHTML=0
    }
    setInterval(() => {
        // decrease seconds
        if (seconds.innerHTML == 0) {
            if(minutes.innerHTML == 0) {
                if(hours.innerHTML == 0) {
                    if(days.innerHTML == 0) {
                        // surprise
                        var m = document.getElementById('music')
                        m.volume = 1
                        document.getElementById('body').style.backgroundImage='url(images/one.gif)'
                        m.play()
                        if(!once) {
                            document.getElementById('main').innerHTML = 'Happy Birthday, Aastha!'.bold()
                            document.getElementsByTagName('title')[0].innerHTML = 'Aastha\'s Birthday!'
                            once = !once
                        }
                    }
                    else {
                        days.innerHTML--
                        if(days.innerHTML == 1)
                            document.getElementById('daysHead').innerHTML = 'Day'
                        else
                            document.getElementById('daysHead').innerHTML = 'Days'
                        hours.innerHTML=23
                        minutes.innerHTML=59
                        seconds.innerHTML=59
                    }
                }
                else {
                    hours.innerHTML--
                    if(hours.innerHTML == 1)
                        document.getElementById('hoursHead').innerHTML = 'Hour'
                    else
                        document.getElementById('hoursHead').innerHTML = 'Hours'
                    minutes.innerHTML=59
                    seconds.innerHTML=59
                }
            }
            else {
                minutes.innerHTML--
                if(minutes.innerHTML == 1)
                    document.getElementById('minutesHead').innerHTML = 'Minute'
                else
                    document.getElementById('minutesHead').innerHTML = 'Minutes'
                seconds.innerHTML=59
            }
        }
        else {
            seconds.innerHTML--
            if(seconds.innerHTML == 1)
                document.getElementById('secondsHead').innerHTML = 'Second'
            else
                document.getElementById('secondsHead').innerHTML = 'Seconds'
        }
    },1000)
    setInterval(() => {
        if(seconds.innerHTML!=0||minutes.innerHTML!=0||hours.innerHTML!=0||days.innerHTML!=0)
            nextBackground()
    }, 3000)
})

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    document.getElementById('body').style.background='url('+backgrounds[current]+') no-repeat center center fixed'
    document.getElementById('body').style.backgroundSize = 'cover'
}
