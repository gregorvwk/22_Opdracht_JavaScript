let color = ["yellow", "blue", "red", "orange"];
let i = 0;
while (i < color.length) {
    console.log(color[i])
    i++;
}

for (i = 0; i < color.length; i++){
    console.log(color[i]);
}
color.forEach(element => console.log(element));

var obj = {
    name: "Simon",
    age: "20",
    clothing: {
        style: "simple",
        hipster: false
    }
}

for(var propt in obj){
    console.log(propt + ': ' + obj[propt]);
}