import { u8, i8 } from "./typed-numbers";

const red = u8.new(203);
const green = u8.new(73);
const blue = u8.new(100);
const greeni8 = u8.cast.to_i8(green);


const out_i = i8.math.add.u8(greeni8, blue);
const out_u = u8.math.add.i8(blue, greeni8);

console.log(out_i, out_u);

