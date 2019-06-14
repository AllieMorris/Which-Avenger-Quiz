// console.log("HELLO")
var images = {
  "Iron Man" : "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/IronMan-EndgameProfile.jpg/revision/latest/scale-to-width-down/2000?cb=20190423175213",
  "Captain America" : "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/d/d7/CapAmerica-EndgameProfile.jpg/revision/latest/scale-to-width-down/2000?cb=20190423175339",
  "Hulk" : "https://vignette.wikia.nocookie.net/readyplayerone/images/6/6f/Hulk.jpg/revision/latest?cb=20180516101040",
  "Thor" : "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/13/Thor-EndgameProfile.jpg/revision/latest/scale-to-width-down/310?cb=20190423174911",
  "Black Widow" : "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9a/BlackWidow-EndgameProfile.jpg/revision/latest/scale-to-width-down/2000?cb=20190423174842",
  "Hawkeye" : "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/08/HawkeyeRonin-EndgameProfile.jpg/revision/latest/scale-to-width-down/310?cb=20190423175147",
}
var description={
  "Iron Man" : "Like Iron Man, you are very strong-willed. When you set your mind to something, you do not stop until you accomplish your goal. Sometimes it is hard for you work with others because you have trouble giving up control. At times, you work can conflict with your relationships. You are quick witted and very proud of your work. To some, this may come off as arrogant, but this is all a front to protect yourself from getting hurt. You don’t trust easily and you are usually down for anything. Above all else, the people you care about are what is really important to you.",
  "Captain America" : "Like Captain America, you are a classic do-gooder. You are very noble and brave and will often put yourself in danger for the greater good. To you, nothing is more important than doing the right thing. However, sometimes doing what is right is not so clear when it involves people you care about. You are very chivalrous and sometimes feel like you are the odd man out. In your opinion, what’s on the inside matters more than what’s on the outside: being a good person. You have incredible perseverance and no one will ever catch you giving up on your dreams. Above all else, you believe in being loyal to your country and to the people close to you.",
  "Hulk" : "Like Hulk and Bruce Banner, you are constantly battling with yourself and tend to be indecisive when making decisions. Like Banner, you are extremely intelligent, using your talent for helping others who cannot help themselves. Like Hulk, your strength can help you get through tough times, whether that be mentally of physically. You have a habit of worrying about things you have done in the past, which can get in the way of you living in the present. You can be swayed easily, sometimes leading you to do things that you don’t want to, to please other people, seeking their approval. Deep down, your beliefs will lead you on the right path.",
  "Thor" : "Like Thor, you are very charming. You have a powerful personality that no one can forget. You will always rise to a challenge, no matter what. You tend to act before you think, and sometimes this can have consequences. People might find you intimidating due to your tough exterior, but once they get to know you, they will realize how gentle and caring you can be. You can sometimes trust too easily, making you seem naive. Most importantly, you value your friends and family, and will never give up on them the people you care about.",
  "Black Widow" : "Like Black Widow, your confidence is what stands out the most about you. When you walk into a room, everyone turns their head. You are a force to be reckoned with and no one dares mess with you. You are fearless and you have never backed down from a challenge. Anything you do, you always have to be the best. Sometimes you question if you are doing the right thing, or just doing another pawn in someone else’s scheme. In the end, you know that in your heart, you will do what is right.",
  "Hawkeye" : "Like hawkeye, you are strategic and skilled in your craft. You are very down to earth, kind-hearted, and loyal. Sometimes you can be overlooked, but this does not bother you because you don’t feel the need to be in the spotlight at all times. You tend to be self critical of yourself when you feel under appreciated. Overall, the people that matter know your value.",
}
var button = $(".button")
button.on("click",go)
console.log(localStorage.getItem("avengerName"))
$("#name").text(localStorage.getItem("avengerName"));
$("#image").attr("src",images[localStorage.getItem("avengerName")])
$("#description").text(description[localStorage.getItem("avengerName")])

function go(){
var q1Value = document.querySelector('input[name = "describe"]:checked').value;
console.log(q1Value)
var q2Value = document.querySelector('input[name = "flaw"]:checked').value;
console.log(q2Value)
var q3Value = document.querySelector('input[name = "color"]:checked').value;
console.log(q3Value)
var q4Value = document.querySelector('input[name = "value"]:checked').value;
console.log(q4Value)
var q5Value = document.querySelector('input[name = "subject"]:checked').value;
console.log(q5Value)
var q6Value = document.querySelector('input[name = "Kardashian"]:checked').value;
console.log(q6Value)
var q7Value = document.querySelector('input[name = "restaurant"]:checked').value;
console.log(q7Value)
var q8Value = document.querySelector('input[name = "Dorito"]:checked').value;
console.log(q8Value)
var q9Value = document.querySelector('input[name = "holiday"]:checked').value;
console.log(q9Value)
var q10Value = document.querySelector('input[name = "birthday"]:checked').value;
console.log(q10Value)
var q11Value = document.querySelector('input[name = "flavor"]:checked').value;
console.log(q11Value)
var q12Value = document.querySelector('input[name = "pizza"]:checked').value;
console.log(q12Value)
var q13Value = document.querySelector('input[name = "princess"]:checked').value;
console.log(q13Value)
var q14Value = document.querySelector('input[name = "Friends"]:checked').value;
console.log(q14Value)
var q15Value = document.querySelector('input[name = "vacation"]:checked').value;
console.log(q3Value)

var ironMan=0
var captainAmerica=0
var thor=0
var hulk=0
var blackWidow=0
var hawkeye=0

for (var one=1; one <7; one++) {
    if (q1Value=='a') {
        ironMan=ironMan+1;
    } else if (q1Value=='b') {
        captainAmerica=captainAmerica+1;
    } else if (q1Value=='c'){
        thor=thor+1;
    } else if (q1Value=='d'){
        hulk=hulk+1;
    } else if (q1Value=='e'){
        blackWidow=blackWidow+1;
    } else {
        hawkeye=hawkeye+1;
    }
}

for (var two=1; two <7; two++) {
    if (q2Value=='a') {
        ironMan=ironMan+1;
    } else if (q2Value=='b') {
        captainAmerica=captainAmerica+1;
    } else if (q2Value=='c'){
        thor=thor+1;
    } else if (q2Value=='d'){
        hulk=hulk+1;
    } else if (q2Value=='e'){
        blackWidow=blackWidow+1;
    } else {
        hawkeye=hawkeye+1;
    }
}

for (var three=1; three <7; three++) {
    if (q3Value=='a') {
        ironMan=ironMan+1;
    } else if (q3Value=='b') {
        captainAmerica=captainAmerica+1;
    } else if (q3Value=='c'){
        thor=thor+1;
    } else if (q3Value=='d'){
        hulk=hulk+1;
    } else if (q3Value=='e'){
        blackWidow=blackWidow+1;
    } else {
        hawkeye=hawkeye+1;
    }
}


for (var four=1; four <7; four++) {
    if (q4Value=='a') {
        ironMan=ironMan+1;
    } else if (q4Value=='b') {
        captainAmerica=captainAmerica+1;
    } else if (q4Value=='c'){
        thor=thor+1;
    } else if (q4Value=='d'){
        hulk=hulk+1;
    } else if (q4Value=='e'){
        blackWidow=blackWidow+1;
    } else {
        hawkeye=hawkeye+1;
    }
}

for (var five=1; five <7; five++) {
    if (q5Value=='a') {
        ironMan=ironMan+1;
    } else if (q5Value=='b') {
        captainAmerica=captainAmerica+1;
    } else if (q5Value=='c'){
        thor=thor+1;
    } else if (q5Value=='d'){
        hulk=hulk+1;
    } else if (q5Value=='e'){
        blackWidow=blackWidow+1;
    } else {
        hawkeye=hawkeye+1;
    }
}

for (var six=1; six <7; six++) {
    if (q6Value=='a') {
        ironMan=ironMan+1;
    } else if (q6Value=='b') {
        captainAmerica=captainAmerica+1;
    } else if (q6Value=='c'){
        thor=thor+1;
    } else if (q6Value=='d'){
        hulk=hulk+1;
    } else if (q6Value=='e'){
        blackWidow=blackWidow+1;
    } else {
        hawkeye=hawkeye+1;
    }
}

for (var seven=1; seven <7; seven++) {
    if (q7Value=='a') {
        ironMan=ironMan+1;
    } else if (q7Value=='b') {
        captainAmerica=captainAmerica+1;
    } else if (q7Value=='c'){
        thor=thor+1;
    } else if (q7Value=='d'){
        hulk=hulk+1;
    } else if (q7Value=='e'){
        blackWidow=blackWidow+1;
    } else {
        hawkeye=hawkeye+1;
    }
}

for (var eight=1; eight <7; eight++) {
    if (q8Value=='a') {
        ironMan=ironMan+1;
    } else if (q8Value=='b') {
        captainAmerica=captainAmerica+1;
    } else if (q8Value=='c'){
        thor=thor+1;
    } else if (q8Value=='d'){
        hulk=hulk+1;
    } else if (q8Value=='e'){
        blackWidow=blackWidow+1;
    } else {
        hawkeye=hawkeye+1;
    }
}

for (var nine=1; nine <7; nine++) {
    if (q9Value=='a') {
        ironMan=ironMan+1;
    } else if (q9Value=='b') {
        captainAmerica=captainAmerica+1;
    } else if (q9Value=='c'){
        thor=thor+1;
    } else if (q9Value=='d'){
        hulk=hulk+1;
    } else if (q9Value=='e'){
        blackWidow=blackWidow+1;
    } else {
        hawkeye=hawkeye+1;
    }
}

for (var ten=1; ten <7; ten++) {
    if (q10Value=='a') {
        ironMan=ironMan+1;
    } else if (q10Value=='b') {
        captainAmerica=captainAmerica+1;
    } else if (q10Value=='c'){
        thor=thor+1;
    } else if (q10Value=='d'){
        hulk=hulk+1;
    } else if (q10Value=='e'){
        blackWidow=blackWidow+1;
    } else {
        hawkeye=hawkeye+1;
    }
}

for (var eleven=1; eleven <7; eleven++) {
    if (q11Value=='a') {
        ironMan=ironMan+1;
    } else if (q11Value=='b') {
        captainAmerica=captainAmerica+1;
    } else if (q11Value=='c'){
        thor=thor+1;
    } else if (q11Value=='d'){
        hulk=hulk+1;
    } else if (q11Value=='e'){
        blackWidow=blackWidow+1;
    } else {
        hawkeye=hawkeye+1;
    }
}

for (var twelve=1; twelve <7; twelve++) {
    if (q12Value=='a') {
        ironMan=ironMan+1;
    } else if (q12Value=='b') {
        captainAmerica=captainAmerica+1;
    } else if (q12Value=='c'){
        thor=thor+1;
    } else if (q12Value=='d'){
        hulk=hulk+1;
    } else if (q12Value=='e'){
        blackWidow=blackWidow+1;
    } else {
        hawkeye=hawkeye+1;
    }
}

for (var thirteen=1; thirteen <7; thirteen++) {
    if (q13Value=='a') {
        ironMan=ironMan+1;
    } else if (q13Value=='b') {
        captainAmerica=captainAmerica+1;
    } else if (q13Value=='c'){
        thor=thor+1;
    } else if (q13Value=='d'){
        hulk=hulk+1;
    } else if (q13Value=='e'){
        blackWidow=blackWidow+1;
    } else {
        hawkeye=hawkeye+1;
    }
}

for (var fourteen=1; fourteen <7; fourteen++) {
    if (q14Value=='a') {
        ironMan=ironMan+1;
    } else if (q14Value=='b') {
        captainAmerica=captainAmerica+1;
    } else if (q14Value=='c'){
        thor=thor+1;
    } else if (q14Value=='d'){
        hulk=hulk+1;
    } else if (q14Value=='e'){
        blackWidow=blackWidow+1;
    } else {
        hawkeye=hawkeye+1;
    }
}

for (var fifteen=1; fifteen <7; fifteen++) {
    if (q15Value=='a') {
        ironMan=ironMan+1;
    } else if (q15Value=='b') {
        captainAmerica=captainAmerica+1;
    } else if (q15Value=='c'){
        thor=thor+1;
    } else if (q15Value=='d'){
        hulk=hulk+1;
    } else if (q15Value=='e'){
        blackWidow=blackWidow+1;
    } else {
        hawkeye=hawkeye+1;
    }
}

var avenger ="";

if (ironMan>=captainAmerica && ironMan>=thor && ironMan>=hulk && ironMan>=blackWidow && ironMan>=hawkeye){
     console.log("Iron Man")
    avenger= "Iron Man"
}
 else if (captainAmerica>=thor && captainAmerica>=hulk && captainAmerica>=blackWidow && captainAmerica>=hawkeye){
    console.log("Captain America")
      avenger= "Captain America";
     }
 else if (thor>=hulk && thor>=blackWidow && thor>=hawkeye){
     console.log("Thor")
     avenger= "Thor" }
 else if (hulk>=blackWidow && hulk>=hawkeye ){
     console.log("Hulk")
     avenger= "Hulk";
   }
 else if (blackWidow>=hawkeye){
     console.log("Black Widow")
     avenger= "Black Widow";
   }
else{
 console.log("Hawkeye")
     avenger= "Hawkeye"
   }
 localStorage.setItem("avengerName",avenger);
}


// ironMan=a, captainAmerica=b, thor=c, hulk=d, blackWidow=e, hawkeye=f
