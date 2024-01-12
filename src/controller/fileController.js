import { serverLink } from "../constant.js";





export let handleFile = (req,res)=>{
    let links = req.files.map((value,i)=>{
    return (`${serverLink}/${value.filename}`)
  });

  res.json({
    success:true,
    message: "Files uploaded successfully",
    result: links
  })
    }

    
//In form data, we can get file information through req.files whereas we can get other info via req.body

