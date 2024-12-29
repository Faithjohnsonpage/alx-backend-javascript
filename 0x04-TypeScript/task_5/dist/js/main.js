// Function to sum major credits
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
    };
}
// Function to sum minor credits
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
    };
}
var major1 = { credits: 3 };
var major2 = { credits: 4 };
var minor1 = { credits: 1 };
var minor2 = { credits: 2 };
var sumMajor = sumMajorCredits(major1, major2); // { credits: 7 } as MajorCredits
var sumMinor = sumMinorCredits(minor1, minor2); // { credits: 3 } as MinorCredits
//# sourceMappingURL=main.js.map