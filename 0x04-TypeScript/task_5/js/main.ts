// Define interface for major credits with a brand
interface MajorCredits {
  credits: number;
  readonly _majorBrand: unique symbol;  // brand property
}

// Define interface for minor credits with a brand
interface MinorCredits {
  credits: number;
  readonly _minorBrand: unique symbol;  // brand property
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MajorCredits;
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MinorCredits;
}

const major1 = { credits: 3 } as MajorCredits;
const major2 = { credits: 4 } as MajorCredits;
const minor1 = { credits: 1 } as MinorCredits;
const minor2 = { credits: 2 } as MinorCredits;

const sumMajor = sumMajorCredits(major1, major2);  // { credits: 7 } as MajorCredits
const sumMinor = sumMinorCredits(minor1, minor2);  // { credits: 3 } as MinorCredits
