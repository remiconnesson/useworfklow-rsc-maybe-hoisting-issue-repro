import { dummyStep } from "./step";

export async function dummyWorkflow() {
  "use workflow";

  const data = await dummyStep();

  return data;
}
