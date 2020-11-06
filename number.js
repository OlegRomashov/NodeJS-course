const readline = require('readline')
const path = require('path')
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Игра началась, назовите Ваше имя :', (name) => {
    name = name + '.txt'
    filePath = path.join(__dirname, 'logs', name)

    rl.question('Угадайте число, 1 или 2? ', (answer) => {

        const number = Math.ceil(Math.random() * 2)
        answer = +answer

        if (answer === number) {
            console.log(`Вы угадали! Загадано число: ${number}`)
            fs.appendFile(filePath, '\ntrue', err => {
                if (err) {
                    throw err
                }
            })
        } else {
            console.log(`Вы не угадали! Загадано число: ${number}`)
            fs.appendFile(filePath, '\nfalse', err => {
                if (err) {
                    throw err
                }
            })
        }
        rl.close()
    })

})


