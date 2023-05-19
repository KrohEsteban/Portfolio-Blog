import React from 'react';

const RichTextElementModal: React.FC<any> = ({ attributes, children }) => (
  <div
    {...attributes}
    style={{ backgroundColor: 'grey'}}
  >
   {children}
  </div>
);

export default RichTextElementModal;