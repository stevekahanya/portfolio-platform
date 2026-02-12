export default function ProjectItem({ project }) {
  return (
    <div className="flex gap-4 p-4 border border-gray-200 rounded-lg bg-white hover:border-blue-300 transition-all">
      <div className="w-16 h-16 bg-gray-50 border border-gray-200 flex items-center justify-center rounded shrink-0">
        <span className="text-gray-300 text-2xl font-light">✕</span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
}