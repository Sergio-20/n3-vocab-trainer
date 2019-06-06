let DB_Words =
[
  "ainiku", "akiraka", "akushu", "akeru", "azukeru", "ase", "ataeru", "atari", "ataru", "atsukau", "ato",
  "abura", "ayamari", "ara", "arata", "arayuru", "arawasu", "araware", "aru", "aruiwa", "awa", "aware",
  "an", "anki", "antei", "annai", "annani", "i", "iin", "yuu", "igai", "ikioi", "ikenai", "ishi", "iji",
  "ishiki", "ijou", "izumi", "izure", "izen", "ita", "idai", "idaku", "itadaku", "itaru", "ichi", "ichiji",
  "ichidoni"
];

let DB_Def =
[
  "unfortunately", "obvious", "handshake", "to dawn", "to entrust", "sweat", "to give", "nearby", "to hit/strike", "to handle/deal with", "trace;mark;scar",
  "oil", "error", "defect;blemish", "new", "all;every", "to reveal", "embodiment", "a certain...", "possibly", "bubble;foam", "helpless;sorrow;grief",
  "rough draft", "memorization", "stability", "guidance", "to that extent", "stomach", "committee member", "to say", "unexpected",
  "force;vigour;energy", "must not", "doctor;intention;volition", "preservation", "consciousness", "strange", "spring;fountain", "where;which;who",
  "previous", "board;plank", "greatness", "to embrace/hug", "to receive", "to arrive/reach", "market;location", "for a time", "all at once"
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
