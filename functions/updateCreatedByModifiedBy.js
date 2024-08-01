exports = async function(arg){
  // This default function will get a value and find a document in MongoDB
  // To see plenty more examples of what you can do with functions see: 
  // https://www.mongodb.com/docs/atlas/app-services/functions/

  // Find the name of the MongoDB service you want to use (see "Linked Data Sources" tab)
  var serviceName = "mongodb-atlas";

  // Update these to reflect your db/collection
  var dbName = "randomwod";
  var collName = "workouts";

  // Get a collection from the context
  var collection = context.services.get(serviceName).db(dbName).collection(collName);

  try {
    var filter = {
      
    }

    var update = [{
      $set: {
       'meta.createdBy': BSON.ObjectId("66a7e77eb86d3a3954df69bf"),
       'meta.modifiedBy': BSON.ObjectId("66a7e77eb86d3a3954df69bf") 
      }
    }]
    
    findResult = await collection.updateMany(
      filter,
      update
    );
    

  } catch(err) {
    console.log("Error occurred while executing updateMany:", err.message);

    return { error: err.message };
  }

  // To call other named functions:
  // var result = context.functions.execute("function_name", arg1, arg2);

  return { result: findResult };
};