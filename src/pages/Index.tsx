import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-scale-in">
            Установка VRF систем
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Профессиональный монтаж климатических систем нового поколения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white">
              <Icon name="Clock" size={24} />
              <span className="text-lg font-semibold">Монтаж за 3-5 дней</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white">
              <Icon name="Award" size={24} />
              <span className="text-lg font-semibold">Гарантия 5 лет</span>
            </div>
          </div>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 hover-scale"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Получить консультацию
            <Icon name="ArrowRight" size={20} />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Преимущества VRF систем
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Современные решения для идеального климата
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover-scale hover:shadow-xl">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Zap" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Энергоэффективность</h3>
                <p className="text-muted-foreground">
                  Экономия до 40% электроэнергии по сравнению с обычными системами кондиционирования
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all duration-300 hover-scale hover:shadow-xl">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Clock" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Быстрый монтаж</h3>
                <p className="text-muted-foreground">
                  Установка системы за 3-5 дней без масштабных строительных работ
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all duration-300 hover-scale hover:shadow-xl">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Settings" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Индивидуальный контроль</h3>
                <p className="text-muted-foreground">
                  Настройка температуры для каждого помещения отдельно
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover-scale hover:shadow-xl">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Volume2" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Тихая работа</h3>
                <p className="text-muted-foreground">
                  Уровень шума от 19 дБ — тише, чем шёпот
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all duration-300 hover-scale hover:shadow-xl">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Building2" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Компактность</h3>
                <p className="text-muted-foreground">
                  Экономия пространства благодаря компактным внутренним блокам
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all duration-300 hover-scale hover:shadow-xl">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Надёжность</h3>
                <p className="text-muted-foreground">
                  Гарантия 5 лет и срок службы более 15 лет
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный цикл работ под ключ
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <Card className="relative border-2 p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Calculator" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Проектирование</h3>
                    <p className="text-muted-foreground">
                      Разработка индивидуального проекта с учётом особенностей вашего объекта и расчёт необходимой мощности
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <Card className="relative border-2 p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Wrench" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Монтаж</h3>
                    <p className="text-muted-foreground">
                      Профессиональная установка оборудования за 3-5 дней с использованием современных технологий
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <Card className="relative border-2 p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="PlayCircle" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Пусконаладка</h3>
                    <p className="text-muted-foreground">
                      Настройка и тестирование системы для обеспечения оптимальной работы всех компонентов
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <Card className="relative border-2 p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Sparkles" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Обслуживание</h3>
                    <p className="text-muted-foreground">
                      Регулярное техническое обслуживание и гарантийная поддержка на протяжении 5 лет
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/d6fc1e20-aa6c-4bfc-b53e-7430c0f66a71/files/fedb2e40-c885-4408-9f08-638f2ea58b58.jpg" 
                alt="VRF система установка"
                className="rounded-3xl shadow-2xl hover-scale"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Почему выбирают нас?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Опыт более 10 лет</h3>
                    <p className="text-muted-foreground">Успешно установили более 500 VRF систем в коммерческих и жилых объектах</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="CheckCircle2" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Сертифицированные специалисты</h3>
                    <p className="text-muted-foreground">Все инженеры имеют официальные сертификаты производителей оборудования</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="CheckCircle2" size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Официальная гарантия</h3>
                    <p className="text-muted-foreground">Предоставляем расширенную гарантию на оборудование и монтажные работы</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ответы на популярные вопросы о VRF системах
          </p>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
            <AccordionItem value="item-1" className="bg-white border-2 rounded-xl px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Что такое VRF система?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                VRF (Variable Refrigerant Flow) — современная мультизональная система кондиционирования с изменяемым расходом хладагента. Она позволяет подключить несколько внутренних блоков к одному наружному блоку и индивидуально управлять климатом в каждом помещении.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border-2 rounded-xl px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Сколько времени занимает установка?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Стандартная установка VRF системы занимает от 3 до 5 дней в зависимости от размера объекта и количества внутренних блоков. Мы работаем по чёткому графику и минимизируем неудобства для вашего бизнеса.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border-2 rounded-xl px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Какая экономия электроэнергии?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                VRF системы позволяют экономить до 40% электроэнергии по сравнению с традиционными системами кондиционирования. Это достигается за счёт инверторной технологии и возможности частичной работы системы.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border-2 rounded-xl px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Какой срок службы VRF системы?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                При правильной эксплуатации и регулярном обслуживании VRF система служит более 15 лет. Мы предоставляем гарантию 5 лет и рекомендуем проводить техническое обслуживание 2 раза в год.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white border-2 rounded-xl px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Можно ли установить VRF в старом здании?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, VRF системы отлично подходят для модернизации старых зданий. Они не требуют масштабных строительных работ, а гибкая система трубопроводов позволяет адаптироваться к любой планировке.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary via-accent to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
              Получить консультацию
            </h2>
            <p className="text-center text-white/90 mb-8 text-lg">
              Оставьте заявку и наш специалист свяжется с вами в течение 15 минут
            </p>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашем объекте..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    Отправить заявку
                    <Icon name="Send" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center text-white">
              <div>
                <Icon name="Phone" size={32} className="mx-auto mb-2" />
                <p className="font-semibold">+7 (495) 123-45-67</p>
              </div>
              <div>
                <Icon name="Mail" size={32} className="mx-auto mb-2" />
                <p className="font-semibold">info@vrf-systems.ru</p>
              </div>
              <div>
                <Icon name="MapPin" size={32} className="mx-auto mb-2" />
                <p className="font-semibold">Москва, ул. Примерная, 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 VRF Systems. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
