import mongoose, { Schema, Document } from "mongoose";

export interface InsuranceDocument extends Document {
  id: string;
  name: string;
  image: string;
  minEligibleAge: number;
  maxEligibleAge: number;
  minIncomeRequired: number;
  premiumAnnual: number;
  sumAssured: number;
  coverageType: "individual" | "family" | "senior" | "other";
  provider: string;
  policyTermYears: number;
  features: string[];
  createdAt: Date;
  updatedAt: Date;
}

const InsuranceSchema = new Schema<InsuranceDocument>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    minEligibleAge: {
      type: Number,
      required: true,
    },
    maxEligibleAge: {
      type: Number,
      required: true,
    },
    minIncomeRequired: {
      type: Number,
      required: true,
    },
    premiumAnnual: {
      type: Number,
      required: true,
    },
    sumAssured: {
      type: Number,
      required: true,
    },
    coverageType: {
      type: String,
      enum: ["individual", "family", "senior", "other"],
      required: true,
    },
    provider: {
      type: String,
      required: true,
    },
    policyTermYears: {
      type: Number,
      required: true,
    },
    features: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Insurance ||
  mongoose.model<InsuranceDocument>("Insurance", InsuranceSchema);
