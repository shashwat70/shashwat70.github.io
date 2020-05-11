const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const currentTime = new Date()
let yearOfTheEvent = currentTime.getFullYear()
let eventDate = new Date( yearOfTheEvent, 04, 16 )

var backgrounds = new Array(
    'url(images/starry.jpg)',
    'url(images/moon.jpg)',
    'url(images/lights.jpg)',
    'url(images/snow.jpg)',
)
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
                        document.getElementById('main').innerHTML='Happy Birthday, Aastha!'
                        var m = document.getElementById('music')
                        m.volume = 1
                        document.getElementById('body').style.backgroundImage='url(images/one.gif)'
                        m.play()
                    }
                    else {
                        days.innerHTML--
                        hours.innerHTML=23
                        minutes.innerHTML=59
                        seconds.innerHTML=59
                    }
                }
                else {
                    hours.innerHTML--
                    minutes.innerHTML=59
                    seconds.innerHTML=59
                }
            }
            else {
                minutes.innerHTML--
                seconds.innerHTML=59
            }
        }
        else {
            seconds.innerHTML--
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
    document.getElementById('body').style.backgroundImage=backgrounds[current]
}
