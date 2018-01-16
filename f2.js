let c=0;
function repeat(operation,num)
  {
    if(num===0)
      {
      console.log("Counter:",c);
      return c;
      }
    else if (num>0)
    {
    operation();
    return repeat(operation,num-=1);
    }
    else
    {
      return false;
    }
  }
function operation()
{
  c++;
}
//module.exports=repeat;

console.log("Should pass base test:",repeat(operation,5)===5);
console.log("Should not work for negative numbers:",repeat(operation,-3)===false);
