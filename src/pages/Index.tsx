import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const products = [
    {
      id: 'small',
      name: 'Ellipso Малый',
      height: '48 см',
      diameter: '140 см',
      description: 'Компактный светильник для небольших помещений',
      price: 'По запросу'
    },
    {
      id: 'medium',
      name: 'Ellipso Средний',
      height: '62 см',
      diameter: '180 см',
      description: 'Идеальное решение для гостиных и столовых',
      price: 'По запросу'
    },
    {
      id: 'large',
      name: 'Ellipso Большой',
      height: '68 см',
      diameter: '200 см',
      description: 'Эффектный светильник для больших пространств',
      price: 'По запросу'
    }
  ];

  const materials = [
    { name: 'Белый', color: '#FAFAFA' },
    { name: 'Ясень', color: '#E8D5B7' },
    { name: 'Дуб', color: '#B8956A' },
    { name: 'Вишня', color: '#C19A6B' },
    { name: 'Орех', color: '#6F4E37' },
    { name: 'Графит', color: '#3A3A3A' }
  ];

  const gallery = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/8db773eb-2f29-4d9c-a83c-618eaa512ca4/files/73818cc0-94e0-4abe-9acc-31f0e3431609.jpg',
      title: 'Столовая',
      description: 'Ellipso создает уютную атмосферу за обеденным столом'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/8db773eb-2f29-4d9c-a83c-618eaa512ca4/files/0966fea4-3a80-4791-be61-19778b486e57.jpg',
      title: 'Гостиная',
      description: 'Элегантное решение для современного интерьера'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/8db773eb-2f29-4d9c-a83c-618eaa512ca4/files/8122988f-07a7-4eeb-9f41-2296ef33d579.jpg',
      title: 'Спальня',
      description: 'Мягкий рассеянный свет для комфортного отдыха'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Спасибо за ваш запрос!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-heading font-bold">ELLIPSO</h1>
          <div className="flex gap-8">
            <a href="#catalog" className="hover:text-accent transition-colors">Каталог</a>
            <a href="#gallery" className="hover:text-accent transition-colors">Галерея</a>
            <a href="#about" className="hover:text-accent transition-colors">О светильнике</a>
            <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Абажур<br />Ellipso
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Светильник изготовлен из 44 полосок шпона натурального дерева и 
                соединён стальными люверсами, может быть окрашен эмалями RAL/NCS
              </p>
              <Button size="lg" className="text-lg" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
                Смотреть каталог
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/1bf24e3d-7299-4e55-b7ea-4ba6fb7df1cf.JPG" 
                alt="Ellipso светильник" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Модели</h2>
          <p className="text-center text-muted-foreground mb-12">Выберите идеальный размер для вашего интерьера</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setSelectedProduct(product.id)}
              >
                <CardContent className="p-6">
                  <div className="mb-6 bg-secondary/50 rounded-lg p-8 flex items-center justify-center">
                    <Icon name="Lightbulb" size={64} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-4">{product.name}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Высота:</span>
                      <span className="font-semibold">{product.height}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Диаметр:</span>
                      <span className="font-semibold">{product.diameter}</span>
                    </div>
                    <Separator />
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>
                  <div className="text-xl font-heading font-bold text-accent mb-4">{product.price}</div>
                  <Button className="w-full" onClick={(e) => {
                    e.stopPropagation();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Галерея интерьеров</h2>
          <p className="text-center text-muted-foreground mb-12">Вдохновляющие примеры использования Ellipso в разных пространствах</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {gallery.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Материалы и отделка</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {materials.map((material, index) => (
              <div 
                key={material.name} 
                className="flex flex-col items-center gap-3 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div 
                  className="w-20 h-20 rounded-full border-2 border-border shadow-md hover:scale-110 transition-transform cursor-pointer"
                  style={{ backgroundColor: material.color }}
                />
                <span className="text-sm font-medium text-center">{material.name}</span>
              </div>
            ))}
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-heading">Характеристики</AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-2">
                <p>• Материал: 44 полоски шпона натурального дерева</p>
                <p>• Крепление: стальные люверсы</p>
                <p>• Отделка: натуральная или окрашенная эмалями RAL/NCS</p>
                <p>• Световой поток: равномерное рассеянное освещение</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-heading">Установка</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Светильник поставляется с полным комплектом для монтажа. Установка занимает 15-20 минут. 
                Подробная инструкция прилагается к каждому изделию. Возможен профессиональный монтаж нашими специалистами.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-heading">Уход</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Регулярная чистка сухой мягкой тканью. Избегайте использования агрессивных чистящих средств. 
                При необходимости можно использовать слегка влажную ткань с мягким мылом.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center mb-12 opacity-90">Оставьте заявку и мы подберем идеальный светильник для вашего интерьера</p>
          
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о вашем проекте..."
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 flex justify-center gap-8 text-center">
            <div>
              <Icon name="Mail" className="mx-auto mb-2" size={24} />
              <p className="text-sm opacity-90">info@ellipso.ru</p>
            </div>
            <div>
              <Icon name="Phone" className="mx-auto mb-2" size={24} />
              <p className="text-sm opacity-90">+7 (495) 123-45-67</p>
            </div>
            <div>
              <Icon name="MapPin" className="mx-auto mb-2" size={24} />
              <p className="text-sm opacity-90">Москва, Россия</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Ellipso. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;