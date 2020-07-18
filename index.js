const customExpress = require("./config/customExpress");
const app = customExpress();
const conn = require("./database/database");
console.log("->",conn)
/*conn.connect(error=>{
    if(error){
        console.log("error",error);
    }
});*/
app.listen(3000, () => console.log("ta rondando mlk"));

