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
