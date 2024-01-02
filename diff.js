function textDiff(text1, text2) {
  const lines1 = text1.split('\n');
  const lines2 = text2.split('\n');
  const maxLength = Math.max(lines1.length, lines2.length);
  let output = '';

  for (let i = 0; i < maxLength; i++) {
    const line1 = lines1[i] || '';
    const line2 = lines2[i] || '';

    if (line1 === line2) {
      console.log(line1);
    }
    else {
      console.log('\x1b[36m%s\x1b[0m', line1);  //cyan
      console.log('\x1b[33m%s\x1b[0m', line2);
      output += `${line1} --> ${line2}\n`;
    }
  }
  if (output == '') {
    const msg = 'Two files are indentical';
    return msg;
  }

  return output;
}

module.exports = textDiff;