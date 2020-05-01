const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)


const dataBuffer2 = fs.readFileSync('1-json.json')
const dataStr = dataBuffer2.toString()
const data = JSON.parse(dataStr)
data.name = 'Yung'
data.age = 28

const personJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',personJSON)