# fast-unique-id

fast-unique-id is a super lightweight package written in typescript that allows you generate universal unique identifier (non-standard) in 18 characters.


## Installation

```sh
npm i fast-unique-id
```

## Usage

```js
import * as uniqueID from 'fast-unique-id';

console.log(uniqueID.fast());
//68kUVYfj05caqmg0PL

console.log(uniqueID.timestamp());
//68kUVYk4gw9lp3ENRP
```

## Format & Performance

|Method|Length|Format|Performance (Ryzen 5 1600)
|-|:-:|:-:|-:|
|`uniqueID.fast()`|18| `pid + prefix + timestamp + random suffix`|1919 ops/sec|
|`uniqueID.timestamp()`|18|`pid + prefix + init timestamp + offset + random suffix`|1725 ops/sec|


## Collision
- multi thread safe
- no collision risk under **1000 ids/sec** on average
- any time related functions will be working fine before human extinction
