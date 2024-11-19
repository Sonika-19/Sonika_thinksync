import React, { useState } from 'react';

const PostProject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handlePostProject = async () => {
    // Handle file upload and send project data to the backend
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);

    const response = await fetch('/api/projects', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // Redirect to projects page or another appropriate page
      window.location.href = '/view-projects';
    } else {
      alert('Project posting failed');
    }
  };

  return (
    <div>
      <h2>Post Project</h2>
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handlePostProject}>Post Project</button>
    </div>
  );
};

export default PostProject;