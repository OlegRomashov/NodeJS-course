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
        function foo(x) {
            let max = 0
            let count = 0
            for (let i = 0; i < data.length; i++) {
                if (data[i] === x) {
                    count++
                } else {
                    if (count > max) {
                        max = count
                    }
                    count = 0;
                }
            }
            return max
        }

        console.log('максимальное число побед подряд', foo('true'))
        console.log('максимальное число проигрышей подряд', foo('false'))
    })
    rl.close()
})