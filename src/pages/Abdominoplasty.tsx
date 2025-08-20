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

const Abdominoplasty = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const abdominoplastyTypes = [
    {
      name: 'Полная абдоминопластика',
      description: 'Комплексная коррекция живота с перемещением пупка',
      indications: ['Значительный избыток кожи', 'Диастаз прямых мышц', 'Растяжки', 'Деформация после родов'],
      advantages: ['Максимальный эффект', 'Коррекция мышц', 'Удаление растяжек', 'Новый контур талии'],
      duration: '3-4 часа',
      recovery: '21-30 дней',
      price: 'от 250 000 ₽',
      scar: 'Горизонтальный рубец внизу живота'
    },
    {
      name: 'Мини-абдоминопластика',
      description: 'Коррекция нижней части живота без перемещения пупка',
      indications: ['Небольшой избыток кожи', 'Локальные жировые отложения', 'Растяжки внизу живота'],
      advantages: ['Меньшая травматичность', 'Быстрое восстановление', 'Короткий рубец', 'Доступная цена'],
      duration: '2-3 часа',
      recovery: '14-21 день',
      price: 'от 180 000 ₽',
      scar: 'Короткий рубец внизу живота'
    },
    {
      name: 'Эндоскопическая абдоминопластика',
      description: 'Коррекция мышц через небольшие разрезы',
      indications: ['Диастаз мышц без избытка кожи', 'Молодой возраст', 'Хорошая эластичность кожи'],
      advantages: ['Минимальные рубцы', 'Быстрое восстановление', 'Точность коррекции', 'Меньше осложнений'],
      duration: '1.5-2 часа',
      recovery: '10-14 дней',
      price: 'от 200 000 ₽',
      scar: 'Несколько маленьких рубцов'
    }
  ];

  const candidateAssessment = [
    {
      factor: 'Избыток кожи',
      mild: 'Мини-абдоминопластика',
      moderate: 'Полная абдоминопластика',
      severe: 'Полная + липосакция'
    },
    {
      factor: 'Диастаз мышц',
      mild: 'Эндоскопическая коррекция',
      moderate: 'Полная абдоминопластика',
      severe: 'Полная + укрепление'
    },
    {
      factor: 'Жировые отложения',
      mild: 'Липосакция',
      moderate: 'Комбинированная операция',
      severe: 'Поэтапное лечение'
    },
    {
      factor: 'Растяжки',
      mild: 'Консервативное лечение',
      moderate: 'Мини-абдоминопластика',
      severe: 'Полная абдоминопластика'
    }
  ];

  const recoveryStages = [
    {
      stage: 'Первые 24 часа',
      description: 'Наблюдение в клинике, контроль дренажей',
      activities: ['Постельный режим', 'Дыхательная гимнастика', 'Прием препаратов'],
      restrictions: ['Нельзя вставать без помощи', 'Запрет на подъем тяжестей'],
      progress: 5
    },
    {
      stage: '2-7 дней',
      description: 'Домашний режим, снятие дренажей',
      activities: ['Короткие прогулки', 'Легкие домашние дела', 'Уход за швами'],
      restrictions: ['Нельзя поднимать более 2 кг', 'Избегать наклонов'],
      progress: 20
    },
    {
      stage: '1-2 недели',
      description: 'Снятие швов, увеличение активности',
      activities: ['Прогулки до 30 минут', 'Легкая работа', 'Вождение автомобиля'],
      restrictions: ['Нельзя заниматься спортом', 'Избегать подъема тяжестей'],
      progress: 40
    },
    {
      stage: '3-4 недели',
      description: 'Возвращение к работе',
      activities: ['Полноценная работа', 'Увеличение физической активности'],
      restrictions: ['Ограничения в спорте', 'Нельзя качать пресс'],
      progress: 60
    },
    {
      stage: '6-8 недель',
      description: 'Разрешение спортивных нагрузок',
      activities: ['Легкий спорт', 'Плавание', 'Фитнес без нагрузки на пресс'],
      restrictions: ['Постепенное увеличение нагрузок'],
      progress: 80
    },
    {
      stage: '3-6 месяцев',
      description: 'Окончательный результат',
      activities: ['Полная физическая активность', 'Любые виды спорта'],
      restrictions: ['Нет ограничений'],
      progress: 100
    }
  ];

  const beforeAfterCases = [
    {
      id: 1,
      type: 'Полная абдоминопластика',
      age: '38 лет',
      indication: 'После 2 родов',
      result: 'Плоский живот, узкая талия',
      satisfaction: 'Очень довольна'
    },
    {
      id: 2,
      type: 'Мини-абдоминопластика',
      age: '32 года',
      indication: 'Локальные жировые отложения',
      result: 'Подтянутый живот',
      satisfaction: 'Превзошло ожидания'
    },
    {
      id: 3,
      type: 'Эндоскопическая коррекция',
      age: '29 лет',
      indication: 'Диастаз после родов',
      result: 'Восстановление мышц',
      satisfaction: 'Отличный результат'
    }
  ];

  const combinedProcedures = [
    {
      name: 'Абдоминопластика + Липосакция',
      description: 'Комплексная коррекция живота и боков',
      benefits: ['Идеальные контуры', 'Одно восстановление', 'Экономия времени'],
      price: 'от 320 000 ₽',
      discount: '10%'
    },
    {
      name: 'Абдоминопластика + Маммопластика',
      description: 'Полное восстановление после родов (Mommy Makeover)',
      benefits: ['Комплексное преображение', 'Одна анестезия', 'Лучшая цена'],
      price: 'от 450 000 ₽',
      discount: '15%'
    },
    {
      name: 'Абдоминопластика + Липофилинг ягодиц',
      description: 'Коррекция живота с увеличением ягодиц',
      benefits: ['Использование собственного жира', 'Естественный результат', 'Двойной эффект'],
      price: 'от 380 000 ₽',
      discount: '12%'
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
              <a href="/abdominoplasty" className="text-primary font-semibold">Абдоминопластика</a>
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
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Абдоминопластика
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Подтяжка живота для восстановления красивых контуров тела. 
                Эффективное решение проблем после родов, похудения или возрастных изменений.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Target" className="text-teal-500" size={20} />
                  <span>Плоский живот</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Scissors" className="text-blue-500" size={20} />
                  <span>Удаление избытка кожи</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Zap" className="text-purple-500" size={20} />
                  <span>Укрепление мышц</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg"
                alt="Абдоминопластика"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Abdominoplasty */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Виды абдоминопластики</h2>
            <p className="text-lg text-muted-foreground">
              Выбираем оптимальную методику в зависимости от проблем
            </p>
          </div>
          <div className="space-y-8">
            {abdominoplastyTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                      <p className="text-muted-foreground mb-4">{type.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Длительность:</span>
                          <p className="font-medium">{type.duration}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Восстановление:</span>
                          <p className="font-medium">{type.recovery}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-lg font-bold mt-3">
                        {type.price}
                      </Badge>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Показания:</h4>
                      <ul className="space-y-1 mb-4">
                        {type.indications.map((indication, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <Icon name="ArrowRight" className="text-blue-500" size={14} />
                            <span>{indication}</span>
                          </li>
                        ))}
                      </ul>
                      <h4 className="font-semibold mb-2">Преимущества:</h4>
                      <ul className="space-y-1">
                        {type.advantages.map((advantage, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <Icon name="Plus" className="text-green-500" size={14} />
                            <span>{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col justify-center space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h5 className="font-semibold text-blue-800 mb-1">Рубец:</h5>
                        <p className="text-sm text-blue-700">{type.scar}</p>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Assessment */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Определение подходящей методики</h2>
            <p className="text-lg text-muted-foreground">
              Какая операция подойдет в зависимости от проблем
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Проблема</th>
                        <th className="text-center p-3 font-semibold">Легкая степень</th>
                        <th className="text-center p-3 font-semibold">Умеренная степень</th>
                        <th className="text-center p-3 font-semibold">Выраженная степень</th>
                      </tr>
                    </thead>
                    <tbody>
                      {candidateAssessment.map((assessment, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-3 font-medium">{assessment.factor}</td>
                          <td className="p-3 text-center">
                            <Badge variant="outline" className="text-xs">
                              {assessment.mild}
                            </Badge>
                          </td>
                          <td className="p-3 text-center">
                            <Badge variant="secondary" className="text-xs">
                              {assessment.moderate}
                            </Badge>
                          </td>
                          <td className="p-3 text-center">
                            <Badge variant="default" className="text-xs">
                              {assessment.severe}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Этапы восстановления</h2>
            <p className="text-lg text-muted-foreground">
              Подробный план реабилитации после абдоминопластики
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {recoveryStages.map((stage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm text-center leading-tight">
                          {stage.stage}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{stage.description}</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2 text-green-600">Разрешенные активности:</h4>
                          <ul className="space-y-1">
                            {stage.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-sm">
                                <Icon name="Check" className="text-green-500" size={14} />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2 text-red-600">Ограничения:</h4>
                          <ul className="space-y-1">
                            {stage.restrictions.map((restriction, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-sm">
                                <Icon name="X" className="text-red-500" size={14} />
                                <span>{restriction}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium">Прогресс восстановления:</span>
                        <div className="flex-1">
                          <Progress value={stage.progress} className="h-2" />
                        </div>
                        <span className="text-sm text-muted-foreground">{stage.progress}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Procedures */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Комбинированные операции</h2>
            <p className="text-lg text-muted-foreground">
              Сочетание абдоминопластики с другими процедурами для максимального эффекта
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
                    <div>
                      <h4 className="font-semibold mb-2">Преимущества:</h4>
                      <ul className="space-y-1">
                        {procedure.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <Icon name="Star" className="text-yellow-500" size={16} />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Скидка {procedure.discount}
                      </Badge>
                      <span className="text-lg font-bold text-primary">{procedure.price}</span>
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

      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Результаты операций</h2>
            <p className="text-lg text-muted-foreground">
              Примеры наших работ по абдоминопластике
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {beforeAfterCases.map((case_item) => (
              <Card key={case_item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img
                        src="/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg"
                        alt="До абдоминопластики"
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-red-500">ДО</Badge>
                    </div>
                    <div className="relative">
                      <img
                        src="/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg"
                        alt="После абдоминопластики"
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-green-500">ПОСЛЕ</Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{case_item.type}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Возраст: {case_item.age}</p>
                      <p>Показания: {case_item.indication}</p>
                      <p>Результат: {case_item.result}</p>
                      <p className="text-green-600 font-medium">Отзыв: {case_item.satisfaction}</p>
                    </div>
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
            <DialogTitle>Консультация по абдоминопластике</DialogTitle>
            <DialogDescription>
              Запишитесь на консультацию для определения оптимального вида операции
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <Input placeholder="Ваше имя" />
            <Input placeholder="Телефон" />
            <Input placeholder="Email" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Основная проблема" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="excess-skin">Избыток кожи</SelectItem>
                <SelectItem value="muscle-separation">Расхождение мышц</SelectItem>
                <SelectItem value="stretch-marks">Растяжки</SelectItem>
                <SelectItem value="fat-deposits">Жировые отложения</SelectItem>
                <SelectItem value="post-pregnancy">После родов</SelectItem>
                <SelectItem value="weight-loss">После похудения</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="Дополнительная информация о ваших проблемах и ожиданиях" />
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
            Верните красоту своему животу
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Запишитесь на консультацию и узнайте, какой вид абдоминопластики подойдет именно вам
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

export default Abdominoplasty;