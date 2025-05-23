import { insurance, users } from "./temp";

export const user = users[5]; // Example user object

export const fallbackPlans = insurance.filter(
  (plan) =>
    user.age >= plan.minEligibleAge &&
    user.age <= plan.maxEligibleAge &&
    user.annualIncome >= plan.minIncomeRequired &&
    plan.coverageType === user.preferredCoverageType
);
