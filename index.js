//Write a JavaScript program to split values of two given arrays into two groups. If an element in filter is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group

const func = (array1,array2) =>{
    let  arr0 = []
    let  arr1 = []
    let  ans = []
    for(let i = 0 ; i < array2.length; i++){
        if(array2[i] == false){
            arr0.push(array1[i])
        }else{
            arr1.push(array1[i])
        }
    }
    ans.push(arr1,arr0)
    return ans
}

console.log(func([1, 2, 7, 6, 9], [true,false, true, true, false]))


//Write a function that will find and return the biggest digit of a number.


const biggest = n =>{
    let maxNumb = 0
    let m = 0;
    while(n > 0){
        m = n%10
        if(m > maxNumb)
            maxNumb = m
        n = Math.floor(n/10)
    }
    return maxNumb
}

console.log(biggest(526))


// Write a JavaScript program to convert a given string into an array of words.


const strarray = string =>{
    let array = []
    string = string.split(" ")
    array.push(string)
    return array
}

console.log(strarray("this is my homework"))


// Write a JS function to check whether the word is palindrome

const palindrom = string =>{
    if(string == string.split("").reverse().join(""))
        return true
    return false
}

// console.log(palindrom("hello"))
console.log(palindrom("hanah"))
