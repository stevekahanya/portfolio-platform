export default function ProjectItem({ project }) {
  return (
    <div className="group flex gap-5 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 items-center">
      <div className="w-14 h-14 bg-blue-600 flex items-center justify-center rounded-xl shadow-lg shrink-0 group-hover:rotate-6 transition-transform">
        <span className="text-white text-xl font-bold">
          {project.title.charAt(0).toUpperCase()}
        </span>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm mt-1 leading-relaxed">
          {project.description}
        </p>
      </div>
      <button className="opacity-0 group-hover:opacity-100 bg-gray-50 p-2 rounded-full hover:bg-red-50 hover:text-red-500 transition-all">
        🗑️
      </button>
    </div>
  );
}