function xify(str){
    let returnStr = ""
    for(x of str){
        returnStr += "x"
    }
    return returnStr
}
function yellingChars(str){
    let returnStr = ""
    for (x of str){
        returnStr += `${x}!`
    }
    return returnStr
}
function indexedChars(str){
    let returnStr = ""
    for(x in str){
        returnStr += x+str[x]
    }
    return returnStr
}
function exclaim(str){
    let punctuation = ['.', '?']
    let returnStr = ""
    for(x of str){
        punctuation.includes(x) ? returnStr += "!" : returnStr += x
    }
    return returnStr
}
function truncate(str){
    if (str.length < 16){
        return str
    }
    let returnStr = ""
    for(let i=0;i!=15;i++){
        returnStr += str[i]
    }
    return returnStr + "..."
}
function ciEmailify(name){
    let returnStr = ""
    for(x of name){
        x === " " ? returnStr += '.' : returnStr += x
    }
    return returnStr += "@codeimmersives.com"
}
function reverse(str){
    let returnStr = ""
    for(let x=str.length-1;x>=0;x--){
        returnStr += str[x]
    }
    return returnStr
}
function onlyVowels(str){
    let vowels = ["a", "e", "i", "o", "u"]
    let returnStr = ""
    for (x of str){
        vowels.includes(x.toLowerCase()) ? returnStr += x : returnStr += ''
    }
    return returnStr
}
function crazyCase(str){
    let returnStr = ""
    for(let i=0;i<str.length;i++){
        i%2 !== 0 && i !== " " ? returnStr += str[i].toUpperCase() : returnStr += str[i].toLowerCase()
    }
    return returnStr
}
function titleCase(str){
    let returnStr = ""
    let title = true
    for(x of str){
        if(title){
            returnStr += x.toUpperCase()
        }else{
            returnStr += x.toLowerCase()
        }
        if(x === " "){
            title = true
        }else{
            title = false
        }
    }
    return returnStr
}
function camelCase(str){
    let returnStr = ""
    let title = false
    for(x of str){
        if(x === " "){
            title = true
        }else{
            title ? returnStr += x.toUpperCase() :returnStr += x.toLowerCase()
            title = false
        }
    }
    return returnStr
}
function crazyCase2ReturnOfCrazyCase(str){
    let returnStr = ""
    let flag = true
    for(let i=0;i<str.length;i++){
        if (flag && str[i] !== " "){
            flag = false
        }else if(!flag && str[i] !== " "){
            flag = true
        }
        flag ? returnStr += str[i].toUpperCase() : returnStr += str[i]
    }
    return returnStr
}



console.log(xify("Hello"))
console.log(yellingChars("goodness"))
console.log(indexedChars("Hello"))
console.log(exclaim('What are you doing? Are you a fool?'))
console.log(truncate("The fault, dear Brutus, is not in our stars, but in ourselves."))
console.log(ciEmailify("Trey Schneider"))
console.log(reverse("Trey"))
console.log(onlyVowels("quickly"))
console.log(crazyCase("hello"))
console.log(titleCase("return of the king"))
console.log(camelCase("oh Hello"))
console.log(crazyCase2ReturnOfCrazyCase('multiple words here'))