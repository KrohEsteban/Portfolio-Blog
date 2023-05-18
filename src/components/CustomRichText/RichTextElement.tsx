import React from 'react';

const RichTextElement: React.FC<any> = ({ attributes, children }) => (
  <span
    {...attributes}
    style={{ fontStyle: 'italic', letterSpacing: '0.2em' }}
  >
   {children}
  </span>
);

export default RichTextElement;