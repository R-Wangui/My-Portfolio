import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

function DesignProjectCard({ project, index }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        className="relative"
      >
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-slate-900 relative overflow-hidden">
          {/* Project Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-3xl shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {project.emoji}
                </motion.div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-800 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-lg text-slate-600 font-semibold">
                    {project.subtitle}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">
                  {project.role}
                </span>
                <span className="px-4 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-bold">
                  {project.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Challenge */}
          <div className="mb-8">
            <h4 className="text-xl font-black text-purple-600 mb-3 flex items-center gap-2">
              🎯 The Challenge
            </h4>
            <p className="text-slate-700 leading-relaxed text-lg">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-8">
            <h4 className="text-xl font-black text-pink-600 mb-3 flex items-center gap-2">
              💡 The Solution
            </h4>
            <p className="text-slate-700 leading-relaxed text-lg">
              {project.solution}
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="mb-8">
            <h4 className="text-xl font-black text-cyan-600 mb-4 flex items-center gap-2">
              📊 The Impact
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              {project.impact.map((metric, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 text-center border-2 border-slate-200"
                >
                  <metric.icon
                    className="mx-auto mb-2 text-purple-600"
                    size={32}
                  />
                  <div className="text-3xl font-black text-slate-800 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-slate-600 font-semibold">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-8">
            <h4 className="text-xl font-black text-slate-800 mb-4 flex items-center gap-2">
              ⚡ Design Process
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {project.process.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Deliverables */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-black text-slate-600 mb-3 uppercase tracking-wide">
                Tools Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-600 mb-3 uppercase tracking-wide">
                Deliverables
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.deliverables.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

DesignProjectCard.propTypes = {
  project: PropTypes.shape({
    color: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    challenge: PropTypes.string.isRequired,
    solution: PropTypes.string.isRequired,
    impact: PropTypes.arrayOf(PropTypes.object).isRequired,
    process: PropTypes.arrayOf(PropTypes.string).isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    deliverables: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default DesignProjectCard;
