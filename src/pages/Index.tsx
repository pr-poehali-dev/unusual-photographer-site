import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Дмитрий, 32 года',
      role: 'Владелец ресторана',
      text: 'Потрясающие фото меню и интерьера! Посещаемость выросла на 40% после публикации снимков в соцсетях. Профессионализм на высшем уровне.',
      avatar: 'https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/44d257b1-8823-4713-9dc3-603408151def.jpg'
    },
    {
      name: 'Александр, 28 лет',
      role: 'Бренд одежды',
      text: 'Работали над лукбуком новой коллекции. Результат превзошел все ожидания — каждый кадр продает. Рекомендую!',
      avatar: 'https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/9fcda847-8a60-4b23-becd-73b97e990149.jpg'
    },
    {
      name: 'Михаил, 35 лет',
      role: 'Стартап',
      text: 'Нужны были корпоративные портреты команды. Получилось стильно и современно. Все коллеги довольны результатом!',
      avatar: 'https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/b1388916-f480-40eb-8dd1-3b98b62a691e.jpg'
    }
  ];

  const projects = [
    {
      title: 'ПРОЕКТ 01',
      subtitle: 'Бренд',
      description: 'Разработан для всех типов кожи',
      images: [
        'https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/b1388916-f480-40eb-8dd1-3b98b62a691e.jpg'
      ]
    },
    {
      title: 'ПРОЕКТ 02',
      subtitle: 'Мода',
      description: 'Стильный бренд одежды',
      images: [
        'https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/9fcda847-8a60-4b23-becd-73b97e990149.jpg'
      ]
    },
    {
      title: 'ПРОЕКТ 03',
      subtitle: 'Lifestyle',
      description: 'Аутентичные моменты',
      images: [
        'https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/44d257b1-8823-4713-9dc3-603408151def.jpg'
      ]
    },
    {
      title: 'ПРОЕКТ 04',
      subtitle: 'Портрет',
      description: 'Художественный подход',
      images: [
        'https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/9fcda847-8a60-4b23-becd-73b97e990149.jpg'
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const scrollToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    const container = document.getElementById('testimonials-container');
    if (container) {
      const scrollAmount = index * (window.innerWidth > 640 ? 416 : 316);
      container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-foreground overflow-hidden">
        <svg className="absolute top-0 right-0 w-1/3 h-full opacity-10" viewBox="0 0 200 800">
          <path d="M 200,0 Q 100,200 200,400 T 200,800" stroke="currentColor" strokeWidth="3" fill="none" className="text-primary"/>
        </svg>
        
        <div className="absolute top-8 left-8 flex gap-1 z-20">
          <div className="w-3 h-3 bg-primary"></div>
          <div className="w-3 h-3 bg-primary"></div>
          <div className="w-3 h-3 bg-primary"></div>
        </div>
        
        <div className="absolute top-8 right-8 z-20">
          <Icon name="Asterisk" size={48} className="text-primary" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="relative inline-block">
            <h1 className="font-oswald text-[10vw] sm:text-[8vw] md:text-[140px] leading-none font-bold text-white tracking-tight mb-8">
              PHOTOGRAPHER
            </h1>
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-48 h-48 overflow-hidden border-4 border-primary">
              <img 
                src="https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/44d257b1-8823-4713-9dc3-603408151def.jpg"
                alt="Фотограф"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mt-24 font-caveat text-4xl md:text-6xl text-white">
            Креативный
          </div>
          
          <p className="mt-8 text-sm max-w-md mx-auto text-gray-300">
            Создаю уникальные кадры, которые рассказывают истории
          </p>
          
          <div className="absolute bottom-8 right-8 text-sm text-gray-400">
            photo@email.com
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen grid md:grid-cols-2 bg-white relative">
        <div className="absolute left-0 top-1/2 w-32 h-1 bg-primary"></div>
        
        <div className="bg-beige p-8 md:p-16 flex flex-col justify-center relative">
          <div className="absolute top-8 left-8 flex gap-1">
            <div className="w-2 h-2 bg-primary"></div>
            <div className="w-2 h-2 bg-primary"></div>
            <div className="w-2 h-2 bg-primary"></div>
          </div>
          
          <h2 className="font-oswald text-5xl md:text-7xl font-bold mb-4 flex items-center gap-4">
            ОБО МНЕ
            <Icon name="Asterisk" size={32} />
          </h2>
          
          <div className="font-caveat text-3xl md:text-5xl mb-6">
            Знакомство
          </div>
          
          <p className="text-sm leading-relaxed mb-6 max-w-md">
            Профессиональный фотограф с фокусом на коммерческую и портретную съемку. Работаю с брендами, стартапами и частными клиентами. Каждый проект — это уникальная история, рассказанная через объектив.
          </p>
          
          <div className="font-caveat text-2xl italic">
            Качество превыше количества
          </div>
        </div>

        <div className="relative h-[600px] md:h-auto">
          <img 
            src="https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/9fcda847-8a60-4b23-becd-73b97e990149.jpg"
            alt="О фотографе"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section id="strengths" className="min-h-screen grid md:grid-cols-2 bg-foreground text-white relative overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-1/4 h-full opacity-10" viewBox="0 0 200 800">
          <path d="M 0,800 Q 100,600 0,400 T 0,0" stroke="currentColor" strokeWidth="3" fill="none" className="text-primary"/>
        </svg>
        
        <div className="relative h-[600px] md:h-auto order-2 md:order-1">
          <img 
            src="https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/9fcda847-8a60-4b23-becd-73b97e990149.jpg"
            alt="Strengths"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <div className="p-8 md:p-16 flex flex-col justify-center order-1 md:order-2 relative z-10">
          <h2 className="font-oswald text-4xl md:text-6xl font-bold mb-8 flex items-center gap-4">
            МОИ ПРЕИМУЩЕСТВА
            <Icon name="Asterisk" size={32} />
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-oswald text-xl font-semibold mb-2">Технический опыт</h3>
              <p className="text-sm text-gray-300">
                Современное оборудование и профессиональная обработка
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-oswald text-xl font-semibold mb-2">Креативный подход</h3>
              <p className="text-sm text-gray-300">
                Нестандартные решения для каждого проекта
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-oswald text-xl font-semibold mb-2">Работа с брендами</h3>
              <p className="text-sm text-gray-300">
                Понимание маркетинговых задач клиента
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-oswald text-xl font-semibold mb-2">Гибкость</h3>
              <p className="text-sm text-gray-300">
                Адаптация к любым условиям съемки
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 md:py-24 bg-beige relative">
        <svg className="absolute top-20 right-0 w-1/3 h-96 opacity-10" viewBox="0 0 200 400">
          <path d="M 200,0 Q 100,100 200,200 T 200,400" stroke="currentColor" strokeWidth="3" fill="none" className="text-primary"/>
        </svg>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex gap-1 mb-8">
            <div className="w-2 h-2 bg-primary"></div>
            <div className="w-2 h-2 bg-primary"></div>
            <div className="w-2 h-2 bg-primary"></div>
          </div>
          
          <h2 className="font-oswald text-5xl md:text-7xl font-bold mb-12 text-center">
            ПОРТФОЛИО
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-white border-2 border-foreground p-4 mb-3 hover:bg-foreground hover:text-white transition-colors duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-oswald text-lg font-bold">{project.title}</h3>
                    <Icon name="Asterisk" size={16} />
                  </div>
                  <div className="font-caveat text-base mb-2">{project.subtitle}</div>
                  <p className="text-xs leading-relaxed">{project.description}</p>
                </div>
                
                <div className="aspect-square overflow-hidden border-2 border-foreground">
                  <img 
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24 bg-foreground text-white relative overflow-hidden">
        <svg className="absolute top-0 left-0 w-1/4 h-full opacity-10" viewBox="0 0 200 800">
          <rect x="50" y="50" width="100" height="100" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
          <rect x="50" y="350" width="100" height="100" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
          <rect x="50" y="650" width="100" height="100" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
        </svg>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-oswald text-5xl md:text-7xl font-bold mb-4 text-center">
            ОТЗЫВЫ
          </h2>
          <p className="text-center text-sm mb-12 text-gray-300">Что говорят клиенты</p>
          
          <div id="testimonials-container" className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide scroll-smooth">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-[300px] sm:min-w-[400px] snap-start">
                <div className="bg-white text-foreground p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 overflow-hidden flex-shrink-0 border-2 border-primary">
                      <img 
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-oswald font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed flex-grow">
                    «{testimonial.text}»
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-3 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              className="border-white text-white hover:bg-white hover:text-foreground"
              onClick={() => scrollToTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length)}
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="border-white text-white hover:bg-white hover:text-foreground"
              onClick={() => scrollToTestimonial((currentTestimonial + 1) % testimonials.length)}
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToTestimonial(index)}
                className={`w-2 h-2 transition-colors ${
                  currentTestimonial === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-white relative">
        <div className="absolute right-0 top-1/3 w-24 h-1 bg-primary"></div>
        
        <div className="container mx-auto px-4">
          <h2 className="font-oswald text-5xl md:text-7xl font-bold mb-12 text-center">
            УСЛУГИ
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border-2 border-foreground p-8 relative overflow-hidden group hover:bg-beige transition-colors duration-300">
              <div className="absolute -top-2 -right-2 w-16 h-16 border-4 border-primary opacity-20"></div>
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-oswald text-3xl font-bold">КОММЕРЧЕСКАЯ</h3>
                <Icon name="Asterisk" size={24} />
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Съемка для брендов, продуктовая фотография, lookbook
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="mt-1 flex-shrink-0" />
                  <span>Бренд-фотография</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="mt-1 flex-shrink-0" />
                  <span>Продуктовая съемка</span>
                </li>
              </ul>
            </div>
            
            <div className="border-2 border-foreground p-8 bg-foreground text-white relative overflow-hidden group">
              <div className="absolute -bottom-2 -left-2 w-16 h-16 border-4 border-primary opacity-20"></div>
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-oswald text-3xl font-bold">ПОРТРЕТНАЯ</h3>
                <Icon name="Asterisk" size={24} />
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Индивидуальные и корпоративные портреты
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="mt-1 flex-shrink-0" />
                  <span>Персональные портреты</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="mt-1 flex-shrink-0" />
                  <span>Корпоративная съемка</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-24 bg-primary text-white relative overflow-hidden">
        <svg className="absolute top-0 right-0 w-1/3 h-full opacity-10" viewBox="0 0 200 800">
          <path d="M 0,0 L 200,200 L 0,400 L 200,600 L 0,800" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-oswald text-5xl md:text-7xl font-bold mb-12 text-center">
            ТАРИФЫ
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'БАЗОВЫЙ', price: '₽ 15 000', features: ['Базовая съёмка', '10 фото', '2 часа'] },
              { name: 'СТАНДАРТ', price: '₽ 30 000', features: ['Продвинутая съёмка', '25 фото', '4 часа', 'Локация'] },
              { name: 'ПРЕМИУМ', price: '₽ 50 000', features: ['Премиум съёмка', '50 фото', 'Весь день', 'Локация', 'Персонализация'] }
            ].map((plan) => (
              <div key={plan.name} className="border-2 border-white p-8 hover:bg-white hover:text-primary transition-colors duration-300 group">
                <h3 className="font-oswald text-3xl font-bold mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-3 text-sm mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-white text-primary group-hover:bg-primary group-hover:text-white border-2 border-white">
                  Выбрать план
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen grid md:grid-cols-2 bg-foreground text-white">
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <h2 className="font-oswald text-5xl md:text-7xl font-bold mb-8">
            ДАВАЙТЕ
            <div className="font-caveat text-5xl md:text-7xl">работать</div>
            ВМЕСТЕ
          </h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-sm">
              <Icon name="Phone" size={20} />
              <span>+7 (123) 456-78-90</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Icon name="Mail" size={20} />
              <span>hello@photoname.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Icon name="MapPin" size={20} />
              <span>www.photoname.com</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-foreground">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-foreground">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-foreground">
              <Icon name="Twitter" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-foreground">
              <Icon name="Linkedin" size={20} />
            </Button>
          </div>
        </div>

        <div className="bg-beige text-foreground p-8 md:p-16 flex flex-col justify-center relative">
          <div className="absolute top-8 right-8">
            <Icon name="Asterisk" size={32} />
          </div>
          
          <h3 className="font-oswald text-3xl font-bold mb-6">Напишите мне</h3>
          
          <form className="space-y-4">
            <div>
              <Input 
                placeholder="Ваше имя"
                className="bg-white border-foreground"
              />
            </div>
            <div>
              <Input 
                type="email"
                placeholder="Ваш email"
                className="bg-white border-foreground"
              />
            </div>
            <div>
              <Textarea 
                placeholder="Ваше сообщение"
                rows={6}
                className="bg-white border-foreground resize-none"
              />
            </div>
            <Button className="w-full bg-primary text-white hover:bg-primary/90">
              Отправить сообщение
            </Button>
          </form>
        </div>
      </section>

      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Creative Portfolio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
