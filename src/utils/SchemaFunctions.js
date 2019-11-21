const { buildSchema } = require("graphql");

function DefineSchema(){
	let schema = null
	schema = buildSchema( ` 
		type MainQuery {
			users: [ListOfUsers]
			libraryName: String
			Books:[LibraryOwn]
			datetime: [String!]!
		}
		type LibraryOwn{
			name:String
			quantity:Int
		}
		type ListOfUsers{
			name:String
			Books:[String!]!
		}
		type MainMutation {
			recordUsers(name:String,Books:String): String
			recordLibraryName(name:String,quantity:Int): String
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
	return [{"name":"O nome do vento","quantity":3},{"name":"Harry Potter","quantity":10}]
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
	return [{"name":"Alexander","Books":["Harry potter e a camara secreta"]},{"name":"Vanessa","Books":["O nome do vento"]}]
}
exports.DefineSchema = DefineSchema;
exports.GetLibrary = GetLibrary;
exports.GetDate = GetDate;
exports.GetQuantity = GetQuantity;
exports.GetName = GetName;
exports.GetUser = GetUser;