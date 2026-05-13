import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown, Download, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import profileImage from '../assets/images/profile.png';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative p-[2px] rounded-full overflow-hidden"
          >
            {/* Animated Border Glow */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,var(--color-brand-primary)_320deg,var(--color-brand-secondary)_360deg)]"
            />
            
            {/* <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-black bg-zinc-900">
              <img 
                src="{profile.png}" 
                alt="Shashank Ellendula"
                className="w-full h-full object-cover"
              />
            </div> */}
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center space-x-3"
            >
              <div className="h-[1px] w-8 bg-cyan-500/50" />
              <p className="text-cyan-500 font-mono tracking-[0.2em] text-xs uppercase px-4 py-1 glass rounded-full">
                Hi, I am
              </p>
              <div className="h-[1px] w-8 bg-cyan-500/50" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-8xl font-display font-bold leading-tight"
            >
              Shashank Ellendula
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl text-zinc-500 md:text-lg leading-relaxed"
          >
            I’m a passionate Computer Science Engineering student focused on building impactful digital solutions 
            through full stack development, data analytics, and modern web technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-8"
          >
            <a 
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              View Projects <ExternalLink size={18} />
            </a>
            {/* <a 
              href="/public/resume.pdf"
              download
              className="px-8 py-4 glass rounded-full font-bold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              Download Resume <Download size={18} />
            </a> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex space-x-6 pt-12"
          >
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-cyan-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-cyan-500 transition-colors">
              <Github size={24} />
            </a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-zinc-500 hover:text-cyan-500 transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600 hidden md:block"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
}
