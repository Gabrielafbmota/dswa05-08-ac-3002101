var http = require("http");
var app = require("./config/express")();
const url =
  "mongodb+srv://root:root@dsaw-acs.wum0r.mongodb.net/dsaw?retryWrites=true&w=majority";

require("./config/database")(url);
http.createServer(app).listen(app.get("port"), function () {
  console.log("Express Server escutando na porta " + app.get("port"));
});
