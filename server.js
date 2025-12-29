const express = require('express');

const path = require("path");

const app = express();

app.use(express.urlencoded({extended: true}))

app.use(express.static('public')) //Allows to take the css file into account

const PORT = 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.post('/', (req, res)=>{
  //console.log(req.body)
  const firstNumber = parseFloat(req.body.firstnumber);
  const operation = req.body.operation;
  const secondNumber = parseFloat(req.body.secondnumber);
  let result;
  //console.log(firstNumber, operation, secondNumber);
  switch(operation){
      case "Addition (+)":
        result = firstNumber + secondNumber;
        break;
      
      case "Subtraction (-)":
         result = firstNumber - secondNumber;
         break;
      
      case "Multiplication (x)":
         result = firstNumber*secondNumber;
         break;
      
      case "Division (/)":
         result = firstNumber/secondNumber;
         break;
      default:
        result = "Invalid Operation"
        break;

  }
  //console.log(result);
  //res.sendFile(path.join(__dirname, 'public', 'result.html'));
  res.redirect(`/result.html?firstnumber=${firstNumber}&secondnumber=${secondNumber}&operation=${operation}&result=${result}`);
;

})
app.listen(8080, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})