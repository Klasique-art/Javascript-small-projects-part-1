window.addEventListener("load", ()=>{
    // declaring variables 
    const dayEl = document.querySelector(".day")
    const hourEl = document.querySelector(".hour")
    const watchHour = document.querySelector(".hours")
    const minEl = document.querySelector(".min")
    const watchMin = document.querySelector(".mins")
    const secEl = document.querySelector(".sec")
    const watchSec = document.querySelector(".secs")
    const timerContainer = document.querySelector(".timer-container")
    const amPm = document.querySelector(".am-pm")
    const newYear = "1 Jan 2023"

    // calculate time left from current date to new year date
    function countDown() {
        const newYearDate = new Date(newYear)
        const currentDate = new Date()
        const totalSeconds = Math.floor((newYearDate - currentDate) /1000)
        const days = Math.floor((totalSeconds /3600) /24)
        const hrs = Math.floor((totalSeconds /3600) % 24)
        const mins = Math.floor((totalSeconds /60) % 60)
        const secs = Math.floor(totalSeconds % 60)
        dayEl.textContent = days
        hourEl.textContent = formatTime(hrs)
        minEl.textContent = formatTime(mins)
        secEl.textContent = formatTime(secs)

        // display message when the day is up
        if (
            days < 0 &&
            hrs < 0 &&
            mins < 0 &&
            secs < 0
            ){
            timerContainer.textContent = `New Year is up already!!`
        }
    }

    // put 0 infront of the numbers when less than 10
    function formatTime(time) {
        if (time < 10) {
            return `0${time}`
        } else {
            return time
        }
    }
    countDown()
    setInterval(countDown, 1000)

    // watch 
    function clock() {
        let hour = new Date().getHours()
        const min = new Date().getMinutes()
        const sec = new Date().getSeconds()
        amPm.textContent = "Am"
        if(hour > 12){
            hour -= 12
            amPm.textContent = "Pm"
        }
        watchHour.textContent = formatTime(hour)
        watchMin.textContent = formatTime(min)
        watchSec.textContent = formatTime(sec)
    }
    clock()
    setInterval(()=>{
        clock()
    }, 1000)

})