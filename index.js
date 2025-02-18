function changeTime() {
    const time = new Date().toLocaleTimeString;
    document.getElementById("timeDisplay").innerHTML = time;
};

