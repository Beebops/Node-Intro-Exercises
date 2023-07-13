const fs = require('fs')
const process = require('process')
const axios = require('axios')

function cat(path) {
  fs.readFile(path, 'utf8', function (error, data) {
    if (error) {
      console.error(`Error reading ${path}: ${error}`)
      process.exit(1)
    } else {
      console.log(data)
    }
  })
}

async function webCat(URL) {
  try {
    let response = await axios.get(URL)
    console.log(response.data)
  } catch (error) {
    console.error(`Error fetching ${URL}: ${error}`)
    process.exit(1)
  }
}

let path = process.argv[2]

if (path.slice(0, 4) === 'http') {
  webCat(path)
} else {
  cat(path)
}
