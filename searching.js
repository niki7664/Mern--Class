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

// .find({})
// find({name:"nitan"})
// find({name:"nitan",age:29})
// find({age:27})
// find({age:"27"})
// find({age:22, isMarried:"false"})
// in searching type does not matter
// find({age:25})
//find({age:{$gt:25}})
//find({age:{$gte:25}})
//find({age:{$lt:25}})
//find({age:{$lte:25}})
//find({name:"nitan"})
//find ({name:{$ne:"nitan"}})

//find({age:{$gt:18,$lt:25}})

// find({ name: { $in: ["niki", "anjali", "bidambana"] } });

// task 1
// find age between 15 to 17
// find({age:{$get:15, $lte:17}})

// finding those whose name is nitan , ram , hari
// find({name:{$in:["nitan","ram","hari"]}})
// find({name:{$nin:["nitan","ram","hari"]}})

// $or
// $and

// find({$or:[{name:"nitan"}, {name:"kriston"}]})
// find({$or:[{name:"nitan", age:29}, {name:"kriston"}]})

// find({$or:[{name:"nitan"}, {age:29}]})
// find({$and:[{name:"nitan"}, {age:29}]})

// find those User does not contain name nitan ram hari
