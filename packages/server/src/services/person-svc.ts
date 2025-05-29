// src/services/traveler-svc.ts
import { Schema, model } from "mongoose";
import { Person } from "../models/Person";

const PersonSchema = new Schema<Person>(
  {
    userid: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    profilephoto: { type: String, required: false, unique: true },
    recipes: { type: String, required: false, unique: true },
    workouts: [String],
    exerciseOptins: [String]
    
  },
  { collection: "profiles" }
);

const PersonModel = model<Person>(
  "Person",
  PersonSchema
);


function index(): Promise<Person[]> {
  return PersonModel.find();
}

function get(userid: String): Promise<Person> {
  return PersonModel.find({ userid })
    .then((list) => list[0])
    .catch((err) => {
      throw `${userid} Not Found`;
    });
}


function create(json: Person): Promise<Person> {
  const t = new PersonModel(json);
  return t.save();
}


function update(
  userid: String,
  traveler: Person
): Promise<Person> {
  return PersonModel.findOneAndUpdate({ userid }, traveler, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${userid} not updated`;
    else return updated as Person;
  });
}



function remove(userid: String): Promise<void> {
  return PersonModel.findOneAndDelete({ userid }).then(
    (deleted) => {
      if (!deleted) throw `${userid} not deleted`;
    }
  );
}


export default { index, get , create, update, remove};