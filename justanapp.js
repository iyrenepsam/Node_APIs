


var express=require('express')                        //importing or calling  express
let app=express()      
var mongoose=require('mongoose');  

var bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))               // node a server as it is a web application   // parse application/x-www-form-urlencoded
app.use(bodyParser.json())                        // parse application/json




var {studentmodel}=require('./models/studentmodel');

  //imported from studentmodel file  
  // connecting nodejs application to cloud
 
 //mongoose.connect("mongodb+srv://irenepsam:#irene@95@cluster0.96drt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true}) //myfirstDatabase
 
    app.get('/', (req, res)=>{

    res.send("WELCOME to my web ")

    } )

    app.post('/read',(req,res)=>{                  // creating object in /read...for database
                 
         var studentObject= new studentmodel( req.body);

       //studentObject.save(
            //(error)=>{
                //if(error)
                //{
              //      res.send("Error" + error)
              //  }
               // else
               // {
                  // res.json({"status": "success"})
              //  }

           // }
       // )    
         res.json(studentObject);

    } )

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


