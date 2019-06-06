let DB_Words =
[
  "ainiku", "akiraka", "akushu"
];

let DB_Def =
[
  "unfortunately", "obvious", "handshake"
];

function assignVocab()
{
  let randInt = Math.floor( Math.random() * DB_Words.length );
  let word = document.getElementById("word").innerHTML = DB_Words[randInt].toString();
  let def = document.getElementById("definition").innerHTML = DB_Def[randInt].toString();
  console.log("Word: " + word + " Def: " + def);
}
