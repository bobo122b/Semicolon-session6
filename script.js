// Part 1: Arrays
/*
let arr = [0, 1, 2, 3, 4, 5]
console.log(arr[0]);
console.log(arr[3]);

arr.push(6);
console.log(arr[6]);

arr.pop();
console.log(arr);

const arr = [5, 7, 6, 9]
arr.push(8);
console.log(arr);
arr.pop();
arr = ["Manchester UTD", "Barcelona"];
*/
// Part 2: Loops
/*
// 2.1: for loops
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 2.2: while loops
let i = 0;
while(i < arr.length) {
    console.log(arr[i]);
    i++;
}

// 2.3: foreach loops
// 2.3.1: i of arr
for(let i of arr) {
    console.log(i);
}
// 2.3.2: arr.forEach
arr.forEach(i => {
    console.log(i);
});
*/

// Part 3: Objects
/*
let Atwa = {Name: "Ahmed Atwa", age: 20, Concentration: "Computers and Systems Engineering"};
console.log(Atwa.Name);
console.log(Atwa.age);
console.log(Atwa.Concentration);
Atwa.favoriteColor = "red";
console.log(Atwa.favoriteColor);
console.log(Atwa);
*/

// Part 4: classList

let btns = document.getElementsByClassName("btn");

for (let i of btns) {
    // Adding a click event listener for all buttons
    i.addEventListener("click", ()=> {
        // will only work if the clicked button says "Deactivate Me" or "Activate"
        if (i.textContent == "Deactivate Me") {
            // deactivate the clicked button
            i.classList.add("deactivated");
            i.textContent = "Deactivated";
            // loop through all other buttons to add the word "Activate" to all of them
            for (let j of btns) {
                if(j.textContent != "Deactivated") {
                    j.textContent = "Activate";
                } 
            }
        } else if (i.textContent == "Activate") {
            // if a button with the word "Activate" is clicked
            for (let j of btns) {
                if(j.textContent == "Deactivated") {
                    // we remove the deactivated class
                    j.classList.remove("deactivated");
                }
                // and change the text of all buttons back to "Deactivate Me"
                j.textContent = "Deactivate Me";
            }
        }
    })
}

// Part 5: Higher order functions (callbacks)

/*
function myCb(x) {
    x = x * 2;
    console.log(x);
}

setTimeout(() => myCb(2), 1000);
*/