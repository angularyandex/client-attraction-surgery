import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Safety = () => {
  const safetyProtocols = [
    {
      title: 'Предоперационная подготовка',
      description: 'Комплексное обследование и подготовка пациента',
      steps: [
        'Детальная консультация и осмотр',
        'Полное медицинское обследование',
        'Оценка рисков и противопоказаний',
        'Планирование операции с учетом особенностей',
        'Психологическая подготовка пациента'
      ],
      compliance: 99
    },
    {
      title: 'Операционная безопасность',
      description: 'Соблюдение стерильности и протоколов во время операции',
      steps: [
        'Стерилизация инструментов по международным стандартам',
        'Контроль стерильности операционной',
        'Мониторинг жизненных показателей',
        'Использование сертифицированных материалов',
        'Присутствие анестезиолога-реаниматолога'
      ],
      compliance: 100
    },
    {
      title: 'Послеоперационный контроль',
      description: 'Наблюдение и уход после операции',
      steps: [
        'Мониторинг в палате пробуждения',
        'Контроль болевого синдрома',
        'Профилактика осложнений',
        'Регулярные осмотры в период восстановления',
        'Круглосуточная связь с врачом'
      ],
      compliance: 98
    }
  ];

  const riskFactors = [
    {
      category: 'Общие риски',
      risks: [
        { name: 'Кровотечение', probability: 'Менее 1%', prevention: 'Тщательное обследование, правильная техника' },
        { name: 'Инфекция', probability: 'Менее 0.5%', prevention: 'Стерильность, антибиотикопрофилактика' },
        { name: 'Реакция на анестезию', probability: 'Менее 0.1%', prevention: 'Обследование, современные препараты' },
        { name: 'Тромбоэмболия', probability: 'Менее 0.1%', prevention: 'Ранняя активизация, профилактика' }
      ]
    },
    {
      category: 'Специфические риски',
      risks: [
        { name: 'Асимметрия результата', probability: '2-3%', prevention: 'Точное планирование, опыт хирурга' },
        { name: 'Неудовлетворенность результатом', probability: '5-7%', prevention: 'Детальное обсуждение ожиданий' },
        { name: 'Необходимость коррекции', probability: '3-5%', prevention: 'Правильная техника, соблюдение рекомендаций' },
        { name: 'Образование рубцов', probability: '1-2%', prevention: 'Правильный уход, генетические факторы' }
      ]
    }
  ];

  const contraindications = [
    {
      category: 'Абсолютные противопоказания',
      items: [
        'Онкологические заболевания в активной фазе',
        'Тяжелые заболевания сердечно-сосудистой системы',
        'Нарушения свертываемости крови',
        'Психические расстройства',
        'Беременность и период лактации'
      ],
      severity: 'critical'
    },
    {
      category: 'Относительные противопоказания',
      items: [
        'Острые инфекционные заболевания',
        'Обострение хронических заболеваний',
        'Менструация (для некоторых операций)',
        'Возраст до 18 лет',
        'Нереалистичные ожидания от операции'
      ],
      severity: 'moderate'
    },
    {
      category: 'Временные ограничения',
      items: [
        'Прием препаратов, влияющих на свертываемость',
        'Недавно перенесенные заболевания',
        'Планируемая беременность в ближайшие месяцы',
        'Активные воспалительные процессы кожи',
        'Недостаточная мотивация пациента'
      ],
      severity: 'low'
    }
  ];

  const emergencyProtocols = [
    {
      situation: 'Кровотечение во время операции',
      actions: [
        'Немедленная остановка кровотечения',
        'Контроль артериального давления',
        'При необходимости - переливание крови',
        'Корректировка плана операции',
        'Дополнительный мониторинг'
      ]
    },
    {
      situation: 'Аллергическая реакция на анестезию',
      actions: [
        'Немедленное прекращение введения препарата',
        'Введение антигистаминных препаратов',
        'Поддержание дыхания и кровообращения',
        'Переход на альтернативную анестезию',
        'Мониторинг состояния пациента'
      ]
    },
    {
      situation: 'Осложнения в послеоперационном периоде',
      actions: [
        'Круглосуточная связь с врачом',
        'Экстренный осмотр при необходимости',
        'Корректировка лечения',
        'Дополнительные обследования',
        'Госпитализация при необходимости'
      ]
    }
  ];

  const qualityAssurance = [
    {
      aspect: 'Стерилизация инструментов',
      standard: 'ISO 17665',
      description: 'Паровая стерилизация с контролем параметров',
      frequency: 'Каждый инструмент перед операцией'
    },
    {
      aspect: 'Контроль инфекций',
      standard: 'CDC Guidelines',
      description: 'Протоколы профилактики внутрибольничных инфекций',
      frequency: 'Постоянный мониторинг'
    },
    {
      aspect: 'Качество имплантов',
      standard: 'FDA/CE Mark',
      description: 'Только сертифицированные импланты ведущих производителей',
      frequency: 'Проверка каждой партии'
    },
    {
      aspect: 'Анестезиологическое обеспечение',
      standard: 'ASA Guidelines',
      description: 'Современные протоколы анестезии и мониторинга',
      frequency: 'Каждая операция'
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
              <a href="/about" className="text-foreground hover:text-primary transition-colors">О враче</a>
              <a href="/safety" className="text-primary font-semibold">Безопасность</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-pink-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Безопасность пациентов
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Безопасность - наш главный приоритет. Мы соблюдаем самые строгие 
            международные стандарты и протоколы для обеспечения безопасности каждого пациента.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-500">99.9%</div>
              <div className="text-sm text-muted-foreground">Операций без осложнений</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-500">0</div>
              <div className="text-sm text-muted-foreground">Серьезных осложнений</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-500">100%</div>
              <div className="text-sm text-muted-foreground">Соблюдение протоколов</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-500">24/7</div>
              <div className="text-sm text-muted-foreground">Поддержка пациентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Protocols */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Протоколы безопасности</h2>
            <p className="text-lg text-muted-foreground">
              Многоуровневая система обеспечения безопасности
            </p>
          </div>
          <div className="space-y-8">
            {safetyProtocols.map((protocol, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{protocol.title}</h3>
                      <p className="text-muted-foreground mb-4">{protocol.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <ul className="space-y-2">
                            {protocol.steps.map((step, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-sm">
                                <Icon name="CheckCircle" className="text-green-500" size={16} />
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center">
                          <div className="w-full">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium">Соблюдение протокола</span>
                              <span className="text-sm text-muted-foreground">{protocol.compliance}%</span>
                            </div>
                            <Progress value={protocol.compliance} className="h-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Assessment */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Оценка рисков</h2>
            <p className="text-lg text-muted-foreground">
              Честная информация о возможных рисках и их профилактике
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {riskFactors.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.risks.map((risk, idx) => (
                      <div key={idx} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{risk.name}</h4>
                          <Badge 
                            variant={parseFloat(risk.probability) < 1 ? 'secondary' : 'outline'}
                            className="text-xs"
                          >
                            {risk.probability}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Профилактика:</span> {risk.prevention}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contraindications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Противопоказания</h2>
            <p className="text-lg text-muted-foreground">
              Состояния, при которых операция не рекомендуется или откладывается
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {contraindications.map((category, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-lg transition-shadow ${
                  category.severity === 'critical' ? 'border-red-200 bg-red-50' :
                  category.severity === 'moderate' ? 'border-orange-200 bg-orange-50' :
                  'border-yellow-200 bg-yellow-50'
                }`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Icon 
                      name={category.severity === 'critical' ? 'XCircle' : 
                            category.severity === 'moderate' ? 'AlertTriangle' : 'Clock'} 
                      className={
                        category.severity === 'critical' ? 'text-red-500' :
                        category.severity === 'moderate' ? 'text-orange-500' :
                        'text-yellow-500'
                      } 
                      size={24} 
                    />
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <Icon 
                          name="Minus" 
                          className={
                            category.severity === 'critical' ? 'text-red-500' :
                            category.severity === 'moderate' ? 'text-orange-500' :
                            'text-yellow-500'
                          } 
                          size={16} 
                        />
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

      {/* Emergency Protocols */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Экстренные протоколы</h2>
            <p className="text-lg text-muted-foreground">
              Готовность к любым ситуациям во время и после операции
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {emergencyProtocols.map((protocol, index) => (
                <AccordionItem key={index} value={`protocol-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger>
                    <div className="flex items-center space-x-3">
                      <Icon name="AlertTriangle" className="text-red-500" size={24} />
                      <span className="font-semibold">{protocol.situation}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {protocol.actions.map((action, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                            {idx + 1}
                          </span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Контроль качества</h2>
            <p className="text-lg text-muted-foreground">
              Система обеспечения качества на всех этапах лечения
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {qualityAssurance.map((qa, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{qa.aspect}</CardTitle>
                  <Badge variant="secondary">{qa.standard}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{qa.description}</p>
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="Clock" className="text-primary" size={16} />
                    <span className="font-medium">{qa.frequency}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Страхование и гарантии</h2>
            <p className="text-lg text-muted-foreground">
              Дополнительная защита для наших пациентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Shield" className="mx-auto mb-4 text-green-500" size={48} />
                <h3 className="text-xl font-semibold mb-2">Страхование ответственности</h3>
                <p className="text-muted-foreground mb-4">
                  Клиника застрахована на сумму 50 млн рублей
                </p>
                <Badge variant="secondary">Действующий полис</Badge>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Award" className="mx-auto mb-4 text-blue-500" size={48} />
                <h3 className="text-xl font-semibold mb-2">Гарантия на результат</h3>
                <p className="text-muted-foreground mb-4">
                  Гарантия на результат операции в течение 1 года
                </p>
                <Badge variant="secondary">Письменная гарантия</Badge>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Heart" className="mx-auto mb-4 text-red-500" size={48} />
                <h3 className="text-xl font-semibold mb-2">Пожизненная поддержка</h3>
                <p className="text-muted-foreground mb-4">
                  Консультации и наблюдение без ограничений по времени
                </p>
                <Badge variant="secondary">Включено в стоимость</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ваша безопасность - наша ответственность
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Запишитесь на консультацию и узнайте больше о наших стандартах безопасности
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

export default Safety;