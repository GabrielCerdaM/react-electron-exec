import { getContracts } from "./getContracts";

export async function loaderContract() {
  const contracts = await getContracts();
  console.log({ contracts });
  return { contracts };
}
