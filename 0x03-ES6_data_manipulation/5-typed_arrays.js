export default function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);
  // Create a DataView for the buffer
  const view = new DataView(buffer);
  
  // Check if the position is outside the range
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  
  // Set the value at the specified position
  view.setInt8(position, value);
  
  // Return the DataView
  return view;
}
