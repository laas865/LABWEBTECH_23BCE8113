// Q1 
use('animal')

// Q2
db.adminCommand({ listDatabases: 1 })

// Q3 
db.createCollection("wild_animals",{capped:true,size:100000})
db.createCollection("domestic_animals")

// Q4 
db.getCollection("wild_animals").insertMany([
{animal_name:"Lion",nature:"harm",favorite_foods:["meat","deer"],care_taker_name:"Ravi",life_span:14,timestamp:new Date("2021-01-10"),expenses:50000},
{animal_name:"Tiger",nature:"harm",favorite_foods:["meat","rabbit"],care_taker_name:"Suresh",life_span:16,timestamp:new Date("2020-05-12"),expenses:60000},
{animal_name:"Elephant",nature:"harmless",favorite_foods:["grass","fruits"],care_taker_name:"Mahesh",life_span:60,timestamp:new Date("2019-03-20"),expenses:70000},
{animal_name:"Deer",nature:"harmless",favorite_foods:["grass"],care_taker_name:"Ravi",life_span:20,timestamp:new Date("2022-02-11"),expenses:20000},
{animal_name:"Bear",nature:"harm",favorite_foods:["fish","honey"],care_taker_name:"Kiran",life_span:25,timestamp:new Date("2023-06-15"),expenses:45000}
])

// Q5
db.getCollection("domestic_animals").insertMany([
{animal_name:"Dog",gender:"male",favorite_foods:["meat","rice"],animal_petname:"Tommy",life_span:12,timestamp:new Date("2022-02-02"),expenses:15000},
{animal_name:"Cat",gender:"female",favorite_foods:["fish","milk"],animal_petname:"Kitty",life_span:15,timestamp:new Date("2021-08-08"),expenses:12000},
{animal_name:"Cow",gender:"female",favorite_foods:["grass"],animal_petname:"Ganga",life_span:20,timestamp:new Date("2019-05-05"),expenses:18000},
{animal_name:"Goat",gender:"male",favorite_foods:["leaves"],animal_petname:"Chotu",life_span:18,timestamp:new Date("2018-09-09"),expenses:10000},
{animal_name:"Horse",gender:"male",favorite_foods:["grass","grains"],animal_petname:"Raja",life_span:25,timestamp:new Date("2022-12-12"),expenses:30000}
])

// Q6 
db.getCollection("wild_animals").find({})
db.getCollection("domestic_animals").find({})

// Q7
db.getCollection("wild_animals").find({}, {animal_name:1,expenses:1,_id:0})
db.getCollection("domestic_animals").find({}, {animal_name:1,expenses:1,_id:0})

// Q8 
db.getCollection("domestic_animals").find({life_span:15})

// Q9 
db.getCollection("wild_animals").find({care_taker_name:"Ravi"})

// Q10 
db.getCollection("wild_animals").find({life_span:{$gt:5}},{animal_name:1,favorite_foods:1,expenses:1,_id:0})

db.getCollection("domestic_animals").find({life_span:{$gt:5}},{animal_name:1,favorite_foods:1,expenses:1,_id:0})

