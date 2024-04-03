




let students = [
    {
        name: "Faty",
        surname: "Masum",
        mark: 70,

    },
    {
        name: "Gulchin",
        surname: "Suleyman",
        mark: 90,

    },
    {
        name: "Umid",
        surname: "Rza",
        mark: 33,
    }
]

let sortedStudent = students.sort((a, b) => a.mark - b.mark)
console.log(sortedStudent)


let num1 = Math.floor(Math.random() * 100)
let num2 = Math.floor(Math.random() * 100)
let num3 = Math.floor(Math.random() * 100)
let num4 = Math.floor(Math.random() * 100)
let num5 = Math.floor(Math.random() * 100)

let array = [num1, num2, num3, num4, num5]
console.log(array)
let sum = array.reduce((a ,b )=> a+b);
console.log(sum)