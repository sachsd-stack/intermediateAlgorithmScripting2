//Smallest Common Multiple
function smallestCommons(arr) {
    arr.sort(function(a,b){
      return b - a;
    });
  
    var newArr = [];
    for (var i = arr[0]; i >= arr[1]; i--) {
      newArr.push(i);
    }
  
    var quot = 0;
    var loop = 1;
    var n;
  
    do{
      quot = newArr[0] * loop * newArr[1];
      for (n = 2; n < newArr.length; n++) {
        if (quot % newArr[n] !== 0) {
          break;
        }
      }
      loop++;
    } while (n !== newArr.length)
    return quot;
  }
  
  console.log(smallestCommons([1,5]));
  

  //Arguments Optional
  function addTogether() {
    var checkNum = function(num) {
      if(typeof num !== "number") {
        return undefined;
      } else return num;
    };
    if(arguments.length > 1) {
      var a = checkNum(arguments[0]);
      var b = checkNum(arguments[1]);
      if(a === undefined || b === undefined) {
        return undefined;
      } else {
        return a + b;
      }
    } else {
        var c = arguments[0];
        if(checkNum(c)) {
          return function(arg2) {
            if (c === undefined || checkNum(arg2) === undefined) {
              return undefined;
            } else {
              return c + arg2;
            }
          }
        }
    }
  }
  
  console.log(addTogether(2,3));

  
//Make a Person
var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    var fullName = firstAndLast;
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
    this.getFullName = function() {
      return fullName;
    };
  
  
    this.setFirstName = function(name){
      fullName = name + " " + fullName.split(" ")[1]
    }
    this.setLastName = function(name){
      fullName = fullName.split(' ')[0] + " " + name
    }
    this.setFullName = function(name){
      fullName = name;
    }
  };
  
  var bob = new Person('Bob Ross');
  console.log(bob.getFullName());
  