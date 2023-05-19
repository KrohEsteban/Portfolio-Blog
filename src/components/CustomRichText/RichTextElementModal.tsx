import React from 'react';

const RichTextElementModal: React.FC<any> = ({ attributes, children }) => (
  <span
    {...attributes}
    style={{ backgroundColor: 'grey'}}
  >
   {children}
  </span>
);

export default RichTextElementModal;