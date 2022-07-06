/*
--Grammar--
ID ([0-9]*)\.([0-9]+)|[0-9]+
ADD "+"
SUB "-"
MUL "*"
DIV "/"
POW "^"

--Syntax--
res -> ID op res | ID
op -> ADD | SUB | MUL | DIV | POW

*/

const ID = new RegExp(`([0-9]*)\\.([0-9]+)|[0-9]+`, 'g');
const ADD = "+";
const SUB = "-";
const MUL = "*";
const DIV = "/";
const POW = "^";
const POW_ALT = "**"

const op = new RegExp(`\\${ADD}|\\${SUB}|\\${MUL}|\\${DIV}|\\${POW}`, 'g')


//if there are as many numbers as operations, the user did not input the last operand so the calculation is incomplete
export function isExpressionFinished(expr) {
    var numbers = expr.match(ID);
    var operations = expr.match(op);

    if(numbers == null || operations == null)
        return true;

    return numbers.length !== operations.length ? true : false;
}

export function calculate(expr) { 
    var numbers = expr.match(ID);
    var operations = expr.match(op);
    var regexWhole = new RegExp(`((${ID.source})(${op.source}|$|.))*`, 'g')

    var result = 0;

    if(numbers == null || operations == null)
        return expr;

    if (numbers.length === 0 || expr.match(regexWhole)[0].length !== expr.length)
        return "Wrong Expression";

    var i;
    //while there are operations
    while(operations.length !== 0){
        if (operations.includes(POW) | operations.includes(POW_ALT)){
            i = operations.indexOf(POW)
            result = eval(numbers[i] + POW_ALT + numbers[i+1]);
        }else if (operations.includes(DIV)){
            i = operations.indexOf(DIV)
            result = eval(numbers[i] + DIV + numbers[i+1]);
        }else if (operations.includes(MUL)){
            i = operations.indexOf(MUL)
            result = eval(numbers[i] + MUL + numbers[i+1]);
        }else if (operations.includes(SUB)){
            i = operations.indexOf(SUB)
            result = eval(numbers[i] + SUB + numbers[i+1]);
        }else if (operations.includes(ADD)){
            i = operations.indexOf(ADD)
            result = eval(numbers[i] + ADD + numbers[i+1]);
        }
        operations.splice(i, 1);
        numbers.splice(i, 2, result);
    }

    return parseFloat(result.toFixed(9));

}