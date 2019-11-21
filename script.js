var quotes = [
    "Either you run the day or the day runs you!",
    "Strength is Weakness",
    "Feel the code",
    "May the source be with you",
    "DCI, everything is possible ;)",
    "Whether you think you or you think you can’t, you’re right",
    "Aim for failure and you always succeed"
  ]

var fonts = [
    "'Quantico', sans-serif" ,
    "'Calistoga', cursive",
    "'Open Sans Condensed', sans-serif",
    "'Indie Flower', cursive",
    "'Pacifico', cursive",
    "'Dancing Script', cursive"
]  

var para = document.getElementById("quote")

function myFunction(){
    para.innerHTML=quotes[Math.round(Math.random() * 6) ];

    
}