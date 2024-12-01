import React from 'react';
import { Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const suggestions = [
  {
    id: 1,
    ask: "¿Qué temas cubren los programas educativos?",
    response: "Los programas educativos cubren temas diversos según el área de estudio."
  },
  {
    id: 2,
    ask: "¿Cómo puedo mejorar mi método de estudio?",
    response: "Puedes mejorar tu método de estudio con técnicas como tomar notas, establecer horarios y usar recursos adicionales."
  },
  {
    id: 3,
    ask: "¿Cuáles son los recursos disponibles?",
    response: "Los recursos disponibles incluyen guías, materiales en línea, tutorías y acceso a bibliotecas."
  },
  {
    id: 4,
    ask: "¿Hay tutorías disponibles?",
    response: "Sí, se ofrecen tutorías para ayudar con el aprendizaje en áreas específicas."
  },
  {
    id: 5,
    ask: "¿Cómo puedo inscribirme en un programa educativo?",
    response: "Puedes inscribirte a través de nuestro sitio web o contactando directamente con nuestra oficina de admisiones."
  },
  {
    id: 6,
    ask: "Cuales son los programas educativos que ofrece el cesde?",
    response: "El CESDE ofrece programas en áreas como tecnología, negocios, diseño y más."
  },
  {
    id: 7,
    ask: "¿Qué programas de becas hay disponibles?",
    response: "Ofrecemos becas para estudiantes destacados, con necesidades económicas y para programas específicos."
  },
  // {
  //   id: 8,
  //   ask: "¿Cuáles son los programas educativos que ofrece el CESDE?",
  //   response: "Contamos con una amplia variedad de programas educativos: Servicio de Mantenimiento -Reparación e Instalación de Electrodomésticos -Atención y Cuidado a Personas Mayores Diseño Gráfico,- Publicación de Contenidos Digitales, - Instalador de Redes de Energía Eléctrica y Solar -Soporte de Sistemas Informáticos -Atención Integral a la Primera Infancia - Desarrollo de Software",
  // },
  // {
  //   id: 9,
  //   ask: "¿Cuál es el objetivo de los programas educativos?",
  //   response: "El objetivo de los programas educativos es formar a los estudiantes en competencias laborales para que puedan desempeñarse en el mercado laboral.",
  // },
];


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

export const ChatSuggestions: React.FC<{ onSelect: (suggestion: { id: number; ask: string; response: string; }) => void }> = ({ onSelect }) => {

  // TODO: aqui usaran useEffect para consumir una api y obtener las sugerencias
  // TODO: crear una conexion para que cuando envie preguntas por el imnput se envien a la api
  return (
    <motion.div 
      className="mb-6"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div 
        className="flex items-center gap-2 mb-3"
        variants={item}
      >
        <Lightbulb className="w-5 h-5 text-primary" />
        <h3 className="text-sm font-medium text-gray-700">Preguntas sugeridas</h3>
      </motion.div>
      <motion.div 
        className="flex flex-wrap gap-2"
        variants={container}
      >
        {suggestions.map((suggestion, index) => (
          <motion.button
            key={index}
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(suggestion)}
            className="text-sm bg-primary-light text-primary px-3 py-1 rounded-full hover:bg-pink-100 transition-colors"
          >
            {suggestion.ask}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};