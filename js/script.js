
// capturing the section and the icons
let section = document.querySelector('section'),
    icons = document.querySelector('.icons');

// listening onclick on the icon to switch between dark and light themes
icons.onclick = () => {
    section.classList.toggle("dark");
}

// creating a function and calling it every second
setInterval(() => {

    let date = new Date(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        seconds = date.getSeconds();

    let d;
    d = hour < 12 ? 'AM' : 'PM';
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour == 0 ? hour = 12 : hour;

    // adding 0 to all the values less than 10
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.querySelector('.date_text').innerText = date.toDateString();

    document.querySelector('.hour_num').innerText = hour;
    document.querySelector('.min_num').innerText = minute;
    document.querySelector('.sec_num').innerText = seconds;
    document.querySelector('.am_pm').innerText = d;

}, 1000)