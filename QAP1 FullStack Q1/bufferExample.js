// Using buffer
console.log("Using buffer features:");

const buf = Buffer.from('Hello, Buffer!');
console.log("Buffer content:", buf);
console.log("Buffer as string:", buf.toString());

const buf2 = Buffer.alloc(5);
buf.copy(buf2, 0, 0, 5);
console.log("Copied Buffer content:", buf2.toString());
