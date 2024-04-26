(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("map",
{ "compressionlevel":-1,
 "height":20,
 "infinite":false,
 "layers":[
        {
         "draworder":"topdown",
         "id":4,
         "locked":true,
         "name":"Object Layer 1",
         "objects":[
                {
                 "height":0,
                 "id":1,
                 "name":"",
                 "polygon":[
                        {
                         "x":0,
                         "y":0
                        }, 
                        {
                         "x":384.369,
                         "y":-256.246
                        }, 
                        {
                         "x":384.369,
                         "y":384.369
                        }, 
                        {
                         "x":1151.51,
                         "y":384.369
                        }, 
                        {
                         "x":1151.84,
                         "y":896.485
                        }, 
                        {
                         "x":1663.92,
                         "y":896.485
                        }, 
                        {
                         "x":1663.92,
                         "y":384.404
                        }, 
                        {
                         "x":2176,
                         "y":384.404
                        }, 
                        {
                         "x":2176.06,
                         "y":1919.59
                        }, 
                        {
                         "x":895.957,
                         "y":1919.59
                        }, 
                        {
                         "x":895.534,
                         "y":1535.55
                        }, 
                        {
                         "x":383.685,
                         "y":1536.35
                        }, 
                        {
                         "x":383.685,
                         "y":2815.57
                        }],
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":0,
                 "x":0,
                 "y":0
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":false,
         "x":0,
         "y":0
        }, 
        {
         "data":[541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541,
            541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541,
            541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541,
            541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541,
            541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541,
            541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541,
            541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541,
            541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541,
            541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541,
            541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541,
            541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541,
            541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541,
            541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541,
            541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541,
            541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541,
            541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541,
            541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541,
            541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541,
            541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541,
            541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541, 541],
         "height":20,
         "id":2,
         "name":"Background",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 434, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 432, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 434, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 434, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 436, 0, 437, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 431, 435, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 432, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 434, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "id":3,
         "name":"Obstacles",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 542, 540, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 542, 540, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 542, 563, 564, 564, 564, 564, 564, 521, 0, 0, 520, 564, 564, 564, 564, 521, 0, 0,
            0, 0, 543, 518, 518, 518, 518, 518, 519, 540, 0, 0, 542, 517, 518, 518, 519, 540, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 542, 540, 0, 0, 542, 540, 0, 0, 542, 540, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 542, 540, 0, 0, 542, 540, 0, 0, 542, 540, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 542, 563, 564, 564, 565, 540, 0, 0, 542, 540, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 543, 518, 518, 518, 518, 544, 0, 0, 542, 540, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 542, 540, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 542, 540, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 542, 540, 0, 0,
            0, 0, 520, 564, 564, 564, 564, 521, 0, 0, 0, 0, 0, 0, 0, 0, 542, 540, 0, 0,
            0, 0, 542, 517, 518, 518, 519, 540, 0, 0, 0, 0, 0, 0, 0, 0, 542, 540, 0, 0,
            0, 0, 542, 540, 0, 0, 542, 540, 0, 0, 0, 0, 0, 0, 0, 0, 542, 540, 0, 0,
            0, 0, 542, 540, 0, 0, 542, 563, 564, 564, 564, 564, 564, 564, 564, 564, 565, 540, 0, 0,
            0, 0, 542, 540, 0, 0, 543, 518, 518, 518, 518, 518, 518, 518, 518, 518, 518, 544, 0, 0,
            0, 0, 542, 540, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 542, 540, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 542, 540, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 542, 540, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "id":1,
         "name":"Path",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }],
 "nextlayerid":5,
 "nextobjectid":2,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.2",
 "tileheight":128,
 "tilesets":[
        {
         "columns":23,
         "firstgid":1,
         "image":"..\/..\/..\/Downloads\/kenney_tower-defense-top-down\/Tilesheet\/towerDefense_tilesheet.png",
         "imageheight":832,
         "imagewidth":1472,
         "margin":0,
         "name":"towerDefense_tilesheet",
         "spacing":0,
         "tilecount":299,
         "tileheight":64,
         "tilewidth":64
        }, 
        {
         "columns":23,
         "firstgid":300,
         "image":"..\/..\/..\/Downloads\/kenney_tower-defense-top-down\/Tilesheet\/towerDefense_tilesheet@2.png",
         "imageheight":1664,
         "imagewidth":2944,
         "margin":0,
         "name":"towerDefense_tilesheet@2",
         "spacing":0,
         "tilecount":299,
         "tileheight":128,
         "tilewidth":128
        }],
 "tilewidth":128,
 "type":"map",
 "version":"1.10",
 "width":20
});