import React, { useRef } from 'react';

function PhotoEvidence({ onPhotoTaken }) {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onPhotoTaken && onPhotoTaken(file);
    }
  };

  return (
    <div
      className="photo-evidence"
      onClick={handleClick}
      style={{ cursor: 'pointer', display: 'inline-block', padding: '10px', border: '1px solid #ccc' }}
    >
      <div style={{ fontSize: '24px' }}>📷</div>
      <p>Photo Evidence</p>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
}

export default PhotoEvidence;
