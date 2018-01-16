let c=0;
function repeat(operation,num)
  {
    if(num===0)
      {
      console.log("Counter:",c);
      return c;
      }
    else
    {
    operation();
    return repeat(operation,num-=1);
    }
  }
function operation()
{
  c++;
}
//module.exports=repeat;

console.log(repeat(operation,5)===5);
