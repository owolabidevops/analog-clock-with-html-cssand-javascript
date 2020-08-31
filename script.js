
// Constants that won't change through the script
// #hour - target id for hour hand in the svg
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//using date object get the value for current hour ,minute and seconds
function run_the_clock(){
  var date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log("Hour: "+hr+ " Minute: "+ min + " Second: "+ sec);
//given some time value ,the position of hands in an analog clock can be estimated using some basic math formulas
//let leverage them directly
  let hrPosition = hr*360/12 + ((min * 360/60)/12) ;
  let minPosition = (min * 360/60) + (sec* 360/60)/60;
  let secPosition = sec * 360/60;

  //Then we need to apply these numbers as degrees in the inline styles for transform on each of the objects.
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

//after making the function let call it after several seconds(1000ms) using setInterval method
var interval = setInterval(run_the_clock, 1000);

