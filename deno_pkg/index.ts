import { seededNumbers } from "https://raw.githubusercontent.com/Brecert/seeded-numbers/main/mod.ts";

/* NOT RANDOM! */
export const stringSeed = (str: string) =>
  [...str]
    .map((a) => a.charCodeAt(0))
    .map((a) => a << 16)
    .reduce((a, b) => a ^ b);

export const getNum = (val: string | number | bigint) => {
  switch (typeof val) {
    case "string":
      return stringSeed(val);
    case "number":
    case "bigint":
      return val;
    default:
      throw new Error(
        `typeof ${val}: ${typeof val} cannot be made into a seed.`
      );
  }
};

export const seededColor = (val: number | bigint | string) => {
  let seededNumber = seededNumbers(getNum(val)).next().value;
  let color = (seededNumber || 0) & 0xffffff;
  return "#" + color.toString(16).padEnd(6, "0");
};
