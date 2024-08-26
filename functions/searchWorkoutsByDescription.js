exports = function(args){
    
    let collection = context.services.get("mongodb-atlas").db("randomwod").collection("workouts");

    var pipeline = []
  
    pipeline.push({ "$search": 
      {
        index: 'default',
        text: {
          query: args,
          path: 'description'
        }
      }
    })
    //pipeline.push({ "$match": { "meta.status": "draft" }})
    
    //pipeline.push({ "$project": {title: 1, description: 1, mode: 1, slug: '$meta.slug'}})
  
    return collection.aggregate(pipeline);
};