// Logial and (&&)
//Returns true on console if both operands are true. 
// Ex: Applicant has high income and good credit score to get mortgage loan 
//Logicl OR (||) returns true if one operand is true

let highIncome = true;
let goodCreditScore = true;
let eligibleFortLoan = highIncome && goodCreditScore;

//Not (!)
let applicationRefused = !eligibleFortLoan;

console.log(eligibleFortLoan);