import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка принята!",
      description: "Наш менеджер свяжется с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <nav className="bg-white border-b sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Wind" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-primary">VRF Pro</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#advantages" className="text-gray-700 hover:text-primary transition-colors">Преимущества</a>
              <a href="#projects" className="text-gray-700 hover:text-primary transition-colors">Проекты</a>
              <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">FAQ</a>
            </div>
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Phone" size={18} />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="text-primary border-primary/20">
                <Icon name="Sparkles" size={14} />
                Профессиональная установка с 2012 года
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Установка<br />
                <span className="text-primary">VRF систем</span><br />
                за 3-5 дней
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Современные мультизональные системы кондиционирования для офисов, торговых центров и жилых комплексов
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg h-14 px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Получить расчёт
                  <Icon name="ArrowRight" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8">
                  <Icon name="Play" size={20} />
                  Смотреть видео
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Установок</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-primary">12</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-primary">5</div>
                  <div className="text-sm text-gray-600">Лет гарантии</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-3xl blur-3xl opacity-30"></div>
              <img 
                src="https://cdn.poehali.dev/projects/d6fc1e20-aa6c-4bfc-b53e-7430c0f66a71/files/92d21d44-66bf-4428-83b2-a7ec1eaad44b.jpg"
                alt="VRF система"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="text-primary border-primary/20 mb-4">
              Преимущества
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Почему выбирают<br />VRF системы?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Современное решение для управления климатом с максимальной эффективностью
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 border-blue-100 hover:border-primary transition-all duration-300 hover:shadow-xl group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Icon name="Zap" size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Экономия до 40%</h3>
                <p className="text-gray-600 leading-relaxed">
                  Инверторная технология снижает потребление электроэнергии почти вдвое по сравнению с обычными системами
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-primary transition-all duration-300 hover:shadow-xl group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Icon name="Clock" size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Быстрый монтаж</h3>
                <p className="text-gray-600 leading-relaxed">
                  Установка системы занимает всего 3-5 дней без масштабных строительных работ и простоя помещений
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-primary transition-all duration-300 hover:shadow-xl group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Icon name="Sliders" size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Индивидуальный контроль</h3>
                <p className="text-gray-600 leading-relaxed">
                  Каждое помещение управляется отдельно — настройте свою комфортную температуру в каждой зоне
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-primary transition-all duration-300 hover:shadow-xl group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Icon name="Volume2" size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Тихая работа</h3>
                <p className="text-gray-600 leading-relaxed">
                  Уровень шума от 19 дБ — тише, чем шёпот. Комфортная обстановка без посторонних звуков
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-primary transition-all duration-300 hover:shadow-xl group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Icon name="Maximize2" size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Компактность</h3>
                <p className="text-gray-600 leading-relaxed">
                  Минимум занимаемого пространства благодаря компактным внутренним блокам и тонким трубопроводам
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-primary transition-all duration-300 hover:shadow-xl group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Icon name="Shield" size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Надёжность</h3>
                <p className="text-gray-600 leading-relaxed">
                  Срок службы более 15 лет при регулярном обслуживании. Гарантия на оборудование и работы 5 лет
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
              Услуги
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Полный цикл работ под ключ
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              От проектирования до гарантийного обслуживания
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Ruler" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Проектирование</h3>
                <p className="text-blue-100 text-sm">
                  Расчёт мощности, подбор оборудования, 3D-визуализация
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wrench" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Монтаж</h3>
                <p className="text-blue-100 text-sm">
                  Установка оборудования за 3-5 дней сертифицированными специалистами
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Settings" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Пусконаладка</h3>
                <p className="text-blue-100 text-sm">
                  Настройка, тестирование, инструктаж персонала
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Headphones" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Обслуживание</h3>
                <p className="text-blue-100 text-sm">
                  Регулярное ТО, диагностика, экстренный выезд 24/7
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="text-primary border-primary/20 mb-4">
              Портфолио
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Выполненные проекты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Более 500 успешных установок VRF систем
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-2 border-blue-100 hover:border-primary transition-all hover:shadow-xl group">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/d6fc1e20-aa6c-4bfc-b53e-7430c0f66a71/files/4854ff85-1e73-4502-b119-1bb38f3ea9f1.jpg"
                  alt="Проект 1"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Бизнес-центр Москва-Сити</h3>
                <p className="text-gray-600 mb-4">VRF система для офисного здания площадью 5000 м²</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Icon name="Building2" size={16} />
                    12 этажей
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    4 дня
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-blue-100 hover:border-primary transition-all hover:shadow-xl group">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/d6fc1e20-aa6c-4bfc-b53e-7430c0f66a71/files/92d21d44-66bf-4428-83b2-a7ec1eaad44b.jpg"
                  alt="Проект 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">ТРЦ Авиапарк</h3>
                <p className="text-gray-600 mb-4">Многозональная система для торгового центра</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Icon name="Building2" size={16} />
                    8 зон
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    5 дней
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-blue-100 hover:border-primary transition-all hover:shadow-xl group">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/d6fc1e20-aa6c-4bfc-b53e-7430c0f66a71/files/e0e090b3-36f8-4da1-aed7-d1be3673c290.jpg"
                  alt="Проект 3"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">ЖК Символ</h3>
                <p className="text-gray-600 mb-4">VRF системы для элитного жилого комплекса</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Icon name="Building2" size={16} />
                    24 квартиры
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    3 дня
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="text-primary border-primary/20 mb-4">
                FAQ
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Частые вопросы
              </h2>
              <p className="text-xl text-gray-600">
                Ответы на популярные вопросы о VRF системах
              </p>
            </div>

            <div className="space-y-4">
              <Card className="border-2 border-blue-100">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 flex items-start gap-3">
                    <Icon name="HelpCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                    Что такое VRF система?
                  </h3>
                  <p className="text-gray-600 leading-relaxed ml-8">
                    VRF (Variable Refrigerant Flow) — это мультизональная система кондиционирования с переменным расходом хладагента. Она позволяет подключить множество внутренних блоков к одному наружному и управлять каждой зоной индивидуально.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 flex items-start gap-3">
                    <Icon name="HelpCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                    Сколько стоит установка VRF системы?
                  </h3>
                  <p className="text-gray-600 leading-relaxed ml-8">
                    Стоимость зависит от площади помещения, количества зон и выбранного оборудования. В среднем от 150 000 до 500 000 рублей. Мы предоставляем бесплатный расчёт и консультацию.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 flex items-start gap-3">
                    <Icon name="HelpCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                    Как долго длится установка?
                  </h3>
                  <p className="text-gray-600 leading-relaxed ml-8">
                    Стандартная установка VRF системы занимает 3-5 дней в зависимости от сложности объекта. Мы работаем по графику и не нарушаем сроки.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 flex items-start gap-3">
                    <Icon name="HelpCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                    Какая гарантия на оборудование?
                  </h3>
                  <p className="text-gray-600 leading-relaxed ml-8">
                    Мы предоставляем расширенную гарантию 5 лет на оборудование и монтажные работы. Первый год обслуживание бесплатное.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="text-primary border-primary/20 mb-4">
                Контакты
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Получить консультацию
              </h2>
              <p className="text-xl text-gray-600">
                Оставьте заявку и наш специалист свяжется с вами в течение 15 минут
              </p>
            </div>

            <Card className="border-2 border-blue-100">
              <CardContent className="p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя *</label>
                      <Input 
                        placeholder="Иван Петров"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <Input 
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашем объекте..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full h-14 text-lg">
                    Отправить заявку
                    <Icon name="Send" size={20} />
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>

                <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="Phone" size={20} className="text-primary" />
                    </div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+74951234567" className="text-sm text-gray-600 hover:text-primary">+7 (495) 123-45-67</a>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="Mail" size={20} className="text-primary" />
                    </div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@vrfpro.ru" className="text-sm text-gray-600 hover:text-primary">info@vrfpro.ru</a>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="MapPin" size={20} className="text-primary" />
                    </div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <p className="text-sm text-gray-600">Москва, ул. Примерная, 1</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Wind" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold">VRF Pro</span>
            </div>
            <p className="text-gray-400 text-sm">© 2024 VRF Pro. Все права защищены</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
