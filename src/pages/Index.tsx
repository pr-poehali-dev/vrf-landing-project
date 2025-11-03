import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за обращение",
      description: "Мы свяжемся с вами в течение часа",
    });
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-semibold tracking-tight">VRF</div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm text-gray-600 hover:text-black transition-colors">Услуги</a>
              <a href="#advantages" className="text-sm text-gray-600 hover:text-black transition-colors">Преимущества</a>
              <a href="#about" className="text-sm text-gray-600 hover:text-black transition-colors">О нас</a>
              <a href="#contact" className="text-sm text-gray-600 hover:text-black transition-colors">Контакты</a>
            </nav>
            <Button variant="outline" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Консультация
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 mb-8">
              <div className="w-1.5 h-1.5 bg-black animate-pulse"></div>
              <span className="text-xs font-medium">Премиум установка VRF систем</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-semibold mb-6 leading-[1.1]">
              Климат-контроль<br />нового поколения
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
              Профессиональная установка VRF систем за 3–5 дней.<br />
              Индивидуальный микроклимат в каждом помещении.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-12 px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Оставить заявку
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8">
                <Icon name="Phone" size={18} />
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/d6fc1e20-aa6c-4bfc-b53e-7430c0f66a71/files/e0e090b3-36f8-4da1-aed7-d1be3673c290.jpg"
                alt="VRF система"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="space-y-8">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">01</div>
                <h3 className="text-2xl font-semibold mb-4">Энергоэффективность</h3>
                <p className="text-gray-600 leading-relaxed">
                  Сокращение энергопотребления до 40% благодаря инверторной технологии и точному распределению хладагента
                </p>
              </div>
              <Separator />
              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">02</div>
                <h3 className="text-2xl font-semibold mb-4">Быстрая установка</h3>
                <p className="text-gray-600 leading-relaxed">
                  Монтаж за 3–5 дней без масштабных строительных работ. Минимальное вмешательство в интерьер
                </p>
              </div>
              <Separator />
              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">03</div>
                <h3 className="text-2xl font-semibold mb-4">Индивидуальный контроль</h3>
                <p className="text-gray-600 leading-relaxed">
                  Независимая настройка температуры в каждом помещении. До 64 внутренних блоков на один наружный
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6">Услуги</h2>
            <p className="text-xl text-gray-600">
              Полный цикл работ — от проектирования до технического обслуживания
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-gray-200 hover:border-black transition-all duration-300">
              <Icon name="Lightbulb" size={32} className="mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Проектирование</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Разработка технического решения с учётом планировки, теплопотерь и пожеланий заказчика
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-black"></div>
                  Тепловой расчёт
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-black"></div>
                  Подбор оборудования
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-black"></div>
                  3D-визуализация
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-gray-200 hover:border-black transition-all duration-300">
              <Icon name="Hammer" size={32} className="mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Монтаж</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Профессиональная установка с соблюдением стандартов производителя и строительных норм
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-black"></div>
                  Сертифицированные специалисты
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-black"></div>
                  Установка за 3–5 дней
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-black"></div>
                  Гарантия на работы 5 лет
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-gray-200 hover:border-black transition-all duration-300">
              <Icon name="Settings" size={32} className="mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Пусконаладка</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Настройка и тестирование всех компонентов системы для оптимальной работы
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-black"></div>
                  Балансировка системы
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-black"></div>
                  Программирование контроллеров
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-black"></div>
                  Инструктаж персонала
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-gray-200 hover:border-black transition-all duration-300">
              <Icon name="Wrench" size={32} className="mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Обслуживание</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Регулярное техническое обслуживание для бесперебойной работы системы
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-black"></div>
                  Плановые осмотры
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-black"></div>
                  Чистка и диагностика
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-black"></div>
                  Экстренный выезд 24/7
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 lg:py-32 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold mb-8">
                Преимущества<br />VRF систем
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="TrendingDown" size={24} className="mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Низкие эксплуатационные расходы</h3>
                    <p className="text-gray-400 text-sm">Экономия до 40% на электроэнергии по сравнению с традиционными системами</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Volume2" size={24} className="mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Бесшумная работа</h3>
                    <p className="text-gray-400 text-sm">Уровень шума от 19 дБ — тише человеческого шёпота</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Maximize2" size={24} className="mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Гибкая масштабируемость</h3>
                    <p className="text-gray-400 text-sm">Возможность расширения системы без замены основного оборудования</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Smartphone" size={24} className="mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Умное управление</h3>
                    <p className="text-gray-400 text-sm">Контроль через мобильное приложение из любой точки мира</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Shield" size={24} className="mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Надёжность</h3>
                    <p className="text-gray-400 text-sm">Срок службы более 15 лет при регулярном обслуживании</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/d6fc1e20-aa6c-4bfc-b53e-7430c0f66a71/files/c10a228e-3d94-4027-b951-36b67c136775.jpg"
                alt="Современный офис"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-12 text-center">Почему мы</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-5xl font-semibold mb-4">500+</div>
                <p className="text-gray-600">Установленных систем</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-semibold mb-4">12</div>
                <p className="text-gray-600">Лет на рынке</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-semibold mb-4">5</div>
                <p className="text-gray-600">Лет гарантии</p>
              </div>
            </div>
            <Separator className="my-12" />
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Сертификация</h3>
                <p className="text-gray-600 leading-relaxed">
                  Все специалисты имеют официальные сертификаты производителей оборудования: Daikin, Mitsubishi Electric, LG
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Гарантии</h3>
                <p className="text-gray-600 leading-relaxed">
                  Расширенная гарантия 5 лет на оборудование и монтажные работы. Бесплатное обслуживание первый год
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-semibold mb-4">Получить консультацию</h2>
              <p className="text-gray-600">Оставьте заявку, и наш специалист свяжется с вами в течение часа</p>
            </div>

            <Card className="p-8 lg:p-12 border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input 
                    placeholder="Иван Петров"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="h-12 border-gray-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="h-12 border-gray-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="h-12 border-gray-200"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full h-12">
                  Отправить заявку
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </Card>

            <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
              <div>
                <Icon name="Phone" size={24} className="mx-auto mb-3" />
                <div className="font-medium mb-1">Телефон</div>
                <a href="tel:+74951234567" className="text-sm text-gray-600 hover:text-black">+7 (495) 123-45-67</a>
              </div>
              <div>
                <Icon name="Mail" size={24} className="mx-auto mb-3" />
                <div className="font-medium mb-1">Email</div>
                <a href="mailto:info@vrf-systems.ru" className="text-sm text-gray-600 hover:text-black">info@vrf-systems.ru</a>
              </div>
              <div>
                <Icon name="MapPin" size={24} className="mx-auto mb-3" />
                <div className="font-medium mb-1">Адрес</div>
                <p className="text-sm text-gray-600">Москва, ул. Примерная, 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-semibold">VRF</div>
            <p className="text-sm text-gray-500">© 2024 VRF Systems. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
