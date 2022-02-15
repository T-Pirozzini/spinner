let spinner = ['|', '/', '-', '\\', '|']
let delay = 0;
for (const char of spinner) {  
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay += 50);
};
