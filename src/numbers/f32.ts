import { Float32, Int32, Uint32 } from "../types/tnums.types";


// Create
const new_f32_buffer = new ArrayBuffer(4);
const new_f32_data = new Float32Array(new_f32_buffer);
export function new_f32(n: number): Float32 {
    new_f32_data[0] = n;
    return new_f32_data[0] as Float32;
}

// Cast
const to_u32_buffer = new ArrayBuffer(4);
const to_u32_f32 = new Float32Array(to_u32_buffer);
const to_u32_u32 = new Uint32Array(to_u32_buffer);
export function f32_to_u32(f32: Float32): Uint32 {
    to_u32_f32[0] = f32;
    return to_u32_u32[0] as Uint32;
}

const to_i32_buffer = new ArrayBuffer(4);
const to_i32_f32 = new Float32Array(to_i32_buffer);
const to_i32_i32 = new Int32Array(to_i32_buffer);
export function f32_to_i32(f32: Float32): Int32 {
    to_i32_f32[0] = f32;
    return to_i32_i32[0] as Int32;
}
