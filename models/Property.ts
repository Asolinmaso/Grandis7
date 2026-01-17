import mongoose, { Schema, Document } from "mongoose";

export interface IProperty extends Document {
  name: string;
  type: string;
  area: string;
  configuration: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  status: string;
  price: string;
  description: string;
  amenities: string[];
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

const PropertySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    area: { type: String, required: true },
    configuration: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    status: { type: String, required: true },
    price: { type: String, default: "On Request" },
    description: { type: String, required: true },
    amenities: { type: [String], default: [] },
    images: { type: [String], default: [] },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Property ||
  mongoose.model<IProperty>("Property", PropertySchema);
