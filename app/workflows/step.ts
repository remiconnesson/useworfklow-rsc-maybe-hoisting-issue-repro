import { dummyUtil } from "@/utils/dummy-util";

export async function dummyStep() {
  "use step";
  const data = dummyUtil({ id: crypto.randomUUID() });
  console.log(data);
  return data;
}
