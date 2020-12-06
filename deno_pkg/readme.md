# seeded-color
> generate a psuedorandom color from a seed

## Usage
```js
import { seededColor } from "seeded-color";

assertEquals(seededColor("bree"), "#13fa4e");

assertEquals(seededColor(46062), "#ad9200");

assertEquals(
  seededColor(213021939013239301n),
  "#730de5"
);
```