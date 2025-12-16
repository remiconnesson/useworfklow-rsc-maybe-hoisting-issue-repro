// app/api/dummy/route.ts
import { NextResponse } from "next/server";
import { start } from "workflow/api";
import { dummyStep } from "@/app/workflows/step";
import { dummyWorkflow } from "@/app/workflows/workflow";

export async function GET() {
  const run = await start(dummyWorkflow);

  const data = await dummyStep();

  return NextResponse.json({
    runId: run.runId,
    data,
  });
}
