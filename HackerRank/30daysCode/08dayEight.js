// Task: Dictionaries and Maps 

// Given n names and phone numbers, assemble a phone book 
// that maps friends' names to their respective phone 
// numbers. You will then be given an unknown number of 
// names to query your phone book for. For each name queried, 
// print the associated entry from your phone book on a new 
// line in the form name=phoneNumber; if an entry for name 
// is not found, print Not found instead. 

function processData(input) {
    input = input.split('\n')
    var N = parseInt(input[0])

    var phonebook = {}
    for (var k = 1; k<N+1; k++){
        var line = input[k]
        line = line.split(' ')
        phonebook[line[0]] = line[1]
    }

    for (var m = N+1; m < input.length; m++ ){
        var num = (phonebook[input[m]])
        if (num !== undefined){
            console.log(input[m]+'='+num)
        } else {
            console.log('Not found')
        }
    }
} 
