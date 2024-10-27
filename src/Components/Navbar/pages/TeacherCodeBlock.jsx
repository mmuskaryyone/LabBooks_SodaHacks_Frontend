import React, { useState } from 'react';

const EditableCodeBlock = ({ content, onSave }) => {
  const [code, setCode] = useState(content);

  const handleSave = () => {
    onSave(code);
  };

  return (
    <div>
      <textarea value={code} onChange={(e) => setCode(e.target.value)} />
    </div>
  );
};

export default EditableCodeBlock;