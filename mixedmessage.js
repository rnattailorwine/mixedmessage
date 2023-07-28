const beginnings = ['You are capable of', 'Believe in yourself and', 'Success is a journey,'];
const middles = ['greatness.', 'you will achieve amazing things.', 'not a destination.'];
const ends = ['Keep going!', 'You got this!', 'The future is bright.'];

function generateRandomMessage() {
  const randomBeginning = beginnings[Math.floor(Math.random() * beginnings.length)];
  const randomMiddle = middles[Math.floor(Math.random() * middles.length)];
  const randomEnd = ends[Math.floor(Math.random() * ends.length)];

  return randomBeginning + ' ' + randomMiddle + ' ' + randomEnd;
}

console.log(generateRandomMessage());
