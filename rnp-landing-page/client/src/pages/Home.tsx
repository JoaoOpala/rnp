import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Scale, FileText, BarChart3, DollarSign, Shield, Briefcase, ArrowRight, ChevronDown, CheckCircle2, Calendar, User, MessageCircle, X, Send } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

/**
 * RNP Advocacia - Modern Landing Page
 * Design Philosophy: Contemporary Elegance
 * - Playfair Display for titles (serif, sophisticated)
 * - Sora for body text (clean, modern)
 * - Space Grotesk for headings (geometric, bold)
 * - Dark blue primary with white accents
 */

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ id: number; text: string; sender: string }>>([]);
  const [inputValue, setInputValue] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    emailjs.init('YOUR_PUBLIC_KEY');
  }, []);

  const services = [
    {
      icon: FileText,
      title: "Revisão de Contratos",
      description: "Análise detalhada de contratos bancários e financeiros para identificar cláusulas abusivas.",
      image: "/images/service_contracts.jpg",
    },
    {
      icon: Scale,
      title: "Defesa em Ações Judiciais",
      description: "Representação especializada com estratégias comprovadas para defender seus interesses.",
      image: "/images/service_judicial.jpg",
    },
    {
      icon: BarChart3,
      title: "Recuperação Judicial",
      description: "Orientação especializada para solicitar recuperação judicial e reestruturar finanças.",
      image: "/images/service_recovery.jpg",
    },
    {
      icon: DollarSign,
      title: "Administração de Dívidas",
      description: "Estratégias personalizadas para gerenciar passivos e negociar melhores condições.",
      image: "/images/service_debt.jpg",
    },
    {
      icon: Shield,
      title: "Holding Patrimonial",
      description: "Constituição e estruturação de holding para preservar o patrimônio conquistado.",
      image: "/images/abstract_pattern.png",
    },
    {
      icon: Briefcase,
      title: "Consultoria Preventiva",
      description: "Assessoria jurídica preventiva para evitar problemas financeiros e proteger patrimônio.",
      image: "/images/abstract_pattern.png",
    },
  ];

  const stats = [
    { number: "500+", label: "Casos Resolvidos" },
    { number: "15+", label: "Anos de Experiência" },
    { number: "98%", label: "Taxa de Satisfação" },
    { number: "2", label: "Escritórios" },
  ];

  const whyChoose = [
    {
      title: "Análise Detalhada",
      description: "Especialistas avaliam cada caso com profundidade, considerando todos os aspectos legais.",
      icon: CheckCircle2,
    },
    {
      title: "Celeridade",
      description: "Agimos com rapidez e precisão, mantendo foco em resultados efetivos e comprovados.",
      icon: CheckCircle2,
    },
    {
      title: "Compromisso",
      description: "Atendimento jurídico especializado com práticas de excelência em todas as etapas.",
      icon: CheckCircle2,
    },
  ];

  const testimonials = [
    {
      name: "Carlos Mendes",
      company: "Agronegócio Brasil",
      text: "A RNP Advocacia foi fundamental. Resultado excepcional e profissionalismo impecável.",
      rating: 5,
    },
    {
      name: "Marina Silva",
      company: "Indústria Paulista",
      text: "Resolveram nossa situação em tempo recorde. Equipe muito atenciosa e competente.",
      rating: 5,
    },
    {
      name: "Roberto Costa",
      company: "Comércio e Serviços",
      text: "Recomendo fortemente. Resultados comprovados e atendimento de excelência.",
      rating: 5,
    },
  ];

  const articles = [
    {
      id: 1,
      title: "Pedidos de Recuperação Judicial no Agronegócio Disparam 147% no 3º Trimestre",
      excerpt: "O agronegócio brasileiro enfrenta um momento desafiador. De acordo com dados divulgados pela Serasa Experian, os pedidos de recuperação judicial aumentaram significativamente.",
      date: "19 de dezembro de 2025",
      author: "RNP Advocacia",
      category: "Agronegócio",
      image: "/images/service_recovery.jpg",
    },
    {
      id: 2,
      title: "Por que os bancos se beneficiam da manutenção das dívidas",
      excerpt: "Entenda a lógica financeira por trás do endividamento prolongado. É comum que empresários acreditem que o banco tem interesse direto em encerrar dívidas.",
      date: "17 de dezembro de 2025",
      author: "RNP Advocacia",
      category: "Finanças",
      image: "/images/service_debt.jpg",
    },
    {
      id: 3,
      title: "Do Solo Infértil ao Campo Fértil",
      excerpt: "Endividamento Empresarial e a Reestruturação das Relações Bancárias. O endividamento empresarial é uma realidade comum no Brasil.",
      date: "17 de dezembro de 2025",
      author: "RNP Advocacia",
      category: "Empresarial",
      image: "/images/service_contracts.jpg",
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
            <a href="#servicos" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#artigos" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Artigos
            </a>
            <a href="#sobre" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Contato
            </a>
            <Button className="btn-primary">
              Agende uma Consulta
            </Button>
          </div>
          <button className="md:hidden p-2">
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section with Modern Background */}
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
          <div className="max-w-2xl">
            <div className="mb-6 inline-block relative">
              {/* Animated circle around subtitle */}
              <div className="absolute -inset-4 rounded-full border-2 border-white/30 animate-pulse"></div>
              <div className="absolute -inset-6 rounded-full border border-white/15"></div>
              <span className="subtitle text-white/80 relative z-10 px-4">ADVOCACIA MODERNA</span>
            </div>
            <h1 className="text-white mb-6 leading-tight">
              Respeito.<br />
              Responsabilidade.<br />
              Resultados.
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-xl leading-relaxed">
              Profissionais qualificados, estrutura sólida e experiência comprovada fazem da RNP Advocacia a melhor escolha para seus desafios jurídicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="inline-flex">
                <Button className="btn-outline">
                  Entre em Contato
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href="#servicos" className="inline-flex">
                <Button className="bg-white text-primary hover:bg-gray-100">
                  Saiba Mais
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Floating card */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="glass p-6 rounded-2xl max-w-xs">
            <p className="text-sm text-gray-700 font-medium">
              ✓ Nota máxima no Google<br/>
              ✓ Atendimento em todo Brasil<br/>
              ✓ Mais de 500 casos resolvidos
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="gradient-light section">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="subtitle text-primary">NOSSOS VALORES</span>
            <h2 className="mt-4 mb-4">Excelência em Cada Detalhe</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combinamos experiência, dedicação e inovação para oferecer soluções jurídicas de classe mundial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="service-card">
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="section gradient-light">
        <div className="container">
          <div className="text-center mb-16">
            <span className="subtitle text-primary">NOSSAS SOLUÇÕES</span>
            <h2 className="mt-4 mb-4">Áreas de Atuação</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Todo o nosso conhecimento à sua disposição para ajudá-lo a enfrentar os desafios financeiros e jurídicos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="service-card overflow-hidden group cursor-pointer"
                  onMouseEnter={() => setActiveService(idx)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="mb-6 h-40 bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-lg">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <a href="#contato" className="inline-flex items-center text-primary text-sm font-semibold hover:gap-2 transition-all">
                    Saiba Mais
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Section on Main Page */}
      <section id="artigos" className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="subtitle text-primary">INSIGHTS</span>
            <h2 className="mt-4 mb-4">Artigos e Análises</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mantenha-se informado com os últimos artigos sobre direito empresarial, agronegócio e finanças.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="service-card flex flex-col overflow-hidden group">
                <div className="mb-4 h-48 bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex gap-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                  <a href="#" className="inline-flex items-center text-primary text-sm font-semibold hover:gap-2 transition-all">
                    Leia Mais
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="sobre" className="section gradient-light">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="subtitle text-primary">NOSSA EQUIPE</span>
              <h2 className="mt-4 mb-8">Profissionais de Excelência</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nossa equipe é formada por especialistas experientes, prontos para orientar e conduzir seu caso com as estratégias mais adequadas. Cada membro da equipe passa por constantes atualizações para oferecer as melhores soluções jurídicas.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advogados com mais de 15 anos de experiência</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Especialização em direito empresarial e agronegócio</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Atendimento humanizado e personalizado</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/images/team_real.png"
                alt="Equipe RNP Advocacia"
                className="rounded-2xl shadow-lg-blue"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="subtitle text-primary">DEPOIMENTOS</span>
            <h2 className="mt-4">O Que Dizem Nossos Clientes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="glass p-8 rounded-2xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 quote-text leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
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

      {/* Contact Section */}
      <section id="contato" className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="subtitle text-primary">CONTATO</span>
            <h2 className="mt-4">Entre em Contato Conosco</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">São Paulo</h4>
                  <p className="text-gray-600 text-sm">
                    Av. Paulista, nº 1636, Sala 1504<br />
                    Condomínio Paulista Corporate<br />
                    Cerqueira César, CEP 01310-200
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Goiás</h4>
                  <p className="text-gray-600 text-sm">
                    Praça Santana, nº 400, Centro<br />
                    Inhumas, CEP 75400-549
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Telefone</h4>
                  <p className="text-gray-600 text-sm">
                    <a href="tel:+551140037245" className="hover:text-primary font-medium">
                      (11) 4003-7245
                    </a>
                    <br />
                    <a href="tel:+556299342442" className="hover:text-primary font-medium">
                      (62) 9 9344-2442
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Email</h4>
                  <p className="text-gray-600 text-sm">
                    <a href="mailto:contato@rnpadvocacia.com" className="hover:text-primary font-medium">
                      contato@rnpadvocacia.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl">
              {formSuccess ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Mensagem Enviada!</h3>
                  <p className="text-gray-600 mb-6">Obrigado por entrar em contato. Nossa equipe retornará em breve.</p>
                  <button
                    onClick={() => {
                      setFormSuccess(false);
                      setFormData({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="text-primary font-semibold hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setFormSubmitting(true);
                    try {
                      await emailjs.send('service_rnp', 'template_rnp', {
                        from_name: formData.name,
                        from_email: formData.email,
                        phone: formData.phone,
                        message: formData.message,
                        to_email: 'contato@rnpadvocacia.com',
                      });
                      setFormSuccess(true);
                      setFormData({ name: '', email: '', phone: '', message: '' });
                    } catch (error) {
                      console.error('Erro ao enviar:', error);
                      alert('Erro ao enviar mensagem. Tente novamente.');
                    } finally {
                      setFormSubmitting(false);
                    }
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-900">Nome Completo</label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-900">Email</label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-900">Telefone</label>
                    <input
                      type="tel"
                      placeholder="(11) 9 9999-9999"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-900">Mensagem</label>
                    <textarea
                      placeholder="Descreva seu caso..."
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    ></textarea>
                  </div>
                  <Button type="submit" disabled={formSubmitting} className="btn-primary w-full">
                    {formSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">RNP Advocacia</h4>
              <p className="text-white/70 text-sm">
                Advocacia ágil, moderna e humanizada para seus desafios jurídicos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#servicos" className="text-white/70 hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#artigos" className="text-white/70 hover:text-white transition-colors">Artigos</a></li>
                <li><a href="#sobre" className="text-white/70 hover:text-white transition-colors">Sobre</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Instagram</a></li>
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
            {/* Chat Header */}
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

            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <MessageCircle className="w-12 h-12 text-primary/20 mb-2" />
                  <p className="text-sm text-gray-600 font-medium">Olá! Como posso ajudá-lo?</p>
                  <p className="text-xs text-gray-500 mt-1">Tire suas dúvidas sobre nossos serviços</p>
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

            {/* Chat Input */}
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

        {/* Chat Toggle Button */}
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
