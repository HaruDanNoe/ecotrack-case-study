import { motion } from 'motion/react';
import { Leaf, AppWindow, Database, Code, ShieldCheck, MessageCircle, BarChart3, Trophy, Globe } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="paper-texture" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/10 backdrop-blur-md border-b border-eco-green/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-2xl text-eco-green">
            <Leaf className="w-8 h-8" />
            <span>EcoTrack</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-eco-green/70">
            <a href="#intro" className="hover:text-eco-green transition-colors">Intro</a>
            <a href="#challenge" className="hover:text-eco-green transition-colors">Challenge</a>
            <a href="#stack" className="hover:text-eco-green transition-colors">Stack</a>
            <a href="#solution" className="hover:text-eco-green transition-colors">Solution</a>
            <a href="#gallery" className="hover:text-eco-green transition-colors">Gallery</a>
          </div>
        </div>
      </nav>

      {/* Hero Section (Intro) */}
      <section id="intro" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <div className="inline-block px-4 py-1.5 bg-eco-leaf/10 text-eco-leaf rounded-full text-sm font-bold tracking-tighter uppercase">
              Case Study: Mobile Application Project
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-eco-green leading-[0.9] tracking-tight">
              Small Steps, <br />
              <span className="text-eco-leaf">Big Impact.</span>
            </h1>
            <p className="text-xl text-stone-600 max-w-xl leading-relaxed">
              EcoTrack is a gamified habit-tracking ecosystem designed to bridge the gap 
              between environmental awareness and actionable daily sustainability.
            </p>
            <button className="px-8 py-4 bg-eco-green text-white rounded-xl font-bold hover:scale-105 transition-transform shadow-xl shadow-eco-green/20 cursor-pointer">
              Explore the Journey
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-eco-leaf/20 rounded-full blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" 
                alt="Nature" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10 border-8 border-white"
                referrerPolicy="no-referrer"
              />
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 z-20 p-6 bg-white rounded-2xl shadow-xl border border-stone-100"
              >
                <Leaf className="w-12 h-12 text-eco-leaf" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-24 bg-eco-green text-stone-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-eco-leaf/10 blur-[100px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold">The Climate Gap</h2>
              <div className="space-y-6 text-lg text-stone-300">
                <p>
                  By 2050, humanity may need the resources of <span className="text-white font-bold">three Earths</span> if current consumption trends persist.
                </p>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="italic text-sm">"80% of individuals express concern over climate change, yet there remains a significant gap between awareness and actionable behavior."</p>
                </div>
                <p>
                  Existing tools often lack the <span className="text-eco-sky font-medium">gamification, community support, and habit-tracking</span> models needed to sustain long-term behavioral change.
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Resource Depletion', icon: Globe },
                { label: 'Lack of Feedback', icon: BarChart3 },
                { label: 'Motivation Gap', icon: Trophy },
                { label: 'Inconsistent Habits', icon: ShieldCheck },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors"
                >
                  <item.icon className="w-10 h-10 text-eco-sky" />
                  <span className="font-bold text-sm uppercase tracking-widest">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section id="stack" className="py-24 px-6 bg-stone-100/50">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-eco-green">Built for Sustainability</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              Our technical approach focused on scalability, real-time feedback, and accessible cross-platform development.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Flutter", role: "Cross-platform UI Toolkit", icon: AppWindow, desc: "Ensuring a unified experience across Android and iOS with native performance." },
              { title: "PHP", role: "System Communication", icon: Code, desc: "Custom RESTful API handling authentication, habit submissions, and data retrieval." },
              { title: "MySQL", role: "Relational Storage", icon: Database, desc: "Structured data management for habit logs, streaks, and community interactions." },
              { title: "HelioHost", role: "Hosting & Server", icon: Globe, desc: "Robust backend infrastructure for real-time data exchange and continuity." }
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 text-left space-y-4 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-eco-leaf/10 rounded-xl flex items-center justify-center text-eco-leaf">
                  <tech.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-eco-green">{tech.title}</h3>
                  <p className="text-xs font-bold text-eco-leaf uppercase tracking-wider">{tech.role}</p>
                </div>
                <p className="text-sm text-stone-500 leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-[9/16] bg-eco-sky/20 rounded-3xl border-4 border-white shadow-xl overflow-hidden relative">
                   <div className="p-8 h-full flex flex-col justify-end bg-gradient-to-t from-eco-green/100 to-transparent">
                      <p className="text-white font-bold">App Dashboard</p>
                   </div>
                </div>
                <div className="aspect-square bg-eco-leaf/20 rounded-3xl border-4 border-white shadow-xl flex items-center justify-center">
                   <Trophy className="w-12 h-12 text-eco-leaf" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square bg-eco-green/10 rounded-3xl border-4 border-white shadow-xl flex items-center justify-center">
                   <MessageCircle className="w-12 h-12 text-eco-green" />
                </div>
                <div className="aspect-[9/16] bg-stone-200 flex items-center justify-center rounded-3xl border-4 border-white shadow-xl overflow-hidden relative">
                   <img 
                    src="https://images.unsplash.com/photo-1518173946687-a4c8a3b7782a?auto=format&fit=crop&q=80&w=500" 
                    alt="Eco App" 
                    className="w-full h-full object-cover grayscale opacity-50"
                    referrerPolicy="no-referrer"
                   />
                </div>
              </div>
            </div>
            {/* Abstract Floating Shapes */}
            <div className="absolute -z-10 -top-20 -left-20 w-64 h-64 bg-eco-sky/30 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-20 -right-20 w-64 h-64 bg-eco-leaf/20 rounded-full blur-3xl" />
          </div>

          <div className="order-1 md:order-2 space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-eco-green">The Solution</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                We designed EcoTrack to be more than just a tracker; it's a social growth platform that rewards positive environmental influence.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: "Gamified Tracking", desc: "Select from Water, Electricity, Food, and Waste categories with randomized tasks.", icon: Leaf },
                { title: "Community Synergy", desc: "Share accomplishments in real-time chat to foster collective accountability.", icon: MessageCircle },
                { title: "Smart Analytics", desc: "Visualize progress with category rankings and frequency-based performance metrics.", icon: BarChart3 },
                { title: "Social Leaderboard", desc: "Competitive trophies and badges to encourage continued engagement.", icon: Trophy },
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="shrink-0 w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center group-hover:bg-eco-green group-hover:text-white transition-all">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-lg text-eco-green">{feature.title}</h4>
                    <p className="text-sm text-stone-500">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-eco-green tracking-tight">The Interface</h2>
              <p className="text-stone-500 max-w-xl">
                A clean, intuitive design language that uses natural imagery and soft colors to set a calming yet productive tone for sustainability missions.
              </p>
            </div>
            <div className="flex gap-2">
               <div className="px-6 py-2 bg-stone-100 text-stone-600 rounded-full font-bold text-sm">Flow Analysis</div>
               <div className="px-6 py-2 bg-eco-green text-white rounded-full font-bold text-sm">UX Screenshots</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Auth Flows", desc: "Clean login and registration.", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=500" },
              { name: "Habit Selection", desc: "Personalizing the user goals.", img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=500" },
              { name: "Smart Dashboard", desc: "Category-based task overview.", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=500" },
              { name: "Community Chat", desc: "Social interaction and tips.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=500" },
              { name: "Deep Analytics", desc: "Progress visualization.", img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=500" },
              { name: "Leaderboard", desc: "Gamified achievement system.", img: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&q=80&w=500" },
              { name: "Task Management", desc: "Randomized task generation.", img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=500" },
              { name: "User Profile", desc: "Tracking personal growth.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500" },
            ].map((screen, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-stone-100 rounded-3xl overflow-hidden aspect-[4/5] border border-stone-200"
              >
                <img 
                  src={screen.img} 
                  alt={screen.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eco-green/90 via-eco-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end text-white">
                  <h4 className="font-bold text-xl">{screen.name}</h4>
                  <p className="text-sm text-stone-200">{screen.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-stone-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 border-t border-stone-200 pt-16">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-2xl text-eco-green">
              <Leaf className="w-8 h-8" />
              <span>EcoTrack</span>
            </div>
            <p className="text-stone-500 max-w-sm">
              Empowering communities to adopt sustainable habits through gamification and social synergy.
            </p>
          </div>
          
          <div className="flex gap-16 text-sm">
            <div className="space-y-4">
              <h5 className="font-bold uppercase tracking-widest text-eco-green">Project Team</h5>
              <ul className="space-y-2 text-stone-500 font-medium">
                <li>Meg Russel Lopez</li>
                <li>Danea Ellery Zerudo</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold uppercase tracking-widest text-eco-green">Institution</h5>
              <ul className="space-y-2 text-stone-500 font-medium text-left">
                <li>University of St. La Salle</li>
                <li>Bacolod City</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center mt-20 text-stone-400 text-xs font-medium uppercase tracking-[0.2em]">
          © 2025 EcoTrack Case Study — Designed with Nature in Mind
        </div>
      </footer>
    </div>
  );
}
