function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  if(h==0) {
    h=12;
  }
    
    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function genQuote() {
  var randNum1 = Math.floor(Math.random() * 4) + 1;
  var randNum2 = Math.floor(Math.random() * 8) + 1;
  var randNum3 = Math.floor(Math.random() * 7) + 1;
  var randNum4 = Math.floor(Math.random() * 9) + 1;
  document.getElementById('quote').innerHTML = quotes1[randNum1]+quotes2[randNum2]+quotes3[randNum3]+quotes2a[randNum2]+quotes4[randNum4];
}

//quote array
var quotes1 = ["Blank", "The newest episode of PST is about how Ed used to ", "After 18 months of not uploading, Ed finally releases a video titled <br/> How to ", "Ed's stand ability is to instantly ", "The plot of MGR2 is that Raiden has to "]
console.log(quotes1)
var quotes2 = ["Blank","watch Face/Off with ","get ","start a ","get ","get ","use ","get half-cirumcised by ","gobble "]
var quotes3 = ["Blank","Ed's ex","David","An amputee","Smite Car 3","DoubleJ","Kuzenbo","Hbomberguy"]
var quotes2a = ["Blank"," "," to shit in a Nutella jar "," themed pedophile ring "," addicted to crack "," tattooed on his thigh "," as a catheter "," ","'s toes "]
var quotes4 = ["Blank","<br/>and that's how he woke up in France.","<br/>and then he gets banished to the punta cana airport for eternity.","<br/>and that's why Xbalanque can't read.","at the ScreenWave media booth.","<br/>and thats why David hates bread.","with Viper the Rapper.","at the Punta Cana airport.","<br/>and that's why Ed hates cheese.","in a fursuit."]

//date
function startDate() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}



