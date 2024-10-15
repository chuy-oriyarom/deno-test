import { procesateDataObj } from "./core-services/service/user.service.ts";

export function add(a: number, b: number): number {
  return a + b;
}
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Perrita"));

procesateDataObj();

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
