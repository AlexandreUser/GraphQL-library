const { buildSchema } = require("graphql");

function DefineSchema(){
	let schema = null
	schema = buildSchema( ` 
		type MainQuery {
			users: [ListOfUsers]
			libraryName: String
			library: [String!]!
			datetime: [String!]!
			quantity: [Int!]!
		}
		type ListOfUsers{
			name:String
			Books:[String!]!
		}
		type MainMutation {
			recordUsers(name:String,Books:String): String
			recordLibraryName(libraryName:String): String
			recordBook(title:String): String
			recordDate(datetime:String): String
			recordQuantity(quantity:Int): Int
		}
		schema {
			query:MainQuery
			mutation:MainMutation
		}
		`)
	return schema

}
function GetLibrary(){
	return ["O nome do vento","Harry Potter e a camara secreta","things fall apart"]
}
function GetDate(){
		return ["2009","2004","2011"]

}
function GetQuantity(){
	return [10,3,20]

}
function GetName(){
	return "My own GraphQl library"
}
function GetUser(){
	return [{"name":"Alexander","Books":["Harry potter e a camara secreta"]}]
}
exports.DefineSchema = DefineSchema;
exports.GetLibrary = GetLibrary;
exports.GetDate = GetDate;
exports.GetQuantity = GetQuantity;
exports.GetName = GetName;
exports.GetUser = GetUser;