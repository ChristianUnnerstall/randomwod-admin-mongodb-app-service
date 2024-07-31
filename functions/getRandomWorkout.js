exports = function(){
    
    let collection = context.services.get("mongodb-atlas").db("randomwod").collection("workouts");

    var pipeline = []
  
    pipeline.push({ "$match": { "meta.status": "draft" }})
    pipeline.push({ "$sample": { size: 1 }})
    //pipeline.push({ "$project": {title: 1, description: 1, mode: 1, slug: '$meta.slug'}})
  
    return collection.aggregate(pipeline);
};