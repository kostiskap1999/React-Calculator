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

export function isInputValid(expr) {
    
    const nonAcceptableRegex = new RegExp(`[^0-9\\+\\-\\*\\/\\%\\^\\!\\.]`, 'gi');
    const consecSymbolsRegex = new RegExp(`[\\+\\-\\*\\/\\%\\^\\!\\.]{2,}`, 'gi');

    if(nonAcceptableRegex.test(expr) || consecSymbolsRegex.test(expr))
        return false
    else
        return true
}


export function calculate(expr) { 
    var numbers = expr.match(ID);
    var operations = expr.match(op);
    var regexWhole = new RegExp(`((${ID.source})(${op.source}|$|.))*`, 'g')

    var result = 0;

    if(numbers == null)
        return 0;

    if(expr[0] === ADD || expr[0] === SUB)
        numbers.unshift(0)
    else if(expr.match(regexWhole)[0].length !== expr.length)
        return "Wrong Expression";
    
    if (operations == null)
        result = parseFloat(expr);
    else{
        if (numbers.length === operations.length)
            if (operations[operations.length-1] === ADD || operations[operations.length-1] === SUB)
                numbers[numbers.length] = 0;
            else
                numbers[numbers.length] = 1;

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

    }

    console.log(typeof(result))
    
    var largeNumberRegex = new RegExp(`e+`, 'g')

    if(result.toString().match(largeNumberRegex))
        return result.toString();
    else
        return result.toLocaleString('en-US', { maximumFractionDigits: 9 });

}
