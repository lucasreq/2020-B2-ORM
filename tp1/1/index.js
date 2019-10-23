const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let gain1 = 1000
    let gain2 = 100
    let perdu = "KO"
    let score = 0

    
    let score_dep = input.slice(0,1)
    let start = input.shift(0)
    

    console.log(score_dep)

    score = score + score_dep

    

    /*console.log(score_dep)*/

    if (score > 0 && score < 100){
      return gain1
    }
    else if (score > 100 && score < 10000){
      return gain2
    }
    else {
      return perdu
    }
    
  


    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}