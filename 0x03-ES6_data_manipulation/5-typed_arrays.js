export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  if (buffer.byteLength < position) {
    throw new Error('Position outside range');
  }
  const dataBuffer = new DataView(buffer);
  dataBuffer.setInt8(position, value);
  return dataBuffer;
}
