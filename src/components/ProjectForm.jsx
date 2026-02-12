import { useState } from 'react';

export default function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) return;
    onAddProject({ id: Date.now(), title, description: desc });
    setTitle('');
    setDesc('');
  };

  return (
    <section className="mb-12 p-8 bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-blue-500/10">
      <h2 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-2">
        <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
        Add New Project
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input 
          className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all" 
          placeholder="Project Title"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <textarea 
          className="w-full p-4 bg-gray-50 border-none rounded-2xl h-32 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none" 
          placeholder="Project Description"
          value={desc} 
          onChange={(e) => setDesc(e.target.value)} 
        />
        <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95">
          Publish Project
        </button>
      </form>
    </section>
  );
}