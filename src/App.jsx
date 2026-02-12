import { useState, useMemo } from 'react';
import ProjectForm from './components/ProjectForm';
import ProjectItem from './components/ProjectItem';
import SearchBar from './components/SearchBar';

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Portfolio Website", description: "Built with React and Tailwind" }
  ]);
  const [query, setQuery] = useState('');

  const addProject = (proj) => setProjects([proj, ...projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [projects, query]);

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-black uppercase tracking-tight">Personal Project Showcase App</h1>
      </header>

      <ProjectForm onAddProject={addProject} />

      <div className="border border-gray-200 rounded-xl p-6">
        <input 
          type="text" 
          placeholder="Search Projects..." 
          className="w-full p-3 mb-6 border-b-2 outline-none focus:border-blue-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        
        <div className="space-y-4">
          {filteredProjects.map(p => <ProjectItem key={p.id} project={p} />)}
        </div>
      </div>
    </div>
  );
}

export default App;