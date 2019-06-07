let DB_Words =
[
  "ainiku", "akiraka", "akushu", "akeru", "azukeru", "ase", "ataeru", "atari", "ataru", "atsukau", "ato",
  "abura", "ayamari", "ara", "arata", "arayuru", "arawasu", "araware", "aru", "aruiwa", "awa", "aware",
  "an", "anki", "antei", "annai", "annani", "i", "iin", "yuu", "igai", "ikioi", "ikenai", "ishi", "iji",
  "ishiki", "ijou", "izumi", "izure", "izen", "ita", "idai", "idaku", "itadaku", "itaru", "ichi", "ichiji",
  "ichidoni", "ikka", "isshu", "isshun", "issou", "icchi", "ippan", "ippou", "idou", "itoko", "ine", "inemuri",
  "ihan", "ima", "imani", "irai", "iraira", "iryou", "iwau", "iwaba", "iwayuru", "insatsu", "inshou", "intai",
  "inyou", "uo", "ugai", "ukagau", "utagau", "uchuu", "utsu", "utsusu", "uttaeru", "unaru", "ubou", "ume", "un", "e",
  "eien", "eikyuu", "eikyou", "eigyou", "eisei", "eiyou", "esa", "eru", "uru", "enki", "engi", "enjou", "enzetsu",
  "ensou", "enryou", "oi", "oitsuku", "ouji", "oujiru", "oudan", "ooini", "oou", "ooya", "oka", "oki", "oku", "okoru",
  "osanai", "osameru", "oshaberi", "osen", "otagai", "otoru", "onaka", "obi", "oboreru", "omoni", "oyosu", "oyobosu",
  "oru", "orosu", "on", "ondan", "ka", "gai", "kaiga", "kaikei", "kaiketsu", "gaikou", "kaishi", "kaishaku", "gaishutsu",
  "kaizen", "kaiteki", "kaifuku", "gaka", "kakaeru", "kakaku", "kagayaku", "kakari", "kagiru", "kagu", "gaku", "kakugo",
  "kakujitsu", "gakusha", "gakushu", "kakudai", "kakunin", "kagen", "kago", "kakomu", "kasai", "kashi", "kaji",
  "kashikoi", "kashu", "kasegu", "kataru", "kachi", "gakkari", "kakki", "katsudou", "katsuyou", "kanarazushimo",
  "kanemochi", "kabu", "kaburu", "gaman", "kaminari", "kamoku", "gara", "karu", "kawaisou", "kan", "kankaku",
  "kankyaku", "kankyou", "kangei", "kankou", "kansatsu", "kanja", "kanjou", "kanshin", "kansuru", "kansei",
  "kanzen", "kandou", "kanryou", "kanren", "giin", "kikai", "gikai", "kikan", "kigyou", "kiku",
  "kigen", "kikou", "kishi", "kiji", "gishi", "kisha", "kitai", "kitaku", "kichou", "gichou"
];

let DB_Def =
[
  "unfortunately", "obvious", "handshake", "to dawn", "to entrust", "sweat", "to give", "nearby", "to hit/strike", "to handle/deal with", "trace;mark;scar",
  "oil", "error", "defect;blemish", "new", "all;every", "to reveal", "embodiment", "a certain...", "possibly", "bubble;foam", "helpless;sorrow;grief",
  "rough draft", "memorization", "stability", "guidance", "to that extent", "stomach", "committee member", "to say", "unexpected",
  "force;vigour;energy", "must not", "doctor;intention;volition", "preservation", "consciousness", "strange", "spring;fountain", "where;which;who",
  "previous", "board;plank", "greatness", "to embrace/hug", "to receive", "to arrive/reach", "market;location", "for a time", "all at once",
  "a home/household", "species;kind", "moment;instant", "much more", "agreement;conformity;consistency", "ordinary", "on the other hand",
  "migration", "cousin", "rice plant", "dozing off", "transgression;violation", "western living room", "before long/even now", "henceforth",
  "getting nervous", "medical treatment", "to congratulate", "so to speak", "the so-called", "printing", "impression", "retire", "quotation;citation",
  "living fish", "gargle", "to ask", "to doubt", "universe", "to attack", "to remove", "to bring to someone's attention", "to groan", "to snatch away",
  "plum", "fortune;luck", "handle;grip", "eternity", "eternity", "influence;effect", "business", "satellite", "nutrition", "feed;bait", "to get",
  "to get", "postponement", "acting", "assistance", "speech;address", "musical performance", "restraint", "old age", "to overtake/catch up with",
  "prince", "to respond", "crossing", "greatly", "to conceal", "rich family", "hill", "open sea", "interior", "to occur", "childish",
  "to dedicate/supply", "idle talk", "pollution", "each other", "to become inferior to", "stomach", "band/sash", "to drown", "primarily",
  "approximately", "to extert", "to be for animate objects", "to get lower", "favor", "warmth", "acceptable", "injury;damage;harm", "a painting",
  "finance", "solution", "diplomacy", "commencement", "explanation", "going out", "improvement", "pleasant", "recovery", "painter",
  "to carry in arms", "price", "to shine", "person in charge", "to restrict", "furniture", "forehead", "preparedness", "certainty",
  "scholar", "study", "enlargement", "confirmation", "degree;extent", "basket;cage", "to surround", "fire", "candy", "housework",
  "wise", "singer", "to earn income", "to talk", "merit", "to feel disappointed", "energy", "action", "practical use", "not necessarily",
  "rich man", "a stock/share", "to suffer", "perseverance", "thunder", "school subject/course", "handgrip", "to cut/harvest",
  "pitiable", "can/tin;perception", "sensation", "audience", "environment", "welcome;reception", "sightseeing", "observation",
  "a patient", "calculation", "Well done!", "to be related", "completion", "completeness", "deep emotion", "completion;conclusion",
  "revelance", "member of the Diet", "machine", "Diet;congress", "term;organ", "corporation", "to be effective", "humor;temper",
  "climate", "coast/shore", "birthplace;article", "engineer", "reporter", "expectation", "returning home", "precious;valuable", "chairman"
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
