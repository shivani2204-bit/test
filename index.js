import express from "express";

const app = express();

app.use(express.json());

app.get('/',(req,res) =>{
    res.status(200).send("hello to vercel trial");
})

const port = process.env.PORT || 9000;
app.listen(port, () => (console.log(`app listen on port:${port}`)))