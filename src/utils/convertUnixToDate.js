const weekDays = ['Sun', 'Mon',' Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const convertUnixToDate = (unix) => {
    const date = new Date(unix * 1000)
    const day = weekDays[date.getDay(date)]

    console.log(date)

    return day
}