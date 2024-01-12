import { Router } from "express";

let firstRouter = Router();

firstRouter
  .route("/") // localhost:8000
  //A request must have only one response.
  .post((req, res,next) => {
    // res.json("home post");
    //res.json("home post1"); 
    //If two request are sent,following error occurs:
    //Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    req.name="niki",
    req.address="Bhaktapur",
    req.age=15,
    next()
  },
  (req,res)=>{
    console.log(req.name)
    console.log(req.address)
    console.log(req.age)
    res.json("Posted")
  })


firstRouter
  .route("/name") // localhost:8000/name
  .post((req, res) => {
    res.json("name post");
  }
  );

// firstRouter
//   // here we have
//   // static route parameter they are product,a
//   // dynamic  route parameter they are name ,b (in place of dynamic route parameter we can write any)
//   .route("/product/:name/a/:b") // localhost:8000/product/any1/a/any2
//   .post((req, res) => {
//     console.log(req.params);
//     // it gives the dynamic route parameter
//     //{name:"nita",b:"1234"}
//     res.json("i am product");
//   });

//localhost:8000/name

export default firstRouter;

// url=localhost:8000,post at response "home post"
// url=localhost:8000,get at response "home get"
// url=localhost:8000,patch at response "home patch"
// url=localhost:8000,delete at response "home delete"

// url=localhost:8000/name,post at response "name post"
// 			url=localhost:8000/name,get at response "name get"
// 			url=localhost:8000/name,patch at response "name patch"
// 			url=localhost:8000/name,delete at response "name delete"

// making api
// defining task for each request is called making api

//ctr+E
//Ctr+D

//send data from postman
// get data
//req.body
//req.query
// req.param

// route parameter
