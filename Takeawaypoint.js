/*
-> middleware are the function which has req,res and next
-> to trigger another middleware we have to call next()

middleware is divided into two parts
normal middleware
    (req,res,next)=>{}
    to trigger next middleware we have to call next()
error middleware
    (err,req,res,next)=>{}
    to trigger next error middleware we have to call next("a")

 */


    //Alt+shift+O => removing unused and arranging packages at top and file bata import vako tala basxa

// .env
// always make .env file in root folder
//all variable in .env are string
// in .env we define  special variable (credential(email, password, secretkey) , port , links (database, http://localhost:8000))
// variable name must be declare in upper case