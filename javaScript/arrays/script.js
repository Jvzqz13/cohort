//array literal
let movies = ['Caddyshack', 'Interstellar', 'Scarface']
console.log(movies);
console.log(movies[1]);
console.log(movies.length);

//overwrite a value
movies[1] = "Batman";

//adds 7 empty slots to 10
movies[10] = "Shrek";

console.log(movies);
console.log(movies[5]);

for( i = 0; i <movies.length; i++){
    console.log(movies[i]);
}

movies[3] = "Darknight"
console.log(movies);

