exports = function(args){
    
    let collection = context.services.get("mongodb-atlas").db("randomwod").collection("workouts");

    var pipeline = []
  
    pipeline.push({ "$search": 
      {
        index: 'default',
        text: {
          query: args,
          path: ['description', 'title']
        }
      }
    })
    pipeline.push({ "$match": { "meta.status": { $ne: "delete" }}})
    pipeline.push({ "$sort": { "description": 1}})
    
    //pipeline.push({ "$project": {title: 1, description: 1, mode: 1, slug: '$meta.slug'}})
  
    return collection.aggregate(pipeline);
};