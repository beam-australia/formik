import React from 'react';

export default props => (
  <div style={{ margin: '1rem 0' }}>
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '14px',
        padding: '10px',
        fontFamily: 'monospace',
      }}
    >
      {JSON.stringify(props, null, 2)}
    </pre>
  </div>
)
