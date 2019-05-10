export default function gridTemplateColumns(width) {
  return width ? {
    display: 'grid',
    gridAutoRows: '45px',
    gridGap: '5px',
    gridTemplateColumns: `repeat(auto-fill, minmax(${width}px, 1fr))`
  } : {}
}
