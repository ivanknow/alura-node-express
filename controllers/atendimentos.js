
module.exports = app => {
    app.get("/atendimentos",(req,res) => {res.send("bagui ta loko 4")})
    app.post("/atendimentos",(req,res) => {
        console.log(req.body)
        res.send("you are in post route")
    })
}