export default function ProjectForm({ onAddProject }) {
  // ... existing state and handleSubmit logic ...

  return (
    <section className="mb-12 p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-blue-500/5">
      <h2 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-2">
        <span className="w-2 h-8 bg-blue-600 rounded-full inline-block"></span>
        Add New Project
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-600 ml-1">Project Title</label>
          <input 
            className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-400" 
            placeholder="e.g., E-commerce Redesign"
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-600 ml-1">Project Description</label>
          <textarea 
            className="w-full p-4 bg-gray-50 border-none rounded-2xl h-32 focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-400 resize-none" 
            placeholder="What makes this project special?"
            value={desc} 
            onChange={(e) => setDesc(e.target.value)} 
          />
        </div>
        <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 active:scale-[0.98] transition-all">
          Publish to Portfolio
        </button>
      </form>
    </section>
  );
}