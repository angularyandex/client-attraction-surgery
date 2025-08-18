import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      title: 'Ринопластика',
      description: 'Коррекция формы носа',
      price: 'от 150 000 ₽',
      duration: '2-3 часа'
    },
    {
      title: 'Маммопластика',
      description: 'Увеличение груди',
      price: 'от 200 000 ₽',
      duration: '2-4 часа'
    },
    {
      title: 'Липосакция',
      description: 'Удаление жировых отложений',
      price: 'от 100 000 ₽',
      duration: '1-3 часа'
    },
    {
      title: 'Подтяжка лица',
      description: 'Фейслифтинг',
      price: 'от 250 000 ₽',
      duration: '3-5 часов'
    }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', 
    '14:00', '15:00', '16:00', '17:00'
  ];

  const reviews = [
    {
      name: 'Анна К.',
      text: 'Прекрасный результат ринопластики. Доктор очень профессионален.',
      rating: 5
    },
    {
      name: 'Мария С.',
      text: 'Отличная работа, результат превзошел ожидания. Рекомендую!',
      rating: 5
    },
    {
      name: 'Елена В.',
      text: 'Очень внимательный подход, качественная работа.',
      rating: 5
    }
  ];

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
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О враче</a>
              <a href="#results" className="text-foreground hover:text-primary transition-colors">Результаты</a>
              <a href="#prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Записаться
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Профессиональная пластическая хирургия
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Более 15 лет опыта. Современные методики. Индивидуальный подход к каждому пациенту.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Icon name="Calendar" className="mr-2" size={20} />
                      Записаться на консультацию
                    </Button>
                  </DialogTrigger>
                </Dialog>
                <Button variant="outline" size="lg">
                  <Icon name="Phone" className="mr-2" size={20} />
                  +7 (495) 123-45-67
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg"
                alt="Пластический хирург"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">Полный спектр пластических операций</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Цена:</span>
                      <Badge variant="secondary">{service.price}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Время:</span>
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Doctor Section */}
      <section id="about" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">О враче</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Иванов Алексей Михайлович</h3>
                <p className="text-muted-foreground">
                  Пластический хирург высшей категории, кандидат медицинских наук.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" className="text-primary" size={20} />
                    <span>15+ лет опыта в пластической хирургии</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="GraduationCap" className="text-primary" size={20} />
                    <span>Кандидат медицинских наук</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" className="text-primary" size={20} />
                    <span>Более 2000 успешных операций</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Heart" className="text-primary" size={20} />
                    <span>Член Российского общества пластических хирургов</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Образование и сертификаты</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">РНИМУ им. Н.И. Пирогова</p>
                      <p className="text-sm text-muted-foreground">Лечебное дело, 2008</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="font-medium">Ординатура по пластической хирургии</p>
                      <p className="text-sm text-muted-foreground">НИИ СП им. Н.В. Склифосовского, 2010</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="font-medium">Стажировка в Европе</p>
                      <p className="text-sm text-muted-foreground">Германия, Швейцария, 2015-2016</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Результаты работ</h2>
            <p className="text-lg text-muted-foreground">Примеры наших работ (фото до и после)</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg"
                  alt="Результаты пластической хирургии"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold">Ринопластика</h4>
                  <p className="text-sm text-muted-foreground">Коррекция формы носа</p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Eye" className="mx-auto mb-2 text-blue-500" size={32} />
                    <p className="text-sm text-blue-700">Результат 2</p>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">Маммопластика</h4>
                  <p className="text-sm text-muted-foreground">Увеличение груди</p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Star" className="mx-auto mb-2 text-green-500" size={32} />
                    <p className="text-sm text-green-700">Результат 3</p>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">Липосакция</h4>
                  <p className="text-sm text-muted-foreground">Коррекция фигуры</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Цены на услуги</h2>
            <p className="text-lg text-muted-foreground">Прозрачное ценообразование</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between py-3">
                        <div>
                          <h4 className="font-semibold">{service.title}</h4>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">{service.price}</p>
                          <p className="text-sm text-muted-foreground">{service.duration}</p>
                        </div>
                      </div>
                      {index < services.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    * Точная стоимость определяется на консультации в зависимости от сложности операции
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Отзывы пациентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">Свяжитесь с нами</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Icon name="MapPin" className="text-primary" size={20} />
                      <div>
                        <p className="font-semibold">Адрес</p>
                        <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 15</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" className="text-primary" size={20} />
                      <div>
                        <p className="font-semibold">Телефон</p>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" className="text-primary" size={20} />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">info@plastikklinik.ru</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Clock" className="text-primary" size={20} />
                      <div>
                        <p className="font-semibold">Часы работы</p>
                        <p className="text-muted-foreground">Пн-Пт: 9:00-18:00<br />Сб: 10:00-16:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Запишитесь на консультацию</CardTitle>
                  <CardDescription>Заполните форму, и мы свяжемся с вами</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input placeholder="Ваше имя" />
                    <Input placeholder="Телефон" />
                    <Input placeholder="Email" />
                    <Textarea placeholder="Опишите ваш вопрос" />
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Dialog */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Запись на консультацию</DialogTitle>
            <DialogDescription>Выберите удобную дату и время</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Выберите дату</label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
                disabled={(date) => date < new Date()}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Выберите время</label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите время" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Input placeholder="Ваше имя" />
              <Input placeholder="Телефон" />
              <Input placeholder="Email" />
            </div>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setIsBookingOpen(false)}
            >
              Записаться
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Cross" className="text-primary" size={24} />
                <span className="text-xl font-bold">ПластикКлиник</span>
              </div>
              <p className="text-gray-300">
                Профессиональная пластическая хирургия с индивидуальным подходом
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p>+7 (495) 123-45-67</p>
                <p>info@plastikklinik.ru</p>
                <p>г. Москва, ул. Тверская, д. 15</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-gray-300">
                <p>Пн-Пт: 9:00-18:00</p>
                <p>Сб: 10:00-16:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 ПластикКлиник. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;