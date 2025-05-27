// src/services/traveler-svc.ts
import { Schema, model } from "mongoose";
import { WorkoutEntry } from "../models/WorkoutEntry";
import mongoose from 'mongoose';

const WorkoutEntrySchema = new Schema<WorkoutEntry>(
  {
    userid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
    },
    day: { type: String, required: true },
    activity: { type: String, required: true, trim: true },
    duration: { type: String, required: false, trim: true }
  },
  { collection: "WorkoutEntrySchema" }
);

const WorkoutEntryModel = model<WorkoutEntry>(
  "Entry",
  WorkoutEntrySchema
);


function index(): Promise<WorkoutEntry[]> {
  return WorkoutEntryModel.find();
}

function get(userid: string): Promise<WorkoutEntry> {
  return WorkoutEntryModel.find({ userid: new mongoose.Types.ObjectId(userid) })
    .then((list) => {
      if (list.length === 0) throw `${userid} Not Found`;
      return list[0];
    });
}

function getById(id: string): Promise<WorkoutEntry | null> {
  return WorkoutEntryModel.findById(id).exec();
}


function create(json: WorkoutEntry): Promise<WorkoutEntry> {
  const t = new WorkoutEntryModel(json);
  return t.save();
}

function updateById(id: string, entry: WorkoutEntry): Promise<WorkoutEntry> {
  return WorkoutEntryModel.findByIdAndUpdate(id, entry, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${id} not updated`;
    return updated;
  });
}

function removeById(id: string): Promise<void> {
  return WorkoutEntryModel.findByIdAndDelete(id).then((deleted) => {
    if (!deleted) throw `${id} not deleted`;
  });
}


export default { index, get, getById , create, updateById, removeById };