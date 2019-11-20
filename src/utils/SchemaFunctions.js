const { buildSchema } = require("graphql");

function DefineSchema(){
	let schema = null
	schema = buildSchema( ` 
		type MainQuery {
			library: [String!]!
			datetime: [String!]!
		}
		type MainMutation {
			recordBook(title:String): String
			recordDate(datetime:String): String
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
exports.DefineSchema = DefineSchema;
exports.GetLibrary = GetLibrary;
exports.GetDate = GetDate;