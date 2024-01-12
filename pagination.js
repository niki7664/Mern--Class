// [
//     {name:"nitan",age:29, isMarried:false},
//     {name:"sandip",age:25, isMarried:false},

//     {name:"nitan",age:26, isMarried:true},
//     {name:"rishav",age:20, isMarried:false},

//     {name:"nitan",age:29, isMarried:true},
//     {name:"chhimi",age:15, isMarried:true},

//     {name:"narendra",age:27, isMarried:false}=
//     {name:"shidhant",age:16, isMarried:false},

//     {name:"kriston",age:22, isMarried:false},
// ]

// .find({}).skip("3") //first ko 3ta skip
// .find({}).limit("5") //first 5 matra display garxa
// .find({}).skip("3").limit("5") //first 3ta skip then tespaxi ko 5 ota display
// .find({}).limit("5").skip("2") //wrong
//skip works first  than limit whatever the order is
// i.e 
// .find({}).skip("2").limit("5")

//priority
// find>sort>select>skip>limit
