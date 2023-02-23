// No 3. Solution

const scienceSubjects = ' Physics, Chemistry, Biology and Technical Drawing'
const artsSubjects = ' Government, Economics, Literature and History'
const socialScienceSubjects = ' Accounting, Commerce, Marketing and Geography'
const generalSubjects = 'Your Subjects are: English, Mathematics'

function classSubjectGenerator(subject){
    let result;
    if(subject == 'Science'){
        result = generalSubjects + scienceSubjects
    }else if(subject == 'Arts'){
        result = generalSubjects + artsSubjects
    }else if(subject == 'Social Science'){
        result = generalSubjects + socialScienceSubjects
    }else{result = generalSubjects}
    return result
}
// test case
console.log(classSubjectGenerator('Science')) //Your Subjects are: English, Mathematics Physics, Chemistry, Biology and Technical Drawing



//No 5 Solution

function findNearestPowerOf2(number){
    for(let i = 2; i <= number; i *= 2){
        const half = number/2 
            if(i == number){
                return `the power of 2 equals to ${number} is ${i}`
            }else if(i !== number && i > half){
            return `The smaller power of 2 closest to ${number} is ${i}`
        }
        }
}
// Test cases
console.log(findNearestPowerOf2(16))//The power of 2 equal to 16 is 16
console.log(findNearestPowerOf2(200))//The smaller power of 2 closest to 200 is 128