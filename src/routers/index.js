const UserRouter = require("./UserRouter")
const TodoRouter = require("./TodoRouter")

const routes = (app) => {
    app.use("/api", UserRouter)
    app.use("/api/todo", TodoRouter)
}

module.exports = routes