import { useState, useMemo } from 'react';
import ProjectForm from './components/ProjectForm';
import ProjectItem from './components/ProjectItem';

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Portfolio Website", description: "Built with React and Tailwind" },
    { id: 2, title: "EduWhisper Portal", description: "Full-stack web application with React and Node.js" }
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
    /* Clean, modern background with improved padding */
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6 font-sans antialiased text-gray-900">
      <div className="max-w-3xl mx-auto">
        
        {/* Sleek Header Section */}
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tighter mb-4">
            Project <span className="text-blue-600">Showcase</span>
          </h1>
          <p className="text-gray-500 font-medium max-w-md mx-auto">
            A dynamic platform to manage and display your professional software engineering portfolio.
          </p>
        </header>

        <main className="space-y-12">
          {/* Form Component - Lifting state to App */}
          <ProjectForm onAddProject={addProject} />

          {/* Interactive Search & List Section */}
          <section className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-blue-500/5 p-8">
            <div className="relative mb-8">
              <input 
                type="text" 
                placeholder="Search your work..." 
                className="w-full p-4 pl-12 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-400"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {/* Search Icon Placeholder */}
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">🔍</span>
            </div>
            
            <div className="space-y-4">
              {filteredProjects.length > 0 ? (
                filteredProjects.map(p => (
                  <ProjectItem key={p.id} project={p} />
                ))
              ) : (
                <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-2xl">
                  <p className="text-gray-400 font-medium italic">
                    No projects found matching your search.
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;