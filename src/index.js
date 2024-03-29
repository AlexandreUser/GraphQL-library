const express = require("express");
const graphqlHTTP = require("express-graphql");
const bodyparser = require("body-parser");
const { buildSchema } = require("graphql");
const DefineSchema = require("./utils/SchemaFunctions.js").DefineSchema;
const GetLibrary = require("./utils/SchemaFunctions.js").GetLibrary;
const GetDate = require("./utils/SchemaFunctions.js").GetDate;
const GetQuantity = require("./utils/SchemaFunctions.js").GetQuantity;
const GetName = require("./utils/SchemaFunctions.js").GetName;
const GetUser = require("./utils/SchemaFunctions.js").GetUser;
const app = express();

app.use(bodyparser.json());

app.use("/graphql",graphqlHTTP({
		schema:DefineSchema(),
		rootValue:{
			users:GetUser(),
			libraryName:GetName(),
			Books:GetLibrary(),
			datetime:GetDate(),
			quantity:GetQuantity()
		},
		graphiql: true

	})
)

app.listen(3232,()=>{
	console.log("Server Running")
})
