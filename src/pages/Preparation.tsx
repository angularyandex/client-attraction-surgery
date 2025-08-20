import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Preparation = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const preparationTimeline = [
    {
      period: 'За 2-4 недели',
      title: 'Первичная подготовка',
      tasks: [
        'Консультация с хирургом',
        'Выбор даты операции',
        'Получение списка анализов',
        'Прекращение приема препаратов, влияющих на свертываемость',
        'Отказ от курения и алкоголя'
      ],
      importance: 'critical'
    },
    {
      period: 'За 1-2 недели',
      title: 'Медицинское обследование',
      tasks: [
        'Сдача всех необходимых анализов',
        'Консультации специалистов (при необходимости)',
        'Получение заключения о возможности операции',
        'Окончательное планирование операции',
        'Подписание согласия на операцию'
      ],
      importance: 'high'
    },
    {
      period: 'За 3-7 дней',
      title: 'Финальная подготовка',
      tasks: [
        'Покупка необходимых препаратов',
        'Подготовка дома к восстановлению',
        'Организация помощи на первые дни',
        'Соблюдение диеты (при необходимости)',
        'Психологическая подготовка'
      ],
      importance: 'medium'
    },
    {
      period: 'За 1 день',
      title: 'Накануне операции',
      tasks: [
        'Легкий ужин до 18:00',
        'Принятие душа с антибактериальным мылом',
        'Снятие лака с ногтей',
        'Удаление контактных линз',
        'Полноценный сон'
      ],
      importance: 'critical'
    }
  ];

  const requiredTests = [
    {
      category: 'Анализы крови',
      tests: [
        'Общий анализ крови с лейкоформулой',
        'Биохимический анализ крови',
        'Коагулограмма (свертываемость)',
        'Группа крови и резус-фактор',
        'Анализы на ВИЧ, гепатиты B и C, сифилис'
      ],
      validity: '10-14 дней',
      cost: '3000-5000 ₽'
    },
    {
      category: 'Инструментальные исследования',
      tests: [
        'ЭКГ (электрокардиограмма)',
        'Флюорография или рентген грудной клетки',
        'УЗИ (при необходимости)',
        'Маммография (для операций на груди, после 40 лет)'
      ],
      validity: '1 месяц',
      cost: '2000-4000 ₽'
    },
    {
      category: 'Консультации специалистов',
      tests: [
        'Терапевт (заключение о возможности операции)',
        'Анестезиолог (за день до операции)',
        'Кардиолог (при заболеваниях сердца)',
        'Эндокринолог (при диабете)'
      ],
      validity: '1 месяц',
      cost: '1500-3000 ₽'
    },
    {
      category: 'Дополнительные анализы',
      tests: [
        'Общий анализ мочи',
        'Анализ на гормоны щитовидной железы',
        'Анализ на онкомаркеры (при показаниях)',
        'Аллергопробы (при наличии аллергий)'
      ],
      validity: '10-14 дней',
      cost: '2000-6000 ₽'
    }
  ];

  const medicationRestrictions = [
    {
      category: 'Препараты, влияющие на свертываемость',
      medications: [
        'Аспирин и препараты, содержащие ацетилсалициловую кислоту',
        'Варфарин, гепарин и другие антикоагулянты',
        'Ибупрофен, диклофенак и другие НПВС',
        'Витамин E в высоких дозах',
        'Рыбий жир и омега-3 жирные кислоты'
      ],
      stopBefore: '2 недели',
      reason: 'Увеличивают риск кровотечения'
    },
    {
      category: 'Гормональные препараты',
      medications: [
        'Оральные контрацептивы',
        'Заместительная гормональная терапия',
        'Препараты для лечения щитовидной железы',
        'Кортикостероиды'
      ],
      stopBefore: '1 месяц',
      reason: 'Влияют на заживление и риск тромбозов'
    },
    {
      category: 'Биологически активные добавки',
      medications: [
        'Женьшень, гинкго билоба',
        'Зверобой, эхинацея',
        'Чеснок в капсулах',
        'Куркума в высоких дозах'
      ],
      stopBefore: '1 неделя',
      reason: 'Могут взаимодействовать с анестезией'
    }
  ];

  const lifestyleRecommendations = [
    {
      title: 'Питание',
      icon: 'Apple',
      recommendations: [
        'Увеличьте потребление белка (мясо, рыба, яйца)',
        'Ешьте больше фруктов и овощей',
        'Пейте достаточно воды (2-2.5 л в день)',
        'Ограничьте соль за неделю до операции',
        'Исключите алкоголь за 2 недели'
      ]
    },
    {
      title: 'Физическая активность',
      icon: 'Activity',
      recommendations: [
        'Поддерживайте умеренную физическую активность',
        'Избегайте интенсивных тренировок за неделю',
        'Делайте дыхательную гимнастику',
        'Высыпайтесь (7-8 часов сна)',
        'Избегайте стрессов'
      ]
    },
    {
      title: 'Уход за кожей',
      icon: 'Sparkles',
      recommendations: [
        'Увлажняйте кожу в зоне операции',
        'Избегайте загара за месяц до операции',
        'Не делайте агрессивные косметические процедуры',
        'Используйте солнцезащитный крем',
        'Очищайте кожу мягкими средствами'
      ]
    }
  ];

  const handleCheckboxChange = (taskId: string, checked: boolean) => {
    if (checked) {
      setCheckedItems([...checkedItems, taskId]);
    } else {
      setCheckedItems(checkedItems.filter(id => id !== taskId));
    }
  };

  const getCompletionPercentage = () => {
    const totalTasks = preparationTimeline.reduce((sum, period) => sum + period.tasks.length, 0);
    return (checkedItems.length / totalTasks) * 100;
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
              <a href="/services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="/preparation" className="text-primary font-semibold">Подготовка</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Подготовка к операции
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Правильная подготовка - залог успешной операции и быстрого восстановления. 
            Подробный план действий на каждом этапе.
          </p>
          <div className="max-w-md mx-auto">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Готовность к операции</span>
                <span className="text-sm text-muted-foreground">
                  {Math.round(getCompletionPercentage())}%
                </span>
              </div>
              <Progress value={getCompletionPercentage()} className="h-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">План подготовки</h2>
            <p className="text-lg text-muted-foreground">
              Пошаговый чек-лист для подготовки к операции
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {preparationTimeline.map((period, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        period.importance === 'critical' ? 'bg-red-500' :
                        period.importance === 'high' ? 'bg-orange-500' : 'bg-blue-500'
                      }`}>
                        <span className="text-white font-bold text-sm text-center leading-tight">
                          {period.period}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-4">{period.title}</h3>
                      <div className="space-y-3">
                        {period.tasks.map((task, taskIndex) => {
                          const taskId = `${index}-${taskIndex}`;
                          return (
                            <div key={taskIndex} className="flex items-center space-x-3">
                              <Checkbox
                                checked={checkedItems.includes(taskId)}
                                onCheckedChange={(checked) => handleCheckboxChange(taskId, checked as boolean)}
                              />
                              <span className={`${checkedItems.includes(taskId) ? 'line-through text-muted-foreground' : ''}`}>
                                {task}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Badge 
                        variant={period.importance === 'critical' ? 'destructive' : 'secondary'}
                        className="text-xs"
                      >
                        {period.importance === 'critical' ? 'Критично' :
                         period.importance === 'high' ? 'Важно' : 'Желательно'}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Required Tests */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Необходимые анализы</h2>
            <p className="text-lg text-muted-foreground">
              Полный список обследований перед операцией
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {requiredTests.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">
                      Действительны: {category.validity}
                    </Badge>
                    <Badge variant="secondary">
                      {category.cost}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.tests.map((test, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <Icon name="FileText" className="text-primary" size={16} />
                        <span>{test}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Medication Restrictions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ограничения по препаратам</h2>
            <p className="text-lg text-muted-foreground">
              Какие лекарства нужно прекратить принимать перед операцией
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {medicationRestrictions.map((restriction, index) => (
              <Card key={index} className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{restriction.category}</CardTitle>
                    <Badge variant="destructive">
                      Прекратить за {restriction.stopBefore}
                    </Badge>
                  </div>
                  <CardDescription className="text-orange-700">
                    {restriction.reason}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {restriction.medications.map((medication, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <Icon name="AlertTriangle" className="text-orange-600" size={16} />
                        <span>{medication}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Recommendations */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Рекомендации по образу жизни</h2>
            <p className="text-lg text-muted-foreground">
              Как подготовить организм к операции
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {lifestyleRecommendations.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Icon name={category.icon as any} className="mx-auto mb-4 text-primary" size={48} />
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.recommendations.map((rec, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <Icon name="Check" className="text-green-500 mt-0.5" size={14} />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Day of Surgery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">День операции</h2>
            <p className="text-lg text-muted-foreground">
              Что нужно знать в день проведения операции
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="morning" className="border rounded-lg px-6">
                <AccordionTrigger>
                  <div className="flex items-center space-x-3">
                    <Icon name="Sun" className="text-primary" size={24} />
                    <span className="font-semibold">Утром перед операцией</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Не ешьте и не пейте за 8 часов до операции</li>
                    <li>• Примите душ с антибактериальным мылом</li>
                    <li>• Не используйте косметику, кремы, дезодоранты</li>
                    <li>• Снимите все украшения, контактные линзы</li>
                    <li>• Наденьте удобную одежду на застежках</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="arrival" className="border rounded-lg px-6">
                <AccordionTrigger>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="text-primary" size={24} />
                    <span className="font-semibold">Прибытие в клинику</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Приезжайте за 1-2 часа до операции</li>
                    <li>• Возьмите с собой документы и анализы</li>
                    <li>• Пройдите регистрацию и оформление</li>
                    <li>• Встретьтесь с анестезиологом</li>
                    <li>• Подготовьтесь к операции в палате</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="after" className="border rounded-lg px-6">
                <AccordionTrigger>
                  <div className="flex items-center space-x-3">
                    <Icon name="Moon" className="text-primary" size={24} />
                    <span className="font-semibold">После операции</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Проведите время в палате под наблюдением</li>
                    <li>• Получите рекомендации по уходу</li>
                    <li>• Запишитесь на контрольный осмотр</li>
                    <li>• Получите необходимые препараты</li>
                    <li>• Организуйте сопровождение домой</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готовы начать подготовку?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Запишитесь на консультацию и получите персональный план подготовки
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

export default Preparation;