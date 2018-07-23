export function getCurrentDate() {
    let now = new Date();
    let MM = now.getMonth()+1
    let dd = now.getDay()+1
    let yyyy = now.getFullYear()
    if(MM < 10)
        MM = `0${MM}`
    if(dd < 10)
        dd = `0${dd}`
    let currentDate = `${yyyy}-${MM}-${dd}`
    return currentDate
}

export function getOtherDate() {
    let now = new Date();
    let MM = now.getMonth()
    let dd = now.getDay()+1
    let yyyy = now.getFullYear()
    if(MM < 10)
        MM = `0${MM}`
    if(dd < 10)
        dd = `0${dd}`
    let currentDate = `${yyyy}-${MM}-${dd}`
    return currentDate
}