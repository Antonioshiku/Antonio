// const arr=[1,2,3,4,5,6,22];

// console.log(Array.isArray(arr));
// console.log(arr.indexOf(3));
// // console.log(arr.splice(6,1));
// // console.log(arr.splice(0,6));
  const aa=[1,3,4,5,6];
  
//   const [one,two,three,...five]=aa;

//   console.log(one);
//   console.log(three);
//   console.log(five);

  const bb=[3,4,6,77,8,9,3,2,222,34,55];

// //    const spread=[...aa,...bb];
// //   console.log(spread);

  
// //     console.log(cc.join(bb));
// //   console.log(cc);
// //   console.log(cc[0][2]);



// //   console.log(aa);

// // console.log(arr);

// const avengers=[
//       "Mg mg",
//       "aung ,aung",
//       "Htay",
//       "Mg su",
//       "Aung kyaw",
//       "aye aye",
// ];
// // console.log(avengers.reverse());
// console.log(avengers.sort());
// console.log(avengers.includes("Aung kyaw"));
// console.log(avengers.slice(0,2));


// console.log(bb.sort((a , b) => a-b));
// console.log(bb);

const allData=[
      [1,2,3,4,5,6,7,[8,9,10,11,12,13,14,15]],
      [aa,bb],
      [1,2,3,4,[11,12,[aa,bb,[100,200,300,["cc"]]]]]
]

console.log(allData);
console.log(allData[2][4][2][2][1]);