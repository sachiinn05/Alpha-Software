export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
      <div className="bg-slate-900 max-w-lg w-full rounded-2xl p-6 border border-white/10">
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

        <p className="text-gray-400 mb-2">
          <strong>Problem:</strong> {project.caseStudy.problem}
        </p>
        <p className="text-gray-400 mb-2">
          <strong>Solution:</strong> {project.caseStudy.solution}
        </p>
        <p className="text-gray-400 mb-4">
          <strong>Result:</strong> {project.caseStudy.result}
        </p>

        <button
          onClick={onClose}
          className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
