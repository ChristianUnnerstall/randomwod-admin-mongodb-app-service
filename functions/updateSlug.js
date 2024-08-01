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

    // Workouts without mode specified only take the _id as slug
    var filter = {
      'mode': {$eq: ""},
    }

    var update = [{
      $set: {
       'meta.slug': { $toString: "$_id" }
        }
      }]

    // Workouts with mode specified take mode and _id as slug
    /*
    var filter = {
      'mode': {$ne: ""},
    }

    var update = [{
      $set: {
       'meta.slug': { $concat: [
         { $replaceAll: {input: "$mode", find: " ", replacement: "-"}},
         "-", 
         { $toString: "$_id" }
          ]}
        }
    }]
    
    findResult = await collection.updateMany(
      filter,
      update
    );
    */

  } catch(err) {
    console.log("Error occurred while executing updateMany:", err.message);

    return { error: err.message };
  }

  // To call other named functions:
  // var result = context.functions.execute("function_name", arg1, arg2);

  return { result: findResult };
};