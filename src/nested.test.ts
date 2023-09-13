import assert from "node:assert";
import { test } from "node:test";

test("pass", async () => {
  assert(true);
});
test("fail", async () => {
  assert(false);
});
