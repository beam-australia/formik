export default function gridTemplateColumns(width) {
  return width ? {
    gridTemplateColumns: `repeat(auto-fill, minmax(${width}px, 1fr))`
  } : {}
}
