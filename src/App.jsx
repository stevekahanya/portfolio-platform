import { useState, useMemo } from 'react';
import ProjectForm from './components/ProjectForm';
import ProjectItem from './components/ProjectItem';

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Portfolio Website", description: "Built with React and Tailwind" }
  ]);
  const [query, setQuery] = useState('');

  const addProject = (proj) => setProjects([proj, ...projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase()) || 
      p.description.toLowerCase().includes(query.toLowerCase())
    );
  }, [projects, query]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-4 md:p-8">
      <div className="max-w-2xl mx-auto py-12">
        <header className="text-center mb-10 border-b pb-6">
          <h1 className="text-3xl font-black uppercase tracking-tight">Personal Project Showcase App</h1>
        </header>

        {/* Form Component */}
        <ProjectForm onAddProject={addProject} />

        {/* Project List & Search Section */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
          <input 
            type="text" 
            placeholder="Search Projects..." 
            className="w-full p-3 mb-6 border-b-2 outline-none focus:border-blue-500 transition-colors"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          
          <div className="space-y-4">
            {filteredProjects.length > 0 ? (
              filteredProjects.map(p => (
                <ProjectItem key={p.id} project={p} />
              ))
            ) : (
              /* This is what your test was looking for! */
              <p className="text-center text-gray-400 py-10 italic">
                No projects found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;