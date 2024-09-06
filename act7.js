
var time;
var placeofwork;
console.log ("it is 9 and i am home")
console.log ("at 10 im commuting to work")
console.log ("im at work for 11")



function showMessage(times) {
    const now = new Date();
    const h = now.getHours();
    let test = (h <= 5 || (h == 6 && m == 0)) ? "am" :
      ((h >= 6 && h < 12) || (h == 12 && m == 0)) ? "morning" :
      ((h >= 12 && m > 0) || (h > 12 && h < 18) || (h == 18 && m == 0)) ? "afternoon" :
      "evening";
   
    

  }
  showMessage();




