// Every vs Some 

// Every : In every if an all the array elements satisfies the condition then we will get true value .

// Some : It's like atleast One elements of array satisfies condition then we will get true value

const exam_scores = [80,91,92,78,32,33,47,88,69,84,81]
passed=exam_scores.every(scores=> scores>=35)
console.log(passed);// here we can see every means "every elememts of the aray should satisfies the conditions"

// But when it`s comes to `SOME` It's not like that 

const exam_scores_1 = [80,91,92,78,32,33,47,88,69,84,81]
passed_1=exam_scores_1.some(score=> score>=35) // here we can see `Some` means "Atleast One elememts of the aray should satisfies the conditions"
console.log(passed_1);