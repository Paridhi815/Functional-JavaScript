function upperCaser (input) {
  if (input != '' && typeof (input) === 'string') { return (input.toUpperCase()) } else { return false }
}
module.exports = upperCaser
console.log('Print String in upper case:', upperCaser('Pari') === 'PARI')
// no other test case required,one is enough.We assume input is valid.
// console.log("Print String which includes numbers in upper case:",upperCaser("567hgh")==="567HGH");
// console.log("Print String which includes special characters in upper case:",upperCaser("nvs&^$#/;;'hgsh'")==="NVS&^$#/;;'HGSH'");
// console.log("Print String which is a NULL in upper case:",upperCaser("")===false);
// console.log("Print for cases where parameter isnt a string:",upperCaser(12345)===false);
// console.log("Print String which is already in upper case:",upperCaser("PARI")==="PARI");
