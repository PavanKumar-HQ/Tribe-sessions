import { motion } from "motion/react";
import { reflections } from "../../data/content";

export function OurExperiences() {
  const getAccentColor = (accent: string) => {
    switch(accent) {
      case 'sky': return 'bg-sky/20 text-sky';
      case 'lavender': return 'bg-lavender/20 text-lavender';
      case 'coral': return 'bg-coral/20 text-coral';
      case 'yellow': return 'bg-yellow/20 text-yellow';
      default: return 'bg-sky/20 text-sky';
    }
  };

  return (
    <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-[60vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-navy text-sm font-semibold tracking-widest uppercase mb-3">
          Reflections
        </h2>
        <h3 className="font-display text-4xl md:text-6xl font-bold text-navy mb-4">
          How we from Zerodha Varsity have contributed so far
        </h3>
      </motion.div>

      <div className="max-w-3xl mx-auto mb-16 text-center">
        <p className="text-2xl font-display font-medium text-navy italic">
          "You might ask, how did we get here?"
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
        {reflections.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -8, scale: 1.02, rotate: idx % 2 === 0 ? 1 : -1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            className="flex flex-col gap-6 items-start bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <span className={`font-serif text-9xl ${getAccentColor(item.accent).split(' ')[1]}`}>"</span>
            </div>
            
            <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center font-display font-bold text-3xl shadow-sm ${getAccentColor(item.accent)}`}>
              "
            </div>
            <div className="flex-grow flex flex-col justify-between">
              <p className="text-lg text-slate-700 italic mb-8 leading-relaxed relative z-10">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="h-px flex-grow bg-slate-100"></div>
                <p className="font-bold text-navy text-lg">— {item.author}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow overflow-hidden text-left"
        >
          {/* Left Side: Post Image */}
          <div className="w-full md:w-5/12 h-64 md:h-auto relative group bg-slate-50 border-r border-slate-100">
            <img
              src="/images/setu-cover.jpg"
              alt="Pavan's Journey"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <a
              href="https://www.linkedin.com/posts/when-pavan-sharma-embarked-on-his-journey-share-7417818410014806016-EBsY"
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 z-20 bg-navy/0 group-hover:bg-navy/10 transition-colors flex items-center justify-center"
            >
              <span className="opacity-0 group-hover:opacity-100 text-white font-medium bg-navy/80 px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                View post gallery
              </span>
            </a>
          </div>

          {/* Right Side: Content & Actions */}
          <div className="w-full md:w-7/12 flex flex-col justify-between p-8 md:p-10">
            <div>
              {/* Custom LinkedIn-style Header */}
              <div className="pb-6 flex items-center gap-4 border-b border-slate-50 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] font-bold text-xl shrink-0">
                  in
                </div>
                <div>
                  <h4 className="text-navy font-bold text-lg">The Catalyst: Pavan's Journey</h4>
                  <p className="text-sm text-slate-500">Mentors For Kids Foundation</p>
                </div>
              </div>

              {/* Post Content */}
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                The foundation of this entire movement was built on overcoming real-world
                challenges. Discover the problems Pavan Sharma faced when he embarked on his
                journey.
              </p>
            </div>

            {/* Footer Action */}
            <div className="mt-auto">
              <a
                href="https://www.linkedin.com/posts/when-pavan-sharma-embarked-on-his-journey-share-7417818410014806016-EBsY"
                target="_blank"
                rel="noreferrer"
                className="w-full md:w-max flex items-center justify-center gap-2 py-3 px-8 bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white rounded-xl font-medium transition-colors"
              >
                Read full story on LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
