function bingo(){
  let users = [];
  for(let i=0; i< 5; i++){
    users.push(setTimeout(function(){
      console.log(i);
    }, 1000 * (i+1)));
  }
  return users;
}

console.log(bingo());
