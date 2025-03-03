import './components/index.css'
import { useState } from 'react';

function App() {
  const AIToolsDashboard = () => {
    // Sample initial AI tools - you can replace these with your full list later
    const [aiTools, /* setAiTools */] = useState([
      { name: 'Claude', url: 'https://claude.ai', logo: '/api/placeholder/40/40' },
      { name: 'ChatGPT', url: 'https://chat.openai.com', logo: '/api/placeholder/40/40' },
      { name: 'Midjourney', url: 'https://www.midjourney.com', logo: '/api/placeholder/40/40' },
      { name: 'Bard', url: 'https://bard.google.com', logo: '/api/placeholder/40/40' }
    ]);

    const handleToolClick = (url: string) => {
      window.open(url, '_blank');
    };

    return (
      <div className="bg-black min-h-screen text-white p-8 relative">
        {/* Top corner buttons */}
        <div className="flex flex-wrap gap-4 justify-end mb-16">
          {aiTools.map((tool) => (
            <button
              key={tool.name}
              onClick={() => handleToolClick(tool.url)}
              className="flex flex-col items-center justify-center p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors duration-300 w-24 h-24"
            >
              <div className="w-10 h-10 mb-2 overflow-hidden rounded-full bg-zinc-800 flex items-center justify-center">
                <img src={tool.logo} alt={`${tool.name} logo`} className="w-full h-full object-cover" />
              </div>
              <span className="text-xs font-light text-gray-300">{tool.name}</span>
            </button>
          ))}
        </div>

        {/* Main area - can be used for content later */}
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-4xl font-thin text-gray-400">AI Tools Dashboard</h1>
        </div>

        {/* Bottom left name */}
        <div className="absolute bottom-8 left-8">
          <div className="font-thin text-xl tracking-widest text-gray-400">
            <span className="border-b border-gray-700 pb-1">YOUR NAME</span>
          </div>
        </div>
      </div>
    );
  };

  return <AIToolsDashboard />;
}

export default App;
