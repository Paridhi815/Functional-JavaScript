function upperCaser(input)
{
  return (input.toUpperCase());
}
module.exports=upperCaser
console.log("Print String in upper case:",upperCaser("Pari")=="PARI");
console.log("Print String which includes numbers in upper case:",upperCaser("567hgh")=="567HGH");
console.log("Print String which includes special characters in upper case:",upperCaser("nvs&^$#/;;'hgsh'")=="NVS&^$#/;;'HGSH'");
