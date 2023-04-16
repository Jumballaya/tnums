type Brand<K, T> = K & { __brand: T };

export type Uint8 = Brand<number, 'u8'>;
export type Int8 = Brand<number, 'i8'>;

export type Uint16 = Brand<number, 'u16'>;
export type Int16 = Brand<number, 'i16'>;

export type Uint32 = Brand<number, 'u32'>;
export type Int32 = Brand<number, 'i32'>;
export type Float32 = Brand<number, 'f32'>;

export type Uint64 = Brand<number, 'u64'>;
export type Int64 = Brand<number, 'i64'>;
export type Float64 = Brand<number, 'f64'>;
