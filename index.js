const fs = require('fs');
const pdf = require('pdf-parse');
const textDiff = require('./diff');

async function comparePdfs(pdf1_path, pdf2_path) {
  try {
    let dataBuffer1 = fs.readFileSync(pdf1_path);
    let dataBuffer2 = fs.readFileSync(pdf2_path);

    const data1 = await pdf(dataBuffer1);
    const data2 = await pdf(dataBuffer2);

    const diff = textDiff(data1.text.trim(), data2.text.trim());

    console.log();
    console.log();
    console.log('Below are the differences');
    console.log(diff);
    return diff;
  } catch (error) {
    console.log(`Some error occured: ${error}`)
  }

}


const path1 = './pdfs/1.pdf';
const path2 = './pdfs/2.pdf';

comparePdfs(path1, path2);