// app/api/dummy/route.ts
import { NextResponse } from "next/server";
import { start } from "workflow/api";
import { dummyStep } from "@/app/workflows/step";
import { dummyWorkflow } from "@/app/workflows/workflow";

export async function GET() {
  const run = await start(dummyWorkflow);
  const runData = await run.returnValue;

  console.log("endpoint.1: ", runData);

  const data = await dummyStep();

  console.log("endpoint.2: ", data);

  return NextResponse.json({
    runData,
    data,
  });
}
