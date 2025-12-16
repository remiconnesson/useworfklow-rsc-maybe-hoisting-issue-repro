import { dummyStep } from "./step";

export async function dummyWorkflow() {
  "use workflow";

  const _data = await dummyStep();
}
