const http=require("http")

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        console.log(req.url);
        res.end("Hello this is Me ");
    }
    else {
        console.log(req.url);
        res.end("Sorry dude ")
    }
})

server.listen(5000);

// Server create krne ke liye : 1. http ko import kro  
                             // 2. http.createServer kro  ki koi kch search kre toh kya res.end response aaye 
                            //  3. last mein server.listen kro ki kaun se port pr jaaye  