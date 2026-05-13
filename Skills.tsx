import { motion } from 'motion/react';
import { SectionHeading } from './Shared';
import { SKILL_CATEGORIES } from '../constants';

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white/5 relative">
      <div className="container mx-auto px-6">
        <SectionHeading title="Technical Mastery" subtitle="Skills & Expertise" />

        <div className="grid md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold mb-8 flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                <span>{category.title}</span>
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-300 font-medium">{skill.name}</span>
                      <span className="text-zinc-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
