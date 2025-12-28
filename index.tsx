import { GoogleGenAI } from '@google/genai';

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-slate-950/98', 'py-3', 'backdrop-blur-md', 'shadow-xl');
      navbar.classList.remove('bg-[#0f172a]', 'py-5');
    } else {
      navbar.classList.add('bg-[#0f172a]', 'py-5');
      navbar.classList.remove('bg-slate-950/98', 'py-3', 'backdrop-blur-md', 'shadow-xl');
    }
  }
});

// Chat Logic
const chatWindow = document.getElementById('chat-window') as HTMLElement;
const chatMessages = document.getElementById('chat-messages') as HTMLElement;
const chatInput = document.getElementById('chat-input') as HTMLInputElement;

(window as any).toggleChat = () => {
  if (chatWindow.classList.contains('hidden')) {
    chatWindow.classList.remove('hidden');
    setTimeout(() => {
      chatWindow.style.opacity = '1';
      chatWindow.style.transform = 'scale(1)';
    }, 10);
  } else {
    chatWindow.style.opacity = '0';
    chatWindow.style.transform = 'scale(0.95)';
    setTimeout(() => chatWindow.classList.add('hidden'), 300);
  }
};

(window as any).sendMessage = async () => {
  const text = chatInput.value.trim();
  if (!text) return;

  // Add User Message
  const userDiv = document.createElement('div');
  userDiv.className = 'bg-amber-600 text-white p-3 rounded-lg shadow-sm ml-auto max-w-[85%]';
  userDiv.textContent = text;
  chatMessages.appendChild(userDiv);
  chatInput.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Loading indicator
  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'text-slate-400 text-[10px] italic';
  loadingDiv.textContent = 'Digitando...';
  chatMessages.appendChild(loadingDiv);

  try {
    const ai = new GoogleGenAI({ apiKey: (process.env as any).API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts: [{ text }] }],
      config: {
        systemInstruction: 'Você é a assistente do escritório Ricardo Bitencourt. Tom formal, jurídico e acolhedor. Atendemos em Porto Alegre/RS na Rua Senhor dos Passos, 372. Áreas: Civil, Família, Trabalhista.',
      }
    });

    chatMessages.removeChild(loadingDiv);
    const aiDiv = document.createElement('div');
    aiDiv.className = 'bg-white p-3 rounded-lg shadow-sm border border-slate-100 max-w-[85%]';
    aiDiv.textContent = response.text || 'Desculpe, tente novamente em instantes.';
    chatMessages.appendChild(aiDiv);
  } catch (e) {
    chatMessages.removeChild(loadingDiv);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'bg-red-50 text-red-500 p-2 text-[11px] rounded';
    errorDiv.textContent = 'Erro ao conectar com a inteligência. Tente o WhatsApp.';
    chatMessages.appendChild(errorDiv);
  }
  chatMessages.scrollTop = chatMessages.scrollHeight;
};

// Listen for Enter key
chatInput?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') (window as any).sendMessage();
});
