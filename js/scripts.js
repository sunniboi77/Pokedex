let pokemonList = [
    { name: "Bulbasaur", height: 7, types: ['grass','poison','fire'] } ,
    { name: "Eevee", height: 0.3, types: ['grass','poison','fire'] },
    { name: "Espeon", height: 0.9, types: ['grass','poison','fire'] }
];



document.write("<h1>Hello World</h1>");
document.write("Have a nice day!");



for (let i=0; i<pokemonList.length ;i++) {
    document.writeln('<p>',pokemonList[i].name,' height is    ',pokemonList[i].height,'</p>');
}


function newContent() {
    document.open();
    document.write("<h1>Out with the old, in with the new!</h1>");
    document.close();
}

function myFunction() {
    document.open();
    document.write("<h1>Hello World</h1>");
    document.close();
}

/* SOME TEST  

 var myarray = new Array();
for (i = 0; i < 10; i++)
{
    myarray[i] = i;
}
document.write(myarray);





var person={
    first_name:"johnny",
     last_name: "johnson",
   phone:"703-3424-1111"
}


for (var property in person) {
    console.log(property,":",person[property]);
}



*/
 