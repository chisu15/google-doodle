const app = require("./src/app");

const PORT = process.env.PORT || 3055

const server = app.listen(PORT, () => {
    console.log(`Google Doodle start with ${PORT}`)
})

// process.on('SIGINT', () =>{
//     server.close( () => console.log(`Exit server`))
//     // app.notify()
// })