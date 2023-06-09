const { log } = require('console');
const fs = require('fs');

// create a file
// fs.writeFile('example.txt', "this is an example", (err) => {
//   if (err)
//     console.log(err);
//   else {
//     console.log('File successfully created!');
//     fs.readFile('example.txt', 'utf8', (err, file) => {
//       if (err)
//         console.log(err);
//       else
//         console.log(file);
//     });
//   }
// });

// Rename the existing file
// fs.rename('example.txt', 'example2.txt', (err) => {
//   if (err)
//     console.log(err);
//   else
//     console.log('Successfully renamed the file!');
// });

// Add new content to file
// fs.appendFile('example2.txt', 'Some data being appended', (err) => {
//   if (err)
//     console.log(err);
//   else
//     console.log('Successfully appended data to file!');
// });

// Delete the file
fs.unlink('example2.txt', (err) => {
  if (err)
    console.log(err);
  else
    console.log('Successfully deleted the file!');
});