var express             = require("express"),
    bodyParser          = require("body-parser"),
    mongoose            = require("mongoose"),
    flash               = require("connect-flash"),
    passport            = require("passport"),
    User                = require("./models/user"),
    LocalStrategy       = require("passport-local"),
   passportLocalMongoose= require("passport-local-mongoose"),
    Student             = require("./models/student"),
    methodOverride      = require("method-override"),
    app                 = express();
    


mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

mongoose.connect("mongodb://localhost/tedd_v6" ,{ useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: true}));
app.use(methodOverride("_method"));
app.set("view engine" , "ejs");
app.use(flash());
app.use(express.static(__dirname + "/public"));


//PASSPORT CONFIGURATION
app.use(require("express-session")({
    
    secret: "Lincoln is the best",
    resave: false,
    saveUninitialized: false
    
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req , res ,next){
    
    res.locals.currentUser = req.user;
    res.locals.error= req.flash("error");
    res.locals.success= req.flash("success");
    
    next();
});


app.get("/",function(req,res){
  res.render("landing"); 
});


// INDEX show campgrounds!
app.get("/students",function(req,res){
    
    //get all campgrounds from db
     Student.find({},function(err,allstudents){
     
     if(err)
     {
             console.log("oh no error");
             console.log(err);
     }
     else
     {
             res.render("index",{ students:allstudents});
     }
     
     
     
 });
    
    
    
});

//create student
app.post("/students",isLoggedIn,function(req,res){
    
    var name     =  req.body.name;
    var usn      =  req.body.usn;
    var semester =  req.body.sem;
    var sem1     = 
    {
     sub1:   {
        
                sub11:req.body.sub11,
                credits11:req.body.credits11,
                grade11:req.body.grade11
        },
     sub2: 
         {
        
                sub12:req.body.sub12,
                credits12:req.body.credis12,
                grade12:req.body.grade12
        },
     sub3: 
         {
        
                sub13:req.body.sub13,
                credits13:req.body.credits13,
                grade13:req.body.grade13
        },
     sub4: 
         {
        
                sub14:req.body.sub14,
                credits14:req.body.credits14,
                grade14:req.body.grade14
        },
     sub5: 
         {
        
                sub15:req.body.sub15,
                credits15:req.body.credits15,
                grade15:req.body.grade15
        },
     sub6: 
         {
        
                sub16:req.body.sub16,
                credits16:req.body.credits16,
                grade16:req.body.grade16
        },
     sub7: 
         {
        
                sub17:req.body.sub17,
                credits17:req.body.credits17,
                grade17:req.body.grade17
        },
     sub8:         
         {
        
                sub18:req.body.sub18,
                credits18:req.body.credits18,
                grade18:req.body.grade18
        },
     sub9: 
         {
        
                sub19:req.body.sub19,
                credits19:req.body.credits19,
                grade19:req.body.grade19
        },
     sub10: 
         {
        
                sub10:req.body.sub10,
                credits10:req.body.credits10,
                grade10:req.body.grade10
        }
    };
    
    var sem2     = 
        {
     sub1:   {
        
                sub21:req.body.sub21,
                credits21:req.body.credits21,
                grade21:req.body.grade21
        },
     sub2: 
         {
        
                sub22:req.body.sub22,
                credits22:req.body.credis22,
                grade22:req.body.grade22
        },
     sub3: 
         {
        
                sub23:req.body.sub23,
                credits23:req.body.credits23,
                grade23:req.body.grade23
        },
     sub4: 
         {
        
                sub24:req.body.sub24,
                credits24:req.body.credits24,
                grade24:req.body.grade24
        },
     sub5: 
         {
        
                sub25:req.body.sub25,
                credits25:req.body.credits25,
                grade25:req.body.grade25
        },
     sub6: 
         {
        
                sub26:req.body.sub26,
                credits26:req.body.credits26,
                grade26:req.body.grade26
        },
     sub7: 
         {
        
                sub27:req.body.sub27,
                credits27:req.body.credits27,
                grade27:req.body.grade27
        },
     sub8:         
         {
        
                sub28:req.body.sub28,
                credits28:req.body.credits28,
                grade28:req.body.grade28
        },
     sub9: 
         {
        
                sub29:req.body.sub29,
                credits29:req.body.credits29,
                grade29:req.body.grade29
        },
     sub10: 
         {
        
                sub20:req.body.sub20,
                credits20:req.body.credits20,
                grade20:req.body.grade20
        }
    };
       
  ;
    var sem3     = 
        
           {
     sub1:   {
        
                sub31:req.body.sub31,
                credits31:req.body.credits31,
                grade31:req.body.grade31
        },
     sub2: 
         {
        
                sub32:req.body.sub32,
                credits32:req.body.credis32,
                grade32:req.body.grade32
        },
     sub3: 
         {
        
                sub33:req.body.sub33,
                credits33:req.body.credits33,
                grade33:req.body.grade33
        },
     sub4: 
         {
        
                sub34:req.body.sub34,
                credits34:req.body.credits34,
                grade34:req.body.grade34
        },
     sub5: 
         {
        
                sub35:req.body.sub35,
                credits35:req.body.credits35,
                grade35:req.body.grade35
        },
     sub6: 
         {
        
                sub36:req.body.sub36,
                credits36:req.body.credits36,
                grade36:req.body.grade36
        },
     sub7: 
         {
        
                sub37:req.body.sub37,
                credits37:req.body.credits37,
                grade37:req.body.grade37
        },
     sub8:         
         {
        
                sub38:req.body.sub38,
                credits38:req.body.credits38,
                grade38:req.body.grade38
        },
     sub9: 
         {
        
                sub39:req.body.sub39,
                credits39:req.body.credits39,
                grade39:req.body.grade39
        },
     sub10: 
         {
        
                sub30:req.body.sub30,
                credits30:req.body.credits30,
                grade30:req.body.grade30
        }
    };
    ;
    var sem4     = 
         {
     sub1:   {
        
                sub41:req.body.sub41,
                credits41:req.body.credits41,
                grade41:req.body.grade41
        },
     sub2: 
         {
        
                sub42:req.body.sub42,
                credits42:req.body.credis42,
                grade42:req.body.grade42
        },
     sub3: 
         {
        
                sub43:req.body.sub43,
                credits43:req.body.credits43,
                grade43:req.body.grade43
        },
     sub4: 
         {
        
                sub44:req.body.sub44,
                credits44:req.body.credits44,
                grade44:req.body.grade44
        },
     sub5: 
         {
        
                sub45:req.body.sub45,
                credits45:req.body.credits45,
                grade45:req.body.grade45
        },
     sub6: 
         {
        
                sub46:req.body.sub46,
                credits46:req.body.credits46,
                grade46:req.body.grade46
        },
     sub7: 
         {
        
                sub47:req.body.sub47,
                credits47:req.body.credits47,
                grade47:req.body.grade47
        },
     sub8:         
         {
        
                sub48:req.body.sub48,
                credits48:req.body.credits48,
                grade48:req.body.grade48
        },
     sub9: 
         {
        
                sub49:req.body.sub49,
                credits49:req.body.credits49,
                grade49:req.body.grade49
        },
     sub10: 
         {
        
                sub40:req.body.sub40,
                credits40:req.body.credits40,
                grade40:req.body.grade40
        }
    };
        ;
    var sem5     = 
      
           {
     sub1:   {
        
                sub51:req.body.sub51,
                credits51:req.body.credits51,
                grade51:req.body.grade51
        },
     sub2: 
         {
        
                sub52:req.body.sub52,
                credits52:req.body.credis52,
                grade52:req.body.grade52
        },
     sub3: 
         {
        
                sub53:req.body.sub53,
                credits53:req.body.credits53,
                grade53:req.body.grade53
        },
     sub4: 
         {
        
                sub54:req.body.sub54,
                credits54:req.body.credits54,
                grade54:req.body.grade54
        },
     sub5: 
         {
        
                sub55:req.body.sub55,
                credits55:req.body.credits55,
                grade55:req.body.grade55
        },
     sub6: 
         {
        
                sub56:req.body.sub56,
                credits56:req.body.credits56,
                grade56:req.body.grade56
        },
     sub7: 
         {
        
                sub57:req.body.sub57,
                credits57:req.body.credits57,
                grade57:req.body.grade57
        },
     sub8:         
         {
        
                sub58:req.body.sub58,
                credits58:req.body.credits58,
                grade58:req.body.grade58
        },
     sub9: 
         {
        
                sub59:req.body.sub59,
                credits59:req.body.credits59,
                grade59:req.body.grade59
        },
     sub10: 
         {
        
                sub50:req.body.sub50,
                credits50:req.body.credits50,
                grade50:req.body.grade50
        }
    };
        ;
    var sem6     = 
           {
     sub1:   {
        
                sub61:req.body.sub61,
                credits61:req.body.credits61,
                grade61:req.body.grade61
        },
     sub2: 
         {
        
                sub62:req.body.sub62,
                credits62:req.body.credis62,
                grade62:req.body.grade62
        },
     sub3: 
         {
        
                sub63:req.body.sub63,
                credits63:req.body.credits63,
                grade63:req.body.grade63
        },
     sub4: 
         {
        
                sub64:req.body.sub64,
                credits64:req.body.credits64,
                grade64:req.body.grade64
        },
     sub5: 
         {
        
                sub65:req.body.sub65,
                credits65:req.body.credits65,
                grade65:req.body.grade65
        },
     sub6: 
         {
        
                sub66:req.body.sub66,
                credits66:req.body.credits66,
                grade66:req.body.grade66
        },
     sub7: 
         {
        
                sub67:req.body.sub67,
                credits67:req.body.credits67,
                grade67:req.body.grade67
        },
     sub8:         
         {
        
                sub68:req.body.sub68,
                credits68:req.body.credits68,
                grade68:req.body.grade68
        },
     sub9: 
         {
        
                sub69:req.body.sub69,
                credits69:req.body.credits69,
                grade69:req.body.grade69
        },
     sub10: 
         {
        
                sub60:req.body.sub60,
                credits60:req.body.credits60,
                grade60:req.body.grade60
        }
    };
;
    var sem7     =  
           {
     sub1:   {
        
                sub71:req.body.sub71,
                credits71:req.body.credits71,
                grade71:req.body.grade71
        },
     sub2: 
         {
        
                sub72:req.body.sub72,
                credits72:req.body.credis72,
                grade72:req.body.grade72
        },
     sub3: 
         {
        
                sub73:req.body.sub73,
                credits73:req.body.credits73,
                grade73:req.body.grade73
        },
     sub4: 
         {
        
                sub74:req.body.sub74,
                credits74:req.body.credits74,
                grade74:req.body.grade74
        },
     sub5: 
         {
        
                sub75:req.body.sub75,
                credits75:req.body.credits75,
                grade75:req.body.grade75
        },
     sub6: 
         {
        
                sub76:req.body.sub76,
                credits76:req.body.credits76,
                grade76:req.body.grade76
        },
     sub7: 
         {
        
                sub77:req.body.sub77,
                credits77:req.body.credits77,
                grade77:req.body.grade77
        },
     sub8:         
         {
        
                sub78:req.body.sub78,
                credits78:req.body.credits78,
                grade78:req.body.grade78
        },
     sub9: 
         {
        
                sub79:req.body.sub79,
                credits79:req.body.credits79,
                grade79:req.body.grade79
        },
     sub10: 
         {
        
                sub70:req.body.sub70,
                credits70:req.body.credits70,
                grade70:req.body.grade17
        }
    };
        ;
    var sem8     = 
         {
     sub1:   {
        
                sub81:req.body.sub81,
                credits81:req.body.credits81,
                grade81:req.body.grade81
        },
     sub2: 
         {
        
                sub82:req.body.sub82,
                credits82:req.body.credis82,
                grade82:req.body.grade82
        },
     sub3: 
         {
        
                sub83:req.body.sub83,
                credits83:req.body.credits83,
                grade83:req.body.grade83
        },
     sub4: 
         {
        
                sub84:req.body.sub84,
                credits84:req.body.credits84,
                grade84:req.body.grade84
        },
     sub5: 
         {
        
                sub85:req.body.sub85,
                credits85:req.body.credits85,
                grade85:req.body.grade85
        },
     sub6: 
         {
        
                sub86:req.body.sub86,
                credits86:req.body.credits86,
                grade86:req.body.grade86
        },
     sub7: 
         {
        
                sub87:req.body.sub87,
                credits87:req.body.credits87,
                grade87:req.body.grade87
        },
     sub8:         
         {
        
                sub88:req.body.sub88,
                credits88:req.body.credits88,
                grade88:req.body.grade88
        },
     sub9: 
         {
        
                sub89:req.body.sub89,
                credits89:req.body.credits89,
                grade89:req.body.grade89
        },
     sub10: 
         {
        
                sub80:req.body.sub80,
                credits80:req.body.credits80,
                grade80:req.body.grade80
        }
    };
        
   ;
    
    var author={
        id: req.user._id,
        username: req.user.username,
        des: req.user.des
    };
    
 
   
   
    var newStudent ={ name:name,usn:usn,semester:semester,sem1:sem1,sem2:sem2,sem3:sem3,sem4:sem4,sem5:sem5,sem6:sem6,sem7:sem7,sem8:sem8,author:author}
     Student.create(newStudent,function(err,newlyCreated){
        
        if(err)
        {
             console.log(err);
        }
        else
        {
              //to redirect back to campgrounds page
              console.log(newlyCreated);
              res.redirect("/students");
        }
        
    });
  
});



//showform to create new student

app.get("/student/new",isLoggedIn,function(req,res){
    res.render("new1");
    
});






//SHOW-shows more information about campground
app.get("/students/:id",checkStudentOwnership,function(req,res){
    
             //find the campground with that provided id
            
             Student.findById(req.params.id).populate("details").exec(function(err, foundStudent) {
                 if(err)
                 {
                  console.log(err);
                 }
                 else
                 {
                  //render the show template with that id
                  res.render("show",{student: foundStudent});
                 }
               
            
           });
        
   });
   
  
  
  
  
   app.get("/students/:id/edit",checkStudentOwnership,function(req,res){
      
     Student.findById(req.params.id,function(err, foundStudent){
         if(err)
           {
              console.log(err);
              res.redirect("/students");
           }
           else
      {
       res.render("database",{student: foundStudent}); 
      };
     });
   });
       
       
        //UPDATE CAMPGROUND
   app.put("/students/:id",checkStudentOwnership,function(req,res){
      //find and update the campground 
    Student.findByIdAndUpdate(req.params.id,req.body.student,function(err, student){
          if(err)
          {
              console.log(err);
              res.redirect("/students");
          }
          else
          {
              //redirect somewhere
              res.redirect("/students/" + req.params.id);
          }
      });
      
      
   });
   
    app.delete("/students/:id",checkStudentOwnership,function(req,res){
      
      //destroy student
       Student.findByIdAndRemove(req.params.id,function(err){
              if(err)
           {
              console.log(err);
              res.redirect("/students");
           }
        else
            {
              //redirect somewhere
              res.redirect("/students");
            }
       });
   });

  
  

//AUTH ROUTES
//show register form

app.get("/register",function(req,res){
    
    res.render("register");
    
});

//handle signup logic

app.post("/register",function(req,res){
    
     User.register(new User({username: req.body.username,des: req.body.des}),req.body.password,function(err,user){
        if(err)
        {
            console.log(err);
            return res.render("register");
        }
        else
        {
                passport.authenticate("local")(req,res,function(){
                res.redirect("/students");
            });
        }
    });
    
});

app.get("/login",function(req,res){
    
    res.render("login");
    
});

//handling login logic
app.post("/login",passport.authenticate("local",{
    successRedirect: "/students",
    failureRedirect: "/login"
}) ,function(req,res){
     });
     
     
 //LOGOUT    
app.get("/logout",function(req,res){
    
    req.logout();
    res.redirect("/students");
});

//middleware
function isLoggedIn(req,res,next)
{  
    
   
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error","You Need to be Logged-In to do that.");
    res.redirect("/login");
    
}


function checkStudentOwnership(req,res,next)
    {
     if(req.isAuthenticated())
       {  
          
          Student.findById(req.params.id, function(err, foundStudent){
               if(err)
              {
                res.redirect("back");
              }
               else
              {    
                   
                   
                   //check if he ownns the campground
                    if(foundStudent.author.id.equals(req.user._id))
                    {
                      next();
                    }
                    else
                    {   
                      req.flash("error","You don't have permission to do that.");
                      // if not redirect
                     res.redirect("back");
                    }
                   
               }
            });
         }
         else
         {   
             req.flash("error","You Need to be Logged-In to do that.");
             res.redirect("back");
         }
   };






app.listen(process.env.PORT,process.env.IP,function(){
    
    console.log("Tedd has started"); 
});