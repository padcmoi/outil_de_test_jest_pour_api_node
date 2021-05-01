const dotenv = require('dotenv')
dotenv.config()
const request = require('supertest')

// https://github.com/visionmedia/supertest

describe('Test the root path', () => {
  test('It should response the GET method', (done) => {
    request(process.env.TEST_URL1)
      .get('/')
      .then((response) => {
        console.log(response.body)
        expect(response.statusCode).toBe(200)
        done()
      })
  })
})
