import { Float32, Int32, Uint32 } from "../types/tnums.types";


// Create
const new_u32_buffer = new ArrayBuffer(4);
const new_u32_data = new Uint32Array(new_u32_buffer);
export function new_u32(n: number): Uint32 {
    new_u32_data[0] = n;
    return new_u32_data[0] as Uint32;
}

// Cast
const to_i32_buffer = new ArrayBuffer(4);
const to_i32_u32 = new Uint32Array(to_i32_buffer);
const to_i32_i32 = new Int32Array(to_i32_buffer);
export function u32_to_i32(u32: Uint32): Int32 {
    to_i32_u32[0] = u32;
    return to_i32_i32[0] as Int32;
}

const to_f32_buffer = new ArrayBuffer(4);
const to_f32_u32 = new Uint32Array(to_f32_buffer);
const to_f32_f32 = new Float32Array(to_f32_buffer);
export function u32_to_f32(u32: Uint32): Float32 {
    to_f32_u32[0] = u32;
    return to_f32_f32[0] as Float32;
}
