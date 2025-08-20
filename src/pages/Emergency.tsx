import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Icon from '@/components/ui/icon';

const Emergency = () => {
  const [isEmergencyCallOpen, setIsEmergencyCallOpen] = useState(false);

  const emergencyContacts = [
    {
      type: 'Экстренная линия клиники',
      number: '+7 (495) 123-45-67',
      availability: '24/7',
      description: 'Для пациентов после операций',
      priority: 'high'
    },
    {
      type: 'Доктор Иванов (личный)',
      number: '+7 (903) 123-45-67',
      availability: '24/7',
      description: 'Прямая связь с хирургом',
      priority: 'high'
    },
    {
      type: 'Скорая помощь',
      number: '103',
      availability: '24/7',
      description: 'При угрозе жизни',
      priority: 'critical'
    },
    {
      type: 'Дежурный врач',
      number: '+7 (495) 123-45-68',
      availability: 'Пн-Вс 8:00-22:00',
      description: 'Консультации и вопросы',
      priority: 'medium'
    }
  ];

  const emergencySymptoms = [
    {
      category: 'Критические симптомы',
      symptoms: [
        {
          symptom: 'Сильное кровотечение из швов',
          action: 'Немедленно вызвать скорую помощь',
          firstAid: 'Прижать стерильную салфетку к ране',
          urgency: 'critical'
        },
        {
          symptom: 'Затрудненное дыхание',
          action: 'Вызвать скорую помощь',
          firstAid: 'Обеспечить доступ свежего воздуха',
          urgency: 'critical'
        },
        {
          symptom: 'Потеря сознания',
          action: 'Немедленно вызвать скорую',
          firstAid: 'Уложить на бок, контролировать дыхание',
          urgency: 'critical'
        },
        {
          symptom: 'Температура выше 39°C',
          action: 'Срочно связаться с врачом',
          firstAid: 'Принять жаропонижающее',
          urgency: 'critical'
        }
      ]
    },
    {
      category: 'Серьезные симптомы',
      symptoms: [
        {
          symptom: 'Сильная боль, не снимающаяся обезболивающими',
          action: 'Связаться с врачом в течение часа',
          firstAid: 'Принять назначенные обезболивающие',
          urgency: 'high'
        },
        {
          symptom: 'Гнойные выделения из швов',
          action: 'Обратиться к врачу в течение 2 часов',
          firstAid: 'Обработать антисептиком',
          urgency: 'high'
        },
        {
          symptom: 'Резкое усиление отеков',
          action: 'Консультация врача в течение дня',
          firstAid: 'Приложить холод, принять горизонтальное положение',
          urgency: 'high'
        },
        {
          symptom: 'Температура 38-39°C',
          action: 'Связаться с врачом',
          firstAid: 'Принять жаропонижающее, пить больше жидкости',
          urgency: 'high'
        }
      ]
    },
    {
      category: 'Тревожные симптомы',
      symptoms: [
        {
          symptom: 'Онемение, не проходящее более недели',
          action: 'Сообщить врачу на плановом осмотре',
          firstAid: 'Легкий массаж (если разрешен)',
          urgency: 'medium'
        },
        {
          symptom: 'Асимметрия результата',
          action: 'Обсудить с врачом на осмотре',
          firstAid: 'Не предпринимать самостоятельных действий',
          urgency: 'medium'
        },
        {
          symptom: 'Изменение цвета швов',
          action: 'Показать врачу при ближайшем визите',
          firstAid: 'Продолжать обработку по схеме',
          urgency: 'medium'
        }
      ]
    }
  ];

  const firstAidKit = [
    {
      category: 'Обезболивающие',
      items: [
        'Кеторол (при сильной боли)',
        'Нурофен (при умеренной боли)',
        'Парацетамол (при температуре)',
        'Но-шпа (при спазмах)'
      ]
    },
    {
      category: 'Антисептики',
      items: [
        'Хлоргексидин 0.05%',
        'Мирамистин',
        'Перекись водорода 3%',
        'Йод (для обработки краев ран)'
      ]
    },
    {
      category: 'Перевязочные материалы',
      items: [
        'Стерильные бинты',
        'Марлевые салфетки',
        'Пластырь гипоаллергенный',
        'Ватные палочки и диски'
      ]
    },
    {
      category: 'Дополнительно',
      items: [
        'Термометр',
        'Пакеты для льда',
        'Эластичные бинты',
        'Одноразовые шприцы'
      ]
    }
  ];

  const emergencyInstructions = [
    {
      situation: 'Кровотечение из швов',
      steps: [
        'Сохраняйте спокойствие',
        'Прижмите стерильную салфетку к ране',
        'Примите горизонтальное положение',
        'Немедленно вызовите врача или скорую',
        'Не снимайте салфетку, добавляйте новые сверху'
      ]
    },
    {
      situation: 'Сильная боль',
      steps: [
        'Примите назначенное обезболивающее',
        'Приложите холод (если разрешено)',
        'Примите удобное положение',
        'Если боль не уменьшается - звоните врачу',
        'Не превышайте дозировку препаратов'
      ]
    },
    {
      situation: 'Повышение температуры',
      steps: [
        'Измерьте температуру точно',
        'Примите жаропонижающее',
        'Пейте больше жидкости',
        'При температуре выше 38.5°C - звоните врачу',
        'Не принимайте антибиотики самостоятельно'
      ]
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
              <a href="/recovery" className="text-foreground hover:text-primary transition-colors">Восстановление</a>
              <a href="/emergency" className="text-primary font-semibold">Экстренная помощь</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              <Icon name="Phone" className="mr-2" size={16} />
              Экстренная связь
            </Button>
          </div>
        </div>
      </header>

      {/* Emergency Alert */}
      <section className="py-8 bg-red-50 border-b border-red-200">
        <div className="container mx-auto px-4">
          <Alert className="max-w-4xl mx-auto border-red-200">
            <Icon name="AlertTriangle" className="h-4 w-4" />
            <AlertTitle className="text-red-800">Экстренная ситуация?</AlertTitle>
            <AlertDescription className="text-red-700">
              При угрозе жизни немедленно вызывайте скорую помощь по номеру <strong>103</strong>. 
              Для консультаций по послеоперационным вопросам звоните <strong>+7 (495) 123-45-67</strong>
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Экстренная помощь
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Круглосуточная поддержка для наших пациентов. Инструкции по оказанию первой помощи 
            и контакты для экстренной связи с врачом.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-red-500">24/7</div>
              <div className="text-sm text-muted-foreground">Поддержка</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-500">5 мин</div>
              <div className="text-sm text-muted-foreground">Время ответа</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-500">100%</div>
              <div className="text-sm text-muted-foreground">Доступность врача</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-500">0</div>
              <div className="text-sm text-muted-foreground">Пропущенных вызовов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Экстренные контакты</h2>
            <p className="text-lg text-muted-foreground">
              Контакты для связи в экстренных ситуациях
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {emergencyContacts.map((contact, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-lg transition-shadow ${
                  contact.priority === 'critical' ? 'border-red-200 bg-red-50' :
                  contact.priority === 'high' ? 'border-orange-200 bg-orange-50' :
                  'border-blue-200 bg-blue-50'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        contact.priority === 'critical' ? 'bg-red-500' :
                        contact.priority === 'high' ? 'bg-orange-500' :
                        'bg-blue-500'
                      }`}>
                        <Icon name="Phone" className="text-white" size={24} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{contact.type}</h3>
                      <p className="text-2xl font-bold text-primary mb-2">{contact.number}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <Badge 
                          variant={contact.priority === 'critical' ? 'destructive' : 'secondary'}
                        >
                          {contact.availability}
                        </Badge>
                        <span className="text-muted-foreground">{contact.description}</span>
                      </div>
                    </div>
                    <Button 
                      size="sm"
                      className={
                        contact.priority === 'critical' ? 'bg-red-500 hover:bg-red-600' :
                        contact.priority === 'high' ? 'bg-orange-500 hover:bg-orange-600' :
                        'bg-blue-500 hover:bg-blue-600'
                      }
                    >
                      Позвонить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Symptoms */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Тревожные симптомы</h2>
            <p className="text-lg text-muted-foreground">
              Когда необходимо немедленно обратиться за помощью
            </p>
          </div>
          <div className="space-y-8">
            {emergencySymptoms.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.symptoms.map((symptom, idx) => (
                    <Card 
                      key={idx} 
                      className={`hover:shadow-lg transition-shadow ${
                        symptom.urgency === 'critical' ? 'border-red-200 bg-red-50' :
                        symptom.urgency === 'high' ? 'border-orange-200 bg-orange-50' :
                        'border-yellow-200 bg-yellow-50'
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Icon 
                            name="AlertTriangle" 
                            className={
                              symptom.urgency === 'critical' ? 'text-red-500' :
                              symptom.urgency === 'high' ? 'text-orange-500' :
                              'text-yellow-500'
                            } 
                            size={24} 
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold mb-2">{symptom.symptom}</h4>
                            <div className="space-y-2 text-sm">
                              <div>
                                <span className="font-medium text-red-600">Действие:</span>
                                <p className="text-muted-foreground">{symptom.action}</p>
                              </div>
                              <div>
                                <span className="font-medium text-green-600">Первая помощь:</span>
                                <p className="text-muted-foreground">{symptom.firstAid}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First Aid Instructions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Инструкции по первой помощи</h2>
            <p className="text-lg text-muted-foreground">
              Что делать в экстренных ситуациях до приезда врача
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {emergencyInstructions.map((instruction, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{instruction.situation}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2">
                    {instruction.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Kit */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Аптечка экстренной помощи</h2>
            <p className="text-lg text-muted-foreground">
              Что должно быть дома у пациента после операции
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {firstAidKit.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <Icon name="Plus" className="text-green-500" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Call Dialog */}
      <Dialog open={isEmergencyCallOpen} onOpenChange={setIsEmergencyCallOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-red-600">Экстренный вызов</DialogTitle>
            <DialogDescription>
              Опишите ситуацию для быстрой помощи
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <Input placeholder="Ваше имя" />
            <Input placeholder="Номер телефона" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Тип операции" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rhinoplasty">Ринопластика</SelectItem>
                <SelectItem value="mammoplasty">Маммопластика</SelectItem>
                <SelectItem value="liposuction">Липосакция</SelectItem>
                <SelectItem value="facelift">Фейслифтинг</SelectItem>
                <SelectItem value="other">Другое</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Дата операции" type="date" />
            <Textarea 
              placeholder="Опишите симптомы и ситуацию подробно" 
              className="min-h-[100px]"
            />
            <div className="flex space-x-2">
              <Button 
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => setIsEmergencyCallOpen(false)}
              >
                Отмена
              </Button>
              <Button 
                type="submit"
                className="flex-1 bg-red-500 hover:bg-red-600 text-white"
              >
                <Icon name="Phone" className="mr-2" size={16} />
                Вызвать врача
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Быстрые действия</h2>
            <p className="text-lg text-muted-foreground">
              Немедленная помощь в один клик
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Button 
              size="lg" 
              className="h-24 bg-red-500 hover:bg-red-600 text-white flex-col"
              onClick={() => window.open('tel:+74951234567')}
            >
              <Icon name="Phone" size={24} />
              <span className="mt-2">Позвонить врачу</span>
            </Button>
            <Button 
              size="lg" 
              className="h-24 bg-green-500 hover:bg-green-600 text-white flex-col"
              onClick={() => window.open('https://wa.me/74951234567')}
            >
              <Icon name="MessageCircle" size={24} />
              <span className="mt-2">WhatsApp</span>
            </Button>
            <Button 
              size="lg" 
              className="h-24 bg-blue-500 hover:bg-blue-600 text-white flex-col"
              onClick={() => window.open('tel:103')}
            >
              <Icon name="Truck" size={24} />
              <span className="mt-2">Скорая помощь</span>
            </Button>
            <Dialog open={isEmergencyCallOpen} onOpenChange={setIsEmergencyCallOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="h-24 bg-purple-500 hover:bg-purple-600 text-white flex-col"
                >
                  <Icon name="FileText" size={24} />
                  <span className="mt-2">Описать проблему</span>
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-blue-200 bg-blue-50">
            <CardContent className="p-8">
              <div className="text-center">
                <Icon name="Info" className="text-blue-500 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Помните
                </h3>
                <div className="space-y-4 text-muted-foreground text-left max-w-2xl mx-auto">
                  <p>
                    • При любых сомнениях лучше лишний раз связаться с врачом
                  </p>
                  <p>
                    • Не занимайтесь самолечением - это может усугубить ситуацию
                  </p>
                  <p>
                    • Всегда имейте под рукой контакты врача и экстренных служб
                  </p>
                  <p>
                    • Соблюдайте все рекомендации врача для предотвращения осложнений
                  </p>
                  <p>
                    • Мы всегда готовы помочь - не стесняйтесь обращаться
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Emergency;