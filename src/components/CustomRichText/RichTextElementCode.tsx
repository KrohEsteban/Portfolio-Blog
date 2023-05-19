import React from 'react';

const RichTextElementCode: React.FC<any> = ({ attributes, children }) => (
  <div
    {...attributes}
    style={{ fontStyle: 'italic', letterSpacing: '0.2em' }}
  >
   {children}
  </div>
);

export default RichTextElementCode;