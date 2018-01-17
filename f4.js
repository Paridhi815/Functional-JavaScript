function getShortMessages(messages)
  {
    arr=messages.filter(function fifty(str){ if(str.message.length<50) return str.message});
    arr=arr.map(function (element) {return element.message});
    //console.log(arr);
      return arr;
  }
messages=[
{
  message: 'Paridhi Mohindra Works as an intern in Mckinsey Digital labs as a Junior Digital Analyst'
},
{
  message: "Mohindra"
},
{
  message: "Mckinsey"
},
{
  message: "Digital"
},
{
  message: "Majority people here are from VIT. I am from RVCE."
},
{
  message:"Labs"
}
];
module.exports = getShortMessages
getShortMessages(messages);
console.log("Should work for base case:",getShortMessages(messages).toString()===[ 'Mohindra', 'Mckinsey', 'Digital', 'Labs' ].toString());
