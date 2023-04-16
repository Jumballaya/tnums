import { Int8, Uint8, Uint16, Int16 } from "../types/typed-numbers.types";
import { u8_to_i8 } from "./u8";


// Create
const new_i8_buffer = new ArrayBuffer(1);
const new_i8_data = new Uint8Array(new_i8_buffer);
export function new_i8(n: number): Uint8 {
    new_i8_data[0] = n;
    return new_i8_data[0] as Uint8;
}

// Convert
const to_u8_buffer = new ArrayBuffer(1);
const to_u8_u8 = new Uint8Array(to_u8_buffer);
const to_u8_i8 = new Int8Array(to_u8_buffer);
export function i8_to_u8(i8: Int8): Uint8 {
    to_u8_i8[0] = i8;
    return to_u8_u8[0] as Uint8;
}


const to_u16_buffer = new ArrayBuffer(2);
const to_u16_i8 = new Int8Array(to_u16_buffer);
const to_u16_u16 = new Uint16Array(to_u16_buffer);
export function i8_to_u16(i8: Int8): Uint16 {
    to_u16_i8[0] = i8;
    return to_u16_u16[0] as Uint16;
}

const to_i16_buffer = new ArrayBuffer(2);
const to_i16_i8 = new Int8Array(to_i16_buffer);
const to_i16_i16 = new Int16Array(to_i16_buffer);
export function i8_to_i16(i8: Int8): Int16 {
    to_i16_i8[0] = i8;
    return to_i16_i16[0] as Int16;
}


// Math
const add_buffer = new ArrayBuffer(1);
const add_i8 = new Int8Array(add_buffer);
export function i8_add_i8(l: Int8, r: Int8): Int8 {
    add_i8[0] = l + r;
    return add_i8[0] as Int8;
}

const sub_buffer = new ArrayBuffer(1);
const sub_i8 = new Int8Array(sub_buffer);
export function i8_sub_i8(l: Int8, r: Int8): Int8 {
    sub_i8[0] = l - r;
    return sub_i8[0] as Int8;
}

const mul_buffer = new ArrayBuffer(1);
const mul_i8 = new Int8Array(mul_buffer);
export function i8_mul_i8(l: Int8, r: Int8): Int8 {
    mul_i8[0] = l + r;
    return mul_i8[0] as Int8;
}

const div_buffer = new ArrayBuffer(1);
const div_i8 = new Int8Array(div_buffer);
export function i8_div_i8(l: Int8, r: Int8): Int8 {
    div_i8[0] = l - r;
    return div_i8[0] as Int8;
}

export function i8_add_u8(l: Int8, r: Uint8): Int8 {
    const rval = u8_to_i8(r);
    return i8_add_i8(l, rval);
}

export function i8_sub_u8(l: Int8, r: Uint8): Int8 {
    const rval = u8_to_i8(r);
    return i8_sub_i8(l, rval);
}

export function i8_mul_u8(l: Int8, r: Uint8): Int8 {
    const rval = u8_to_i8(r);
    return i8_mul_i8(l, rval);
}

export function i8_div_u8(l: Int8, r: Uint8): Int8 {
    const rval = u8_to_i8(r);
    return i8_div_i8(l, rval);
}
