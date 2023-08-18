var connectionString = `mongodb+srv://technofunnel:A110cate@cluster0.qoxqe.mongodb.net/?retryWrites=true&w=majority`;

const { MongoClient, ServerApiVersion } = require("mongodb");
var fs = require("fs");

const mongoClient = new MongoClient(connectionString,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);
mongoClient.connect(connectionString).then(
    (dbConnection) => {
        var database = dbConnection.db("employees");
        var employeeTable = database.collection("employeeDetails");
        fs.readFile("./employees.json", function (err, data) {
            var empList = JSON.parse(data.toString());
            empList.forEach(employee => {
                employeeTable.insertOne({
                    name: employee.name, age: employee.age
                }).then((response) => {
                    console.log("User Added " + employee.name)
                });
            });
        })
        
    },
    (err) => { }
)
