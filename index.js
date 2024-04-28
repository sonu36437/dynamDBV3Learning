const {
	DynamoDBClient,
	PutItemCommand,
	QueryCommand,
} = require("@aws-sdk/client-dynamodb");
// const {
// 	QueryCommand,
// 	DynamoDBDocumentClient,
// } = require("@aws-sdk/lib-dynamodb");
const dynamoDBClient = new DynamoDBClient();

// const docClient = DynamoDBDocumentClient.from(dynamoDBClient); //for second method

//PUT item using aws sdk v3

// async function putItem() {
// 	try {
// 		const result = await dynamoDBClient.send(
// 			new PutItemCommand({
// 				TableName: "HRMSAtten",
// 				Item: {
// 					employe_id: { S: "emp_2" },
// 					Date: { S: new Date().toISOString() },
// 					name: { S: "John" },
// 					age: { N: "30" },
// 				},
// 			})
// 		);
// 		console.log(result);
// 	} catch (err) {
// 		console.log("this is errro: " + err);
// 	}
// }
// putItem();

// query item using javascript v3

async function queryItem() {
	try {
		const result = await dynamoDBClient.send(
			new QueryCommand({
				TableName: "HRMSAtten",
				ExpressionAttributeValues: {
					":e_id": { S: "employee731" },
					":startDate": { S: "2024-04-28T00:00:00.000Z" },
					":endDate": { S: "2024-04-28T23:59:59.999Z" },
				},

				// ExpressionAttributeNames: {
				// 	"#id": "employe_id",
				// 	"#date": "Date",
				// },
				KeyConditionExpression:
					"employe_id = :e_id AND Date BETWEEN :startDate AND :endDate",
			})
		);
		console.log(result);
	} catch (err) {
		console.log("Error: " + err);
	}
}
// another way for qurying data

// async function queryItem() {
// 	const command = new QueryCommand({
// 		TableName: "HRMSAtten",
// 		KeyConditionExpression: "employe_id=:e_id ",
// 		ExpressionAttributeValues: {
// 			":e_id": "emp_2",
// 			":startDate": "2024-04-28T00:00:00.000Z",
// 			":endDate": "2024-04-28T23:59:59.999Z",
// 		},
// 		KeyConditionExpression: "employe_id=:e_id",
// 	});
// 	const response = await docClient.send(command);
// 	console.log(response);
// }
queryItem();
