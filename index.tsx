import { GoogleGenAI } from '@google/genai';

// --- ELEMENTOS DA UI ---
const UI = {
  navbar: document.getElementById('navbar'),
  modalBackdrop: document.getElementById('modal-backdrop'),
  modalTitle: document.getElementById('modal-title'),
  modalBody: document.getElementById('modal-body'),
  aiChatBox: document.getElementById('ai-chat-box'),
  aiMessages: document.getElementById('ai-messages'),
  aiInput: document.getElementById('ai-input') as HTMLInputElement,
  aiIcon: document.getElementById('ai-icon'),
  aiToggleBtn: document.getElementById('ai-toggle-btn'),
};

// --- SCROLL DA NAVBAR ---
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    UI.navbar?.classList.add('nav-scrolled');
  } else {
    UI.navbar?.classList.remove('nav-scrolled');
  }
});

// --- MODAIS LEGAIS ---
const LEGAL_CONTENT = {
  terms: "Este site tem caráter meramente informativo e não constitui consulta jurídica formal.\n\nAo navegar por este portal, você concorda que o conteúdo aqui exposto visa aproximar o escritório de seus clientes e parceiros, seguindo rigorosamente o código de ética da OAB.\n\nNenhuma informação contida neste site deve ser interpretada como aconselhamento jurídico definitivo para o seu caso específico sem uma consulta prévia.\n\nTodo o conteúdo intelectual, marcas e logos são de propriedade exclusiva de Ricardo Bitencourt Advocacia.",
  privacy: "Protegemos sua privacidade em conformidade com a Lei Geral de Proteção de Dados (LGPD).\n\nColetamos apenas os dados estritamente necessários para o agendamento de consultas quando fornecidos voluntariamente via WhatsApp ou E-mail.\n\nNão compartilhamos seus dados pessoais com terceiros sob nenhuma circunstância sem seu consentimento expresso.\n\nUtilizamos cookies técnicos mínimos para garantir o funcionamento adequado do site e medir o desempenho básico de navegação de forma anônima."
};

(window as any).toggleModal = (type: 'terms' | 'privacy') => {
  if (UI.modalTitle && UI.modalBody && UI.modalBackdrop) {
    UI.modalTitle.innerText = type === 'terms' ? 'Termos de Uso' : 'Política de Privacidade';
    UI.modalBody.innerText = LEGAL_CONTENT[type];
    UI.modalBackdrop.classList.remove('hidden');
    UI.modalBackdrop.classList.add('flex');
    document.body.classList.add('modal-active');
  }
};

(window as any).closeModal = () => {
  UI.modalBackdrop?.classList.add('hidden');
  UI.modalBackdrop?.classList.remove('flex');
  document.body.classList.remove('modal-active');
};

// --- IA CHAT GEMINI ---
let isAIChatOpen = false;

(window as any).toggleAIChat = () => {
  isAIChatOpen = !isAIChatOpen;
  if (isAIChatOpen) {
    UI.aiChatBox?.classList.add('active');
    if (UI.aiIcon) {
        UI.aiIcon.className = 'fas fa-times text-xl';
    }
    if (UI.aiToggleBtn) {
        UI.aiToggleBtn.classList.remove('animate-float');
        UI.aiToggleBtn.classList.add('bg-slate-900');
    }
  } else {
    UI.aiChatBox?.classList.remove('active');
    if (UI.aiIcon) {
        UI.aiIcon.className = 'fas fa-headset text-xl';
    }
    if (UI.aiToggleBtn) {
        UI.aiToggleBtn.classList.add('animate-float');
        UI.aiToggleBtn.classList.remove('bg-slate-900');
    }
  }
};

async function generateAIResponse(prompt: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "Você é o assistente virtual do escritório de advocacia Dr. Ricardo Bitencourt. Seu tom deve ser formal, ético e jurídico, porém acolhedor. O escritório atende em Porto Alegre/RS. Especialidades: Direito Civil, Família e Trabalhista. Não dê conselhos jurídicos definitivos, apenas orientações gerais e convide o usuário para agendar uma consulta.",
        temperature: 0.7
      }
    });
    return response.text;
  } catch (e) {
    console.error(e);
    return "Desculpe, tive um problema de conexão. Por favor, utilize o botão do WhatsApp no topo da página para um atendimento direto.";
  }
}

(window as any).sendAIMessage = async () => {
  const text = UI.aiInput.value.trim();
  if (!text) return;

  // Adicionar mensagem do usuário
  appendMessage('user', text);
  UI.aiInput.value = '';

  // Efeito de carregamento
  const loadingId = 'loading-' + Date.now();
  appendMessage('ai', 'Analisando sua dúvida...', loadingId);

  const response = await generateAIResponse(text);
  
  // Substituir carregamento pela resposta real
  const loadingEl = document.getElementById(loadingId);
  if (loadingEl) {
      loadingEl.innerText = response;
  }
};

UI.aiInput?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') (window as any).sendAIMessage();
});

function appendMessage(role: 'user' | 'ai', text: string, id?: string) {
  if (!UI.aiMessages) return;
  const div = document.createElement('div');
  div.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'}`;
  div.innerHTML = `
    <div ${id ? `id="${id}"` : ''} class="max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
    role === 'user' ? 'bg-amber-600 text-white rounded-tr-none' : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
  }">
      ${text}
    </div>
  `;
  UI.aiMessages.appendChild(div);
  UI.aiMessages.scrollTop = UI.aiMessages.scrollHeight;
}