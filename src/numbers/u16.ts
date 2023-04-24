import { Int16, Int8, Uint16, Uint8 } from "../types/typed-numbers.types";
import { i16_from_i8, i16_to_u16 } from "./i16";
import { new_i8 } from "./i8";
import { new_u8 } from "./u8";


// Create
const new_u16_buffer = new ArrayBuffer(2);
const new_u16_data = new Uint16Array(new_u16_buffer);
export function new_u16(n: number): Uint16 {
    new_u16_data[0] = n;
    return new_u16_data[0] as Uint16;
}

// Cast
const to_i16_buffer = new ArrayBuffer(2);
const to_i16_u16 = new Uint16Array(to_i16_buffer);
const to_i16_i16 = new Int16Array(to_i16_buffer);
export function u16_to_i16(u16: Uint16): Int16 {
    to_i16_u16[0] = u16;
    return to_i16_i16[0] as Int16;
}

// Convert
const from_u8_buffer = new ArrayBuffer(2);
const from_u8_u16 = new Uint16Array(from_u8_buffer);
const from_u8_u8 = new Uint8Array(from_u8_buffer);
export function u16_from_u8(h: Uint8, l: Uint8): Uint16 {
    from_u8_u8[0] = l;
    from_u8_u8[1] = h;
    return from_u8_u16[0];
}

const to_u8_buffer = new ArrayBuffer(2);
const to_u8_u16 = new Uint16Array(to_u8_buffer);
const to_u8_u8 = new Uint8Array(to_u8_buffer);
export function u16_to_u8(u16: Uint16): [Uint8, Uint8] {
    to_u8_u16[0] = u16;
    return [to_u8_u8[0], to_u8_u8[1]] as [Uint8, Uint8];
}

// Math
const add_buffer = new ArrayBuffer(2);
const add_u16 = new Uint16Array(add_buffer);
export function u16_add_u16(l: Uint16, r: Uint16): Uint16 {
    add_u16[0] = l + r;
    return add_u16[0] as Uint16;
}

const sub_buffer = new ArrayBuffer(2);
const sub_u16 = new Uint16Array(sub_buffer);
export function u16_sub_u16(l: Uint16, r: Uint16): Uint16 {
    sub_u16[0] = l - r;
    return sub_u16[0] as Uint16;
}

const mul_buffer = new ArrayBuffer(2);
const mul_u16 = new Uint16Array(mul_buffer);
export function u16_mul_u16(l: Uint16, r: Uint16): Uint16 {
    mul_u16[0] = l + r;
    return mul_u16[0] as Uint16;
}

const div_buffer = new ArrayBuffer(2);
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

export function u16_add_u8(l: Uint16, r: Uint8): Uint16 {
    const rval = u16_from_u8(new_u8(0), r);
    return u16_add_u16(l, rval);
}

export function u16_sub_u8(l: Uint16, r: Uint8): Uint16 {
    const rval = u16_from_u8(new_u8(0), r);
    return u16_sub_u16(l, rval);
}

export function u16_mul_u8(l: Uint16, r: Uint8): Uint16 {
    const rval = u16_from_u8(new_u8(0), r);
    return u16_mul_u16(l, rval);
}

export function u16_div_u8(l: Uint16, r: Uint8): Uint16 {
    const rval = u16_from_u8(new_u8(0), r);
    return u16_div_u16(l, rval);
}

export function u16_add_i8(l: Uint16, r: Int8): Uint16 {
    const intR = i16_from_i8(new_i8(0), r);
    const rval = i16_to_u16(intR);
    return u16_add_u16(l, rval);
}

export function u16_sub_i8(l: Uint16, r: Int8): Uint16 {
    const intR = i16_from_i8(new_i8(0), r);
    const rval = i16_to_u16(intR);
    return u16_sub_u16(l, rval);
}

export function u16_mul_i8(l: Uint16, r: Int8): Uint16 {
    const intR = i16_from_i8(new_i8(0), r);
    const rval = i16_to_u16(intR);
    return u16_add_u16(l, rval);
}

export function u16_div_i8(l: Uint16, r: Int8): Uint16 {
    const intR = i16_from_i8(new_i8(0), r);
    const rval = i16_to_u16(intR);
    return u16_div_u16(l, rval);
}
