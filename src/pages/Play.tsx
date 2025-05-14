import React, { useState } from 'react';

const qaPairs = [
  {
    question: 'Sino ang naglalakad-lakad sa bahay ni Kapitan Tiyago habang naghihintay si Maria Clara kay Ibarra?',
    answer: 'Si Padre Salvi.'
  },
  {
    question: 'Anong oras dumating si Ibarra sa bahay ni Kapitan Tiyago?',
    answer: 'Eksaktong alas-otso.'
  },
  {
    question: 'Bakit nagsimulang magulo sa labas ng bahay ni Kapitan Tiyago?',
    answer: 'Dahil sa sunod-sunod na putukan at kaguluhan ng mga tao.'
  },
  {
    question: 'Sino ang tumulong kay Ibarra at nagsunog ng mga ebidensya sa bahay ni Ibarra?',
    answer: 'Si Elias.'
  },
  {
    question: 'Ano ang nangyari kay Tarsilio sa Kabanata 57?',
    answer: 'Pinagpapalo siya ng mga sibil at pagkatapos ay pinatay sa balong may nakakasulasok na amoy at tubig.'
  },
  {
    question: 'Bakit nagpasya si Padre Damaso na pahintulutan si Maria Clara na pumasok sa kumbento?',
    answer: 'Dahil hindi niya kayang pahirapan pa si Maria Clara, at nangako siyang alagaan ang kapakanan ng dalaga.'
  },
  {
    question: 'Ano ang ipinagtapat ni Maria Clara kay Padre Damaso?',
    answer: 'Na hindi niya mahal si Linares at si Ibarra lamang ang kanyang iniintindi.'
  },
  {
    question: 'Ano ang ginamit ni Basilio bilang regalo para sa kanyang ina?',
    answer: 'Pindang usa na ibinigay ng matanda sa bundok.'
  },
  {
    question: 'Ano ang habilin ni Elias kay Basilio bago siya pumanaw?',
    answer: 'Pinagbilinan siya na sunugin ang katawan ni Sisa at kumuha ng panggatong sa ilalim ng puno ng balite.'
  },
  {
    question: 'Ano ang sanhi ng kamatayan ni Padre Damaso?',
    answer: 'Bangungot.'
  }
];

const FlipCard: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      className="relative w-full h-72 perspective mb-8 flex"
      style={{ perspective: '1200px', minHeight: '18rem', maxHeight: '18rem' }}
    >
      <div
        className={`transition-transform duration-500 w-full h-full ${flipped ? 'rotate-y-180' : ''}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Back (default, no rotation) */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-parchment-100 to-parchment-200 border-4 border-gold-400 rounded-2xl shadow-xl flex flex-col items-center justify-center cursor-pointer"
          style={{ backfaceVisibility: 'hidden' }}
          onClick={() => setFlipped(true)}
        >
          {/* Optional: Add a faint emblem or watermark here for extra flair */}
          <div className="w-1/2 h-1 mb-4 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 rounded-full opacity-70" />
          {/* The back is intentionally blank for flipping */}
          <div className="w-1/2 h-1 mt-4 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 rounded-full opacity-70" />
        </div>
        {/* Front (shows question, rotated) */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-parchment-100 to-parchment-200 border-4 border-gold-400 rounded-2xl shadow-xl flex flex-col justify-between items-center p-6 h-full"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          onClick={e => e.stopPropagation()}
        >
          <div className="w-1/2 h-1 mb-2 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 rounded-full opacity-70" />
          <div className="flex-1 w-full flex flex-col justify-center items-center min-h-0 overflow-auto max-h-40">
            <p className="font-playfair text-lg text-primary-800 text-center mb-2 break-words px-2">{question}</p>
            {showAnswer && (
              <p className="font-crimson text-base text-primary-700 text-center mb-2 break-words px-2">{answer}</p>
            )}
          </div>
          <div className="flex justify-center gap-4 w-full mt-auto">
            {!showAnswer && (
              <button
                className="px-4 py-2 rounded-lg font-playfair text-base font-semibold text-white bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 shadow transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-200"
                onClick={() => setShowAnswer(true)}
              >
                Ipakita ang Sagot
              </button>
            )}
            <button
              className="px-4 py-2 rounded-lg font-playfair text-base font-semibold text-parchment-100 bg-ink-900 shadow transition-all duration-200 hover:scale-105 hover:bg-ink-800 focus:outline-none focus:ring-2 focus:ring-ink-300"
              onClick={() => { setFlipped(false); setShowAnswer(false); }}
            >
              Balik sa Likod
            </button>
          </div>
          <div className="w-1/2 h-1 mt-2 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 rounded-full opacity-70" />
        </div>
      </div>
    </div>
  );
};

const Play: React.FC = () => {
  const [started, setStarted] = useState(false);
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-playfair font-bold text-primary-800 mb-8 text-center drop-shadow-sm">Flip Cards: Noli Me Tangere Quiz</h1>
      {!started ? (
        <div className="flex justify-center">
          <button
            className="px-6 py-3 bg-gold-400 text-white rounded-lg font-playfair shadow hover:bg-gold-500 transition-colors"
            onClick={() => setStarted(true)}
          >
            Play
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8 auto-rows-fr">
          {qaPairs.map((qa, idx) => (
            <FlipCard key={idx} question={qa.question} answer={qa.answer} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Play; 