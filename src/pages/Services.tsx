import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('face');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const serviceCategories = {
    face: {
      title: 'Пластика лица',
      services: [
        {
          name: 'Ринопластика',
          description: 'Коррекция формы носа для улучшения эстетики и функции дыхания',
          price: 'от 150 000 ₽',
          duration: '2-3 часа',
          recovery: '7-14 дней',
          features: ['Закрытая техника', 'Открытая техника', 'Ультразвуковая ринопластика']
        },
        {
          name: 'Блефаропластика',
          description: 'Коррекция век для устранения возрастных изменений',
          price: 'от 80 000 ₽',
          duration: '1-2 часа',
          recovery: '5-7 дней',
          features: ['Верхние веки', 'Нижние веки', 'Круговая блефаропластика']
        },
        {
          name: 'Фейслифтинг',
          description: 'Подтяжка лица для омоложения и коррекции возрастных изменений',
          price: 'от 250 000 ₽',
          duration: '3-5 часов',
          recovery: '14-21 день',
          features: ['SMAS-лифтинг', 'Эндоскопический лифтинг', 'Мини-лифтинг']
        },
        {
          name: 'Отопластика',
          description: 'Коррекция формы и положения ушных раковин',
          price: 'от 70 000 ₽',
          duration: '1-2 часа',
          recovery: '7-10 дней',
          features: ['Устранение лопоухости', 'Коррекция формы', 'Реконструкция']
        }
      ]
    },
    breast: {
      title: 'Пластика груди',
      services: [
        {
          name: 'Увеличение груди',
          description: 'Маммопластика с использованием современных имплантов',
          price: 'от 200 000 ₽',
          duration: '2-3 часа',
          recovery: '7-14 дней',
          features: ['Силиконовые импланты', 'Солевые импланты', 'Анатомические импланты']
        },
        {
          name: 'Подтяжка груди',
          description: 'Мастопексия для восстановления формы и упругости',
          price: 'от 180 000 ₽',
          duration: '2-4 часа',
          recovery: '10-14 дней',
          features: ['Периареолярная', 'Вертикальная', 'Якорная техника']
        },
        {
          name: 'Уменьшение груди',
          description: 'Редукционная маммопластика для комфорта и эстетики',
          price: 'от 220 000 ₽',
          duration: '3-4 часа',
          recovery: '14-21 день',
          features: ['Сохранение чувствительности', 'Возможность кормления', 'Минимальные рубцы']
        }
      ]
    },
    body: {
      title: 'Пластика тела',
      services: [
        {
          name: 'Липосакция',
          description: 'Удаление жировых отложений для коррекции фигуры',
          price: 'от 100 000 ₽',
          duration: '1-3 часа',
          recovery: '5-10 дней',
          features: ['Классическая', 'Ультразвуковая', 'Лазерная']
        },
        {
          name: 'Абдоминопластика',
          description: 'Подтяжка живота с удалением избытков кожи',
          price: 'от 180 000 ₽',
          duration: '2-4 часа',
          recovery: '14-21 день',
          features: ['Полная', 'Мини', 'Эндоскопическая']
        },
        {
          name: 'Бразильская подтяжка ягодиц',
          description: 'Липофилинг ягодиц собственным жиром',
          price: 'от 250 000 ₽',
          duration: '3-4 часа',
          recovery: '14-21 день',
          features: ['Собственный жир', 'Естественный результат', 'Долговременный эффект']
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Cross" className="text-primary" size={24} />
              <span className="text-xl font-bold text-foreground">ПластикКлиник</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="/services" className="text-primary font-semibold">Услуги</a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors">О враче</a>
              <a href="/gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Консультация
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Наши услуги
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Полный спектр пластических операций с использованием современных технологий и индивидуальным подходом к каждому пациенту
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="face">Лицо</TabsTrigger>
              <TabsTrigger value="breast">Грудь</TabsTrigger>
              <TabsTrigger value="body">Тело</TabsTrigger>
            </TabsList>

            {Object.entries(serviceCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">{category.title}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {category.services.map((service, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">{service.name}</CardTitle>
                          <Badge variant="secondary" className="text-lg font-bold">
                            {service.price}
                          </Badge>
                        </div>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2">
                              <Icon name="Clock" className="text-primary" size={16} />
                              <span className="text-sm">Время: {service.duration}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon name="Calendar" className="text-primary" size={16} />
                              <span className="text-sm">Восстановление: {service.recovery}</span>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Виды операций:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.features.map((feature, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
                            <DialogTrigger asChild>
                              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                Записаться на консультацию
                              </Button>
                            </DialogTrigger>
                          </Dialog>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Consultation Dialog */}
      <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Записаться на консультацию</DialogTitle>
            <DialogDescription>
              Заполните форму, и мы свяжемся с вами для уточнения деталей
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <Input placeholder="Ваше имя" />
            <Input placeholder="Телефон" />
            <Input placeholder="Email" />
            <Textarea placeholder="Интересующая услуга и вопросы" />
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setIsConsultationOpen(false)}
            >
              Отправить заявку
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Services;