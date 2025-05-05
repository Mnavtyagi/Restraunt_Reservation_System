import app from "./app.js";

app.listen(process.env.PORT, ()=>{
    console.log(`Server listenig on port ${process.env.PORT}`);
});