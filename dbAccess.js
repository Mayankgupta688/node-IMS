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
        var employeeDataBase = dbConnection.db("employees");
        var employeeTable = employeeDataBase.collection("details");
        
        // employeeTable.deleteMany({name: "Mayank"}).then(() => { })
        // employeeTable.find({}).toArray().then(() => { });
        
        // employeeTable.insertOne({ name: "Mayank", age: 10 }).then(
        //     (success) => {
        //         debugger;
        //     },
        //     (failure) => { }
        // )
        
        fs.readFile("./employees.json", function (err, response) {
            var employeeList = JSON.parse(response.toString());
            
            employeeList.forEach(employee => {
                // employeeTable.insertOne({ name: employee.name, age: employee.age }).then(
                //     (success) => {
                //         debugger;
                //     },
                //     (failure) => { }
                // )
                
                employeeTable.insertMany(employeeList).then((response) => {
                    debugger
                })
            });
        })
        
        
    },
    (err) => {
        debugger
    }
)