var createCounter = function(init) {
    let currentValue = init
    return{
        increment: function(){
            return ++ currentValue
        },
        reset: function(){
            return  currentValue = init
        },
        decrement: function(){
            return  --currentValue;
        }
    }
};


  const counter = createCounter(5)
  counter.increment(); // 6
  counter.reset(); // 5
  counter.decrement(); // 4