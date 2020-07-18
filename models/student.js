var mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
   name: String,
   usn: String,
   semester:Number,
   author: {
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
        des: String
    },
   sem1: 
           {
              sub1:
             {
               sub11:String,
               credits11:Number,
               grade11:String
             },
             sub2:
             {
               sub12:String,
               credits12:Number,
               grade12:String
             },
             sub3:
             {
               sub13:String,
               credits13:Number,
               grade13:String
             },
             sub4:
             {
               sub14:String,
               credits14:Number,
               grade14:String
             },
             sub5:
             {
               sub15:String,
               credits15:Number,
               grade15:String
             },
             sub6:
             {
               sub16:String,
               credits16:Number,
               grade16:String
             },
             sub7:
             {
               sub17:String,
               credits17:Number,
               grade17:String
             },
             sub8:
             {
               sub18:String,
               credits18:Number,
               grade18:String
             },
             sub9:
             {
               sub19:String,
               credits19:Number,
               grade19:String
             },
             sub10:
             {
               sub10:String,
               credits10:Number,
               grade10:String
             }
            
             
           }
           
            
             
           
        
        ,
   sem2:  
            {
              sub1:
             {
               sub21:String,
               credits21:Number,
               grade21:String
             },
             sub2:
             {
               sub22:String,
               credits22:Number,
               grade22:String
             },
             sub3:
             {
               sub23:String,
               credits23:Number,
               grade23:String
             },
             sub4:
             {
               sub24:String,
               credits24:Number,
               grade24:String
             },
             sub5:
             {
               sub25:String,
               credits25:Number,
               grade25:String
             },
             sub6:
             {
               sub26:String,
               credits26:Number,
               grade26:String
             },
             sub7:
             {
               sub27:String,
               credits27:Number,
               grade27:String
             },
             sub8:
             {
               sub28:String,
               credits28:Number,
               grade28:String
             },
             sub9:
             {
               sub29:String,
               credits29:Number,
               grade29:String
             },
             sub10:
             {
               sub20:String,
               credits20:Number,
               grade20:String
             }
            
             
           }
            
             
              
           
        
     
          ,
   sem3:
          
             {
              sub1:
             {
               sub31:String,
               credits31:Number,
               grade31:String
             },
             sub2:
             {
               sub32:String,
               credits32:Number,
               grade32:String
             },
             sub3:
             {
               sub33:String,
               credits33:Number,
               grade33:String
             },
             sub4:
             {
               sub34:String,
               credits34:Number,
               grade34:String
             },
             sub5:
             {
               sub35:String,
               credits35:Number,
               grade35:String
             },
             sub6:
             {
               sub36:String,
               credits36:Number,
               grade36:String
             },
             sub7:
             {
               sub37:String,
               credits37:Number,
               grade37:String
             },
             sub8:
             {
               sub38:String,
               credits38:Number,
               grade38:String
             },
             sub9:
             {
               sub39:String,
               credits39:Number,
               grade39:String
             },
             sub10:
             {
               sub30:String,
               credits30:Number,
               grade30:String
             }
            
             
           }
            
            
          
       
            ,
   sem4:
           
             {
              sub1:
             {
               sub41:String,
               credits41:Number,
               grade41:String
             },
             sub2:
             {
               sub42:String,
               credits42:Number,
               grade42:String
             },
             sub3:
             {
               sub43:String,
               credits43:Number,
               grade43:String
             },
             sub4:
             {
               sub44:String,
               credits44:Number,
               grade44:String
             },
             sub5:
             {
               sub45:String,
               credits45:Number,
               grade45:String
             },
             sub6:
             {
               sub46:String,
               credits46:Number,
               grade46:String
             },
             sub7:
             {
               sub47:String,
               credits47:Number,
               grade47:String
             },
             sub8:
             {
               sub48:String,
               credits48:Number,
               grade48:String
             },
             sub9:
             {
               sub49:String,
               credits49:Number,
               grade49:String
             },
             sub10:
             {
               sub40:String,
               credits40:Number,
               grade40:String
             }
            
             
           }
            
       
       
            ,
   sem5:
         
             
             {
              sub1:
             {
               sub51:String,
               credits51:Number,
               grade51:String
             },
             sub2:
             {
               sub52:String,
               credits52:Number,
               grade52:String
             },
             sub3:
             {
               sub53:String,
               credits53:Number,
               grade53:String
             },
             sub4:
             {
               sub54:String,
               credits54:Number,
               grade54:String
             },
             sub5:
             {
               sub55:String,
               credits55:Number,
               grade55:String
             },
             sub6:
             {
               sub56:String,
               credits56:Number,
               grade56:String
             },
             sub7:
             {
               sub57:String,
               credits57:Number,
               grade57:String
             },
             sub8:
             {
               sub58:String,
               credits58:Number,
               grade58:String
             },
             sub9:
             {
               sub59:String,
               credits59:Number,
               grade59:String
             },
             sub10:
             {
               sub50:String,
               credits50:Number,
               grade50:String
             }
            
             
           }
            
       
       
            ,
   sem6:
           
             
             {
              sub1:
             {
               sub61:String,
               credits61:Number,
               grade61:String
             },
             sub2:
             {
               sub62:String,
               credits62:Number,
               grade62:String
             },
             sub3:
             {
               sub63:String,
               credits63:Number,
               grade63:String
             },
             sub4:
             {
               sub64:String,
               credits64:Number,
               grade64:String
             },
             sub5:
             {
               sub65:String,
               credits65:Number,
               grade65:String
             },
             sub6:
             {
               sub66:String,
               credits66:Number,
               grade66:String
             },
             sub7:
             {
               sub67:String,
               credits67:Number,
               grade67:String
             },
             sub8:
             {
               sub68:String,
               credits68:Number,
               grade68:String
             },
             sub9:
             {
               sub69:String,
               credits69:Number,
               grade69:String
             },
             sub10:
             {
               sub60:String,
               credits60:Number,
               grade60:String
             }
            
             
           }
            
       
       
            ,
   sem7:
           
             {
              sub1:
             {
               sub71:String,
               credits71:Number,
               grade71:String
             },
             sub2:
             {
               sub72:String,
               credits72:Number,
               grade72:String
             },
             sub3:
             {
               sub73:String,
               credits73:Number,
               grade73:String
             },
             sub4:
             {
               sub74:String,
               credits74:Number,
               grade74:String
             },
             sub5:
             {
               sub75:String,
               credits75:Number,
               grade75:String
             },
             sub6:
             {
               sub76:String,
               credits76:Number,
               grade76:String
             },
             sub7:
             {
               sub77:String,
               credits77:Number,
               grade77:String
             },
             sub8:
             {
               sub78:String,
               credits78:Number,
               grade78:String
             },
             sub9:
             {
               sub79:String,
               credits79:Number,
               grade79:String
             },
             sub10:
             {
               sub70:String,
               credits70:Number,
               grade70:String
             }
            
             
           }
            
       
       
            ,
   sem8:
           
            
             {
              sub1:
             {
               sub81:String,
               credits81:Number,
               grade81:String
             },
             sub2:
             {
               sub82:String,
               credits82:Number,
               grade82:String
             },
             sub3:
             {
               sub83:String,
               credits83:Number,
               grade83:String
             },
             sub4:
             {
               sub84:String,
               credits84:Number,
               grade28:String
             },
             sub5:
             {
               sub85:String,
               credits85:Number,
               grade85:String
             },
             sub6:
             {
               sub86:String,
               credits86:Number,
               grade86:String
             },
             sub7:
             {
               sub87:String,
               credits87:Number,
               grade87:String
             },
             sub8:
             {
               sub88:String,
               credits88:Number,
               grade88:String
             },
             sub9:
             {
               sub89:String,
               credits89:Number,
               grade89:String
             },
             sub10:
             {
               sub80:String,
               credits80:Number,
               grade80:String
             }
            
             
           }
            
       
            
      });

module.exports = mongoose.model("Student", studentSchema);