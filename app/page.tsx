import { start } from "workflow/api";
import { dummyStep } from "./workflows/step";
import { dummyWorkflow } from "./workflows/workflow";

export const dynamic = "force-dynamic";

export default async function DummyRSC() {
  const run = await start(dummyWorkflow);

  const data = dummyStep();

  return (
    <pre>
      runId: {run.runId}
      data: {JSON.stringify(data)}
    </pre>
  );
}
