var expect = function (val) {
    return {
        toBe: function (value) {
            if (val === value) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function (nottobe){
            if(val !== nottobe){
                return true
            } else{
                return "equal"
            }
        } 

    };
};


console.log(expect(5).toBe(5));
console.log( expect(5).notToBe(2)); // throws "Equal"