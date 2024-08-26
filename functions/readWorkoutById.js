exports = function(args){
    
    let collection = context.services.get("mongodb-atlas").db("randomwod").collection("workouts");

    var pipeline = []
  
    pipeline.push({ "$match": {_id: BSON.ObjectId(args)}})
    //pipeline.push({ "$project": {title: 1, description: 1, mode: 1, slug: '$meta.slug'}})
  
    return collection.aggregate(pipeline);
};