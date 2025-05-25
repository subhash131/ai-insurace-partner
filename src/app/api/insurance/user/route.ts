import { NextRequest, NextResponse } from "next/server";
import Insurance from "@/models/Insurance";
import User from "@/models/User";
import { connectToDatabase } from "@/db/connection";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  await connectToDatabase();
  const user = await User.findOne({ _id: id });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  const matchingPlans = await Insurance.find({
    minEligibleAge: { $lte: user.age },
    maxEligibleAge: { $gte: user.age },
    minIncomeRequired: { $lte: user.annualIncome },
    coverageType: user.preferredCoverageType,
  });
  return NextResponse.json(matchingPlans);
}
