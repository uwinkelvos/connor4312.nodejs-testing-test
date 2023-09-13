import assert from "node:assert";
import { test } from "node:test";
import esmock from "esmock";

test("mocked", async (t) => {
  const spy = t.mock.fn();
  const { log } = await esmock("./index.js", import.meta.url, {
    "node:console": {
      default: {
        log: spy,
      },
    },
  });
  log();
  assert.strictEqual(spy.mock.callCount(), 1);
});
test("unmocked", async (t) => {
  const spy = t.mock.fn();
  const { log } = await esmock("./index.js", import.meta.url);
  log();
  assert.strictEqual(spy.mock.callCount(), 0);
});
