import { Float32, Int32, Uint32 } from "../types/tnums.types";


// Create
const new_i32_buffer = new ArrayBuffer(4);
const new_i32_data = new Int32Array(new_i32_buffer);
export function new_i32(n: number): Int32 {
    new_i32_data[0] = n;
    return new_i32_data[0] as Int32;
}

// Cast
const to_u32_buffer = new ArrayBuffer(4);
const to_u32_i32 = new Int32Array(to_u32_buffer);
const to_u32_u32 = new Uint32Array(to_u32_buffer);
export function i32_to_u32(i32: Int32): Uint32 {
    to_u32_i32[0] = i32;
    return to_u32_u32[0] as Uint32;
}

const to_f32_buffer = new ArrayBuffer(4);
const to_f32_i32 = new Int32Array(to_f32_buffer);
const to_f32_f32 = new Float32Array(to_f32_buffer);
export function i32_to_f32(i32: Int32): Float32 {
    to_f32_i32[0] = i32;
    return to_f32_f32[0] as Float32;
}
