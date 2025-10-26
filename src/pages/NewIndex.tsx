import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const NewIndex = () => {
  const projects = [
    {
      number: '01',
      title: 'Портреты',
      category: 'Portrait',
      description: 'Создаю атмосферные портреты, которые раскрывают характер и эмоции. Каждый кадр — это история.',
      images: [
        'https://cdn.poehali.dev/files/855e30a0-073e-42ed-bd22-fbb221be6cbe.jpg',
        'https://cdn.poehali.dev/files/0fbc7043-f8d4-413f-bbee-ec392135d6b5.jpg'
      ]
    },
    {
      number: '02',
      title: 'Продукт',
      category: 'Product',
      description: 'Профессиональная предметная съемка для брендов. Акцент на деталях и эстетике.',
      images: [
        'https://cdn.poehali.dev/files/155abba9-5c95-4b79-a51a-30538c29d426.jpg',
        'https://cdn.poehali.dev/files/313242647cd93278b4306666eec8331e.jpg'
      ]
    },
    {
      number: '03',
      title: 'Lifestyle',
      category: 'Lifestyle',
      description: 'Естественные моменты жизни в кадре. Документальный стиль с художественным подходом.',
      images: [
        'https://cdn.poehali.dev/files/0fbc7043-f8d4-413f-bbee-ec392135d6b5.jpg',
        'https://cdn.poehali.dev/files/855e30a0-073e-42ed-bd22-fbb221be6cbe.jpg'
      ]
    }
  ];

  const strengths = [
    {
      title: 'Креативность',
      description: 'Нестандартные решения и свежий взгляд на каждый проект'
    },
    {
      title: 'Техническое мастерство',
      description: 'Профессиональное оборудование и глубокие знания съемки'
    },
    {
      title: 'Внимание к деталям',
      description: 'Перфекционизм в каждом кадре и тщательная пост-обработка'
    },
    {
      title: 'Работа с брендами',
      description: 'Понимание маркетинговых задач и визуальной идентичности'
    }
  ];

  const stats = [
    { number: '250+', label: 'Проектов' },
    { number: '98%', label: 'Довольных клиентов' },
    { number: '5', label: 'Лет опыта' }
  ];

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

  return (
    <div className="min-h-screen bg-cream">
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-burgundy overflow-hidden">
        <div className="absolute top-8 left-8 flex gap-1.5">
          <div className="w-2 h-2 bg-cream rounded-full"></div>
          <div className="w-2 h-2 bg-cream rounded-full"></div>
          <div className="w-2 h-2 bg-cream rounded-full"></div>
        </div>

        <div className="absolute top-8 right-8">
          <Icon name="Asterisk" size={48} className="text-cream" />
        </div>

        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 Q300,60 600,30 T1200,0 L1200,120 L0,120 Z" fill="currentColor" className="text-cream"/>
        </svg>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8">
            <h1 className="font-playfair text-[15vw] sm:text-[120px] leading-none font-bold text-cream tracking-tight mb-4">
              PORTFOLIO
            </h1>
            <div className="font-dancing text-5xl md:text-7xl text-cream opacity-90 -mt-8">
              Creative
            </div>
          </div>

          <div className="relative inline-block">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-cream shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/files/855e30a0-073e-42ed-bd22-fbb221be6cbe.jpg"
                alt="Photographer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-cream rounded-full flex items-center justify-center">
              <Icon name="Camera" size={32} className="text-burgundy" />
            </div>
          </div>

          <p className="mt-12 text-cream/80 text-sm max-w-md mx-auto">
            Создаю визуальные истории через объектив камеры
          </p>

          <div className="mt-8">
            <Button 
              variant="outline" 
              className="border-2 border-cream text-cream hover:bg-cream hover:text-burgundy transition-all duration-300"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen bg-cream py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-8 -left-8 text-burgundy/10 font-playfair text-[120px] font-bold leading-none">
                01
              </div>
              <h2 className="font-playfair text-6xl md:text-8xl font-bold mb-6 text-charcoal relative z-10">
                ABOUT ME
                <Icon name="Asterisk" size={40} className="inline-block ml-4 text-burgundy" />
              </h2>
              <div className="font-dancing text-4xl md:text-6xl text-burgundy mb-8">
                Introduction
              </div>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Привет! Я профессиональный фотограф с фокусом на создании аутентичного контента. 
                Специализируюсь на портретной, продуктовой и lifestyle съемке.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                От привлекательных анбоксингов до lifestyle моментов — я помогаю брендам оживать через визуальный контент. 
                Давайте создадим что-то незабываемое вместе!
              </p>
              <div className="flex gap-4 mt-8">
                <Button className="bg-burgundy text-cream hover:bg-burgundy/90">
                  Мои работы
                </Button>
                <Button variant="outline" className="border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-cream">
                  Связаться
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/files/0fbc7043-f8d4-413f-bbee-ec392135d6b5.jpg"
                  alt="About photographer"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-burgundy rounded-full opacity-20"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-burgundy/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="strengths" className="py-20 md:py-32 bg-charcoal text-cream relative overflow-hidden">
        <svg className="absolute top-0 right-0 w-1/3 h-full opacity-5" viewBox="0 0 200 800">
          <text x="20" y="400" fontSize="200" fill="currentColor" className="font-playfair font-bold">
            *
          </text>
        </svg>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-6xl md:text-8xl font-bold mb-4">
              MY STRENGTHS
              <Icon name="Asterisk" size={40} className="inline-block ml-4 text-burgundy" />
            </h2>
            <div className="font-dancing text-4xl md:text-6xl text-burgundy">
              What I do best
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <div 
                key={index}
                className="bg-cream/5 backdrop-blur-sm border-2 border-cream/20 rounded-2xl p-8 hover:bg-cream/10 hover:border-burgundy transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-burgundy text-6xl font-playfair font-bold opacity-30 group-hover:opacity-50 transition-opacity">
                    0{index + 1}
                  </div>
                  <Icon name="Star" size={28} className="text-burgundy" />
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-3">{strength.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{strength.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-playfair text-5xl md:text-6xl font-bold text-burgundy mb-2">
                  {stat.number}
                </div>
                <div className="text-cream/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-4">
          <div className="flex gap-1.5 mb-8">
            <div className="w-2 h-2 bg-burgundy rounded-full"></div>
            <div className="w-2 h-2 bg-burgundy rounded-full"></div>
            <div className="w-2 h-2 bg-burgundy rounded-full"></div>
          </div>

          <h2 className="font-playfair text-6xl md:text-8xl font-bold mb-16 text-charcoal">
            MY WORK
          </h2>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="relative">
                    <div className="absolute -top-12 -left-8 text-burgundy/20 font-playfair text-[140px] font-bold leading-none">
                      {project.number}
                    </div>
                    <h3 className="font-playfair text-5xl md:text-7xl font-bold mb-4 text-charcoal relative z-10">
                      PROJECT {project.number}
                    </h3>
                    <div className="font-dancing text-3xl md:text-5xl text-burgundy mb-6">
                      {project.category}
                    </div>
                    <p className="text-charcoal/70 leading-relaxed mb-8 max-w-md">
                      {project.description}
                    </p>
                    <Button className="bg-burgundy text-cream hover:bg-burgundy/90">
                      Смотреть проект
                      <Icon name="ArrowRight" size={20} />
                    </Button>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="grid grid-cols-2 gap-4">
                    {project.images.map((img, imgIndex) => (
                      <div 
                        key={imgIndex}
                        className={`relative overflow-hidden rounded-2xl shadow-xl ${
                          imgIndex === 0 ? 'col-span-2' : ''
                        }`}
                      >
                        <img 
                          src={img}
                          alt={`${project.title} ${imgIndex + 1}`}
                          className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 md:py-32 bg-burgundy text-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-6xl md:text-8xl font-bold mb-4">
              EXPERIENCE
            </h2>
            <div className="font-dancing text-4xl md:text-6xl opacity-90">
              Work
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-cream/10 backdrop-blur-sm border-2 border-cream/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Package" size={32} className="text-burgundy bg-cream rounded-full p-1.5" />
                <div>
                  <h3 className="font-playfair text-xl font-bold">Product Manager</h3>
                  <p className="text-cream/60 text-sm">2020-2023</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-cream/70">
                <li>• Разработка продуктовых стратегий</li>
                <li>• Работа с фидбэком клиентов</li>
                <li>• Достижение бизнес-целей</li>
              </ul>
            </div>

            <div className="bg-cream/10 backdrop-blur-sm border-2 border-cream/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Palette" size={32} className="text-burgundy bg-cream rounded-full p-1.5" />
                <div>
                  <h3 className="font-playfair text-xl font-bold">Graphic Designer</h3>
                  <p className="text-cream/60 text-sm">2018-2020</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-cream/70">
                <li>• Визуально привлекательный контент</li>
                <li>• Цифровой и печатный дизайн</li>
                <li>• Мультимедийные платформы</li>
              </ul>
            </div>

            <div className="bg-cream/10 backdrop-blur-sm border-2 border-cream/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Camera" size={32} className="text-burgundy bg-cream rounded-full p-1.5" />
                <div>
                  <h3 className="font-playfair text-xl font-bold">Photographer</h3>
                  <p className="text-cream/60 text-sm">2016-Сейчас</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-cream/70">
                <li>• Портретная съемка</li>
                <li>• Продуктовая фотография</li>
                <li>• Lifestyle контент</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-32 bg-charcoal text-cream relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Icon name="Star" size={400} className="text-burgundy/5" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-6xl md:text-8xl font-bold mb-4">
                LET'S
                <div className="font-dancing text-6xl md:text-9xl text-burgundy inline-block ml-4">
                  Work
                </div>
              </h2>
              <h3 className="font-playfair text-5xl md:text-7xl font-bold">
                TOGETHER
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-playfair text-2xl font-bold mb-6">Контактная информация</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={24} className="text-burgundy" />
                    <span>+123-456-7890</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={24} className="text-burgundy" />
                    <span>hello@photographer.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Globe" size={24} className="text-burgundy" />
                    <span>www.photographer.com</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h5 className="font-playfair text-xl font-bold mb-4">Социальные сети</h5>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="border-cream text-cream hover:bg-cream hover:text-charcoal">
                      <Icon name="Instagram" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="border-cream text-cream hover:bg-cream hover:text-charcoal">
                      <Icon name="Facebook" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="border-cream text-cream hover:bg-cream hover:text-charcoal">
                      <Icon name="Twitter" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="border-cream text-cream hover:bg-cream hover:text-charcoal">
                      <Icon name="Linkedin" size={20} />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-cream/10 backdrop-blur-sm border-2 border-cream/20 rounded-2xl p-8">
                <h4 className="font-playfair text-2xl font-bold mb-6 text-cream">Отправить сообщение</h4>
                <form className="space-y-4">
                  <Input 
                    placeholder="Ваше имя"
                    className="bg-charcoal/50 border-cream/30 text-cream placeholder:text-cream/50"
                  />
                  <Input 
                    type="email"
                    placeholder="Email"
                    className="bg-charcoal/50 border-cream/30 text-cream placeholder:text-cream/50"
                  />
                  <Textarea 
                    placeholder="Ваше сообщение"
                    rows={5}
                    className="bg-charcoal/50 border-cream/30 text-cream placeholder:text-cream/50 resize-none"
                  />
                  <Button className="w-full bg-burgundy text-cream hover:bg-burgundy/90">
                    Отправить
                    <Icon name="Send" size={20} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-burgundy text-cream py-8 border-t border-cream/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-playfair text-xl font-bold">
              CREATIVE PORTFOLIO
            </div>
            <div className="text-sm text-cream/60">
              © 2024 Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewIndex;
