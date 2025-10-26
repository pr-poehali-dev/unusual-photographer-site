import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
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
      name: 'Анна, 27 лет',
      role: 'Предприниматель',
      text: 'До занятий я не верила, что смогу сдать IELTS на высокий балл. Но методика преподавателя помогла мне найти уверенность в тесте, и смогла сдать его с первого раза! Теперь учусь за границей!',
      avatar: 'https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/44d257b1-8823-4713-9dc3-603408151def.jpg'
    },
    {
      name: 'Иван, 34 года',
      role: 'Бизнес-английский',
      text: 'Мне нужен был английский для работы. После трех месяцев занятий я уверенно провожу переговоры с иностранными партнёрами и даже веду встречи деловую переписку без затруднений!',
      avatar: 'https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/9fcda847-8a60-4b23-becd-73b97e990149.jpg'
    },
    {
      name: 'Екатерина, 22 года',
      role: 'Разговорный английский',
      text: 'Раньше я очень стеснялась на иностранном языке общаться и запинаться. Сейчас свободно говорю на уроках и поддерживаю разговор даже в шумных улицах постоянно уже уверена в языке!',
      avatar: 'https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/b1388916-f480-40eb-8dd1-3b98b62a691e.jpg'
    }
  ];

  const projects = [
    {
      title: 'ПРОЕКТ 01',
      subtitle: 'Бренд',
      description: 'Разработан для всех типов кожи, направлен на питание и здоровье кожи',
      images: [
        'https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/b1388916-f480-40eb-8dd1-3b98b62a691e.jpg',
        'https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/9fcda847-8a60-4b23-becd-73b97e990149.jpg'
      ]
    },
    {
      title: 'ПРОЕКТ 02',
      subtitle: 'Мода',
      description: 'Стильный бренд одежды с минималистичной эстетикой',
      images: [
        'https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/9fcda847-8a60-4b23-becd-73b97e990149.jpg',
        'https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/44d257b1-8823-4713-9dc3-603408151def.jpg'
      ]
    },
    {
      title: 'ПРОЕКТ 03',
      subtitle: 'Lifestyle',
      description: 'Захват аутентичных жизненных моментов',
      images: [
        'https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/44d257b1-8823-4713-9dc3-603408151def.jpg',
        'https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/b1388916-f480-40eb-8dd1-3b98b62a691e.jpg'
      ]
    },
    {
      title: 'ПРОЕКТ 04',
      subtitle: 'Портрет',
      description: 'Индивидуальные фотосессии с художественным подходом',
      images: [
        'https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/9fcda847-8a60-4b23-becd-73b97e990149.jpg',
        'https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/b1388916-f480-40eb-8dd1-3b98b62a691e.jpg'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-beige overflow-hidden">
        <svg className="absolute top-0 right-0 w-1/3 h-full opacity-30" viewBox="0 0 200 800">
          <path d="M 200,0 Q 100,200 200,400 T 200,800" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
        </svg>
        
        <div className="absolute top-8 left-8 flex gap-1 z-20">
          <div className="w-3 h-3 rounded-full bg-foreground"></div>
          <div className="w-3 h-3 rounded-full bg-foreground"></div>
          <div className="w-3 h-3 rounded-full bg-foreground"></div>
        </div>
        
        <div className="absolute top-8 right-8 z-20">
          <Icon name="Asterisk" size={48} className="text-foreground" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="relative inline-block">
            <h1 className="font-oswald text-[10vw] sm:text-[8vw] md:text-[140px] leading-none font-bold text-foreground tracking-tight mb-8">
              PHOTOGRAPHER
            </h1>
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full overflow-hidden border-4 border-foreground">
              <img 
                src="https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/44d257b1-8823-4713-9dc3-603408151def.jpg"
                alt="Фотограф"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mt-24 font-caveat text-4xl md:text-6xl">
            Креативный
          </div>
          
          <p className="mt-8 text-sm max-w-md mx-auto text-muted-foreground">
            Создаю уникальные кадры, которые рассказывают истории
          </p>
          
          <div className="absolute bottom-8 right-8 text-sm">
            photo@email.com
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen grid md:grid-cols-2 bg-white relative">
        <div className="absolute left-0 top-1/2 w-32 h-1 bg-primary"></div>
        
        <div className="bg-beige p-8 md:p-16 flex flex-col justify-center relative">
          <div className="absolute top-8 left-8 flex gap-1">
            <div className="w-2 h-2 rounded-full bg-foreground"></div>
            <div className="w-2 h-2 rounded-full bg-foreground"></div>
            <div className="w-2 h-2 rounded-full bg-foreground"></div>
          </div>
          
          <h2 className="font-oswald text-5xl md:text-7xl font-bold mb-4 flex items-center gap-4">
            ОБО МНЕ
            <Icon name="Asterisk" size={32} />
          </h2>
          
          <div className="font-caveat text-3xl md:text-5xl mb-6">
            Знакомство
          </div>
          
          <p className="text-sm leading-relaxed mb-6 max-w-md">
            Я креативный фотограф, увлеченный созданием аутентичного контента. От ярких композиций до искренних жизненных моментов — я оживляю бренды историями, которые вдохновляют. Давайте создадим что-то незабываемое вместе!
          </p>
          
          <div className="font-caveat text-2xl italic">
            Жизнь слишком коротка для скучных фото
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
        <svg className="absolute bottom-0 left-0 w-1/4 h-full opacity-20" viewBox="0 0 200 800">
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
            МОИ СИЛЬНЫЕ СТОРОНЫ
            <Icon name="Asterisk" size={32} />
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-oswald text-xl font-semibold mb-2">Адаптивность</h3>
              <p className="text-sm text-gray-300">
                Быстро адаптируюсь к трендам и требованиям
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-oswald text-xl font-semibold mb-2">Креативное повествование</h3>
              <p className="text-sm text-gray-300">
                Создаю истории, которые захватывают аудиторию
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-oswald text-xl font-semibold mb-2">Фокус на сообществе</h3>
              <p className="text-sm text-gray-300">
                Выстраиваю искренние связи с брендом
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-oswald text-xl font-semibold mb-2">Трендовость</h3>
              <p className="text-sm text-gray-300">
                Использую новейшие инструменты
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 md:py-24 bg-beige relative">
        <svg className="absolute top-20 right-0 w-1/3 h-96 opacity-20" viewBox="0 0 200 400">
          <path d="M 200,0 Q 100,100 200,200 T 200,400" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
        </svg>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex gap-1 mb-8">
            <div className="w-2 h-2 rounded-full bg-foreground"></div>
            <div className="w-2 h-2 rounded-full bg-foreground"></div>
            <div className="w-2 h-2 rounded-full bg-foreground"></div>
          </div>
          
          <h2 className="font-oswald text-5xl md:text-7xl font-bold mb-12 text-center">
            ПОРТФОЛИО
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-white border-2 border-foreground p-6 mb-4 hover:bg-foreground hover:text-white transition-colors duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-oswald text-2xl font-bold">{project.title}</h3>
                    <Icon name="Asterisk" size={20} />
                  </div>
                  <div className="font-caveat text-xl mb-3">{project.subtitle}</div>
                  <p className="text-xs leading-relaxed">{project.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {project.images.map((img, i) => (
                    <div key={i} className="aspect-square overflow-hidden">
                      <img 
                        src={img}
                        alt={`${project.title} - ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24 bg-foreground text-white relative overflow-hidden">
        <svg className="absolute top-0 left-0 w-1/4 h-full opacity-10" viewBox="0 0 200 800">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
          <circle cx="100" cy="400" r="80" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
          <circle cx="100" cy="700" r="80" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
        </svg>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-oswald text-5xl md:text-7xl font-bold mb-4 text-center">
            ИСТОРИИ УСПЕХА
          </h2>
          <p className="text-center text-sm mb-12 text-gray-300">Отзывы клиентов</p>
          
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-[300px] sm:min-w-[400px] snap-start">
                <div className="bg-white text-foreground p-8 h-full flex flex-col rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
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
            <Button variant="outline" size="icon" className="rounded-full border-white text-white hover:bg-white hover:text-foreground">
              <Icon name="ChevronLeft" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white text-white hover:bg-white hover:text-foreground">
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-white relative">
        <div className="absolute right-0 top-1/3 w-24 h-1 bg-primary"></div>
        
        <div className="container mx-auto px-4">
          <h2 className="font-oswald text-5xl md:text-7xl font-bold mb-12 text-center">
            СТРАТЕГИИ
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border-2 border-foreground p-8 relative overflow-hidden group hover:bg-beige transition-colors duration-300">
              <div className="absolute -top-2 -right-2 w-16 h-16 border-4 border-primary rounded-full opacity-20"></div>
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-oswald text-3xl font-bold">СТРАТЕГИЯ 1</h3>
                <Icon name="Asterisk" size={24} />
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Фокус на сторителлинге, использование трендов и аналитики для вовлечения аудитории
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="mt-1 flex-shrink-0" />
                  <span>Продуктовый менеджер</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="mt-1 flex-shrink-0" />
                  <span>Графический дизайнер</span>
                </li>
              </ul>
            </div>
            
            <div className="border-2 border-foreground p-8 bg-foreground text-white relative overflow-hidden group">
              <div className="absolute -bottom-2 -left-2 w-16 h-16 border-4 border-primary rounded-full opacity-20"></div>
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-oswald text-3xl font-bold">СТРАТЕГИЯ 2</h3>
                <Icon name="Asterisk" size={24} />
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Помогаю брендам выстраивать доверие и искренние связи с клиентами
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="mt-1 flex-shrink-0" />
                  <span>Продуктовый менеджер</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="mt-1 flex-shrink-0" />
                  <span>Графический дизайнер</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-24 bg-primary text-white relative overflow-hidden">
        <svg className="absolute top-0 right-0 w-1/3 h-full opacity-10" viewBox="0 0 200 800">
          <path d="M 0,0 L 200,200 L 0,400 L 200,600 L 0,800" stroke="currentColor" strokeWidth="2" fill="none"/>
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
            <Button variant="outline" size="icon" className="rounded-full border-white text-white hover:bg-white hover:text-foreground">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white text-white hover:bg-white hover:text-foreground">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white text-white hover:bg-white hover:text-foreground">
              <Icon name="Twitter" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white text-white hover:bg-white hover:text-foreground">
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
