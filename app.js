let birthday = new Date("09-30-2002");
let i = 0
setInterval(() => {
    let now = new Date();
    let between = now - birthday
    let il = Math.trunc(between / (1000 * 60 * 60 * 24 * 365));
    let gun = Math.trunc(between / (1000 * 60 * 60 * 24) % 365);
    let saat = Math.trunc(between / (1000 * 60 * 60) % 24);
    let deqiqe = Math.trunc(between / (1000 * 60) % 60);
    let saniye = Math.trunc(between / 1000) % 60;
    console.clear();

    console.log(`%c${il} il ${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`, `color:${colors[i]};`);
    i++
    if (i === colors.length) {
        i = 0
    }
}, 1000)
let colors = ["red", "green", "blue", "black", "brown","yellow"]






let students = [
    {
        name: "Faty",
        surname: "Masumlu",
        value: 80,
        category: "A",
        hobby: ["walking", "dancing"]
    },

    {
        name: "Gulchin",
        surname: "Suleyman",
        value: 90,
        category: "B",
        hobby: ["watching film", "drink tea"]
    },

    {
        name: "Lamia",
        surname: "Rzayeva",
        value: 75,
        category: "B",
        hobby: ["singing", "dancing"]
    },

    {
        name: "Said",
        surname: "Rustem",
        value: 90,
        category: "A",
        hobby: ["spor", "chess"]
    }
]
let searchedName = prompt("ENTER name");
let found = students.find (student=>student.name === searchedName);
if( found) console.log(found);
else console.log("not found")