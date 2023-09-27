// We are importing the chalk library
import chalk from 'chalk';

// Using chalk to change text color to red
console.log(chalk.red('Hello in Red!'));

// Using chalk to change text color to blue and make it bold
console.log(chalk.blue.bold('Bold Blue!'));

// Using chalk to combine styles
console.log(chalk.green.underline.inverse('Green underlined inverted text!'));

// Just a normal log to ensure everything is working fine.
console.log('This is a normal log without chalk.');
