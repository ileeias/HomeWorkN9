// One
const daytime = prompt("Какое сейчас время суток? 'Утро', 'День' или 'Вечер'", "")

if (typeof daytime === "string" && daytime) {
    if (daytime == "Утро") {
        alert("Предлогаю вам выпить кофе.")
    } else if (daytime == "День") {
        alert("Предлогаю вам попить чаю.") 
    } else if (daytime == "Вечер") {
        alert("Ваш вечер скпасит кружечка горячего шоколада.")
    } else {
        alert("Пожалуйста, напишите: 'Утро', 'День' или 'Вечер'.")
    }
} else {
    alert("Вы немного ошиблись. Пожалуйста, напишите: 'Утро', 'День' или 'Вечер'.")
}
// Two
const questions = ['Ваше имя?', 'Ваш возраст?', 'Ваш предмет?', 'Ваша оценка?'];
let answers = []
for (let i = 0; i < questions.length; i++) {
    let answer = prompt(questions[i], "")
    answers.push(answer)
}
const name = answers[0]
console.log(name)
const age = +answers[1] + 5
console.log(age)
const subject = answers[2]
console.log(subject)
const grade = answers[3]
console.log(grade)
// Three
const movies = [
    { title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
    { title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
    { title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
    { title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
    { title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
];
console.log("Выведите в консоль режиссёра второго фильма: " + movies[1].director)
console.log("Выведите в консоль жанр четвёртого фильма: " + movies[3].genre)
// Four
const grosseres = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"]
grosseres.unshift('egs')
grosseres.pop()
grosseres.splice(2, 1, 'sugar', 'salt')
console.log(grosseres);