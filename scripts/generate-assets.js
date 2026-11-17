const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

// 1. Generate ryda-icon.png (64x64 icon: University Navy #0A2D6B background with Electric Lime #7CFC00 bike/R symbol)
function createIconPng(width, height) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type: RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c;
  }
  function crc32(buf) {
    let c = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
    }
    return (c ^ 0xffffffff) >>> 0;
  }

  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const chunkType = Buffer.from(type);
    const body = Buffer.concat([chunkType, data]);
    const crc = crc32(body);
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crc, 0);
    return Buffer.concat([len, body, crcBuf]);
  }

  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(rowSize * height);

  // Navy: #0A2D6B (10, 45, 107)
  // Lime: #7CFC00 (124, 252, 0)
  // White: #FFFFFF (255, 255, 255)
  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0;
    for (let x = 0; x < width; x++) {
      const px = rowOffset + 1 + x * 4;
      
      // Rounded corner box
      const r = 14;
      const dx = Math.max(r - x, 0, x - (width - 1 - r));
      const dy = Math.max(r - y, 0, y - (height - 1 - r));
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist > r) {
        // Transparent outside rounded rect
        rawData[px] = 0;
        rawData[px + 1] = 0;
        rawData[px + 2] = 0;
        rawData[px + 3] = 0;
        continue;
      }

      // Check if inside central bike wheel / monogram
      // Left wheel center: (22, 40), Right wheel center: (42, 40), radius: 8
      const dLeftWheel = Math.sqrt((x - 22) ** 2 + (y - 40) ** 2);
      const dRightWheel = Math.sqrt((x - 42) ** 2 + (y - 40) ** 2);
      const isWheelRim = (dLeftWheel >= 6 && dLeftWheel <= 8.5) || (dRightWheel >= 6 && dRightWheel <= 8.5);
      const isWheelHub = (dLeftWheel <= 2.5) || (dRightWheel <= 2.5);
      
      // Frame lines:
      // Line from (22, 40) to (32, 26) [seat tube], line from (32, 26) to (42, 40) [down tube]
      // line from (32, 26) to (27, 20) [seat], line from (42, 40) to (38, 22) [fork/handlebar]
      const isFrame = (
        (y >= 26 && y <= 40 && Math.abs((y - 26) - 1.4 * (x - 22)) < 1.8) ||
        (y >= 26 && y <= 40 && Math.abs((y - 26) + 1.4 * (x - 42)) < 1.8) ||
        (y >= 25 && y <= 27 && x >= 24 && x <= 33) ||
        (y >= 21 && y <= 23 && x >= 36 && x <= 43)
      );

      if (isWheelRim || isWheelHub || isFrame) {
        // Electric Lime (#7CFC00)
        rawData[px] = 124;
        rawData[px + 1] = 252;
        rawData[px + 2] = 0;
        rawData[px + 3] = 255;
      } else {
        // University Navy (#0A2D6B)
        rawData[px] = 10;
        rawData[px + 1] = 45;
        rawData[px + 2] = 107;
        rawData[px + 3] = 255;
      }
    }
  }

  const idatData = zlib.deflateSync(rawData);
  const idat = makeChunk("IDAT", idatData);
  const ihdrChunk = makeChunk("IHDR", ihdr);
  const iend = makeChunk("IEND", Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idat, iend]);
}

const pngBuffer = createIconPng(64, 64);
fs.writeFileSync(path.join(__dirname, "../public/brand/ryda-icon.png"), pngBuffer);
console.log("Created ryda-icon.png successfully!");
