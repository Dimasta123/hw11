async function getRandomChinese(length) {
  let letters = length;
  let result = '';
  const word = () => {
    return new Promise(result => {
      setTimeout(
        () => {
          res(generateChineseWord());
        },
        length * 50,
      );
    });
  };
  while (letters > 0) {
    result += await word();
    letters--;
  }
  return result;
}
function generateChineseWord() {
  const now = Date.now();
  const symbols = now.toString().substr(now.length - 5);
  return String.fromCharCode(symbols);
}
getRandomChinese(4).then(success => {
  console.log(success);
});
