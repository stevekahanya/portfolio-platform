import { useState, useMemo } from 'react';
import ProjectForm from './components/ProjectForm';
import ProjectItem from './components/ProjectItem';

function App() {
  // Initial state representing a Software Engineering portfolio
  const [projects, setProjects] = useState([
    { id: 1, title: "Portfolio Website", description: "Built with React and Tailwind CSS." },
    { id: 2, title: "EduWhisper Portal", description: "A full-stack student learning management platform." }
  ]);
  const [query, setQuery] = useState('');

  // Function to add new projects dynamically
  const addProject = (proj) => setProjects([proj, ...projects]);

  // Optimized search logic filtering by both Title and Description
  const filteredProjects = useMemo(() => {
    return projects.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase()) || 
      p.description.toLowerCase().includes(query.toLowerCase())
    );
  }, [projects, query]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16 px-6 font-sans antialiased text-gray-900">
      <div className="max-w-3xl mx-auto">
        
        {/* Sleek Header Section with USIU-inspired professional tone */}
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tighter mb-4">
            Project <span className="text-blue-600">Showcase</span>
          </h1>
          <p className="text-gray-500 font-medium max-w-md mx-auto">
            A dynamic platform to curate and display your professional software engineering work.
          </p>
        </header>

        <main className="space-y-12">
          {/* Form Component: Demonstrates lifting state to App */}
          <ProjectForm onAddProject={addProject} />

          {/* Search & List Section: Matches responsive design mockup */}
          <section className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-blue-500/5 p-8">
            <div className="relative mb-10">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none">🔍</span>
              <input 
                type="text" 
                placeholder="Search projects by title or tech..." 
                className="w-full p-4 pl-12 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-400 text-lg"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            
            <div className="space-y-6">
              {filteredProjects.length > 0 ? (
                filteredProjects.map(p => (
                  <ProjectItem key={p.id} project={p} />
                ))
              ) : (
                /* Interactive feedback for zero search results */
                <div className="text-center py-24 border-2 border-dashed border-gray-100 rounded-3xl">
                  <p className="text-gray-400 font-medium text-lg italic">
                    No projects found.
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