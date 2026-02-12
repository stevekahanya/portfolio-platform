import { useState } from 'react';

export default function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) return alert("Please fill in all fields");
    onAddProject({ id: Date.now(), title, description: desc });
    setTitle('');
    setDesc('');
  };

  return (
    <section className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
      <h2 className="text-xl font-bold mb-4">Add Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          className="w-full p-2 border rounded" 
          placeholder="Title"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <textarea 
          className="w-full p-2 border rounded h-24" 
          placeholder="Description"
          value={desc} 
          onChange={(e) => setDesc(e.target.value)} 
        />
        <button className="px-6 py-2 border-2 border-gray-800 font-bold hover:bg-gray-800 hover:text-white transition-colors rounded">
          Add
        </button>
      </form>
    </section>
  );
}