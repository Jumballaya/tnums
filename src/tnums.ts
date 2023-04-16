import { i16_add_i16, i16_add_u16, i16_div_i16, i16_div_u16, i16_mul_i16, i16_mul_u16, i16_sub_i16, i16_sub_u16, i16_to_i8, i16_to_u16, i16_to_u8, new_i16 } from "./numbers/i16";
import { new_i8, i8_add_i8, i8_add_u8, i8_div_i8, i8_div_u8, i8_mul_i8, i8_mul_u8, i8_sub_i8, i8_sub_u8, i8_to_u8, i8_to_i16, i8_to_u16 } from "./numbers/i8";
import { new_u16, u16_add_i16, u16_add_u16, u16_div_i16, u16_div_u16, u16_mul_i16, u16_mul_u16, u16_sub_i16, u16_sub_u16, u16_to_i16, u16_to_i8, u16_to_u8 } from "./numbers/u16";
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
        },
        sub: {
            u16: u16_sub_u16,
            i16: u16_sub_i16,
        },
        mul: {
            u16: u16_mul_u16,
            i16: u16_mul_i16,
        },
        div: {
            u16: u16_div_u16,
            i16: u16_div_i16,
        },
    },
    cast: {
        to_i16: u16_to_i16,
        to_u8: u16_to_u8,
        to_i8: u16_to_i8,
    }
};



// Int16
export const i16 = {
    new: new_i16,
    math: {
        add: {
            i16: i16_add_i16,
            u16: i16_add_u16,
        },
        sub: {
            i16: i16_sub_i16,
            u16: i16_sub_u16,
        },
        mul: {
            i16: i16_mul_i16,
            u16: i16_mul_u16,
        },
        div: {
            i16: i16_div_i16,
            u16: i16_div_u16,
        },
    },
    cast: {
        to_u16: i16_to_u16,
        to_u8: i16_to_u8,
        to_i8: i16_to_i8,
    }
}


export default { u8, i8, u16, i16 };
