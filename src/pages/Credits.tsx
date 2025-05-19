import React from 'react';
import { motion } from 'framer-motion';
import { Book, Code, Heart } from 'lucide-react';

const Credits: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-4 drop-shadow-sm">
          Credits & Acknowledgments
        </h1>
        <div className="historical-divider mb-2"><span>Chapters 55-64</span></div>
        <p className="text-lg text-primary-700 font-crimson">
          This interactive experience was created to help students and readers
          better understand José Rizal's influential novel.
        </p>
      </div>

      <div className="grid gap-8">
        <div className="bg-primary-50 p-6 rounded-xl shadow-md border-2 border-primary-300 historical-border relative">
          <div className="flex items-center gap-3 mb-4">
            <Book className="text-primary-600" size={24} />
            <h2 className="text-2xl font-playfair font-bold text-primary-800">
              Literary Source
            </h2>
          </div>
          <p className="text-primary-700 mb-2 font-crimson">
            This interactive experience is based on "Noli Me Tangere" (Touch Me Not), 
            written by José Rizal and published in 1887. The novel is considered one 
            of the most influential literary works in Philippine history.
          </p>
          <p className="text-primary-700 font-crimson">
            Our interpretation focuses specifically on chapters 55-64, which contain 
            the climactic conclusion of the novel.
          </p>
          <div className="absolute inset-0 pointer-events-none rounded-xl shadow-[inset_0_0_60px_#a87d54cc]" />
        </div>

        <div className="bg-primary-50 p-6 rounded-xl shadow-md border-2 border-primary-300 historical-border relative">
          <div className="flex items-center gap-3 mb-4">
            <Code className="text-primary-600" size={24} />
            <h2 className="text-2xl font-playfair font-bold text-primary-800">
              Technical Credits
            </h2>
          </div>
          <p className="text-primary-700 mb-4 font-crimson">
            This interactive experience was built using:
          </p>
          <ul className="list-disc list-inside space-y-1 text-primary-700 font-crimson">
            <li>React.js for the user interface</li>
            <li>Three.js for 3D character models</li>
            <li>Framer Motion for animations</li>
            <li>Tailwind CSS for styling</li>
            <li>Lucide React for icons</li>
          </ul>
          <div className="absolute inset-0 pointer-events-none rounded-xl shadow-[inset_0_0_60px_#a87d54cc]" />
        </div>

        <div className="bg-primary-50 p-6 rounded-xl shadow-md border-2 border-primary-300 historical-border relative">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-accent-600" size={24} />
            <h2 className="text-2xl font-playfair font-bold text-primary-800">
              Special Thanks
            </h2>
          </div>
          <div className="text-primary-700 font-crimson space-y-2">
            <p>
              This project was created as an educational resource to help students understand and appreciate the characters and themes in José Rizal's influential novel.
            </p>
            <p className="font-bold mt-4">Group 5 – Project Team</p>
            <p>
              This project is the result of collaborative effort and dedication. Each member contributed their unique skills and perspectives to bring this work to fruition.
            </p>
            <p className="font-bold mt-4">Team Members:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Klent Paraiso</li>
              <li>Jed Eph Jalipa</li>
              <li>Francis Jalen Amad</li>
              <li>Lyle Rojen Tura</li>
              <li>Josh Andre Timosan</li>
              <li>John Dave Maca</li>
              <li>John Emmanuel Ramos</li>
              <li>Marco Navarro</li>
              <li>Mike Pilapil</li>
              <li>Shandie Sahada Hamid</li>
              <li>Xandrie Jadraque Arances</li>
              <li>Francis Ortega</li>
              <li>Ivygail Samson</li>
              <li>Jevanloyd Largo</li>
            </ul>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-xl shadow-[inset_0_0_60px_#a87d54cc]" />
        </div>
      </div>

      <div className="text-center mt-12 text-primary-600 text-sm font-playfair">
        <p>© 2025 Noli Me Tangere Group 5 Project</p>
        <p className="mt-2">
          This is an educational project created for learning purposes.
        </p>
      </div>
    </motion.div>
  );
};

export default Credits;