import { motion } from 'motion/react';
import { SectionHeading } from './Shared';
import { CheckCircle2, TrendingUp, Award, Laptop, Users } from 'lucide-react';

export function About() {
  const stats = [
    { label: 'Projects Completed', value: '10+', icon: Laptop },
    { label: 'Technical Skills', value: '15+', icon: TrendingUp },
    { label: 'Certifications', value: '5+', icon: Award },
    { label: 'Leadership Roles', value: '4+', icon: Users },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading title="About Me" subtitle="Who am I" />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-xl text-zinc-300 leading-relaxed">
              I am a hardworking and enthusiastic Computer Science Engineering student dedicated to mastering 
              new technologies and solving complex architectural problems.
            </p>
            <p className="text-zinc-500 leading-relaxed">
              My approach is adaptable, responsible, and collaborative. I am passionate about building real-world 
              applications that bridge the gap between user needs and technical possibilities. Even as a fresher, 
              I’ve cultivated a versatile skill set across web development, data visualization, and AI-assisted workflows.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {['Adaptable', 'Collaborative', 'Python Dev', 'Prompt Engineering'].map((item) => (
                <div key={item} className="flex items-center space-x-3 text-zinc-400">
                  <CheckCircle2 size={18} className="text-cyan-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl space-y-4 hover:border-cyan-500/50 transition-colors group"
              >
                <div className="p-3 bg-cyan-500/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  <stat.icon className="text-cyan-500" size={28} />
                </div>
                <div>
                  <h4 className="text-3xl font-bold">{stat.value}</h4>
                  <p className="text-zinc-500 text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
