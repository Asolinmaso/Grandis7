import mongoose, { Schema, Document } from "mongoose";

export interface IJob extends Document {
  jobTitle: string;
  experience: string;
  location: string;
  shortDescription: string;
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema: Schema = new Schema(
  {
    jobTitle: { type: String, required: true },
    experience: { type: String, required: true },
    location: { type: String, required: true },
    shortDescription: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Job || mongoose.model<IJob>("Job", JobSchema);
