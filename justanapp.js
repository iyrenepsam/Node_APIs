var express=require('express')    //importing or calling  express
var bodyParser=require('body-parser')

 let app=express()      // node a server as it is a web application

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json

app.use(bodyParser.json())



app.get('/', (req, res)=>{

    res.send("WELCOME to my web ");
    
    
    }   )

    app.post('/read',(req,res)=>{
        
        var getname= req.body.name;
        var getroll= req.body.rollno;
        

        res.json( {"Name": getname, "RollNo": getroll} );
    })

    app.post('/add',(req,res)=>{
     var getnum1= parseFloat(req.body.num1);
     var getnum2= parseFloat(req.body.num2);

     var result=getnum1+getnum2;
     res.json( {"sum":result} );

    } )

    app.post('/subtract',(req,res)=>{
        var getnum1=parseFloat(req.body.num1)
var getnum2=parseFloat(req.body.num2)
 var diff=getnum1-getnum2;
 res.json({"DIFFERENCE":diff});

    })

    app.post('/multiply',(req,res)=>{

        var getnum1=parseFloat(req.body.num1)
        var getnum2=parseFloat(req.body.num2)
         var product=getnum1*getnum2
         res.json({"Product":product})

    })

    app.post('/div',(req,res)=>{
        var getnum1=parseFloat(req.body.num1);
        var getnum2=parseFloat(req.body.num2);

        var result=getnum1/getnum2;

        res.json({"RESULT":result})
    })

app.listen(process.env.PORT || 3000, () => console.log(" listening on port 3000"));


