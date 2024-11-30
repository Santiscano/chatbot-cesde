import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { ChatContainer } from './components/Chat/ChatContainer';
import Programs from './components/Chat/Programs';

function App() {
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="container mx-auto px-4 py-8 h-screen max-w-6xl ">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden h-[calc(100vh-4rem)] flex"
        >
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-[#E3287A] text-white px-6 py-4"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <GraduationCap className="w-8 h-8" />
                </motion.div>
                <h1 className="text-2xl font-bold">Chat Educativo</h1>
              </div>
            </motion.div>
            <ChatContainer />
          </div>
          {/* <Programs /> */}
        </motion.div>
      </div>
    </div>
  );
}

export default App;