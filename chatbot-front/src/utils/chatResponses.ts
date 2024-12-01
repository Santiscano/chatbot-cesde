import { ChatInput } from './../components/Chat/ChatInput';


export const educationalResponses = {
  greeting: [
    "¡Hola! Soy tu asistente virtual educativo. ¿En qué puedo ayudarte hoy? 📚",
    "¡Bienvenido! Estoy aquí para ayudarte con tus dudas educativas. ¿Qué te gustaría aprender? 🎓",
    "¡Hola! Me alegro de verte. ¿Sobre qué tema te gustaría aprender hoy? 🌟"
  ],
  default: "¡Lo siento! No tengo información sobre ese tema. ¿Puedo ayudarte con algo más? 🤖" ,
  fallback: [
    "Gracias por tu pregunta. Permíteme buscar la mejor información para ayudarte. 🔍",
    "Estoy procesando tu consulta para brindarte una respuesta precisa. ⚡",
    "Interesante pregunta. Dame un momento para encontrar la información más relevante. 📖"
  ],

  topics: {
    methodology: [
      "Los métodos de estudio más efectivos incluyen:",
      "📚 Técnica Pomodoro para gestionar el tiempo",
      "🧠 Mapas mentales para organizar información",
      "🔄 Práctica activa y repetición espaciada",
      "👥 Enseñar a otros lo aprendido",
      "¿Te gustaría profundizar en alguna de estas técnicas?"
    ].join('\n'),
    
    resources: [
      "Contamos con diversos recursos educativos:",
      "📚 Biblioteca virtual 24/7",
      "🎥 Videos tutoriales",
      "✍️ Ejercicios prácticos",
      "📱 Materiales descargables",
      "¿Qué tipo de recurso te interesa explorar?"
    ].join('\n'),

    study_tips: [
      "Aquí tienes algunos consejos para estudiar mejor:",
      "🎯 Establece objetivos claros y alcanzables",
      "📅 Crea un horario de estudio consistente",
      "🌟 Toma descansos regulares",
      "📝 Practica la toma de notas activa",
      "¿Quieres que profundicemos en alguno de estos consejos?"
    ].join('\n'),

    pysco: [
      "La psicología del aprendizaje es fascinante. Algunos temas clave son:",
      "🧠 Teoría del procesamiento de la información",
      "📚 Motivación y metas académicas",
      "🎓 Estrategias de aprendizaje efectivas",
      "🧑‍🏫 Factores que influyen en el rendimiento",
      "¿Te gustaría explorar más sobre psicología educativa?"
    ].join('\n'),

    
  }
};

export const getResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('método') || lowerMessage.includes('estudiar') || lowerMessage.includes('aprender')) {
    return educationalResponses.topics.methodology;
  }
  
  if (lowerMessage.includes('recurso') || lowerMessage.includes('material') || lowerMessage.includes('contenido')) {
    return educationalResponses.topics.resources;
  }

  if (lowerMessage.includes('consejo') || lowerMessage.includes('tip') || lowerMessage.includes('ayuda')) {
    return educationalResponses.topics.study_tips;
  }
  
  if
  (lowerMessage.includes('psicologia') || lowerMessage.includes('comportamiento') || lowerMessage.includes('humano')) {
    return educationalResponses.topics.pysco;
  }
  return educationalResponses.default;
};