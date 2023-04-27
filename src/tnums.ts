import { f32_to_u32, f32_to_i32, new_f32 } from "./numbers/f32";
import { i16_add_i16, i16_add_i8, i16_add_u16, i16_add_u8, i16_div_i16, i16_div_u16, i16_div_u8, i16_from_i8, i16_mul_i16, i16_mul_i8, i16_mul_u16, i16_mul_u8, i16_sub_i16, i16_sub_i8, i16_sub_u16, i16_sub_u8, i16_to_i8, i16_to_u16, new_i16 } from "./numbers/i16";
import { i32_to_f32, i32_to_u32, new_i32 } from "./numbers/i32";
import { new_i8, i8_add_i8, i8_add_u8, i8_div_i8, i8_div_u8, i8_mul_i8, i8_mul_u8, i8_sub_i8, i8_sub_u8, i8_to_u8, i8_to_i16, i8_to_u16 } from "./numbers/i8";
import { new_u16, u16_add_i16, u16_add_i8, u16_add_u16, u16_add_u8, u16_div_i16, u16_div_u16, u16_from_u8, u16_mul_i16, u16_mul_i8, u16_mul_u16, u16_mul_u8, u16_sub_i16, u16_sub_i8, u16_sub_u16, u16_sub_u8, u16_to_i16, u16_to_u8 } from "./numbers/u16";
import { new_u32, u32_to_f32, u32_to_i32 } from "./numbers/u32";
import { new_u8, u8_add_i8, u8_add_u8, u8_div_i8, u8_div_u8, u8_mul_i8, u8_mul_u8, u8_sub_i8, u8_sub_u8, u8_to_i16, u8_to_i8, u8_to_u16 } from "./numbers/u8";

// Uint8
export const u8 = {
    new: new_u8,
    math: {
        add: {
            u8: u8_add_u8,
            i8: u8_add_i8,
        },
        sub: {
            u8: u8_sub_u8,
            i8: u8_sub_i8,
        },
        mul: {
            u8: u8_mul_u8,
            i8: u8_mul_i8,
        },
        div: {
            u8: u8_div_u8,
            i8: u8_div_i8,
        },
    },
    cast: {
        to_i8: u8_to_i8,
        to_u16: u8_to_u16,
        to_i16: u8_to_i16,
    }
};

// Int8
export const i8 = {
    new: new_i8,
    math: {
        add: {
            i8: i8_add_i8,
            u8: i8_add_u8,
        },
        sub: {
            i8: i8_sub_i8,
            u8: i8_sub_u8,
        },
        mul: {
            i8: i8_mul_i8,
            u8: i8_mul_u8,
        },
        div: {
            i8: i8_div_i8,
            u8: i8_div_u8,
        },
    },
    cast: {
        to_u8: i8_to_u8,
        to_u16: i8_to_u16,
        to_i16: i8_to_i16,
    }
}

// Uint16
export const u16 = {
    new: new_u16,
    math: {
        add: {
            u16: u16_add_u16,
            i16: u16_add_i16,
            u8: u16_add_u8,
            i8: u16_add_i8,
        },
        sub: {
            u16: u16_sub_u16,
            i16: u16_sub_i16,
            u8: u16_sub_u8,
            i8: u16_sub_i8,
        },
        mul: {
            u16: u16_mul_u16,
            i16: u16_mul_i16,
            u8: u16_mul_u8,
            i8: u16_mul_i8,
        },
        div: {
            u16: u16_div_u16,
            i16: u16_div_i16,
            u8: u16_div_u8,
            i8: u16_div_i8,
        },
    },
    cast: {
        to_i16: u16_to_i16,
    },
    convert: {
        to_u8: u16_to_u8,
        from_u8: u16_from_u8,
    }
};



// Int16
export const i16 = {
    new: new_i16,
    math: {
        add: {
            i16: i16_add_i16,
            u16: i16_add_u16,
            u8: i16_add_u8,
            i8: i16_add_i8,
        },
        sub: {
            i16: i16_sub_i16,
            u16: i16_sub_u16,
            u8: i16_sub_u8,
            i8: i16_sub_i8,
        },
        mul: {
            i16: i16_mul_i16,
            u16: i16_mul_u16,
            u8: i16_mul_u8,
            i8: i16_mul_i8,
        },
        div: {
            i16: i16_div_i16,
            u16: i16_div_u16,
            u8: i16_div_u8,
            i8: i16_sub_i8,
        },
    },
    cast: {
        to_u16: i16_to_u16,
    },
    convert: {
        from_i8: i16_from_i8,
        to_i8: i16_to_i8,
    },
}

export const u32 = {
    new: new_u32,
    math: {},
    cast: {
        to_i32: u32_to_i32,
        to_f32: u32_to_f32,
    },
    convert: {
        from_u8: null,
        from_u16: null,
        to_u8: null,
        to_u16: null,
    },
}

export const i32 = {
    new: new_i32,
    math: {},
    cast: {
        to_u32: i32_to_u32,
        to_f32: i32_to_f32,
    },
    convert: {
        from_i8: null,
        from_i16: null,
        to_i8: null,
        to_i16: null,
    },
}

export const f32 = {
    new: new_f32,
    math: {},
    cast: {
        to_u32: f32_to_u32,
        to_f32: f32_to_i32,
    },
}


export default { u8, i8, u16, i16, u32, i32, f32 };
