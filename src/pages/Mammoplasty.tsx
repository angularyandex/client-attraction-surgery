import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Mammoplasty = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const implantTypes = [
    {
      name: 'Силиконовые импланты',
      description: 'Современные когезивные гелевые импланты',
      advantages: ['Естественные ощущения', 'Долговечность', 'Безопасность'],
      warranty: 'Пожизненная гарантия'
    },
    {
      name: 'Анатомические импланты',
      description: 'Импланты каплевидной формы',
      advantages: ['Естественная форма', 'Максимальная натуральность', 'Стабильность'],
      warranty: 'Пожизненная гарантия'
    },
    {
      name: 'Круглые импланты',
      description: 'Классические импланты круглой формы',
      advantages: ['Больший объем сверху', 'Выраженное декольте', 'Универсальность'],
      warranty: 'Пожизненная гарантия'
    }
  ];

  const sizingGuide = [
    { size: '200-250 мл', cupSize: 'B', description: 'Небольшое увеличение' },
    { size: '250-300 мл', cupSize: 'C', description: 'Умеренное увеличение' },
    { size: '300-350 мл', cupSize: 'D', description: 'Заметное увеличение' },
    { size: '350-400 мл', cupSize: 'DD', description: 'Значительное увеличение' },
    { size: '400+ мл', cupSize: 'E+', description: 'Максимальное увеличение' }
  ];

  const surgicalApproaches = [
    {
      name: 'Субмаммарный доступ',
      description: 'Разрез под грудью',
      advantages: ['Скрытый рубец', 'Точность установки', 'Минимальный риск'],
      recovery: '7-10 дней'
    },
    {
      name: 'Периареолярный доступ',
      description: 'Разрез по краю ареолы',
      advantages: ['Незаметный рубец', 'Естественный вид', 'Быстрое заживление'],
      recovery: '5-7 дней'
    },
    {
      name: 'Трансаксиллярный доступ',
      description: 'Разрез в подмышечной впадине',
      advantages: ['Нет рубцов на груди', 'Эндоскопический контроль', 'Быстрое восстановление'],
      recovery: '7-10 дней'
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
              <a href="/" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="/services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="/mammoplasty" className="text-primary font-semibold">Маммопластика</a>
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
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Маммопластика
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Увеличение груди с использованием современных имплантов премиум-класса. 
                Естественный результат и пожизненная гарантия.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2000+</div>
                  <div className="text-sm text-muted-foreground">Операций</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных пациенток</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg"
                alt="Маммопластика"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Implant Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Типы имплантов</h2>
            <p className="text-lg text-muted-foreground">
              Используем только импланты ведущих мировых производителей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {implantTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{type.name}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Преимущества:</h4>
                      <ul className="space-y-1">
                        {type.advantages.map((advantage, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <Icon name="Check" className="text-green-500" size={16} />
                            <span>{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Badge variant="secondary" className="w-full justify-center">
                      {type.warranty}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Size Guide */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Подбор размера</h2>
            <p className="text-lg text-muted-foreground">
              Руководство по выбору оптимального размера имплантов
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {sizingGuide.map((size, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-primary mb-2">{size.cupSize}</div>
                    <div className="text-sm font-medium mb-2">{size.size}</div>
                    <div className="text-xs text-muted-foreground">{size.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">Важно знать:</h3>
              <p className="text-sm text-blue-800">
                Окончательный размер подбирается индивидуально на консультации с учетом 
                анатомических особенностей, пожеланий пациентки и рекомендаций хирурга.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Surgical Approaches */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Хирургические доступы</h2>
            <p className="text-lg text-muted-foreground">
              Выбираем оптимальный метод для каждой пациентки
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {surgicalApproaches.map((approach, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{approach.name}</CardTitle>
                  <CardDescription>{approach.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Преимущества:</h4>
                      <ul className="space-y-1">
                        {approach.advantages.map((advantage, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <Icon name="Check" className="text-green-500" size={16} />
                            <span>{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Восстановление:</span>
                      <Badge variant="outline">{approach.recovery}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Стоимость операции</h2>
            <p className="text-lg text-muted-foreground">
              Рассчитайте предварительную стоимость маммопластики
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Тип импланта</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип импланта" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="silicone">Силиконовые (+0 ₽)</SelectItem>
                        <SelectItem value="anatomical">Анатомические (+30 000 ₽)</SelectItem>
                        <SelectItem value="premium">Премиум класс (+50 000 ₽)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Размер</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите размер" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">200-300 мл (+0 ₽)</SelectItem>
                        <SelectItem value="medium">300-400 мл (+20 000 ₽)</SelectItem>
                        <SelectItem value="large">400+ мл (+40 000 ₽)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Хирургический доступ</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите доступ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="submammary">Субмаммарный (+0 ₽)</SelectItem>
                        <SelectItem value="periareolar">Периареолярный (+10 000 ₽)</SelectItem>
                        <SelectItem value="transaxillary">Трансаксиллярный (+20 000 ₽)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground mb-1">Предварительная стоимость:</p>
                    <p className="text-3xl font-bold text-primary">от 200 000 ₽</p>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Записаться на консультацию
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultation Dialog */}
      <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Консультация по маммопластике</DialogTitle>
            <DialogDescription>
              Запишитесь на консультацию для подбора оптимального размера и типа имплантов
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <Input placeholder="Ваше имя" />
            <Input placeholder="Телефон" />
            <Input placeholder="Email" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Желаемый размер" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="b">Размер B</SelectItem>
                <SelectItem value="c">Размер C</SelectItem>
                <SelectItem value="d">Размер D</SelectItem>
                <SelectItem value="dd">Размер DD</SelectItem>
                <SelectItem value="e">Размер E+</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="Дополнительные вопросы или пожелания" />
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setIsConsultationOpen(false)}
            >
              Записаться на консультацию
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Mammoplasty;