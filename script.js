// HACKATHON 24.1.2021
// --------------------------------------------------------------------
const prijmeni = ["Bouška", "Kruliš", "Šnajdr", "Brzobohatý", "Mikulášek", "Šálek", "Kabát", "Sojka", "Žižka", "Balcar", "Minarčík", "Šefl",
    "Franc", "Lipovský", "Voříšek", "Jandl", "Zuna", "Vogl", "Frank", "Rác", "Tancoš", "Juchelka", "Sochor", "Šikula", "Kurková", "Viktorinová",
    "Jíšová", "Balcarová", "Kačírková", "Valtrová", "Prášková", "Šabatová", "Halířová", "Hrubá", "Petrásková", "Havlenová", "Zezulová", "Blahutová",
    "Kousalová", "Hoffmannová", "Koutová", "Větrovská", "Sochorová", "Kožíšková", "Munzarová", "Nováková", "Novák", "Novák", "Nováková", "Vyskočilová"
];
const jmena = ["Olga", "Bohumila", "Marcela", "Oldřiška", "Barbora", "Liběna", "Olívie", "Denisa", "Mariana", "Patricie", "Hana", "Jitka",
    "Vilma", "Drahoslava", "Ida", "Vendula", "Darina", "Jindřiška", "Vilma", "Darina", "Laura", "Sandra", "Gizela", "Miroslava", "Vladěna", "Jarmil", "Silvestr", "Oto", "Hubert", "Vincenc", "Miloš", "Filip", "Vavřinec", "Rostislav", "Jonáš", "Zdeněk", "Marek",
    "Emanuel", "Věroslav", "Libor", "Dominik", "Vladan", "Roland", "František", "Vladimír", "Ludvík", "Jan", "Teodor", "Libor", "Dalibor"
];
const workload = [10, 20, 30, 40];
const seznamZamestnacu = [];
for (var index = 0; index < prijmeni.length; index++) {
    var nahCisloJmena = Math.floor(Math.random() * 49);
    var birthdate = birthDate(19, 35)

    function birthDate(x, y) { //generuje nahodne datum v zadanem rozmezi (je to najite na netu...)
        var startDate = new Date((2021 - x), 0, 1).getTime();
        var endDate = new Date((2021 - y), 0, 1).getTime();
        var spaces = (endDate - startDate);
        var timestamp = Math.round(Math.random() * spaces);
        timestamp += startDate;
        return new Date(timestamp).toISOString();
    }
    var nahCisloWorkload = Math.floor(Math.random() * 4); //jednodussi by bylo generovat rovnou nahodne 10,20,30 nebo 40 pomoci Math.floor(Math.random() * 4)*10
    //a nemusel bych mit pole workload
    var zamestnanec = {};
    var surname = prijmeni[index];
    if (surname.endsWith("á")) {
        zamestnanec = {
            name: jmena[nahCisloJmena],
            surname: prijmeni[index],
            gender: "female",
            workload: workload[nahCisloWorkload],
            birthdate: birthdate
        };
    } else {
        zamestnanec = {
            name: jmena[nahCisloJmena],
            surname: prijmeni[index],
            gender: "male",
            workload: workload[nahCisloWorkload],
            birthdate: birthdate
        };
    }
    seznamZamestnacu.push(zamestnanec);
}
console.log(seznamZamestnacu);
// Uloha 2
// počet zaměstnanců
console.log(seznamZamestnacu.length);

//počet zaměstnanců podle výše úvazku (10, 20, 30 a 40h/týdně)
const zamestnanci10 = seznamZamestnacu.filter(item => item.workload == "10");
console.log(zamestnanci10.length);
const zamestnanci20 = seznamZamestnacu.filter(item => item.workload == "20");
console.log(zamestnanci20.length);
const zamestnanci30 = seznamZamestnacu.filter(item => item.workload == "30");
console.log(zamestnanci30.length);
const zamestnanci40 = seznamZamestnacu.filter(item => item.workload == "40");
console.log(zamestnanci40.length);

//průměrný věk (zaokrouhleno na jedno desetinné místo)
const poleVek = seznamZamestnacu.map((item) => {
    return parseInt(2021 - parseInt(item.birthdate.slice(0, 4)));
});
const prumVek = (poleVek.reduce((acc, element) => acc + element) / (poleVek.length)).toFixed(1);
console.log(prumVek);

//minimální věk (nejmladší zaměstnanec)
const minimalniVek = poleVek.sort(function(a, b) { return a - b })[0];
const maximalniVek = poleVek.sort(function(a, b) { return b - a })[0];
console.log(minimalniVek);
console.log(maximalniVek);

//medián věku
const poleVek = seznamZamestnacu.map((item) => {
    return parseInt(2021 - parseInt(item.birthdate.slice(0, 4)));
});
const poleVekVzestupne = poleVek.sort(function(a, b) { return a - b }); //serezeni dle velikosti vzestupne - nutne pro zjisteni medianu
function medianFce(array) {
    var median = 0;
    if (array.length % 2 == 0) { //sudy pocet prvku
        median = (array[(array.length) / 2] + array[(array.length) / 2 + 1]) / 2; //ar.prumer prvku n/2 a n+1/2
    } else {
        median = (array[(array.length + 1) / 2]); //prostredni hodnota pro lichy pocet prvku n+1/2
    }
    return median;
}
console.log(medianFce(poleVekVzestupne));

//přehled zaměstnanců setříděných dle výše úvazků od nejmenšího po největší
const zamestnanciDleUvazkuVzestupne = seznamZamestnacu.sort(function(a, b) { return a.workload - b.workload });
console.log(zamestnanciDleUvazkuVzestupne);

//medián výše úvazku
const poleUvazku = seznamZamestnacu.map((item) => {
    return item.workload;
})
const poleUvazkuVzestupne = poleUvazku.sort(function(a, b) { return a - b });

function medianUvazkyFce(array) {
    var medianUvazky = 0;
    if (array.length % 2 == 0) { //sudy pocet prvku
        medianUvazky = (array[(array.length) / 2] + array[(array.length) / 2 + 1]) / 2; //ar.prumer prvku n/2 a n+1/2
    } else {
        medianUvazky = (array[(array.length + 1) / 2]); //prostredni hodnota pro lichy pocet prvku n+1/2
    }
    return medianUvazky;
}
console.log(medianUvazkyFce(poleUvazkuVzestupne));

//průměrná výše úvazku v rámci žen
const poleUvazkuZen = seznamZamestnacu.filter(item => item.gender == "female").map((item) => {
    return item.workload;
})
const prumVyseUvazkuZeny = (poleUvazkuZen.reduce((acc, element) => acc + element) / poleUvazkuZen.length).toFixed(1);
console.log(prumVyseUvazkuZeny);

// Ukol 5
// Vytvořte uuScript, který pro vygenerovaný pool zaměstnanců z úlohy 1 vypíše zaměstnance včetně informace o věku, 
// kteří slaví narozeniny v měsíci, ve kterém došlo ke spuštění skriptu.

var d = new Date();
var rokAktual = d.getFullYear();
var mesicAktual = d.getMonth() + 1;
var pocetOslavencu = 0;
for (var index = 0; index < seznamZamestnacu.length; index++) {
    var mesicNarozeni = seznamZamestnacu[index].birthdate.slice(5, 7);
    if (mesicAktual == mesicNarozeni) {
        var vek = parseInt(rokAktual) - parseInt(seznamZamestnacu[index].birthdate.slice(0, 5));
        console.log(seznamZamestnacu[index], `Dneska slavi: ${vek}`);
        pocetOslavencu++;
    }
}
console.log(`Pocet oslavencu v tomto mesici: ${pocetOslavencu}`);