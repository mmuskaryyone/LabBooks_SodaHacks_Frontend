import React, { useState } from 'react';
import EditableTextBlock from './TeacherTextBlock';
import EditableCodeBlock from './TeacherCodeBlock';
import EditableMcqBlock from './TeacherMcqBlock';
import './TeacherModule.css';

const TeacherModule = () => {
  const [blocks, setBlocks] = useState([]);
  const [focusedBlock, setFocusedBlock] = useState(null);

  const addBlock = (type) => {
    const newBlock = { type, id: blocks.length + 1 };
    let updatedBlocks;

    if (focusedBlock === null) {
      updatedBlocks = [...blocks, newBlock];
    } else {
      const index = blocks.findIndex(block => block.id === focusedBlock);
      updatedBlocks = [
        ...blocks.slice(0, index + 1),
        newBlock,
        ...blocks.slice(index + 1)
      ];
    }

    updatedBlocks = updatedBlocks.map((block, index) => ({
      ...block,
      id: index + 1
    }));

    setBlocks(updatedBlocks);
    setFocusedBlock(newBlock.id);
  };

  const deleteBlock = (id) => {
    const updatedBlocks = blocks.filter(block => block.id !== id).map((block, index) => ({
      ...block,
      id: index + 1
    }));
    setBlocks(updatedBlocks);
    setFocusedBlock(null);
  };

  return (
    <div className="module-container">
      <div className="button-group">
        <button onClick={() => addBlock('text')}>Add Text Block</button>
        <button onClick={() => addBlock('code')}>Add Code Block</button>
        <button onClick={() => addBlock('mcq')}>Add MCQ Block</button>
      </div>
      {blocks.map((block) => (
        <div key={block.id} className="block-container" onClick={() => setFocusedBlock(block.id)}>
          <div className="block-header">
            <div className="block-index">Index: {block.id}</div>
            <button className="delete-button" onClick={() => deleteBlock(block.id)}>Delete</button>
          </div>
          {block.type === 'text' && <EditableTextBlock content="" onSave={() => {}} />}
          {block.type === 'code' && <EditableCodeBlock content="" onSave={() => {}} />}
          {block.type === 'mcq' && <EditableMcqBlock question="" options={["", "", "", ""]} answer="" onSave={() => {}} />}
        </div>
      ))}
      <div className="page-actions">
        <button className="update-button">Update Notebook</button>
        <button className="publish-button">Publish Notebook</button>
        <button className="delete-button">Delete Notebook</button>
      </div>
    </div>
  );
};

export default TeacherModule;