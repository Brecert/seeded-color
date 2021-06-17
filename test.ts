import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { seededColor } from "./mod.ts";

Deno.test("[seededColor] example", () => {
  assertEquals(seededColor("bree"), "#13fa4e");

  assertEquals(seededColor(46062), "#ad9200");

  assertEquals(
    seededColor(213021939013239301n),
    "#730de5",
  );
});
