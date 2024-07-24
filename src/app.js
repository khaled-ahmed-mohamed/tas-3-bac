const express = require ("express")
const app=express();
const port =process.env.PORT || 3000
const path = require ("path")
const publicDirectory =  path.join(__dirname , '../public')
app.use (express.static (publicDirectory))



app.set('view engine', 'hbs');

 const viewsDirectory = path.join (__dirname , '../temp1/views')
 app.set('views', viewsDirectory);


 var hbs = require('hbs');
const partialsPath = path.join(__dirname , "../Temp1/partials")
hbs.registerPartials(partialsPath)

 
app.get ('/' , (req,res) => {
    res.render('index' , {
        title : "HOME",
        desc : "This is home page"
    })
})

app.get ('/service' , (req,res) => {
    res.render('service' , {
        title : "Service",
        name: "Khaled",
        city:"Assiout",
        age: 22,
      
    })
})


app.get ('/team' , (req,res) => {
    res.render('team' , {
        title : "TEAM",
        name: "Gad",
        city:"mansoura",
        age: 23,
       
    })
})

app.get ('/about' , (req,res) => {
    res.render('about' , {
        title : "About",
        name: "gehan",
        city:"mansoura",
        age: 23,
      
    })
})

app.use((req, res, next) => {
    res.locals.footer = res.render('footer', { layout: false });
    next();
  });

  

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })


