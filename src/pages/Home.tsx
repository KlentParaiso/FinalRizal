import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-primary-800 mb-4 drop-shadow-sm">
          Noli Mi Tangere
        </h1>
        <div className="historical-divider mb-2"><span>Chapters 55-64</span></div>
        <p className="text-xl md:text-2xl font-crimson italic text-primary-700">
          An Interactive Journey Through Chapters 55-64
        </p>
      </div>

      <div className="relative rounded-xl overflow-hidden shadow-xl mb-12 aspect-video border-2 border-primary-300 bg-primary-100">
        <video 
          className="w-full h-full object-cover"
          controls
          poster="https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg"
        >
          <source 
            src="https://samplelib.com/lib/preview/mp4/sample-30s.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-primary-50 p-8 rounded-xl shadow-md border-2 border-primary-300 historical-border">
          <h2 className="text-2xl font-playfair font-bold text-primary-800 mb-4">
            About These Chapters
          </h2>
          <p className="text-primary-700 mb-4 font-crimson">
            Chapters 55-64 of José Rizal's "Noli Mi Tangere" represent the climactic conclusion 
            of this influential Filipino novel. These chapters showcase dramatic events including 
            Ibarra's imprisonment, Elias's sacrifice, and Maria Clara's tragic decision.
          </p>
          <p className="text-primary-700 font-crimson">
            Through these final chapters, Rizal powerfully depicts the corruption of Spanish colonial 
            rule and the tragic consequences for Filipinos seeking justice and freedom.
          </p>
        </div>

        <div className="bg-primary-50 p-8 rounded-xl shadow-md border-2 border-primary-300 historical-border">
          <h2 className="text-2xl font-playfair font-bold text-primary-800 mb-4">
            Meet the Characters
          </h2>
          <p className="text-primary-700 mb-4 font-crimson">
            The novel's final chapters feature complex characters whose fates become intertwined 
            in tragic ways. From the idealistic Ibarra to the self-sacrificing Elias and the 
            heartbroken Maria Clara, each character represents different aspects of 
            Filipino society under Spanish rule.
          </p>
          <Link 
            to="/characters" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-700 text-primary-50 
                     rounded-lg border-2 border-primary-800 shadow hover:bg-primary-800 hover:text-primary-100 transition-colors font-playfair"
          >
            <Users size={18} />
            <span>Explore Characters</span>
          </Link>
        </div>
      </div>

      <motion.div 
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Link
          to="/characters"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-800 text-primary-50 
                   font-playfair text-lg rounded-lg border-2 border-primary-900 hover:bg-primary-900 hover:text-primary-100 transition-colors shadow-md"
        >
          <BookOpen size={20} />
          <span>Begin Your Journey</span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home;