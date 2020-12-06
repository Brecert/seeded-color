import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.79.0/testing/asserts.ts";
import { seededColor } from "../deno_pkg/mod.ts";

Deno.test("[seededColor] example", () => {
  assertEquals(seededColor("bree"), "#13fa4e");

  assertEquals(seededColor(46062), "#ad9200");

  assertEquals(
    seededColor(213021939013239301n),
    "#7529b8"
  );
});
