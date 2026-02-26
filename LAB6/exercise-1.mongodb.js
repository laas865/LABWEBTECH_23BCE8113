/* global use, db */
// MongoDB Playground

use('vehicles');


db.adminCommand({ listDatabases: 1 })

db.createCollection("two_wheelers", { capped: true, size: 100000 });
db.createCollection("four_wheelers");

db.getCollection("two_wheelers").insertMany([
{
  bike_name:"Activa 6G",
  model:"gearless",
  category:"125cc",
  colors_available:["red","black"],
  manufacturer:"Honda",
  performance:8,
  timestamp:new Date("2022-01-10"),
  price:80000
},
{
  bike_name:"Pulsar 150",
  model:"gear",
  category:"150cc",
  colors_available:["blue","black"],
  manufacturer:"Bajaj",
  performance:9,
  timestamp:new Date("2021-05-12"),
  price:110000
},
{
  bike_name:"Splendor Plus",
  model:"gear",
  category:"100cc",
  colors_available:["black","red"],
  manufacturer:"Hero",
  performance:7,
  timestamp:new Date("2020-03-20"),
  price:70000
},
{
  bike_name:"R15",
  model:"gear",
  category:"150cc",
  colors_available:["sport red","blue"],
  manufacturer:"Yamaha",
  performance:9,
  timestamp:new Date("2023-02-11"),
  price:180000
},
{
  bike_name:"Access 125",
  model:"gearless",
  category:"125cc",
  colors_available:["white","black"],
  manufacturer:"Suzuki",
  performance:8,
  timestamp:new Date("2022-06-15"),
  price:90000
}
]);

// Insert four wheelers
db.getCollection("four_wheelers").insertMany([
{
  vehicle_name:"Swift",
  model:"own",
  category:"car",
  variants:["vxi","petrol"],
  manufacturer:"Maruti",
  performance:8,
  timestamp:new Date("2021-02-02"),
  price:700000
},
{
  vehicle_name:"Innova",
  model:"commercial",
  category:"car",
  variants:["diesel","zxi"],
  manufacturer:"Toyota",
  performance:9,
  timestamp:new Date("2020-08-08"),
  price:1800000
},
{
  vehicle_name:"Eicher Truck",
  model:"commercial",
  category:"heavy truck",
  variants:["diesel"],
  manufacturer:"Eicher",
  performance:7,
  timestamp:new Date("2019-05-05"),
  price:2500000
},
{
  vehicle_name:"Volvo Bus",
  model:"commercial",
  category:"bus",
  variants:["diesel"],
  manufacturer:"Volvo",
  performance:9,
  timestamp:new Date("2018-09-09"),
  price:5000000
},
{
  vehicle_name:"Tata Ace",
  model:"commercial",
  category:"mini truck",
  variants:["petrol","diesel"],
  manufacturer:"Tata",
  performance:6,
  timestamp:new Date("2022-12-12"),
  price:450000
}
]);

// Display all documents
db.getCollection("two_wheelers").find({});
db.getCollection("four_wheelers").find({});

// vehicle name and price
db.getCollection("two_wheelers").find({}, { bike_name:1, price:1, _id:0 });
db.getCollection("four_wheelers").find({}, { vehicle_name:1, price:1, _id:0 });


// Two wheelers from particular company 
db.getCollection("two_wheelers").find({ manufacturer:"Honda" });


// Four wheelers available in diesel variants
db.getCollection("four_wheelers").find({ variants:"diesel" });


// Vehicles with performance > 5
db.getCollection("two_wheelers").find(
{ performance: { $gt:5 } },
{ bike_name:1, category:1, manufacturer:1, _id:0 }
);

db.getCollection("four_wheelers").find(
{ performance: { $gt:5 } },
{ vehicle_name:1, category:1, manufacturer:1, _id:0 }
);
