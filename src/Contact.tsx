import { motion } from 'motion/react';
import { SectionHeading } from './Shared';
import { Send, MapPin, Mail, Github, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Get In Touch" subtitle="Contact Me" />

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Let’s build something <span className="text-cyan-500">impactful</span> together.</h3>
                <p className="text-zinc-500 leading-relaxed">
                  I'm currently looking for new opportunities and collaborations. 
                  Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="p-4 glass rounded-2xl text-cyan-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest">Email</p>
                    <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-lg font-medium hover:text-cyan-500 transition-colors">
                      {SOCIAL_LINKS.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-4 glass rounded-2xl text-cyan-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest">Location</p>
                    <span className="text-lg font-medium">
                      Hyderabad, India
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex space-x-4">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl hover:bg-cyan-500 hover:text-white transition-all text-zinc-400">
                  <Linkedin size={20} />
                </a>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl hover:bg-cyan-500 hover:text-white transition-all text-zinc-400">
                  <Github size={20} />
                </a>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="p-4 glass rounded-2xl hover:bg-cyan-500 hover:text-white transition-all text-zinc-400">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form onSubmit={(e) => e.preventDefault()} className="glass p-8 md:p-12 rounded-3xl space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 px-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 px-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 px-1">Subject</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 px-1">Message</label>
                  <textarea
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-white text-black rounded-2xl font-bold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
