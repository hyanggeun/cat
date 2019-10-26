var models = require('../../models');
var Sequelize = require('sequelize');
const {or, and, gt, lt} = Sequelize.Op;

/*coords:{
    northEast:, //상단
    southWest: //하단
}
*/
exports.list = (req,res)=>{
    //northEast, southWest를 받아온다. 
    var obj = JSON.parse(JSON.stringify(req.body));
    console.log(JSON.stringify(req.body));
    console.debug(obj);
    var northEast_lat = parseFloat(obj.northEast.lat);
    var northEast_lng = parseFloat(obj.northEast.lng);
    var southWest_lat = parseFloat(obj.southWest.lat);
    var southWest_lng = parseFloat(obj.southWest.lng);
    console.debug(northEast_lat);
//select * from cat where latnortheast
console.log( southWest_lat);
//select * from cat where lat>0 and lat<20 and lng>0 and lng<100;
    models.Cat.findAll(
        {
            where:{
                [and]: [
                    {lng: {[gt]: northEast_lng}},
                    {lng: {[lt]: southWest_lng}},
                    {lat: {[gt]: northEast_lat}},
                    {lat: {[lt]: southWest_lat}}
                  ]
            }
           
            // where: {
            //     id: {
                   
            //     }
            // }
           
                //     lat : {
                //         $lte: northEast_lat,
                //         $gte: southWest_lat
                //     },
                //     lng : {
                //         $gte: northEast_lng,
                //         $lte: southWest_lng
                //     }      
                // }
              
        }

    )
    .then( result =>{
        res.json(result);
    })
    .catch( err =>{
        console.log(err);
    })
    
}
exports.detail = (req,res)=>{
    models.Cat.findOne(
        {
            where: {
                id: req.params.id 
            }
        }
    ).then( result =>{
        res.json(result);
    }).catch(err =>{
        console.log(err);
    })
}
/*

"coords":{
    lat: 101,
    lng: 102.123
},
"title": "title",
"food" : true,
"water": false,
"shelter" : true,
"special_note" : "spnote"

*/
exports.write = (req,res)=>{
    console.log(JSON.stringify(req.body));
    var obj = JSON.parse(JSON.stringify(req.body));
    console.log(typeof obj.title);
    models.Cat.create(
        {
            lat: obj.coords.lat,
            lng: obj.coords.lng,
            title: obj.title,
            food: obj.food,
            water: obj.water,
            shelter: obj.shelter,
            special_note: obj.special_note
        }
    ).then(result=>{
        res.json(result);
    }).catch(error=>{
        console.log(error);
    })
}
exports.update = (req,res) =>{
    var obj = JSON.parse(JSON.stringify(req.body));


    models.Cat.update({
        lat: obj.coords.lat,
        lng: obj.coords.lng,
        title: obj.title,
        food: obj.food,
        water: obj.water,
        shelter: obj.shelter,
        special_note: obj.special_note
    }, {where: {id: req.params.id}})
    .then(result =>{
        if(result[0]===0){
          //201 return
            res.json(result+'nodata');
        }else{
            res.json(result+'update OK');
        }
       
    }).catch(error =>{
        console.log(error);
    })
}