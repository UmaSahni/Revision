 # Local Storage

It will only allow to store strings and numbers.
 
 ```js
localStorage.setItem("name", "uma")
localStorage.getItem("name")
 ```

To reslove this problem there is JSON->javaScript object notation

 ```js
 let arr = [1,2,3,4]

localStorage.setItem("arr", JSON.stringify(arr))
let out JSON.parse(localStrorage.getItem("arr"))
console.log(out)

 ```