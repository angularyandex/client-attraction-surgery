import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Facelift = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const faceliftTypes = [
    {
      name: 'SMAS-лифтинг',
      description: 'Глубокая подтяжка с воздействием на мышечный слой',
      advantages: ['Долговременный результат', 'Естественный вид', 'Комплексное омоложение'],
      duration: '4-5 часов',
      result: '10-15 лет',
      price: 'от 350 000 ₽'
    },
    {
      name: 'Эндоскопический лифтинг',
      description: 'Малоинвазивная подтяжка через небольшие разрезы',
      advantages: ['Минимальные рубцы', 'Быстрое восстановление', 'Точность'],
      duration: '2-3 часа',
      result: '7-10 лет',
      price: 'от 280 000 ₽'
    },
    {
      name: 'Мини-лифтинг',
      description: 'Подтяжка нижней трети лица и шеи',
      advantages: ['Короткая операция', 'Быстрая реабилитация', 'Доступная цена'],
      duration: '2-3 часа',
      result: '5-7 лет',
      price: 'от 220 000 ₽'
    }
  ];

  const ageGroups = [
    {
      age: '35-45 лет',
      problems: ['Первые морщины', 'Потеря упругости', 'Легкий птоз'],
      recommended: 'Мини-лифтинг',
      description: 'Профилактическая подтяжка для предотвращения возрастных изменений'
    },
    {
      age: '45-55 лет',
      problems: ['Выраженные морщины', 'Опущение тканей', 'Потеря контуров'],
      recommended: 'Эндоскопический лифтинг',
      description: 'Коррекция умеренных возрастных изменений'
    },
    {
      age: '55+ лет',
      problems: ['Глубокие морщины', 'Значительный птоз', 'Потеря объема'],
      recommended: 'SMAS-лифтинг',
      description: 'Комплексное омоложение для выраженных изменений'
    }
  ];

  const recoveryTimeline = [
    { day: '1-3 дня', description: 'Максимальные отеки и дискомфорт', activity: 'Постельный режим' },
    { day: '4-7 дней', description: 'Снятие повязок и дренажей', activity: 'Домашний режим' },
    { day: '1-2 недели', description: 'Снятие швов', activity: 'Легкая активность' },
    { day: '3-4 недели', description: 'Уменьшение отеков на 70%', activity: 'Возвращение к работе' },
    { day: '2-3 месяца', description: 'Окончательное заживление', activity: 'Полная активность' },
    { day: '6-12 месяцев', description: 'Финальный результат', activity: 'Оценка результата' }
  ];

  const combinedProcedures = [
    {
      name: 'Фейслифтинг + Блефаропластика',
      description: 'Комплексное омоложение лица и век',
      discount: '15%',
      totalPrice: 'от 420 000 ₽'
    },
    {
      name: 'Фейслифтинг + Липофилинг',
      description: 'Подтяжка с восстановлением объемов',
      discount: '10%',
      totalPrice: 'от 450 000 ₽'
    },
    {
      name: 'Фейслифтинг + Ринопластика',
      description: 'Полное преображение лица',
      discount: '12%',
      totalPrice: 'от 520 000 ₽'
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
              <a href="/facelift" className="text-primary font-semibold">Фейслифтинг</a>
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
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Фейслифтинг
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Подтяжка лица для омоложения и коррекции возрастных изменений. 
                Современные методики для естественного и долговременного результата.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет результата</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">операций</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg"
                alt="Фейслифтинг"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Facelift */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Виды фейслифтинга</h2>
            <p className="text-lg text-muted-foreground">
              Выбираем оптимальную методику в зависимости от возраста и проблем
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {faceliftTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{type.name}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Длительность:</span>
                        <p className="font-medium">{type.duration}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Результат:</span>
                        <p className="font-medium">{type.result}</p>
                      </div>
                    </div>
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
                    <div className="pt-2 border-t">
                      <Badge variant="secondary" className="text-lg font-bold w-full justify-center">
                        {type.price}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Рекомендации по возрасту</h2>
            <p className="text-lg text-muted-foreground">
              Какой вид фейслифтинга подходит в вашем возрасте
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{group.age}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Основные проблемы:</h4>
                      <ul className="space-y-1">
                        {group.problems.map((problem, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <Icon name="AlertCircle" className="text-orange-500" size={16} />
                            <span>{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <h4 className="font-semibold text-primary mb-1">Рекомендуется:</h4>
                      <p className="text-sm font-medium">{group.recommended}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{group.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Восстановление после операции</h2>
            <p className="text-lg text-muted-foreground">
              Подробный план реабилитации по этапам
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {recoveryTimeline.map((stage, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{stage.day}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{stage.description}</h3>
                        <p className="text-muted-foreground mb-2">Активность: {stage.activity}</p>
                        <Progress value={(index + 1) * 16.67} className="w-full" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Combined Procedures */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Комбинированные операции</h2>
            <p className="text-lg text-muted-foreground">
              Сочетание фейслифтинга с другими процедурами для максимального эффекта
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {combinedProcedures.map((procedure, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{procedure.name}</CardTitle>
                  <CardDescription>{procedure.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Скидка {procedure.discount}
                      </Badge>
                      <span className="text-lg font-bold text-primary">{procedure.totalPrice}</span>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Dialog */}
      <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Консультация по фейслифтингу</DialogTitle>
            <DialogDescription>
              Запишитесь на консультацию для выбора оптимального вида подтяжки
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <Input placeholder="Ваше имя" />
            <Input placeholder="Телефон" />
            <Input placeholder="Email" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Ваш возраст" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30-40">30-40 лет</SelectItem>
                <SelectItem value="40-50">40-50 лет</SelectItem>
                <SelectItem value="50-60">50-60 лет</SelectItem>
                <SelectItem value="60+">60+ лет</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="Какие проблемы хотели бы решить?" />
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setIsConsultationOpen(false)}
            >
              Записаться на консультацию
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Верните молодость своему лицу
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Запишитесь на консультацию и узнайте, какой вид фейслифтинга подойдет именно вам
          </p>
          <Button size="lg" variant="secondary">
            <Icon name="Calendar" className="mr-2" size={20} />
            Записаться на консультацию
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Facelift;