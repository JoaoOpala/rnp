import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, CheckCircle2, MessageCircle, X, Send } from "lucide-react";
import { useState } from "react";

/**
 * RNP Advocacia - Página de Advocacia Bancária
 * Design Philosophy: Contemporary Elegance
 * - Outfit for titles (sans-serif geométrica, bold)
 * - DM Sans for body text (clean, modern)
 * - Dark blue primary with white accents
 */

export default function Advocacia() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ id: number; text: string; sender: string }>>([]);
  const [inputValue, setInputValue] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const benefits = [
    {
      title: "Suspender bloqueios e penhoras",
      description: "De bens da empresa e dos avalistas",
      icon: CheckCircle2,
    },
    {
      title: "Reduzir juros ilegais",
      description: "Com análise contratual especializada através de peritos cadastrados",
      icon: CheckCircle2,
    },
    {
      title: "Blindar seu patrimônio",
      description: "De forma segura e estratégica",
      icon: CheckCircle2,
    },
    {
      title: "Ganhar tempo",
      description: "Para reorganizar o fluxo de caixa com foco no crescimento",
      icon: CheckCircle2,
    },
  ];

  const stats = [
    { number: "R$ 334 M", label: "Em dívidas sob gestão" },
    { number: "2.000+", label: "Empresários atendidos" },
    { number: "40+", label: "Advogados especializados" },
  ];

  const faqs = [
    {
      question: "Minhas parcelas já estão em atraso. Ainda posso buscar ajuda?",
      answer: "Sim. O fato de a dívida estar em atraso evidencia que você precisa agir com urgência, antes que o banco mova uma ação contra você e a sua empresa. Quanto antes você agir, maiores são as chances de suspender bloqueio de contas, suspender penhoras, proteger seu patrimônio e ganhar tempo para renegociar com mais equilíbrio.",
    },
    {
      question: "Já estou com ação judicial, posso entrar com revisão do contrato?",
      answer: "Sim. A existência de uma ação movida pelo banco não impede que você entre com um pedido de revisão contratual, mas, na maioria das vezes, discutimos as ilegalidades do contrato na própria defesa.",
    },
    {
      question: "O banco pode bloquear minha CNH e meu passaporte?",
      answer: "Sim. O STJ entendeu recentemente ser possível, após o ingresso de uma ação judicial, o bloqueio de CNH, passaporte, cartões de crédito. Por isso é importante o acompanhamento profissional.",
    },
    {
      question: "Meu contrato tem abusividade?",
      answer: "95% dos contratos bancários possuem abusividade. Como o entendimento jurisprudencial vem mudando com o tempo, coisas que eram 'legais' deixaram de ser, e por isso, cabe pedido de revisão contratual.",
    },
    {
      question: "Os juros do meu contrato parecem baixos. Ainda assim posso revisar?",
      answer: "Parece, mas não é. O banco divulga uma coisa e cobra outra. Mesmo contratos com encargos aparentemente baixos podem conter irregularidades como capitalização indevida ou cobrança de tarifas ocultas.",
    },
    {
      question: "Qual o próximo passo para iniciar minha análise?",
      answer: "Entre em contato conosco através do formulário ou do chat. Um especialista fará uma análise preliminar do seu caso e indicará os próximos passos.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img src="/images/rnp_logo.png" alt="RNP Advocacia" className="h-10" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Início
            </a>
            <a href="#beneficios" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Benefícios
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              FAQ
            </a>
            <Button className="btn-primary">
              Agende uma Consulta
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden gradient-primary">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/hero_modern.jpg"
            alt="Modern Law Office"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block relative">
              <div className="absolute -inset-4 rounded-full border-2 border-white/30 animate-pulse"></div>
              <div className="absolute -inset-6 rounded-full border border-white/15"></div>
              <span className="subtitle text-white/80 relative z-10 px-4">ADVOCACIA BANCÁRIA</span>
            </div>
            <h1 className="text-white mb-6 leading-tight">
              Conheça o procedimento que vem salvando milhares de empresas da falência em todo o Brasil.
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-2xl">
              Mantenha sua empresa operando. Mantenha os empregos. Mantenha seu padrão de vida.
            </p>
            <p className="text-white/80 mb-8 max-w-2xl">
              Entenda como é possível obter o prazo que você precisa para não perder tudo o que construiu. Faça uma avaliação e descubra como aplicar essa estratégia no seu caso.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-primary hover:bg-gray-100 font-semibold">
                Agende uma Consulta
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Dr. Luiz Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/dr_luiz_matheus.webp"
                alt="Dr. Luiz Matheus"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
            <div>
              <span className="subtitle text-primary">QUEM SOMOS</span>
              <h2 className="mt-4 mb-6">Eu já estive do outro lado do balcão</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Antes de fundar o maior escritório de advocacia bancário empresarial da região, <strong>Dr. Luiz Matheus</strong> atuou dentro do sistema financeiro. Como ex-bancário, ele conhecia as metas, contratos e estratégias que os bancos usam para gerar lucros, muitas vezes à custa da falência dos empresários.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Hoje, ele lidera uma equipe com mais de 40 advogados especializados em Direito Bancário e atua diretamente para proteger empresários como você, pessoas que lutam para manter seu negócio vivo mesmo diante de dívidas impagáveis.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A estrutura da RNP foi desenhada para oferecer soluções personalizadas, com foco na <strong>proteção patrimonial e na recuperação da saúde financeira dos nossos clientes.</strong>
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">R$ 334 milhões em dívidas sob gestão</p>
                    <p className="text-sm text-gray-600">Já atuamos em milhares de casos e sabemos exatamente o que funciona</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Mais de 2 mil empresários atendidos</p>
                    <p className="text-sm text-gray-600">Oferecemos soluções personalizadas para o melhor resultado</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Equipe especializada em Direito Bancário</p>
                    <p className="text-sm text-gray-600">Você não ficará sozinho em nenhum momento do processo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section gradient-primary">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="subtitle text-primary">O QUE VOCÊ VAI CONSEGUIR</span>
            <h2 className="mt-4">Com a nossa ajuda</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="subtitle text-primary">DÚVIDAS FREQUENTES</span>
            <h2 className="mt-4">Perguntas e Respostas</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-primary/30 transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-primary">
        <div className="container text-center">
          <h2 className="text-white mb-4">Pronto Para Resolver Seus Desafios?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Entre em contato conosco hoje mesmo e agende uma consulta com um de nossos especialistas.
          </p>
          <Button className="bg-white text-primary hover:bg-gray-100 font-semibold">
            Agende Sua Consulta
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">RNP Advocacia</h4>
              <p className="text-sm text-white/70">Advocacia bancária especializada para empresas</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Revisão de Contratos</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Defesa Judicial</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Proteção Patrimonial</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:1140037245" className="text-white/70 hover:text-white transition-colors">(11) 4003-7245</a></li>
                <li><a href="mailto:contato@rnpadvocacia.com" className="text-white/70 hover:text-white transition-colors">contato@rnpadvocacia.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Informações</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Termos</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
              <p>&copy; 2025 RNP Advocacia. Todos os direitos reservados.</p>
              <p>Desenvolvido com excelência para sua confiança</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {chatOpen && (
          <div className="absolute bottom-20 right-0 w-96 max-w-sm bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="gradient-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Assistente RNP</h3>
                  <p className="text-xs text-white/70">Online</p>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="hover:bg-white/20 p-1 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <MessageCircle className="w-12 h-12 text-primary/20 mb-2" />
                  <p className="text-sm text-gray-600 font-medium">Olá! Como posso ajudá-lo?</p>
                  <p className="text-xs text-gray-500 mt-1">Tire suas dúvidas sobre advocacia bancária</p>
                </div>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                        msg.sender === 'user'
                          ? 'bg-primary text-white rounded-br-none'
                          : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-gray-200 p-3 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && inputValue.trim()) {
                      setMessages([...messages, { id: Date.now(), text: inputValue, sender: 'user' }]);
                      setInputValue('');
                      setTimeout(() => {
                        setMessages((prev) => [
                          ...prev,
                          {
                            id: Date.now() + 1,
                            text: 'Obrigado pela sua mensagem! Um especialista da RNP Advocacia entrará em contato em breve.',
                            sender: 'bot',
                          },
                        ]);
                      }, 500);
                    }
                  }}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                />
                <button
                  onClick={() => {
                    if (inputValue.trim()) {
                      setMessages([...messages, { id: Date.now(), text: inputValue, sender: 'user' }]);
                      setInputValue('');
                      setTimeout(() => {
                        setMessages((prev) => [
                          ...prev,
                          {
                            id: Date.now() + 1,
                            text: 'Obrigado pela sua mensagem! Um especialista da RNP Advocacia entrará em contato em breve.',
                            sender: 'bot',
                          },
                        ]);
                      }, 500);
                    }
                  }}
                  className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 gradient-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
        >
          {chatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}
