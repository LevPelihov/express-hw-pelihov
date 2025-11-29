const express = require("express")
const routes = require('./routes/basic')
const app = express();

app.use((request, response, next) => {
    console.log("Url:", request.url)
    console.log("Тип запроса:", request.method)
    console.log("User-Agent:", request.headers["user-agent"], '\n')
    next();
});

app.use("/", routes);

app.use((request, response, next) => {
    response.status(404).json({ message: "Not Found" });
});

const PORT = 3000
const HOST = 'localhost'
app.listen(PORT, HOST, () => console.log(`Сервер запущен по адресу http://${HOST}:${PORT}`))