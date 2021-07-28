const AWS = require('aws-sdk')

require('dotenv').config();
const info = {
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRETE_ACCESS_KEY,
}
AWS.config.update(info)
// console.log(info)
const dynamoClient = new AWS.DynamoDB.DocumentClient()

// get methods
const getFarmers = async () => {
    const params ={
        TableName : TABLE_NAME
    }
    const farmers = await dynamoClient.scan(params).promise();
    console.log(farmers)
    return farmers
}
const getFarmerByID = async (launcher_id)=> {
    const params = {
        TableName : TABLE_NAME,
        Key :{
            "launcher_id":launcher_id
        }
    }
    dynamoClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        }
    });
}

function ArrNoDupe(items){
    // var temp = items.sort();
    return items
}
const getJointDate = async () =>{
    const params ={
        TableName : "partial"
    }
    const farmers = await dynamoClient.scan(params, function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(ArrNoDupe(data.Items))
        }
    }).promise(); 
    return farmers
}

const getLeader = async ()=> {
    var TABLE_NAME ='farmer'
    const params ={
        TableName : TABLE_NAME,
        Limit:100
    }
    var farmers = await dynamoClient.scan(params).promise();
    await farmers.Items.sort(function(a, b) {
        var keyA = a.points,
          keyB = b.points;
        // Compare the 2 dates
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        
        return 0;
      });
    console.log(farmers)
    return farmers.Items
}

module.exports = {getLeader,getJointDate,getFarmerByID,getFarmers}