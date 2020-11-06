const readline = require('readline')
const path = require('path')
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Введите название файла?', (name) => {
    name = name + '.txt'
    filePath = path.join(__dirname, 'logs', name)
    console.log(filePath)

    fs.readFile(filePath, (err, content) => {
        if(err) {
            throw err
        }
        const data = Buffer.from(content).toString().trim().split('\n')
        console.log('сыграно партий', data.length)
        console.log('выиграно', data.filter(el => el === 'true').length)
        console.log('проиграно', data.filter(el => el === 'false').length)
        console.log('соотношение побед к проигрышам', (data.filter(el => el === 'true').length) /
                                                      (data.filter(el => el === 'false').length))
    })
    rl.close()
})