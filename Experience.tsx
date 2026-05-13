import { motion } from 'motion/react';
import { SectionHeading } from './Shared';
import { INTERNSHIP, EDUCATION, ACTIVITIES } from '../constants';
import { Calendar, MapPin, Briefcase, GraduationCap, Trophy, Radio, Award } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Internship */}
          <div>
            <SectionHeading title="Work Experience" subtitle="Internships" />
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1px] before:bg-zinc-800"
              >
                <div className="absolute left-[-5px] top-0 w-[11px] h-[11px] rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                
                <div className="glass p-8 rounded-3xl space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-white">{INTERNSHIP.role}</h3>
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-500 rounded-full text-[10px] font-bold h-fit">
                      {INTERNSHIP.duration}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-xs text-zinc-500">
                    <span className="flex items-center gap-1.5"><Briefcase size={12}/> {INTERNSHIP.company}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={12}/> Remote / Hybrid</span>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {INTERNSHIP.description}
                  </p>

                  <div className="space-y-2">
                    {INTERNSHIP.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-zinc-500">
                        <div className="w-1 h-1 rounded-full bg-zinc-700" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Activities/Leadership */}
            <div className="mt-16">
              <SectionHeading title="Leadership" subtitle="Roles & Impact" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ACTIVITIES.map((activity, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass p-6 rounded-2xl flex items-start space-x-4 border-none hover:bg-white/5 transition-colors"
                  >
                    <div className="p-2 bg-purple-500/10 rounded-xl">
                      <Radio className="text-purple-500" size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-200">{activity.role}</h4>
                      <p className="text-xs text-zinc-500">{activity.organization}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <SectionHeading title="Education" subtitle="Academic Journey" />
            <div className="space-y-12">
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 glass rounded-2xl">
                      <GraduationCap className="text-cyan-500" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{edu.institution}</h4>
                      <p className="text-sm text-zinc-400">{edu.degree}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 pl-1 pr-6 pb-6 border-l border-zinc-800 ml-7 space-y-4 flex-col items-start !items-start">
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                      <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                        <Calendar size={12} /> {edu.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-cyan-500 font-bold">
                        <Trophy size={12} /> {edu.score}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Certifications (Visual) */}
            <div className="mt-16 p-8 glass rounded-3xl space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <Award className="text-cyan-500" /> Certifications
              </h3>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-cyan-500/30 transition-all cursor-pointer">
                <p className="text-sm font-bold">Front End Development Internship</p>
                <p className="text-xs text-zinc-500 mt-1">Placemantra | Issued 2025</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-600">ID: SL-CERT-992</span>
                  <a 
                    href="https://github.com/Shashank-0609/PLACEMANTRA-INTERNSHIP-CERTIFICATE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-500 text-xs font-bold hover:underline"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
