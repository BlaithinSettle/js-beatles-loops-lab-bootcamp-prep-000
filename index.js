// add solution here
//build a for loop
function theBeatlesPlay(){
 const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
 const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var emptyArray=[];
 for (var i=0; i<musicians.length; i++){
   emptyArray.push(musicians[i] + ' plays ' + instruments[i])
 }
 return emptyArray;
}


//build a while loop

//with for loop example
/*function johnLennonFacts(){
   var emptyArray=[]
         var facts=[
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ]
   
    for (var i=0; i<facts.length; i++){
        emptyArray.push(facts[i] + " !!!")
    }
    return emptyArray;
}*/

/*function johnLennonFacts(){
   var emptyArray=[];
         var i=0;
        var facts=[
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
        ]; 
         while(i<facts.length){
        emptyArray.push(facts[i] + "!!!");
          i++;  
           
         }
    return emptyArray;
}*/
function johnLennonFacts(facts){
  var i=0;
  while(f<facts.length){
 facts[i]=facts[i] + "!!!";
i++
}
return facts;
}

//do while loop 
function iLoveTheBeatles(){
    var emptyVar=[];
   var num=0;
     do{ emptyVar.push("I love the Beatles!");
       num++;
      } while (num<15)
          return emptyVar;
}