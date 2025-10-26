import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('');

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
    <div className="min-h-screen bg-white">
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-beige overflow-hidden">
        <div className="absolute top-8 left-8 flex gap-1">
          <div className="w-3 h-3 rounded-full bg-foreground"></div>
          <div className="w-3 h-3 rounded-full bg-foreground"></div>
          <div className="w-3 h-3 rounded-full bg-foreground"></div>
        </div>
        
        <div className="absolute top-8 right-8">
          <Icon name="Asterisk" size={48} className="text-foreground" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="relative inline-block">
            <h1 className="font-oswald text-[12vw] sm:text-[10vw] md:text-[180px] leading-none font-bold text-foreground tracking-tight mb-8">
              PORTFOLIO
            </h1>
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full overflow-hidden border-4 border-foreground">
              <img 
                src="https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/44d257b1-8823-4713-9dc3-603408151def.jpg"
                alt="Photographer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mt-24 font-caveat text-4xl md:text-6xl">
            Creative
          </div>
          
          <p className="mt-8 text-sm max-w-md mx-auto text-muted-foreground">
            The desire to create is one of the deepest yearnings of the human soul
          </p>
          
          <div className="absolute bottom-8 right-8 text-sm">
            photo@email.com
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen grid md:grid-cols-2 bg-white">
        <div className="bg-beige p-8 md:p-16 flex flex-col justify-center relative">
          <div className="absolute top-8 left-8 flex gap-1">
            <div className="w-2 h-2 rounded-full bg-foreground"></div>
            <div className="w-2 h-2 rounded-full bg-foreground"></div>
            <div className="w-2 h-2 rounded-full bg-foreground"></div>
          </div>
          
          <h2 className="font-oswald text-6xl md:text-8xl font-bold mb-4 flex items-center gap-4">
            ABOUT ME
            <Icon name="Asterisk" size={32} />
          </h2>
          
          <div className="font-caveat text-3xl md:text-5xl mb-6">
            Introduction
          </div>
          
          <p className="text-sm leading-relaxed mb-6 max-w-md">
            Hi, I'm a creative photographer passionate about crafting authentic content that connects. From eye-catching compositions to relatable lifestyle moments, I bring brands to life with stories that inspire and engage. Let's create something unforgettable together!
          </p>
          
          <div className="font-caveat text-2xl italic">
            Life is too short to make boring photos
          </div>
        </div>

        <div className="relative h-[600px] md:h-auto">
          <img 
            src="https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/9fcda847-8a60-4b23-becd-73b97e990149.jpg"
            alt="About photographer"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section id="strengths" className="min-h-screen grid md:grid-cols-2 bg-foreground text-white">
        <div className="relative h-[600px] md:h-auto order-2 md:order-1">
          <img 
            src="https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/9fcda847-8a60-4b23-becd-73b97e990149.jpg"
            alt="Strengths"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <div className="p-8 md:p-16 flex flex-col justify-center order-1 md:order-2">
          <h2 className="font-oswald text-6xl md:text-8xl font-bold mb-8 flex items-center gap-4">
            MY STRENGTHS
            <Icon name="Asterisk" size={32} />
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-oswald text-2xl font-semibold mb-2">Adaptability</h3>
              <p className="text-sm text-gray-300">
                I thrive in dynamic environments, quickly adjusting to changing trends and demands while delivering exceptional results.
              </p>
            </div>
            
            <div>
              <h3 className="font-oswald text-2xl font-semibold mb-2">Creative Storytelling</h3>
              <p className="text-sm text-gray-300">
                I weave narratives that captivate and engage, making every everyday moment feel extraordinary.
              </p>
            </div>
            
            <div>
              <h3 className="font-oswald text-2xl font-semibold mb-2">Community Focused</h3>
              <p className="text-sm text-gray-300">
                I build genuine connections, fostering a loyal community that resonates with your brand.
              </p>
            </div>
            
            <div>
              <h3 className="font-oswald text-2xl font-semibold mb-2">Trendy</h3>
              <p className="text-sm text-gray-300">
                I use the latest tools and trends to produce visually appealing, cutting-edge content.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 md:py-24 bg-beige">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 mb-8">
            <div className="w-2 h-2 rounded-full bg-foreground"></div>
            <div className="w-2 h-2 rounded-full bg-foreground"></div>
            <div className="w-2 h-2 rounded-full bg-foreground"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="font-oswald text-6xl md:text-8xl font-bold mb-4 flex items-center gap-4">
                PROJECT 01
                <Icon name="Asterisk" size={32} />
              </h2>
              <div className="font-caveat text-4xl md:text-5xl mb-6">
                Brand
              </div>
              <p className="text-sm leading-relaxed max-w-md">
                Designed for all skin types, this formulation aims to nourish, protect, and enhance skin health. Committed to sustainability and inclusivity, the brand promotes radiant, confident skin for everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/b1388916-f480-40eb-8dd1-3b98b62a691e.jpg"
                  alt="Project 1"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/9fcda847-8a60-4b23-becd-73b97e990149.jpg"
                  alt="Project 1"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="grid grid-cols-3 gap-4 order-2 md:order-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] rounded-lg overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/6657e7b1-81a5-4150-bb7b-82f56cff5671/files/9fcda847-8a60-4b23-becd-73b97e990149.jpg"
                    alt={`Project 2 - ${i}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="font-oswald text-6xl md:text-8xl font-bold mb-4 flex items-center gap-4">
                PROJECT 02
                <Icon name="Asterisk" size={32} />
              </h2>
              <div className="font-caveat text-4xl md:text-5xl mb-6">
                Brand
              </div>
              <p className="text-sm leading-relaxed max-w-md">
                A modern and stylish clothing brand that combines quality, sustainability, and timeless fashion with a minimalist aesthetic. Celebrating values, self-expression and fearless fashion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-oswald text-6xl md:text-8xl font-bold mb-12 text-center">
            STRATEGIES
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border-2 border-foreground p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-oswald text-3xl font-bold">STRATEGY 1</h3>
                <Icon name="Asterisk" size={24} />
              </div>
              <p className="text-sm leading-relaxed mb-6">
                I focus on storytelling, leveraging trends, data analytics and engaging with audiences. I help brands build trust and foster genuine customer connection.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="mt-1 flex-shrink-0" />
                  <span>Product manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="mt-1 flex-shrink-0" />
                  <span>Graphic designer</span>
                </li>
              </ul>
            </div>
            
            <div className="border-2 border-foreground p-8 bg-foreground text-white">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-oswald text-3xl font-bold">STRATEGY 2</h3>
                <Icon name="Asterisk" size={24} />
              </div>
              <p className="text-sm leading-relaxed mb-6">
                I focus on storytelling, leveraging trends, data analytics and engaging with audiences. I help brands build trust and foster genuine customer connection.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="mt-1 flex-shrink-0" />
                  <span>Product manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="mt-1 flex-shrink-0" />
                  <span>Graphic designer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-oswald text-6xl md:text-8xl font-bold mb-12 text-center">
            PRICING
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'BASIC', price: 'R$ 150', features: ['Basic photoshoot', '10 edited photos', '2 hour session'] },
              { name: 'STANDARD', price: 'R$ 300', features: ['Advanced photoshoot', '25 edited photos', '4 hour session', 'Location scouting'] },
              { name: 'PREMIUM', price: 'R$ 500', features: ['Premium photoshoot', '50 edited photos', 'Full day session', 'Location scouting', 'Personalized'] }
            ].map((plan) => (
              <div key={plan.name} className="border-2 border-white p-8 hover:bg-white hover:text-primary transition-colors duration-300">
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
                <Button className="w-full bg-white text-primary hover:bg-beige">
                  Choose Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen grid md:grid-cols-2 bg-foreground text-white">
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <h2 className="font-oswald text-6xl md:text-8xl font-bold mb-8">
            LET'S
            <div className="font-caveat text-5xl md:text-7xl">Work</div>
            TOGETHER
          </h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-sm">
              <Icon name="Phone" size={20} />
              <span>+123-456-7890</span>
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

        <div className="bg-beige text-foreground p-8 md:p-16 flex flex-col justify-center">
          <div className="absolute top-8 right-8">
            <Icon name="Asterisk" size={32} />
          </div>
          
          <h3 className="font-oswald text-3xl font-bold mb-6">Send me a message</h3>
          
          <form className="space-y-4">
            <div>
              <Input 
                placeholder="Your name"
                className="bg-white border-foreground"
              />
            </div>
            <div>
              <Input 
                type="email"
                placeholder="Your email"
                className="bg-white border-foreground"
              />
            </div>
            <div>
              <Textarea 
                placeholder="Your message"
                rows={6}
                className="bg-white border-foreground resize-none"
              />
            </div>
            <Button className="w-full bg-primary text-white hover:bg-primary/90">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Creative Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
