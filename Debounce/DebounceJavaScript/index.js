const getData = () =>{
    // calls the api calls to get data
    console.log("Fetching data...");
}

const doSomeMagic = (fun, delay) =>{
    let timmer
    return function () {
        clearTimeout(timmer)
    timmer=setTimeout(()=>{
           fun()
        }, delay)
    }

}

// This function should return a another function for sure.
const beeterFunction =  doSomeMagic (getData, 300)

// ^ this above function should do something that getData function should not make api calls again and again. It should ONLY be called if the user stoped typing.
