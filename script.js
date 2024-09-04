const enddate = "1 January 2025 10:00 PM";

document.getElementById("end-date").innerText = enddate;
const inputs = document.querySelectorAll("input");



function clock() {
    const end = new Date(enddate);
    const now = new Date();
    // console.log(end);
    // console.log(now);
    const diff = (end - now)/1000;

    if(diff<0)
    {
        return;
    }
    // conert to days
    inputs[0].value=Math.floor((diff / 3600) /24);
    // hours
    inputs[1].value=Math.floor((diff / 3600)%24);
    // minutes
    inputs[2].value=Math.floor((diff / 60)%60);
    // seconds
    inputs[3].value=Math.floor((diff)%60);
    
}

clock();


setInterval(
    ()=>{
        clock()
    },
    1000
)