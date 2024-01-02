# Introduction

This is a javascript code to compare text between two pdf files like git diff method.

## How to start

- Clone the repository

- In the index.js file, provide the pdf file paths in the variables called path1 and path2\. For demo, there are 1.pdf and 2.pdf present in the project.

- Run the code using startup script: "npm run start"

## Output

- The program prints the entire pdf text content in console. The differences are shown in cyan and yellow color, identical lines are printed in default terminal color.

- In the end, the program prints the different lines in file1 and file2 respectively separated by "-->"

## Dependencies

The project uses a npm library "pdf-parse" to extract text from a PDF file

## More development scope

The program prints the entire line differences, however similar approach can be followed to words differences.
