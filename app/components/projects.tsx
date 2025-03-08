import { projectDetails } from "@/constants/projects";

export default function Projects() {
    return (
        <div className="w-full p-5 shadow-md rounded"
            style={{
                backgroundColor: 'var(--card-bg)',
                color: 'var(--card-text)',
                borderColor: 'var(--border)'
            }}>
            <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectDetails.map((project, index) => (
                    <div key={index} className="border shadow-md solid rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-4">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-semibold">{project.label}</h3>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        View Project →
                                    </a>
                                )}
                            </div>
                            <p className="text-sm mb-4">{project.summary}</p>
                            <div className="flex flex-wrap gap-3">
                                {project.stacks.map((stack, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-1 "
                                        title={stack.name}
                                    >
                                        <stack.icon className="text-xl" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}