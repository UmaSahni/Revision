const expensiveFunction = () => {
  // This function is expensive
  console.log("This is expensive function");
};

// ! window.addEventListener("resize", expensiveFunction);

// suppose this expensive function is called each every time when the window is resized. When the window is resized then thousands of milliseconds events are triggered and thousands of api calls happed. What if this expensive function could be better.

// Now instead of calling expensiveFunction we call betterExpensiveFunction

const throttleFunction = (fun, delay) =>{
    let flag = true;

    return function (){
        if(flag){
        fun()
         falg = false
        }

        setTimeout(()=>{
            falg = true
        }, delay);
    }
}

const  betterExpensiveFunction = throttleFunction(expensiveFunction, 1000);

window.addEventListener("resize", betterExpensiveFunction);

// ! Here flag is clouser but why ? Becuse we dont want flag to be initialized again and again

// const expensiveFunction = () => {
//   // This function is expensive
//   console.log("This is expensive function");
// };

// const throttleFunction = (fun, delay) => {
//   let flag = true;

//   return function () {
//     if (flag) {
//       fun();
//       flag = false;
//     }
//     setTimeout(() => {
//       flag = true;
//     }, delay);
//   };
// };

// const betterExpensiveFunction = throttleFunction(expensiveFunction, 1000);

// window.addEventListener("resize", betterExpensiveFunction);
