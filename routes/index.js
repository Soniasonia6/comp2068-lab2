'use strict';
var express = require('express');
var router = express.Router();

module.exports = router;
const port = 3000;
const validMethod = ['add','subtract', 'divide','multiply'];
const app = express();



app.get('/', (request, response) => {  
    //get the method from query params
    const method = request.query.method;

    //check the method if it is from our array allowed methods
  const methodIsValid = validMethod.includes(method);

  //if it is not valid number then return this
  if (!methodIsValid ){
      return response.send(`please use a valid method type [${validMethod.toString()}]`);
  }
  const x = parseInt(request.query.x);
  const y = parseInt(request.query.y);

  //NAN is a function used in javascript for testing the number
  if(isNaN(x) || isNaN(y)){
      return response.send('X & Y must be a Number');
  }

  //setting operations for methods

  //if method is equal to add 
  if (method ==='add'){
      return response.send(`${x} + ${y} = ${x + y}`);
  }
  //if method is equal to divide
  else if (method ==='subtract'){
    return response.send(`${x} - ${y} = ${x - y}`);
  }
  //if method is equal to subtract
  else if (method ==='divide'){
    return response.send(`${x} / ${y} = ${x / y}`);
}
//if method is equal to multiply
    else(method ==='multiply')
    {
        return response.send(`${x} * ${y} = ${x * y}`);}

    response.send(methodIsValid ); //only returns when it is valid
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))