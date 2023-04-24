# tnums

Pronounced 'tee-nums', tnums can be used to create typed numbers of various sizes. tnums also provides functions to convert between types and functions for simple binary operations like adding and subtracting.

Number Types: `u8 i8 u16 i16 u32 i32 f32 u64 i64 f64`

## Example

```
import { u8, u32, Uint8 } from 'tnums';

interface Color {
    red: Uint8;
    blue: Uint8;
    green: Uint8;
    alhpa: Uint8;
};

function colorToString(color: Color): string {
    const color32 = u32.convert.from_u8(color.red, color.blue, color.green, color.alpha);
    return `#${color32.toString(16)}`;
}

const RED: Color = {
    red: u8.new(255),
    blue: u8.new(0),
    green: u8.new(0),
    alpha: u8.new(255),
};

...

ctx.fillStyle = colorToString(RED);


```

# API

## Types
Import types from main package like so:
```
import { u8, u16, f32 } from 'tnums';
```

The overall type API is as follows:

- Create: `<T>.new(n: number) => <T>` 
- Math: `<T>.math.add.<T2>(a: <T>, b: <T2>) => <T>`
- Cast: `<T>.cast.to_<T2>(n: <T>) => <T2>`

The type conversion and creating is done using a series of ArrayBuffers and Typed Arrays.

<hr />

### u8

**Create New u8**
```
import { u8 } from 'tnums';

const red = u8.new(144);
```

**Math**

- Addition
    * `u8 + u8`: `u8.math.add.u8(a: Uint8, b: Uint8) => Uint8`
    * `u8 + i8`: `u8.math.add.i8(a: Uint8, b: Int8) => Uint8`
- Subtraction
    * `u8 - u8`: `u8.math.sub.u8(a: Uint8, b: Uint8) => Uint8`
    * `u8 - i8`: `u8.math.sub.i8(a: Uint8, b: Int8) => Uint8`
- Multiplication
    * `u8 * u8`: `u8.math.mul.u8(a: Uint8, b: Uint8) => Uint8`
    * `u8 * i8`: `u8.math.mul.i8(a: Uint8, b: Int8) => Uint8`
- Division
    * `u8 / u8`: `u8.math.div.u8(a: Uint8, b: Uint8) => Uint8`
    * `u8 / i8`: `u8.math.div.i8(a: Uint8, b: Int8) => Uint8`

**Cast**

- To `i8`: `u8.cast.to_i8(n: Uint8) => Int8`
- To `u16`: `u8.cast_to_u16(n: Uint8) => Uint16`
- To `i16`: `u8.cast_to_i16(n: Uint8) => Int16`
- To `u32`: `u8.cast_to_u32(n: Uint8) => Uint32`
- To `i32`: `u8.cast_to_i32(n: Uint8) => Int32`
- To `f32`: `u8.cast_to_f32(n: Uint8) => Float32`
- To `u64`: `u8.cast_to_u64(n: Uint8) => Uint64`
- To `i64`: `u8.cast_to_i64(n: Uint8) => Int64`
- To `f64`: `u8.cast_to_f64(n: Uint8) => Float64`

<hr />

### i8

**Create New u8**
```
import { i8 } from 'tnums';

const temperature = i8.new(-52);
```

**Math**

- Addition
    * `i8 + i8`: `i8.math.add.i8(a: Uint8, b: Int8) => Int8`
    * `i8 + u8`: `i8.math.add.u8(a: Uint8, b: Uint8) => Int8`
- Subtraction
    * `i8 - i8`: `i8.math.sub.i8(a: Int8, b: Int8) => Int8`
    * `i8 - u8`: `i8.math.sub.u8(a: Int8, b: Uint8) => Int8`
- Multiplication
    * `i8 * i8`: `i8.math.mul.i8(a: Int8, b: Int8) => Int8`
    * `i8 * u8`: `i8.math.mul.u8(a: Int8, b: Uint8) => Int8`
- Division
    * `i8 / i8`: `i8.math.div.i8(a: Int8, b: Int8) => Int8`
    * `i8 / u8`: `i8.math.div.u8(a: Int8, b: Uint8) => Int8`

**Cast**

- To `u8`: `i8.cast.to_u8(n: Int8) => Uint8`
- To `u16`: `u8.cast_to_u16(n: Uint8) => Uint16`
- To `i16`: `u8.cast_to_i16(n: Uint8) => Int16`
- To `u32`: `u8.cast_to_u32(n: Uint8) => Uint32`
- To `i32`: `u8.cast_to_i32(n: Uint8) => Int32`
- To `f32`: `u8.cast_to_f32(n: Uint8) => Float32`
- To `u64`: `u8.cast_to_u64(n: Uint8) => Uint64`
- To `i64`: `u8.cast_to_i64(n: Uint8) => Int64`
- To `f64`: `u8.cast_to_f64(n: Uint8) => Float64`


<hr />

### u16

**Create New u16**
```
import { u16 } from 'tnums';

const port = u16.new(8080);
```

**Math**

- Addition
    * `u16 + u16`: `u16.math.add.u16(a: Uint16, b: Uint16) => Uint16`
    * `u16 + i16`: `u16.math.add.i16(a: Uint16, b: Int16) => Uint16`
    * `u16 + u8`: `u16.math.add.u8(a: Uint16, b: Uint8) => Uint16`
    * `u16 + i8`: `u16.math.add.i8(a: Uint16, b: Int8) => Uint16`
- Subtraction
    * `u16 - u16`: `u16.math.sub.u16(a: Uint16, b: Uint16) => Uint16`
    * `u16 - i16`: `u16.math.sub.i16(a: Uint16, b: Int16) => Uint16`
    * `u16 - u8`: `u16.math.sub.u8(a: Uint16, b: Uint8) => Uint16`
    * `u16 - i8`: `u16.math.sub.i8(a: Uint16, b: Int8) => Uint16`
- Multiplication
    * `u16 * u16`: `u16.math.mul.u16(a: Uint16, b: Uint16) => Uint16`
    * `u16 * i16`: `u16.math.mul.i16(a: Uint16, b: Int16) => Uint16`
    * `u16 * u8`: `u16.math.mul.u8(a: Uint16, b: Uint8) => Uint16`
    * `u16 * i8`: `u16.math.mul.i8(a: Uint16, b: Int8) => Uint16`
- Division
    * `u16 / u16`: `u16.math.div.u16(a: Uint16, b: Uint16) => Uint16`
    * `u16 / i16`: `u16.math.div.i16(a: Uint16, b: Int16) => Uint16`
    * `u16 / u8`: `u16.math.div.u8(a: Uint16, b: Uint8) => Uint16`
    * `u16 / i8`: `u16.math.div.i8(a: Uint16, b: Int8) => Uint16`

**Cast**

- To `i16`: `u16.cast_to_i16(n: Uint16) => Int16`
- To `u32`: `u16.cast_to_u32(n: Uint16) => Uint32`
- To `i32`: `u16.cast_to_i32(n: Uint16) => Int32`
- To `f32`: `u16.cast_to_f32(n: Uint16) => Float32`
- To `u64`: `u16.cast_to_u64(n: Uint16) => Uint64`
- To `i64`: `u16.cast_to_i64(n: Uint16) => Int64`
- To `f64`: `u16.cast_to_f64(n: Uint16) => Float64`

**Convert**
- From `u8`: `u16.convert.from_u8(h: Uint8, l: Uint8) => Uint16`
- To: `u8`: `u16.convert.to_u8(n: Uint16) => [Uint8, Uint8]`

<hr />

### i16

**Create New i16**
```
import { i16 } from 'tnums';

const contestant_score = i16.new(0);
```

**Math**

- Addition
    * `i16 + i16`: `i16.math.add.i16(a: Int16, b: Int16) => Int16`
    * `i16 + u16`: `i16.math.add.u16(a: Int16, b: Uint16) => Int16`
    * `i16 + u8`: `i16.math.add.u8(a: Int16, b: Uint8) => Int16`
    * `i16 + i8`: `i16.math.add.i8(a: Int16, b: Int8) => Int16`
- Subtraction
    * `i16 - i16`: `i16.math.sub.i16(a: Int16, b: Int16) => Int16`
    * `i16 - u16`: `i16.math.sub.u16(a: Int16, b: Uint16) => Int16`
    * `i16 - u8`: `i16.math.sub.u8(a: Int16, b: Uint8) => Int16`
    * `i16 - i8`: `i16.math.sub.i8(a: Int16, b: Int8) => Int16`
- Multiplication
    * `i16 * i16`: `i16.math.mul.i16(a: Int16, b: Int16) => Int16`
    * `i16 * u16`: `i16.math.mul.u16(a: Int16, b: Uint16) => Int16`
    * `i16 * u8`: `i16.math.mul.u8(a: Int16, b: Uint8) => Int16`
    * `i16 * i8`: `i16.math.mul.i8(a: Int16, b: Int8) => Int16`
- Division
    * `i16 / i16`: `i16.math.div.i16(a: Int16, b: Int16) => Int16`
    * `i16 / u16`: `i16.math.div.u16(a: Int16, b: Uint16) => Int16`
    * `i16 / u8`: `i16.math.div.u8(a: Int16, b: Uint8) => Int16`
    * `i16 / i8`: `i16.math.div.i8(a: Int16, b: Int8) => Int16`

**Cast**

- To `u16`: `i16.cast_to_i16(n: Int16) => Uint16`
- To `u32`: `i16.cast_to_u32(n: Int16) => Uint32`
- To `i32`: `i16.cast_to_i32(n: Int16) => Int32`
- To `f32`: `i16.cast_to_f32(n: Int16) => Float32`
- To `u64`: `i16.cast_to_u64(n: Int16) => Uint64`
- To `i64`: `i16.cast_to_i64(n: Int16) => Int64`
- To `f64`: `i16.cast_to_f64(n: Int16) => Float64`

**Convert**
- From `i8`: `i16.convert.from_i8(h: Int8, l: Int8) => Int16`
- To: `i8`: `i16.convert.to_i8(n: Int16) => [Int8, Int8]`
