export interface Character {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  role: string[];
  keyMoment: string;
  imageUrl: string;
  modelPath?: string; // Path to 3D model (temporary)
}

export const characters: Character[] = [
  {
    id: "ibarra",
    name: "Crisostomo Ibarra",
    shortDescription: "The protagonist; a young, idealistic Filipino who returns from Europe to reform his country.",
    fullDescription: "Crisostomo Ibarra is the novel's main character - educated, wealthy, and idealistic. Having studied in Europe, he returns to the Philippines with dreams of improving his homeland through education and modernization. His life takes a dramatic turn when he's falsely accused of rebellion against the Spanish authorities.",
    role: [
      "Arrested and imprisoned after being implicated in a rebellion.",
      "Rescued by Elias from prison.",
      "Plans to flee the country to escape persecution.",
      "Tries to see Maria Clara one last time before leaving."
    ],
    keyMoment: "His hopes for peaceful reform are shattered; he becomes disillusioned and desperate.",
    imageUrl: "/characters/Ibarra.jpg",
    modelPath: "/models/ibarra.glb"
  },
  {
    id: "elias",
    name: "Elias",
    shortDescription: "A mysterious, courageous man who wants to help the oppressed; Ibarra's secret ally.",
    fullDescription: "Elias is a mysterious boatman with a troubled past who becomes Ibarra's ally. Unlike Ibarra, who initially believes in working within the system, Elias has experienced the brutality of Spanish rule directly and harbors revolutionary ideals. His character represents the oppressed Filipino masses.",
    role: [
      "Risks his life to free Ibarra from prison.",
      "Guides Ibarra to safety, helping him escape the authorities.",
      "Gets wounded while evading the Civil Guards.",
      "Dies alone by the lake after sacrificing himself so Ibarra can live."
    ],
    keyMoment: "His self-sacrifice symbolizes the tragic fate of those who fight for justice.",
    imageUrl: "/characters/elias.jpg",
    modelPath: "/models/eliasFINAL.glb"
  },
  {
    id: "maria",
    name: "Maria Clara",
    shortDescription: "Ibarra's fiancée; the daughter of Kapitan Tiago and (secretly) Padre Damaso.",
    fullDescription: "Maria Clara is the novel's primary female character - beautiful, devout, and raised in traditional Filipino values. She is Ibarra's childhood sweetheart and fiancée. As the story progresses, she discovers the secret of her true parentage, which shatters her world.",
    role: [
      "Heartbroken after learning the truth about her parentage.",
      "Decides to enter the convent rather than marry another man or face disgrace.",
      "Has an emotional farewell with Ibarra."
    ],
    keyMoment: "Her decision to become a nun represents her loss of freedom and personal tragedy.",
    imageUrl: "/characters/maria.jpg",
    modelPath: "/models/maria.glb"
  },
  {
    id: "damaso",
    name: "Padre Damaso",
    shortDescription: "A powerful, manipulative Spanish friar; Maria Clara's real father.",
    fullDescription: "Padre Damaso is an influential Spanish friar who was previously assigned to San Diego. Arrogant and corrupt, he represents the abuses of the Spanish clergy during colonial times. His secret relationship with Pia Alba, Maria Clara's mother, resulted in Maria Clara's birth.",
    role: [
      "Tries to control Maria Clara's future by opposing her relationship with Ibarra.",
      "Insists on her marrying a man of his choice.",
      "Pleads for Maria Clara's release from the convent but is too late."
    ],
    keyMoment: "His confrontation with Maria Clara shows his guilt and desperation.",
    imageUrl: "/characters/damaso.jpg",
    modelPath: "/models/damaso.glb"
  },
  {
    id: "tiago",
    name: "Kapitan Tiago",
    shortDescription: "A wealthy Filipino businessman; Maria Clara's legal father.",
    fullDescription: "Kapitan Tiago is a wealthy Filipino businessman who enjoys high social status due to his wealth and connections with Spanish authorities. Though outwardly successful, he is portrayed as a weak-willed man who allows himself to be manipulated by the friars.",
    role: [
      "Falls into depression and opium addiction after Maria Clara enters the convent.",
      "Becomes passive and broken by the end of the novel."
    ],
    keyMoment: "His decline reflects the ruin of his family and status.",
    imageUrl: "/characters/tiago.jpg",
    modelPath: "/models/tiago.glb"
  },
  {
    id: "salvi",
    name: "Padre Salvi",
    shortDescription: "A cunning friar who lusts after Maria Clara and schemes behind the scenes.",
    fullDescription: "Padre Salvi is the parish curate of San Diego who secretly lusts after Maria Clara. Behind his pious exterior, he is manipulative and vindictive. He represents the hypocrisy within the church, maintaining a facade of piety while harboring impure thoughts and selfish motivations.",
    role: [
      "Responsible for implicating Ibarra in the rebellion.",
      "Uses his influence to manipulate events to his favor."
    ],
    keyMoment: "He secures Maria Clara's confinement in the convent for his own twisted motives.",
    imageUrl: "/characters/salvi.jpg",
    modelPath: "/models/salvi.glb"
  },
  {
    id: "alferez",
    name: "The Alferez",
    shortDescription: "Commander of the Civil Guards.",
    fullDescription: "The Alferez is the head of the local Civil Guard, the Spanish military police force. While he represents Spanish colonial authority, he is often at odds with the church authorities, particularly with Padre Damaso, highlighting the tension between civil and religious powers.",
    role: [
      "Carries out the arrest and manhunt for Ibarra.",
      "Represents the oppressive colonial military force."
    ],
    keyMoment: "Shows the brutal side of colonial law enforcement.",
    imageUrl: "/characters/alferez.jpg",
    modelPath: "/models/alferez.glb"
  },
  {
    id: "guevara",
    name: "Lieutenant Guevara",
    shortDescription: "A friend of Ibarra's father and a sympathetic military officer.",
    fullDescription: "Lieutenant Guevara is a Spanish officer who was a close friend of Ibarra's father, Don Rafael. Unlike most Spanish authorities in the novel, he shows sympathy toward Filipinos and tries to help Ibarra when he learns of the plot against him.",
    role: [
      "Warns Ibarra about the conspiracy against him.",
      "Regrets not being able to save Ibarra from imprisonment."
    ],
    keyMoment: "Acts as one of the few voices of reason and justice in the corrupt system.",
    imageUrl: "/characters/guavara.jpg",
    modelPath: "/models/guevara.glb"
  },
  {
    id: "victorina",
    name: "Doña Victorina",
    shortDescription: "A Filipina woman obsessed with appearing Spanish and wealthy; comical and pretentious.",
    fullDescription: "Doña Victorina is a Filipina woman who desperately tries to appear Spanish, wearing excessive makeup and speaking broken Spanish. She is married to Don Tiburcio, a lame Spanish man who tolerates her because of her wealth. Her character satirizes Filipinos who reject their own culture in favor of imitating their colonizers.",
    role: [
      "Appears during the social scenes at Kapitan Tiago's house.",
      "Symbolizes the absurdity of colonial mimicry and vanity."
    ],
    keyMoment: "Mostly serves as comic relief but highlights colonial social pretensions.",
    imageUrl: "/characters/victorina.jpg",
    modelPath: "/models/victorina.glb"
  },
  {
    id: "linares",
    name: "Linares",
    shortDescription: "Maria Clara's arranged fiancé, whom she does not love.",
    fullDescription: "Linares is a young Spaniard who is chosen by Padre Damaso as Maria Clara's arranged fiancé. He is portrayed as weak-willed and opportunistic, seeking to improve his social standing through marriage. Maria Clara does not love him, and he is ultimately a pawn in the friars' schemes.",
    role: [
      "Arranged to marry Maria Clara by Padre Damaso.",
      "Represents the manipulation of marriage for social and political gain.",
      "Fails to win Maria Clara's affection."
    ],
    keyMoment: "His presence intensifies Maria Clara's despair and her decision to enter the convent.",
    imageUrl: "/characters/Linares.webp",
    modelPath: "/models/linares.glb"
  },
  {
    id: "donfilipo",
    name: "Don Filipo",
    shortDescription: "A well-respected figure in the community who is caught up in the political turmoil.",
    fullDescription: "Don Filipo is a respected member of San Diego's principalia and serves as the deputy mayor. He is known for his progressive ideas and desire for reform, but is ultimately swept up in the political chaos and unable to effect real change.",
    role: [
      "Attempts to mediate between the townspeople and authorities.",
      "Represents the principled but powerless Filipino elite.",
      "Caught in the crossfire of political unrest."
    ],
    keyMoment: "His efforts at reform are thwarted by the entrenched colonial system.",
    imageUrl: "/characters/Don Filipo.webp",
    modelPath: "/models/donfilipo.glb"
  },
  {
    id: "tarsilio",
    name: "Tarsilio",
    shortDescription: "A young man who is tortured by the authorities.",
    fullDescription: "Tarsilio is a young villager who becomes a victim of the authorities' brutality. He is tortured and ultimately dies, symbolizing the suffering of ordinary Filipinos under Spanish rule.",
    role: [
      "Arrested and tortured by the Civil Guards.",
      "Dies as a result of the authorities' cruelty.",
      "Represents the innocent victims of colonial oppression."
    ],
    keyMoment: "His tragic death highlights the abuses of the colonial regime.",
    imageUrl: "/characters/Tarsilo.png",
    modelPath: "/models/tarsilio.glb"
  },
  {
    id: "donprimitivo",
    name: "Don Primitivo",
    shortDescription: "A relative who gives advice to Kapitan Tinong regarding his relationship with Ibarra.",
    fullDescription: "Don Primitivo is a relative of Kapitan Tinong, known for his old-fashioned and sometimes comical advice. He represents the traditional, conservative mindset of some Filipinos during the Spanish era.",
    role: [
      "Advises Kapitan Tinong on how to handle his dealings with Ibarra.",
      "Symbolizes the influence of tradition and superstition in Filipino society."
    ],
    keyMoment: "His advice often leads to humorous or ironic situations.",
    imageUrl: "/characters/Don primitivo.png",
    modelPath: "/models/donprimitivo.glb"
  },
  {
    id: "sisa",
    name: "Sisa",
    shortDescription: "Basilio's mother, who is distraught and plays a significant role in the emotional and tragic moments.",
    fullDescription: "Sisa is the tragic mother of Basilio and Crispin. Driven mad by the loss and abuse of her children, she wanders the town in search of them. Her story is one of the most heartbreaking in the novel, symbolizing the suffering of Filipino mothers under colonial rule.",
    role: [
      "Searches desperately for her missing sons, Basilio and Crispin.",
      "Suffers abuse and neglect from her husband and the authorities.",
      "Her madness and death evoke deep sympathy and highlight the novel's emotional core."
    ],
    keyMoment: "Her reunion with Basilio before her death is one of the novel's most poignant scenes.",
    imageUrl: "/characters/Sisa.png",
    modelPath: "/models/sisa.glb"
  },
  {
    id: "dontiburcio",
    name: "Don Tiburcio",
    shortDescription: "Donya Victorina's husband, who is portrayed as a shadow of his former self.",
    fullDescription: "Don Tiburcio de Espadaña is the meek, henpecked husband of Doña Victorina. Once a Spanish official, he is now a shadow of his former self, dominated by his wife and ridiculed by others. His character adds a touch of satire to the novel's depiction of colonial society.",
    role: [
      "Endures the overbearing nature of Doña Victorina.",
      "Represents the decline of Spanish authority and masculinity.",
      "Often used for comic relief."
    ],
    keyMoment: "His attempts to assert himself are always undermined by Doña Victorina.",
    imageUrl: "/characters/Don Tiburcio.webp",
    modelPath: "/models/dontiburcio.glb"
  }
];

export const getCharacterById = (id: string): Character | undefined => {
  return characters.find(character => character.id === id);
};