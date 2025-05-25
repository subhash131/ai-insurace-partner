import { NextRequest, NextResponse } from "next/server";
import Insurance from "@/models/Insurance";
import User from "@/models/User";

export async function GET(
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
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
