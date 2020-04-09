// let state = {
//   clicks: 0,
//   count: 0,
// };

// let newState = {
//   ...state,
//   clicks: state.clicks + 1,
// };

// newState = state;
// newState["count"] = 1;

// console.log(state);
// console.log(newState);

// let a = [1, 2, 3, 4, 5];
// let b = a;

// b[0] = 33;

// console.log(a);
// console.log(b);

// let state = {
//   house: {
//     name: "Ravenclaw",
//     points: 17,
//   },
//   location: "Houston",
// };

// let newState = {
//   ...state,
//   house: {
//     ...state.house,
//     points: state.house.points + 2,
//   },
// };

// let state = {
//   school: {
//     name: "Hogwarts",
//     house: {
//       name: "Ravenclaw",
//       points: "17",
//     },
//   },
// };

// let newState = {
//   ...state, // copy the state (level 0)
//   school: {
//     ...state.school, // copy level 1
//     house: {
//       // replace state.school.house...
//       ...state.school.house, // copy existing house properties
//       points: state.school.house.points + 2, // change a property
//     },
//   },
// };

// let dynamicKey = "gryffindor";

// let state = {
//   houses: {
//     gryffindor: {
//       points: 15,
//     },
//     ravenclaw: {
//       points: 7,
//     },
//     hufflepuff: {
//       points: 7,
//     },
//     slytherin: {
//       points: 5,
//     },
//   },
// };

// let newState = {
//   ...state,
//   houses: {
//     ...state.houses,
//     [dynamicKey]: {
//       ...state.houses[dynamicKey],
//       points: state.houses[dynamicKey].points + 4,
//     },
//   },
// };

// let state = [1, 2, 3];

// let newState = [0, ...state, 4];

// let state = [
//   {
//     id: 1,
//     email: "jaye@hotmail.com",
//   },
//   {
//     id: 2,
//     email: "austin@gmail.com",
//   },
// ];

// let newState = state.map((item, index) => {
//   if (item.id === 2) {
//     return {
//       ...item,
//       email: "stinky@yahoo.com",
//     };
//   }
//   return item;
// });

// let state = [1, 2, 3, 4, 5, 6];

// let newItem = 34;

// let newState = [...state];

// newState.splice(3, 0, newItem);

// let newState = {
//   ...state.slice(0, 3),
//   newItem,
//   ...state.slice(3),
// };

let state = [1, 2, "X", 4];

let newState = state.filter((item) => {
  if (item === "X") {
    return false;
  }
  return true;
});

console.log(state);
console.log(newState);
