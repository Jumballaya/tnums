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

## API

### Types
Import types from main package like so:
```
import { u8, u16, f32 } from 'tnums';
```

The overall type API is as follows:

- Create: `<T>.new(n: number) => <T>` 
- Math: `<T>.math.add.<T2>(a: <T>, b: <T2>) => <T>`
- Cast: `<T>.cast.to_<T2>(n: <T>) => <T2>`

The type conversion and creating is done using a series of ArrayBuffers and Typed Arrays.


#### u8

**Create New u8**
```
import { u8 } from 'tnums';

const red = u8.new(144);
```

**Math**

- Addition
    -`u8 + u8`: `u8.math.add.u8(a: Uint8, b: Uint8) => Uint8`
    -`u8 + i8`: `u8.math.add.i8(a: Uint8, b: Int8) => Uint8`
- Subtraction
    -`u8 - u8`: `u8.math.sub.u8(a: Uint8, b: Uint8) => Uint8`
    -`u8 - i8`: `u8.math.sub.i8(a: Uint8, b: Int8) => Uint8`
- Multiplication
    -`u8 * u8`: `u8.math.mul.u8(a: Uint8, b: Uint8) => Uint8`
    -`u8 * i8`: `u8.math.mul.i8(a: Uint8, b: Int8) => Uint8`
- Division
    -`u8 / u8`: `u8.math.div.u8(a: Uint8, b: Uint8) => Uint8`
    -`u8 / i8`: `u8.math.div.i8(a: Uint8, b: Int8) => Uint8`

**Cast**

- To `i8`: `u8.cast.to_i8(n: Uint8) => Int8`
- To `u16`: `u8.cast_to_u16(n: Uint8) => Uint16`
- To `i16`: `u8.cast_to_i16(n: Uint8) => Int16`


#### i8

**Create New u8**
```
import { i8 } from 'tnums';

const temperature = i8.new(-52);
```

**Math**

- Addition
    -`i8 + i8`: `i8.math.add.i8(a: Uint8, b: Int8) => Int8`
    -`i8 + u8`: `i8.math.add.u8(a: Uint8, b: Uint8) => Int8`
- Subtraction
    -`i8 - i8`: `i8.math.sub.i8(a: Int8, b: Int8) => Int8`
    -`i8 - u8`: `i8.math.sub.u8(a: Int8, b: Uint8) => Int8`
- Multiplication
    -`i8 * i8`: `i8.math.mul.i8(a: Int8, b: Int8) => Int8`
    -`i8 * u8`: `i8.math.mul.u8(a: Int8, b: Uint8) => Int8`
- Division
    -`i8 / i8`: `i8.math.div.i8(a: Int8, b: Int8) => Int8`
    -`i8 / u8`: `i8.math.div.u8(a: Int8, b: Uint8) => Int8`

**Cast**

- To `u8`: `i8.cast.to_u8(n: Int8) => Uint8`
- To `u16`: `i8.cast_to_u16(n: Int8) => Uint16`
- To `i16`: `i8.cast_to_i16(n: Int8) => Int16`

#### u16

#### i16
