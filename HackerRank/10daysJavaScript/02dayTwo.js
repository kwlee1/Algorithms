// Task: Conditional Statements: If-Else

// Complete the getGrade(score) function in the editor. It has 
// one parameter: an integer, score, denoting the number of points 
// Julia earned on an exam. It must return the letter corresponding 
// to her grade according to the following rules: 

// If 25<score<=30, then grade=A. 
// If 20<score<=25, then grade=B. 
// If 15<score<=20, then grade=C. 
// If 10<score<=15, then grade=D. 
// If 5<score<=10, then grade=E. 
// If 0<score<=5, then grade=F. 

function getGrade(score) {
    let grade;
    var letters=["F","E","D","C","B","A"]
    // Write your code here
    if(score<=1){
        grade=letters[0]
    }else if(score%5===0){
        grade=letters[(score/5)-1];
    }else{
        grade=letters[(Math.floor(score/5))]
    }
    
    return grade;
}

// Task: Conditional Statements: Switch

// Complete the getLetter(s) function in the editor. It has one parameter:
// a string, s, consisting of lowercase English alphabetic letters 
// (i.e., a through z). It must return A, B, C, or D depending on 
// the following criteria: 
// - If the first character in string s is in the set {a,e,i,o,u}, 
//   then return A. 
// - If the first character in string s is in the set {b,c,d,f,g}, 
//   then return B. 
// - If the first character in string s is in the set {h,j,k,l,m}, 
//   then return C. 
// - If the first character in string s is in the set 
//   {n,po,q,r,s,t,v,w,x,y,z}, then return D.

function getLetter(s) {
    let letter;
    // Write your code here
    switch(s[0]){
        case "a" || "e" || "i" || "o" || "u":
            letter = "A";
            break;
        case "b" || "c" || "d" || "f" || "g":
            letter = "B";
            break;
        case "h" || "j" || "k" || "l" || "m":
            letter = "C";
            break;
        default:
            letter = "D";
            break; 
    }
    
    return letter;
}

// Task: Loops

// Complete the vowelsAndConsonants function in the editor below. 
// It was one parameter, a string, s, consisting of lowercase 
// English alphabetic letters (i.e., a through z). The function
// must do the following: 
// 1. First, print each vowel in s on a new line. The English 
// vowels are a, e, i, o, and u, and each vowel must be printed 
// in the same order as it appeared in s. 
// 2. Second, print each consonant (i.e., non-vowel) in s on a 
// new line in the same order as it appeared in s. 

function vowelsAndConsonants(s) {
    for(var i=0;i<s.length;i++){
        if(s[i]=="a"||s[i]=="e"||s[i]=="i"||s[i]=="o"||s[i]=="u"){
            console.log(s[i]);
        }
    }
    for(var k=0;k<s.length;k++){
        if(s[k]!="a"&&s[k]!="e"&&s[k]!="i"&&s[k]!="o"&&s[k]!="u"){
            console.log(s[k])
        }
    }   
}