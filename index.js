"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let t = Date.now() * 1e3, s = process.pid.toString(36), e = g(2), k = g(4);
s = s + g(6 - s.length);
function fast() {
    const n = (t++).toString(36);
    return s + n + e.substr(0, 12 - n.length);
}
exports.fast = fast;
function timestamp() {
    const n = Date.now().toString(36);
    return s + n + k.substr(0, 12 - n.length);
}
exports.timestamp = timestamp;
function g(n, r = '') {
    for (let i = n; i--;)
        r += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];
    return r;
}
