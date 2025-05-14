import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Users } from 'lucide-react';
import { getCharacterById } from '../data/characters';
import ModelViewer from '../components/ModelViewer';

const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const character = id ? getCharacterById(id) : undefined;
  const navigate = useNavigate();
  
  if (!character) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h2 className="text-2xl font-playfair text-primary-800 mb-4">Character not found</h2>
        <p className="mb-4 text-red-700">Debug: No character found for id: <b>{id}</b></p>
        <Link 
          to="/characters"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary-700 text-primary-50 
                  rounded-lg border-2 border-primary-800 shadow hover:bg-primary-800 hover:text-primary-100 transition-colors font-playfair"
        >
          <Users size={18} />
          <span>Return to Characters</span>
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="max-w-6xl mx-auto"
    >
      <button 
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 px-3 py-2 text-primary-700 hover:text-primary-900 mb-6 font-playfair border-b-2 border-primary-200 hover:border-primary-700 transition-colors"
      >
        <ArrowLeft size={18} />
        <span>Back</span>
      </button>

      <div className="bg-primary-50 rounded-xl shadow-md overflow-hidden border-2 border-primary-300 mb-8 historical-border relative">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img 
              src={character.imageUrl} 
              alt={character.name} 
              className="w-full h-64 md:h-full object-cover object-center"
              onError={e => { e.currentTarget.src = '/characters/placeholder.jpg'; }}
            />
          </div>
          <div className="md:w-2/3 p-6">
            <h1 className="text-3xl font-playfair font-bold text-primary-800 mb-2">
              {character.name}
            </h1>
            <p className="text-lg text-primary-700 italic mb-4 font-crimson">
              {character.shortDescription}
            </p>
            <div className="mb-4">
              <p className="text-base text-primary-800 mb-4 font-crimson first-letter:text-4xl first-letter:font-playfair first-letter:text-primary-700 first-letter:float-left first-letter:pr-2 first-letter:drop-shadow">
                {character.fullDescription}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-xl shadow-[inset_0_0_60px_#a87d54cc]" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-playfair font-bold text-primary-800 mb-4">
            3D Character Model
          </h2>
          <p className="text-primary-700 mb-4 font-crimson">
            Interact with a 3D representation of {character.name}. 
            Use your mouse to rotate and explore the character from different angles.
          </p>
          {character.modelPath && !["", "/models/linares.glb", "/models/donfilipo.glb", "/models/tarsilio.glb", "/models/donprimitivo.glb", "/models/sisa.glb", "/models/dontiburcio.glb"].includes(character.modelPath) ? (
            <ModelViewer modelPath={character.modelPath} />
          ) : (
            <div className="text-red-700 italic">No 3D model available for this character.</div>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-playfair font-bold text-primary-800 mb-4">
            Role in Chapters 55-65
          </h2>
          <ul className="list-disc list-inside space-y-2 text-primary-700 mb-6 font-crimson">
            {character.role.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-playfair font-bold text-primary-800 mb-4">
            Key Moment
          </h2>
          <p className="text-primary-700 italic font-crimson">
            "{character.keyMoment}"
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link
          to="/characters"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary-800 text-primary-50 
                  font-playfair text-lg rounded-lg border-2 border-primary-900 hover:bg-primary-900 hover:text-primary-100 transition-colors"
        >
          <Users size={18} />
          <span>View All Characters</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default CharacterDetail;