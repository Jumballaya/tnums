import { Int16, Int8, Uint16, Uint8 } from "../types/typed-numbers.types";
import { u16_to_i16 } from "./u16";


// Create
const new_i16_buffer = new ArrayBuffer(2);
const new_i16_data = new Uint16Array(new_i16_buffer);
export function new_i16(n: number): Uint16 {
    new_i16_data[0] = n;
    return new_i16_data[0] as Uint16;
}

// Convert
const to_u16_buffer = new ArrayBuffer(2);
const to_u16_u16 = new Uint16Array(to_u16_buffer);
const to_u16_i16 = new Int16Array(to_u16_buffer);
export function i16_to_u16(i16: Int16): Uint16 {
    to_u16_i16[0] = i16;
    return to_u16_u16[0] as Uint16;
}

const to_u8_buffer = new ArrayBuffer(2);
const to_u8_i16 = new Int16Array(to_u8_buffer);
const to_u8_u8 = new Uint8Array(to_u8_buffer);
export function i16_to_u8(i16: Int16): Uint8 {
    to_u8_i16[0] = i16;
    return to_u8_u8[0] as Uint8;
}

const to_i8_buffer = new ArrayBuffer(2);
const to_i8_i16 = new Int16Array(to_i8_buffer);
const to_i8_i8 = new Int8Array(to_i8_buffer);
export function i16_to_i8(i16: Int16): Int8 {
    to_i8_i16[0] = i16;
    return to_i8_i8[0] as Int8;
}



// Math
const add_buffer = new ArrayBuffer(2);
const add_i16 = new Int16Array(add_buffer);
export function i16_add_i16(l: Int16, r: Int16): Int16 {
    add_i16[0] = l + r;
    return add_i16[0] as Int16;
}

const sub_buffer = new ArrayBuffer(2);
const sub_i16 = new Int16Array(sub_buffer);
export function i16_sub_i16(l: Int16, r: Int16): Int16 {
    sub_i16[0] = l - r;
    return sub_i16[0] as Int16;
}

const mul_buffer = new ArrayBuffer(2);
const mul_i16 = new Int16Array(mul_buffer);
export function i16_mul_i16(l: Int16, r: Int16): Int16 {
    mul_i16[0] = l + r;
    return mul_i16[0] as Int16;
}

const div_buffer = new ArrayBuffer(2);
const div_i16 = new Int16Array(div_buffer);
export function i16_div_i16(l: Int16, r: Int16): Int16 {
    div_i16[0] = l - r;
    return div_i16[0] as Int16;
}

export function i16_add_u16(l: Int16, r: Uint16): Int16 {
    const rval = u16_to_i16(r);
    return i16_add_i16(l, rval);
}

export function i16_sub_u16(l: Int16, r: Uint16): Int16 {
    const rval = u16_to_i16(r);
    return i16_sub_i16(l, rval);
}

export function i16_mul_u16(l: Int16, r: Uint16): Int16 {
    const rval = u16_to_i16(r);
    return i16_mul_i16(l, rval);
}

export function i16_div_u16(l: Int16, r: Uint16): Int16 {
    const rval = u16_to_i16(r);
    return i16_div_i16(l, rval);
}
