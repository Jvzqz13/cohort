// console.log("One");

// setTimeout(() => console.log("Two"), 0);

// console.log("Three");


// Create a Promise that resolves after one second.
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Guess this worked!");
//     }, 3000);
// });

// // Add some then() methods to handle additional tasks.
// myPromise
//     .then((x) => x + ' Again?')
//     .then((x) => x + ' Third time!')
//     .then((x) => x + ' Promises are cool.')
//     .catch((err) => {
//         console.error(err);
//     })

//     console.log(myPromise);

    // const myPromise  = new Promise (function(resolve,reject){
    //     setTimeout(function(){
    //         resolve("My favorite floavor")
    //     }, 3000)
    // })

    // myPromise.then(function(value){
    //     document.getElementById('demo').innerHTML = value;
    // })


    const myFirstPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("you dont did it!"); // Yay! Everything went well!
        }, 250);
      });
      
      myFirstPromise.then((successMessage) => {
        console.log(`Yay! ${successMessage}`);
      });