const single = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const decades = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const hundred = 'hundred';

module.exports = function toReadable (number) {
  str = number.toString();
  if (str == 0){
    result = 'zero';
    return result;
  } else if (str < 10) {
    result = `${single[str]}`;
    return result.trim();
  } else if (str >= 10 && str < 20) {
    result = `${teens[str[1]]}`;
    return result.trim();  
  } else if (str >= 20 && str < 100) {
    result = `${decades[str[0]]} ${single[str[1]]}`;
    return result.trim();
  } else if (str >= 100 && str[1] != 1 && str[1] != 0){
    result = `${single[str[0]]} ${hundred} ${decades[str[1]]} ${single[str[2]]}`;
    return result.trim();
  } else if (str >= 100 && str[1] == 1 && str[1] != 0) {
    result = `${single[str[0]]} ${hundred} ${teens[str[2]]}`;
    return result.trim();
  } else if (str >= 100 && str[1] == 0) {
    result = `${single[str[0]]} ${hundred} ${single[str[2]]}`;
    return result.trim();    
  } else {
    return 'LoL';
  }
}
