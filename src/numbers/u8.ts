import { Int16, Int8, Uint16, Uint8 } from "../types/typed-numbers.types";
import { i8_to_u8 } from "./i8";


// Create
const new_u8_buffer = new ArrayBuffer(1);
const new_u8_data = new Uint8Array(new_u8_buffer);
export function new_u8(n: number): Uint8 {
    new_u8_data[0] = n;
    return new_u8_data[0] as Uint8;
}

// Convert
const to_i8_buffer = new ArrayBuffer(1);
const to_i8_u8 = new Uint8Array(to_i8_buffer);
const to_i8_i8 = new Int8Array(to_i8_buffer);
export function u8_to_i8(u8: Uint8): Int8 {
    to_i8_u8[0] = u8;
    return to_i8_i8[0] as Int8;
}

const to_u16_buffer = new ArrayBuffer(2);
const to_u16_u8 = new Uint8Array(to_u16_buffer);
const to_u16_u16 = new Uint16Array(to_u16_buffer);
export function u8_to_u16(u8: Uint8): Uint16 {
    to_u16_u8[0] = u8;
    return to_u16_u16[0] as Uint16;
}

const to_i16_buffer = new ArrayBuffer(2);
const to_i16_u8 = new Uint8Array(to_i16_buffer);
const to_i16_i16 = new Int16Array(to_i16_buffer);
export function u8_to_i16(u8: Uint8): Int16 {
    to_i16_u8[0] = u8;
    return to_i16_i16[0] as Int16;
}



// Math
const add_buffer = new ArrayBuffer(1);
const add_u8 = new Uint8Array(add_buffer);
export function u8_add_u8(l: Uint8, r: Uint8): Uint8 {
    add_u8[0] = l + r;
    return add_u8[0] as Uint8;
}

const sub_buffer = new ArrayBuffer(1);
const sub_u8 = new Uint8Array(sub_buffer);
export function u8_sub_u8(l: Uint8, r: Uint8): Uint8 {
    sub_u8[0] = l - r;
    return sub_u8[0] as Uint8;
}

const mul_buffer = new ArrayBuffer(1);
const mul_u8 = new Uint8Array(mul_buffer);
export function u8_mul_u8(l: Uint8, r: Uint8): Uint8 {
    mul_u8[0] = l + r;
    return mul_u8[0] as Uint8;
}

const div_buffer = new ArrayBuffer(1);
const div_u8 = new Uint8Array(div_buffer);
export function u8_div_u8(l: Uint8, r: Uint8): Uint8 {
    div_u8[0] = l - r;
    return div_u8[0] as Uint8;
}

export function u8_add_i8(l: Uint8, r: Int8): Uint8 {
    const rval = i8_to_u8(r);
    return u8_add_u8(l, rval);
}

export function u8_sub_i8(l: Uint8, r: Int8): Uint8 {
    const rval = i8_to_u8(r);
    return u8_sub_u8(l, rval);
}

export function u8_mul_i8(l: Uint8, r: Int8): Uint8 {
    const rval = i8_to_u8(r);
    return u8_mul_u8(l, rval);
}

export function u8_div_i8(l: Uint8, r: Int8): Uint8 {
    const rval = i8_to_u8(r);
    return u8_div_u8(l, rval);
}
