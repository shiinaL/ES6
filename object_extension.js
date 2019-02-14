var id = 21;

function foo() {
    //setTimeout(() => {
      //console.log('id:', this.id);
    //}, 100);
    
    setTimeout(function() {
        console.log('id:',this.id);
    },100)
  }
  
  foo();

  foo.call({ id: 42 });

  foo.apply({id:42});


  function tco(f) {
    
    var value;
    var active = false;
    var accumulated = [];
  
    return function accumulator() {
      console.log("Test");
      accumulated.push(arguments);
      if (!active) {
        active = true;
        while (accumulated.length) {
          value = f.apply(this, accumulated.shift());
        }
        activen = false;
        return value;
      }
    };
  }
  
  var sum = tco(function(x, y) {
    if (y > 0) {
      return sum(x + 1, y - 1)
    }
    else {
      return x
    }
  });
  
sum(1, 2)