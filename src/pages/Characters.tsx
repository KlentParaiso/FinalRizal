import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ScatterChart as Characters3D } from 'lucide-react';
import { characters } from '../data/characters';

const Characters: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-4 drop-shadow-sm">
          Characters of Noli Mi Tangere
        </h1>
        <div className="historical-divider mb-2"><span>Chapters 55-64</span></div>
        <p className="text-lg text-primary-700 max-w-2xl mx-auto font-crimson">
          Explore the complex characters from chapters 55-65 whose lives become 
          intertwined in the novel's dramatic conclusion.
        </p>
      </div>

      <motion.div 
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {characters.map((character) => (
          <motion.div 
            key={character.id} 
            className="character-card group bg-primary-50 border-2 border-primary-300 historical-border relative"
            variants={item}
          >
            <div className="relative h-72 overflow-hidden">
              <img 
                src={character.imageUrl} 
                alt={character.name} 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-parchment-50 text-xl font-playfair font-bold drop-shadow-lg px-3 py-1 rounded bg-ink-900/70 shadow-md">
                {character.name}
              </h3>
            </div>
            <div className="p-4">
              <p className="text-primary-700 mb-4 font-crimson">
                {character.shortDescription}
              </p>
              <Link 
                to={`/characters/${character.id}`}
                className="inline-flex items-center gap-2 text-primary-800 hover:text-primary-900 font-playfair border-b-2 border-primary-300 hover:border-primary-700 transition-colors"
              >
                <span>View Character</span>
                <Characters3D size={16} />
              </Link>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-xl shadow-[inset_0_0_60px_#a87d54cc]" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Characters;