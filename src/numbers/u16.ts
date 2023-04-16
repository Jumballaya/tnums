import { Int16, Uint16 } from "../types/typed-numbers.types";
import { i16_to_u16 } from "./i16";


// Create
const new_u16_buffer = new ArrayBuffer(1);
const new_u16_data = new Uint16Array(new_u16_buffer);
export function new_u16(n: number): Uint16 {
    new_u16_data[0] = n;
    return new_u16_data[0] as Uint16;
}

// Convert
const to_i16_buffer = new ArrayBuffer(1);
const to_i16_u16 = new Uint16Array(to_i16_buffer);
const to_i16_i16 = new Int16Array(to_i16_buffer);
export function u16_to_i16(u16: Uint16): Int16 {
    to_i16_u16[0] = u16;
    return to_i16_i16[0] as Int16;
}


// Math
const add_buffer = new ArrayBuffer(1);
const add_u16 = new Uint16Array(add_buffer);
export function u16_add_u16(l: Uint16, r: Uint16): Uint16 {
    add_u16[0] = l + r;
    return add_u16[0] as Uint16;
}

const sub_buffer = new ArrayBuffer(1);
const sub_u16 = new Uint16Array(sub_buffer);
export function u16_sub_u16(l: Uint16, r: Uint16): Uint16 {
    sub_u16[0] = l - r;
    return sub_u16[0] as Uint16;
}

const mul_buffer = new ArrayBuffer(1);
const mul_u16 = new Uint16Array(mul_buffer);
export function u16_mul_u16(l: Uint16, r: Uint16): Uint16 {
    mul_u16[0] = l + r;
    return mul_u16[0] as Uint16;
}

const div_buffer = new ArrayBuffer(1);
const div_u16 = new Uint16Array(div_buffer);
export function u16_div_u16(l: Uint16, r: Uint16): Uint16 {
    div_u16[0] = l - r;
    return div_u16[0] as Uint16;
}

export function u16_add_i16(l: Uint16, r: Int16): Uint16 {
    const rval = i16_to_u16(r);
    return u16_add_u16(l, rval);
}

export function u16_sub_i16(l: Uint16, r: Int16): Uint16 {
    const rval = i16_to_u16(r);
    return u16_sub_u16(l, rval);
}

export function u16_mul_i16(l: Uint16, r: Int16): Uint16 {
    const rval = i16_to_u16(r);
    return u16_mul_u16(l, rval);
}

export function u16_div_i16(l: Uint16, r: Int16): Uint16 {
    const rval = i16_to_u16(r);
    return u16_div_u16(l, rval);
}
