"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let t = Date.now() * 1e3, s = process.pid.toString(36), e = g(2), k = g(4), l = 0;
s = s + g(6 - s.length);
function fast() {
    const n = (t++).toString(36);
    return s + n + e.substr(0, 12 - n.length);
}
exports.fast = fast;
function timestamp() {
    let p = (Date.now() * 1e3);
    while (p <= l)
        p++;
    l = p;
    const n = p.toString(36);
    return s + n + k.substr(0, 12 - n.length);
}
exports.timestamp = timestamp;
function random() {
    return r(18);
}
exports.random = random;
function g(n, r = '') {
    for (let i = n; i--;)
        r += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];
    return r;
}
function r(n, r = '') {
    for (let i = n; i--;)
        r += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwuxyz1234567890'[Math.floor(Math.random() * 63)];
    return r;
}
