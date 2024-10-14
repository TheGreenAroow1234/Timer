let time = document.getElementById('time')
let date = document.getElementById('date')

const getFullDate = ()=>{

    const day = new Date()

    const getHours = day.getHours()
    const getMinutes = day.getMinutes() < 10 ? '0' + day.getMinutes() : day.getMinutes()
    const getSeconds = day.getSeconds() < 10 ? '0' + day.getSeconds() : day.getSeconds()

    const getDate = day.getDate() < 10 ? '0' + day.getDate() : day.getDate()
    const getMonth = day.getMonth() < 9 ? '0' + (day.getMonth() + 1) : (day.getMonth() + 1)
    const getYear = day.getFullYear() < 10 ? '0' + day.getFullYear() : day.getFullYear()
    
    time.textContent = `${getHours}:${getMinutes}:${getSeconds}`
    date.textContent = `${getDate}:${getMonth}:${getYear}`
 
}
setInterval(getFullDate, 1000)







