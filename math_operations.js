/**
 ** Add method
 ** This method takes the query parameter from the url and response stream, in order to go throw the params
 ** and make the add operation, and to send the response on the response stream.
 **/
function add (query, response) {
  var suma = 0
  for (var propName in query) {
      var splitted = query[propName]
      if(isNumeric(splitted)) {
        //Ok, it's a number
        var number = Number(splitted)
        suma += number
      } else {
        //It's not a number, so we show an error message and sends to the client
        response.writeHead(400, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({result:'error, el input debe ser numerico'}))
      }
  }
  //If everithing was OK, we send code 200 response, using json format
  response.writeHead(200, {'Content-Type': 'application/json'})
  response.end(JSON.stringify({result:suma}))
}

/**
 ** isNumeric returns true if input is a number. This can be done using the oppsite behaviour from isNaN function
 **/
function isNumeric(num) {
  //isNaN returns false if the input is a number, true otherwise
  return !isNaN(num)
}

//In this line we export the functions to be used in other javascript files. We must import this module with 'require' signature
module.exports.add = add


function mult (query, response) {
  var temp = 1
  for (var propName in query) {
      var splitted = query[propName]
      if(isNumeric(splitted)) {
        //Ok, it's a number
        var number = Number(splitted)
        temp = temp*number
      } else {
        //It's not a number, so we show an error message and sends to the client
        response.writeHead(400, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({result:'error, el input debe ser numerico'}))
      }
  }
  //If everithing was OK, we send code 200 response, using json format
  response.writeHead(200, {'Content-Type': 'application/json'})
  response.end(JSON.stringify({"result of multiplication":temp}))
}

module.exports.mult = mult

function fibonacci (query, response){
  var flag = false
  var sequence
  var counter = 0
  var reg_1
  var reg_2
  var actual

  for (var propName in query) {
    if (flag==false) {
      var splitted = query[propName]
      if(isNumeric(splitted)) {
        flag = true
        //fibonacci
        var target = Number(splitted)
        if (target === 1) {
          sequence = "1 "
        }else if (target === 2)  {
          sequence = "1 1 "
        }else{
          counter = 2
          sequence = "1 1 "
          reg_1 = 1
          reg_2 = 1
          while (counter < target) {
            actual = reg_1 + reg_2
            sequence = sequence + String(actual) + " "
            reg_2 = reg_1
            reg_1 = actual
            counter++
          }
        }

      } else {
        //It's not a number, so we show an error message and sends to the client
        response.writeHead(400, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({result:'error, el input debe ser numerico'}))
      }
    }else{
      break
    }
      
  }
  response.writeHead(200, {'Content-Type': 'application/json'})
  response.end(JSON.stringify({"Fibonacci sequence":sequence}))
  
}


module.exports.fibonacci = fibonacci