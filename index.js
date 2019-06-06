let DB_Words =
[
  "ainiku", "akiraka", "akushu"
];

let DB_Def =
[
  "unfortunately", "obvious", "handshake"
];

function assignVocabClick()
{
  let randInt = Math.floor( Math.random() * DB_Words.length );
  let word = document.getElementById("word").innerHTML = DB_Words[randInt].toString();
  let def = document.getElementById("definition").innerHTML = DB_Def[randInt].toString();

  let submit = document.getElementById("input-val").value = "";

}

function assignVocabOnLoad()
{
  let randInt = Math.floor( Math.random() * DB_Words.length );
  let word = document.getElementById("word").innerHTML = DB_Words[randInt].toString();
  let def = document.getElementById("definition").innerHTML = DB_Def[randInt].toString();
}

function assignVocab(e)
{

  let key = e.keyCode;

  if( key == 13 )
  {
    let randInt = Math.floor( Math.random() * DB_Words.length );
    let word = document.getElementById("word").innerHTML = DB_Words[randInt].toString();
    let def = document.getElementById("definition").innerHTML = DB_Def[randInt].toString();

    let submit = document.getElementById("input-val").value = "";

  }

}
