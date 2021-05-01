const createFile = require('create-file')
const dotenv = require('dotenv')
dotenv.config()

const data = `
TEST_URL1=https://jsonplaceholder.typicode.com/todos/1
TEST_URL2=http://jsonplaceholder.typicode.com/posts/
`

createFile('.env', data, function (err) {})
