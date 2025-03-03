import  { useState } from 'react';
import SplineEmbed from './components/spline';
import styles from './components/app2.module.css';

const AIToolsDashboard = () => {
  // Sample initial AI tools - you can replace these with your full list later
  const [aiTools, ] = useState([
    { name: 'ChatGPT', url: 'https://chat.openai.com', logo: 'https://imgs.search.brave.com/TSrDbNBlWUcocw7UTt38SAkmg1BvL4Dk1JP7VYo8FgU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9haS5s/cy9hc3NldHMvb3Bl/bmFpLWxvZ29zL1BO/R3Mvb3BlbmFpLXdo/aXRlLWxvZ29tYXJr/LnBuZw'},
    { name: 'Claude', url: 'https://claude.ai', logo: 'https://imgs.search.brave.com/56HdvEIVlueIpy9s3ZAqJVb8UBlLOAR0TjRiTg_95_I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZWdp/c3RyeS5ucG1taXJy/b3IuY29tL0Bsb2Jl/aHViL2ljb25zLXN0/YXRpYy1wbmcvbGF0/ZXN0L2ZpbGVzL2Rh/cmsvY2xhdWRlLWNv/bG9yLnBuZw'},
    
    { name: 'Gemini', url: 'https://gemini.google.com', logo: 'https://imgs.search.brave.com/MUPJRQ_Qz-a_VTM2ZJA5x8-j5sRFNC1473qyBUNE6UE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZWdp/c3RyeS5ucG1taXJy/b3IuY29tL0Bsb2Jl/aHViL2ljb25zLXN0/YXRpYy1wbmcvbGF0/ZXN0L2ZpbGVzL2Rh/cmsvZ2VtaW5pLWNv/bG9yLnBuZw'},
    { name: 'DeepSeek', url: 'https://www.deepseek.com', logo: 'https://imgs.search.brave.com/JpwTm9rtdIZvswvAoyLikFfCgVbhKB-wlDUSv8q0UHY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jdXN0/b20udHlwaW5nbWlu/ZC5jb20vYXNzZXRz/L21vZGVscy9kZWVw/c2Vlay5wbmc'},
    { name: 'Groq', url: 'https://groq.com', logo: 'https://imgs.search.brave.com/Zaml1oUGMpmtamSOtjEGjfFi1I4bObyeQcN9gghyLVk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dC5icmFuZGZldGNo/LmlvL2lkeHlnYkVQ/Q1EvaWR6Q3lGLUk0/NC5wbmc_dXBkYXRl/ZD0xNjY4NTE1NzEy/OTcy'},
    { name: 'Grok', url: 'https://x.ai', logo: 'https://imgs.search.brave.com/CNRbeBm5CtoHq7I5qa_MxoFeYuisjeVzC7omXyes0Jw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY5MDY0MzU5/MXR3aXR0ZXIteC1s/b2dvLXBuZy5wbmc'},
    { name: 'V0', url: 'https://v0.dev', logo: 'https://imgs.search.brave.com/Zwn2N_VvRwuUCLuuFSORkWTk2drpIgtg4UvBuAEK0LA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lm9wZW5yZXBsYXku/Y29tL2ltYWdlcy9n/ZXR0aW5nLXN0YXJ0/ZWQtd2l0aC12ZXJj/ZWwtdjAvaW1hZ2Vz/L2hlcm8ucG5n' },
    { name: 'Lovable AI', url: 'https://www.lovable.ai', logo: 'https://imgs.search.brave.com/MFnEa5Tpzmm8CeNCywftjo2qEyZsfgtb48n_Rk-6EWc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZWZp/bmUtd2ViLmltZ2l4/Lm5ldC9ibG9nLzIw/MjUtMDItMTItbG92/YWJsZS9zb2NpYWwu/cG5nP3c9MTc4OA' },
    { name: 'Replit Agent', url: 'https://replit.com/ai', logo: 'https://imgs.search.brave.com/YB73WyLPVGaLftWch5GZvtIpE8KCk_tx_7nyL4JKQ6k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2FuaXR5LmlvL2lt/YWdlcy9iajM0cGRi/cC9taWdyYXRpb24v/MWNhYTljNjk4ZjEw/OGZmZDQ2Y2Q4MTE5/ZjAwMjM4NmM4ZGFl/Yjg4NS00MDB4NDAw/LmpwZw' },
    { name: 'Mistral AI', url: 'https://mistral.ai', logo: 'https://imgs.search.brave.com/YXho4M7sipUysLRrQ_OZnylOBVHABpxlN4YiEuxXlPA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZWdp/c3RyeS5ucG1taXJy/b3IuY29tL0Bsb2Jl/aHViL2ljb25zLXN0/YXRpYy1wbmcvbGF0/ZXN0L2ZpbGVzL2Rh/cmsvbWlzdHJhbC1j/b2xvci5wbmc' },
    { name: 'Leonardo AI', url: 'https://leonardo.ai', logo: 'https://leonardo.ai/favicon.ico' },
    { name: 'Spline', url: 'https://spline.design', logo: 'https://imgs.search.brave.com/eQqaN9RvZViMGmZlltvDTY2WdCP-PQiAK62K9F847Ko/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NDc2MDA2OWU5MzA4/NDY0NmM5ZWU0Mjgv/NjQ3NjAwNjllOTMw/ODQ2NDZjOWVmMjhh/X2ljb24tc3BsaW5l/LTNkLnBuZw' },
    { name: 'Perplexity AI', url: 'https://www.perplexity.ai', logo: 'https://www.perplexity.ai/favicon.ico' }
]);

  

  const handleToolClick = (url:string) => {
    window.open(url, '_blank');
  };

  // Function to handle button hover
  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>, isHovering: boolean) => {
    e.currentTarget.style.backgroundColor = isHovering ? '#333' : '#222';
  };
  

  return (
    <div className={styles.container}>
      {/* Top corner buttons */}
      <div className={styles.buttonsContainer}>
        {aiTools.map((tool) => (
          <button
            key={tool.name}
            onClick={() => handleToolClick(tool.url)}
            className={styles.button}
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
          >
            <div className={styles.logoContainer}>
              <img src={tool.logo} alt={`${tool.name} logo`} className={styles.logo} />
            </div>
            <span className={styles.toolName}>{tool.name}</span>
          </button>
        ))}
      </div>
      
     

      {/* Bottom left name */}
      <div className={styles.nameContainer}>
        <div className={styles.name}>DEWASHISH HEMANT LAMBORE</div>
      </div>
    </div>
  );
};

export default AIToolsDashboard;