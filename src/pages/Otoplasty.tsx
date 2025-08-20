import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Otoplasty = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const otoplastyTypes = [
    {
      name: 'Коррекция лопоухости',
      description: 'Устранение оттопыренности ушных раковин',
      technique: 'Методика Мустарде или Фурнаса',
      age: 'С 6 лет',
      duration: '1-2 часа',
      anesthesia: 'Местная или общая',
      recovery: '7-10 дней',
      price: 'от 70 000 ₽',
      results: 'Естественное положение ушей'
    },
    {
      name: 'Коррекция формы ушей',
      description: 'Изменение размера и формы ушных раковин',
      technique: 'Резекция хряща, моделирование',
      age: 'С 18 лет',
      duration: '1.5-2 часа',
      anesthesia: 'Местная или общая',
      recovery: '10-14 дней',
      price: 'от 85 000 ₽',
      results: 'Гармоничная форма ушей'
    },
    {
      name: 'Реконструкция ушной раковины',
      description: 'Восстановление при врожденных дефектах или травмах',
      technique: 'Использование собственного хряща',
      age: 'С 10 лет',
      duration: '2-4 часа',
      anesthesia: 'Общая',
      recovery: '14-21 день',
      price: 'от 150 000 ₽',
      results: 'Восстановление анатомии'
    }
  ];

  const ageConsiderations = [
    {
      ageGroup: '6-12 лет',
      considerations: [
        'Оптимальный возраст для коррекции',
        'Ухо сформировано на 85%',
        'Легче переносят операцию',
        'Быстрое заживление',
        'Меньше психологических комплексов'
      ],
      anesthesia: 'Общая анестезия',
      recovery: 'Быстрое восстановление',
      schoolReturn: '7-10 дней'
    },
    {
      ageGroup: '13-18 лет',
      considerations: [
        'Полное формирование ушной раковины',
        'Сознательное желание операции',
        'Понимание ограничений',
        'Ответственность в уходе',
        'Стабильный результат'
      ],
      anesthesia: 'Местная или общая',
      recovery: 'Стандартное восстановление',
      schoolReturn: '5-7 дней'
    },
    {
      ageGroup: '18+ лет',
      considerations: [
        'Полная ответственность за решение',
        'Возможность местной анестезии',
        'Понимание всех аспектов',
        'Соблюдение рекомендаций',
        'Долговременный результат'
      ],
      anesthesia: 'Местная анестезия',
      recovery: 'Быстрое восстановление',
      schoolReturn: '3-5 дней'
    }
  ];

  const recoveryStages = [
    {
      stage: 'День операции',
      description: 'Наложение защитной повязки',
      care: ['Покой', 'Обезболивающие', 'Холодные компрессы'],
      restrictions: ['Нельзя мочить повязку', 'Избегать давления на уши'],
      progress: 10
    },
    {
      stage: '1-3 дня',
      description: 'Первая перевязка, контроль заживления',
      care: ['Обработка швов', 'Смена повязки', 'Прием препаратов'],
      restrictions: ['Спать на спине', 'Не снимать повязку самостоятельно'],
      progress: 25
    },
    {
      stage: '1 неделя',
      description: 'Снятие швов, переход на ночную повязку',
      care: ['Защитная повязка на ночь', 'Мягкое мытье головы'],
      restrictions: ['Избегать контактных видов спорта', 'Не носить очки'],
      progress: 50
    },
    {
      stage: '2-3 недели',
      description: 'Отказ от повязки, возвращение к обычной жизни',
      care: ['Защита от травм', 'Массаж (по назначению)'],
      restrictions: ['Осторожность при занятиях спортом'],
      progress: 75
    },
    {
      stage: '1-2 месяца',
      description: 'Полное заживление, стабилизация результата',
      care: ['Контрольные осмотры', 'Защита от солнца'],
      restrictions: ['Нет ограничений'],
      progress: 100
    }
  ];

  const beforeAfterCases = [
    {
      id: 1,
      type: 'Коррекция лопоухости',
      age: '8 лет',
      method: 'Методика Мустарде',
      result: 'Естественное положение ушей',
      satisfaction: 'Родители очень довольны'
    },
    {
      id: 2,
      type: 'Коррекция формы',
      age: '25 лет',
      method: 'Резекция хряща',
      result: 'Гармоничная форма',
      satisfaction: 'Превзошло ожидания'
    },
    {
      id: 3,
      type: 'Реконструкция',
      age: '16 лет',
      method: 'Использование собственного хряща',
      result: 'Восстановление анатомии',
      satisfaction: 'Отличный результат'
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
              <a href="/otoplasty" className="text-primary font-semibold">Отопластика</a>
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
      <section className="bg-gradient-to-br from-violet-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Отопластика
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Коррекция формы и положения ушных раковин. Избавление от комплексов 
                и создание гармоничного образа. Операция подходит как детям, так и взрослым.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Users" className="text-violet-500" size={20} />
                  <span>Подходит детям с 6 лет</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-blue-500" size={20} />
                  <span>Быстрая операция</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Heart" className="text-pink-500" size={20} />
                  <span>Избавление от комплексов</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg"
                alt="Отопластика"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Otoplasty */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Виды отопластики</h2>
            <p className="text-lg text-muted-foreground">
              Различные методики для решения разных проблем
            </p>
          </div>
          <div className="space-y-8">
            {otoplastyTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                      <p className="text-muted-foreground mb-4">{type.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Техника:</span>
                          <span className="font-medium">{type.technique}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Возраст:</span>
                          <span className="font-medium">{type.age}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Длительность:</span>
                          <span className="font-medium">{type.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm text-muted-foreground">Анестезия:</span>
                          <p className="font-medium">{type.anesthesia}</p>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Восстановление:</span>
                          <p className="font-medium">{type.recovery}</p>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Результат:</span>
                          <p className="font-medium">{type.results}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-3">
                      <Badge variant="secondary" className="text-lg font-bold text-center">
                        {type.price}
                      </Badge>
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

      {/* Age Considerations */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Особенности по возрастам</h2>
            <p className="text-lg text-muted-foreground">
              Что важно учитывать при планировании отопластики в разном возрасте
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ageConsiderations.map((age, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{age.ageGroup}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Особенности:</h4>
                      <ul className="space-y-1">
                        {age.considerations.map((consideration, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <Icon name="Check" className="text-green-500" size={16} />
                            <span>{consideration}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Анестезия:</span>
                        <span className="font-medium">{age.anesthesia}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Восстановление:</span>
                        <span className="font-medium">{age.recovery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Возврат в школу/работу:</span>
                        <span className="font-medium">{age.schoolReturn}</span>
                      </div>
                    </div>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Восстановление после отопластики</h2>
            <p className="text-lg text-muted-foreground">
              Этапы заживления и рекомендации по уходу
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
                          <h4 className="font-medium text-sm mb-2 text-green-600">Уход:</h4>
                          <ul className="space-y-1">
                            {stage.care.map((care, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-sm">
                                <Icon name="Heart" className="text-green-500" size={14} />
                                <span>{care}</span>
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
                        <span className="text-sm font-medium">Прогресс заживления:</span>
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

      {/* Results */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Результаты отопластики</h2>
            <p className="text-lg text-muted-foreground">
              Примеры наших работ по коррекции ушей
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
                        alt="До отопластики"
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-red-500">ДО</Badge>
                    </div>
                    <div className="relative">
                      <img
                        src="/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg"
                        alt="После отопластики"
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-green-500">ПОСЛЕ</Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{case_item.type}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Возраст: {case_item.age}</p>
                      <p>Метод: {case_item.method}</p>
                      <p>Результат: {case_item.result}</p>
                      <p className="text-green-600 font-medium">{case_item.satisfaction}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Considerations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Важные моменты</h2>
            <p className="text-lg text-muted-foreground">
              Что нужно знать об отопластике
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Users" className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-lg font-semibold mb-2">Детская отопластика</h3>
                <p className="text-sm text-muted-foreground">
                  Оптимальный возраст 6-12 лет, когда ухо сформировано, но ребенок легко переносит операцию
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Eye" className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-lg font-semibold mb-2">Незаметные рубцы</h3>
                <p className="text-sm text-muted-foreground">
                  Разрезы делаются за ухом, поэтому рубцы полностью скрыты и незаметны
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Zap" className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-lg font-semibold mb-2">Быстрый результат</h3>
                <p className="text-sm text-muted-foreground">
                  Результат виден сразу после снятия повязки, окончательный - через месяц
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Shield" className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-lg font-semibold mb-2">Безопасность</h3>
                <p className="text-sm text-muted-foreground">
                  Низкий риск осложнений, операция хорошо отработана и предсказуема
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Часто задаваемые вопросы</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">В каком возрасте лучше делать отопластику?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Оптимальный возраст 6-12 лет, когда ухо уже сформировано на 85%, но ребенок 
                  еще легко переносит операцию и быстро восстанавливается. Взрослым операцию 
                  можно делать в любом возрасте.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Больно ли делать отопластику?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Операция может проводиться под местной анестезией у взрослых или под общим 
                  наркозом у детей. После операции возможен дискомфорт, который легко 
                  контролируется обезболивающими препаратами.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Когда можно вернуться к спорту?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  К обычной активности можно вернуться через неделю. Контактные виды спорта 
                  разрешены через 1-2 месяца. Плавание - через 2-3 недели после снятия швов.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultation Dialog */}
      <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Консультация по отопластике</DialogTitle>
            <DialogDescription>
              Запишитесь на консультацию для определения оптимального метода коррекции
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <Input placeholder="Ваше имя (или имя ребенка)" />
            <Input placeholder="Телефон" />
            <Input placeholder="Email" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Возраст пациента" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6-12">6-12 лет</SelectItem>
                <SelectItem value="13-18">13-18 лет</SelectItem>
                <SelectItem value="18-30">18-30 лет</SelectItem>
                <SelectItem value="30+">30+ лет</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Основная проблема" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="protruding">Оттопыренные уши</SelectItem>
                <SelectItem value="shape">Неправильная форма</SelectItem>
                <SelectItem value="size">Большой размер</SelectItem>
                <SelectItem value="asymmetry">Асимметрия</SelectItem>
                <SelectItem value="defect">Врожденный дефект</SelectItem>
                <SelectItem value="trauma">Последствия травмы</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="Дополнительная информация или вопросы" />
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
            Избавьтесь от комплексов навсегда
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Отопластика поможет обрести уверенность в себе и носить любые прически
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

export default Otoplasty;