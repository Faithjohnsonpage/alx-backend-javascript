console.log('Welcome to Holberton School, what is your name?');

if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    console.log(`Your name is: ${data.toString()}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (data) => {
    console.log(`Your name is: ${data.toString()}`);
    process.exit();
  });
  process.on('exit', () => {
    console.log('This important software is now closing\n');
  });
}
