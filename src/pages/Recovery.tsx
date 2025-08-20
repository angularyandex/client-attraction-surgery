import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Recovery = () => {
  const [selectedProcedure, setSelectedProcedure] = useState('rhinoplasty');

  const recoveryTimelines = {
    rhinoplasty: {
      title: 'Восстановление после ринопластики',
      stages: [
        {
          period: 'День операции',
          description: 'Наложение гипсовой повязки, тампоны в носу',
          symptoms: ['Заложенность носа', 'Легкий дискомфорт'],
          care: ['Покой', 'Холодные компрессы', 'Обезболивающие'],
          restrictions: ['Нельзя сморкаться', 'Избегать наклонов'],
          duration: 1
        },
        {
          period: '1-3 дня',
          description: 'Удаление тампонов, максимальные отеки',
          symptoms: ['Отеки', 'Синяки вокруг глаз', 'Дискомфорт'],
          care: ['Промывание носа', 'Холодные компрессы', 'Сон с приподнятой головой'],
          restrictions: ['Нельзя мочить повязку', 'Избегать физических нагрузок'],
          duration: 3
        },
        {
          period: '7-10 дней',
          description: 'Снятие гипса и швов',
          symptoms: ['Уменьшение отеков', 'Остаточные синяки'],
          care: ['Защита от солнца', 'Мягкое очищение', 'Увлажнение'],
          restrictions: ['Нельзя носить очки', 'Избегать контактных видов спорта'],
          duration: 10
        },
        {
          period: '2-4 недели',
          description: 'Значительное улучшение внешнего вида',
          symptoms: ['Минимальные отеки', 'Восстановление чувствительности'],
          care: ['Массаж (по назначению)', 'Защита от травм'],
          restrictions: ['Ограничения в спорте', 'Осторожность с очками'],
          duration: 30
        },
        {
          period: '1-3 месяца',
          description: 'Возвращение к обычной жизни',
          symptoms: ['Остаточная отечность кончика', 'Нормализация дыхания'],
          care: ['Регулярные осмотры', 'Защита от солнца'],
          restrictions: ['Осторожность при занятиях спортом'],
          duration: 90
        },
        {
          period: '6-12 месяцев',
          description: 'Окончательный результат',
          symptoms: ['Полное заживление', 'Стабильная форма'],
          care: ['Контрольные осмотры'],
          restrictions: ['Нет ограничений'],
          duration: 365
        }
      ]
    },
    mammoplasty: {
      title: 'Восстановление после маммопластики',
      stages: [
        {
          period: 'День операции',
          description: 'Наложение компрессионного белья',
          symptoms: ['Дискомфорт в груди', 'Ограничение движений'],
          care: ['Покой', 'Обезболивающие', 'Компрессионное белье'],
          restrictions: ['Нельзя поднимать руки', 'Избегать нагрузок'],
          duration: 1
        },
        {
          period: '1-7 дней',
          description: 'Адаптация к имплантам',
          symptoms: ['Отеки', 'Чувство натяжения', 'Снижение чувствительности'],
          care: ['Ношение белья 24/7', 'Легкий массаж', 'Правильное питание'],
          restrictions: ['Нельзя спать на животе', 'Избегать подъема тяжестей'],
          duration: 7
        },
        {
          period: '1-2 недели',
          description: 'Снятие швов, уменьшение отеков',
          symptoms: ['Улучшение самочувствия', 'Уменьшение дискомфорта'],
          care: ['Смена белья на дневное', 'Легкие прогулки'],
          restrictions: ['Ограничения в движениях рук', 'Нельзя водить машину'],
          duration: 14
        },
        {
          period: '1 месяц',
          description: 'Возвращение к работе',
          symptoms: ['Минимальные отеки', 'Восстановление формы'],
          care: ['Ношение белья днем', 'Постепенное увеличение активности'],
          restrictions: ['Нельзя заниматься спортом', 'Избегать резких движений'],
          duration: 30
        },
        {
          period: '2-3 месяца',
          description: 'Разрешение спортивных нагрузок',
          symptoms: ['Нормализация чувствительности', 'Стабилизация формы'],
          care: ['Контрольные осмотры', 'Постепенное увеличение нагрузок'],
          restrictions: ['Осторожность в контактных видах спорта'],
          duration: 90
        },
        {
          period: '6-12 месяцев',
          description: 'Окончательное формирование результата',
          symptoms: ['Полная адаптация', 'Естественные ощущения'],
          care: ['Регулярные осмотры'],
          restrictions: ['Нет ограничений'],
          duration: 365
        }
      ]
    },
    liposuction: {
      title: 'Восстановление после липосакции',
      stages: [
        {
          period: 'День операции',
          description: 'Наложение компрессионного белья',
          symptoms: ['Дискомфорт в зонах операции', 'Ограничение движений'],
          care: ['Покой', 'Обезболивающие', 'Компрессионное белье'],
          restrictions: ['Нельзя мочить повязки', 'Избегать нагрузок'],
          duration: 1
        },
        {
          period: '1-3 дня',
          description: 'Максимальные отеки и дискомфорт',
          symptoms: ['Отеки', 'Синяки', 'Болезненность'],
          care: ['Ношение белья', 'Лимфодренажный массаж', 'Правильное питание'],
          restrictions: ['Постельный режим', 'Нельзя принимать ванну'],
          duration: 3
        },
        {
          period: '1 неделя',
          description: 'Снятие швов, улучшение самочувствия',
          symptoms: ['Уменьшение отеков', 'Улучшение подвижности'],
          care: ['Легкие прогулки', 'Массаж', 'Здоровое питание'],
          restrictions: ['Нельзя заниматься спортом', 'Избегать горячих ванн'],
          duration: 7
        },
        {
          period: '2-4 недели',
          description: 'Возвращение к обычной активности',
          symptoms: ['Минимальные отеки', 'Восстановление контуров'],
          care: ['Ношение белья днем', 'Увеличение активности'],
          restrictions: ['Ограничения в спорте', 'Нельзя загорать'],
          duration: 30
        },
        {
          period: '1-2 месяца',
          description: 'Разрешение спортивных нагрузок',
          symptoms: ['Стабилизация результата', 'Нормализация чувствительности'],
          care: ['Контрольные осмотры', 'Постепенное увеличение нагрузок'],
          restrictions: ['Защита от солнца'],
          duration: 60
        },
        {
          period: '3-6 месяцев',
          description: 'Окончательный результат',
          symptoms: ['Полное заживление', 'Стабильные контуры'],
          care: ['Поддержание результата'],
          restrictions: ['Нет ограничений'],
          duration: 180
        }
      ]
    }
  };

  const generalTips = [
    {
      category: 'Питание',
      icon: 'Apple',
      tips: [
        'Увеличьте потребление белка для заживления тканей',
        'Пейте больше воды для выведения токсинов',
        'Ешьте продукты, богатые витамином C',
        'Избегайте соленой пищи для уменьшения отеков',
        'Исключите алкоголь минимум на 2 недели'
      ]
    },
    {
      category: 'Физическая активность',
      icon: 'Activity',
      tips: [
        'Начинайте с легких прогулок с первых дней',
        'Избегайте подъема тяжестей первый месяц',
        'Постепенно увеличивайте нагрузку',
        'Слушайте свое тело и не форсируйте события',
        'Получите разрешение врача перед возвращением к спорту'
      ]
    },
    {
      category: 'Уход за швами',
      icon: 'Heart',
      tips: [
        'Содержите швы в чистоте и сухости',
        'Используйте назначенные мази и кремы',
        'Не трогайте швы руками',
        'Защищайте от солнца минимум 6 месяцев',
        'Сообщайте врачу о любых изменениях'
      ]
    },
    {
      category: 'Психологическое состояние',
      icon: 'Brain',
      tips: [
        'Будьте терпеливы - результат формируется постепенно',
        'Не сравнивайте себя с другими пациентами',
        'Обращайтесь к врачу с любыми вопросами',
        'Поддерживайте позитивный настрой',
        'Помните - временные неудобства приведут к желаемому результату'
      ]
    }
  ];

  const warningSignsData = [
    {
      symptom: 'Сильная боль, не снимающаяся обезболивающими',
      urgency: 'Немедленно',
      action: 'Обратиться к врачу',
      color: 'text-red-600'
    },
    {
      symptom: 'Повышение температуры выше 38°C',
      urgency: 'В течение часа',
      action: 'Связаться с клиникой',
      color: 'text-red-600'
    },
    {
      symptom: 'Кровотечение из швов',
      urgency: 'Немедленно',
      action: 'Вызвать скорую или обратиться в клинику',
      color: 'text-red-600'
    },
    {
      symptom: 'Гнойные выделения из швов',
      urgency: 'В течение 2 часов',
      action: 'Обратиться к врачу',
      color: 'text-orange-600'
    },
    {
      symptom: 'Резкое усиление отеков',
      urgency: 'В течение дня',
      action: 'Консультация с врачом',
      color: 'text-orange-600'
    },
    {
      symptom: 'Онемение, не проходящее более недели',
      urgency: 'Плановый осмотр',
      action: 'Сообщить врачу на осмотре',
      color: 'text-yellow-600'
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
              <a href="/recovery" className="text-primary font-semibold">Восстановление</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Восстановление после операций
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Подробные рекомендации по восстановлению после пластических операций. 
            Этапы заживления, уход и важные моменты для достижения лучшего результата.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" className="text-primary" size={16} />
              <span>Поэтапный план</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="text-primary" size={16} />
              <span>Персональный уход</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" className="text-primary" size={16} />
              <span>Безопасность</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Timelines */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Этапы восстановления</h2>
            <p className="text-lg text-muted-foreground">
              Выберите операцию для просмотра подробного плана восстановления
            </p>
          </div>
          <Tabs value={selectedProcedure} onValueChange={setSelectedProcedure} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="rhinoplasty">Ринопластика</TabsTrigger>
              <TabsTrigger value="mammoplasty">Маммопластика</TabsTrigger>
              <TabsTrigger value="liposuction">Липосакция</TabsTrigger>
            </TabsList>

            {Object.entries(recoveryTimelines).map(([key, timeline]) => (
              <TabsContent key={key} value={key}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{timeline.title}</h3>
                </div>
                <div className="space-y-6">
                  {timeline.stages.map((stage, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-sm text-center leading-tight">
                                {stage.period}
                              </span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-2">{stage.description}</h4>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                              <div>
                                <h5 className="font-medium text-sm mb-2 text-red-600">Симптомы:</h5>
                                <ul className="text-sm space-y-1">
                                  {stage.symptoms.map((symptom, idx) => (
                                    <li key={idx} className="flex items-center space-x-1">
                                      <Icon name="AlertCircle" className="text-red-500" size={12} />
                                      <span>{symptom}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-medium text-sm mb-2 text-green-600">Уход:</h5>
                                <ul className="text-sm space-y-1">
                                  {stage.care.map((care, idx) => (
                                    <li key={idx} className="flex items-center space-x-1">
                                      <Icon name="Heart" className="text-green-500" size={12} />
                                      <span>{care}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-medium text-sm mb-2 text-orange-600">Ограничения:</h5>
                                <ul className="text-sm space-y-1">
                                  {stage.restrictions.map((restriction, idx) => (
                                    <li key={idx} className="flex items-center space-x-1">
                                      <Icon name="X" className="text-orange-500" size={12} />
                                      <span>{restriction}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="flex items-center">
                                <div className="w-full">
                                  <div className="text-sm font-medium mb-2">Прогресс:</div>
                                  <Progress value={(index + 1) * 16.67} className="w-full" />
                                </div>
                              </div>
                            </div>
                          </div>
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

      {/* General Tips */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Общие рекомендации</h2>
            <p className="text-lg text-muted-foreground">
              Универсальные советы для успешного восстановления
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {generalTips.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Icon name={category.icon as any} className="mx-auto mb-4 text-primary" size={48} />
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <Icon name="Check" className="text-green-500 mt-0.5" size={14} />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Тревожные симптомы</h2>
            <p className="text-lg text-muted-foreground">
              Когда необходимо немедленно обратиться к врачу
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {warningSignsData.map((warning, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Icon name="AlertTriangle" className={warning.color} size={20} />
                        <span className="font-medium">{warning.symptom}</span>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className={`${warning.color} border-current`}>
                          {warning.urgency}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">{warning.action}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-100 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Phone" className="text-red-600" size={20} />
                    <span className="font-semibold text-red-800">Экстренная связь:</span>
                  </div>
                  <p className="text-red-700">
                    +7 (495) 123-45-67 - круглосуточная линия для пациентов после операций
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recovery Kit */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Набор для восстановления</h2>
            <p className="text-lg text-muted-foreground">
              Что подготовить дома для комфортного восстановления
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="medications" className="border rounded-lg px-6">
                <AccordionTrigger>
                  <div className="flex items-center space-x-3">
                    <Icon name="Pill" className="text-primary" size={24} />
                    <span className="font-semibold">Лекарства и препараты</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Обезболивающие препараты (по назначению врача)</li>
                    <li>• Антибиотики (если назначены)</li>
                    <li>• Противоотечные средства</li>
                    <li>• Мази для заживления швов</li>
                    <li>• Витамины для ускорения заживления</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="supplies" className="border rounded-lg px-6">
                <AccordionTrigger>
                  <div className="flex items-center space-x-3">
                    <Icon name="Package" className="text-primary" size={24} />
                    <span className="font-semibold">Перевязочные материалы</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Стерильные бинты и марлевые салфетки</li>
                    <li>• Пластырь гипоаллергенный</li>
                    <li>• Антисептические растворы</li>
                    <li>• Ватные палочки и диски</li>
                    <li>• Компрессионное белье (по назначению)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="comfort" className="border rounded-lg px-6">
                <AccordionTrigger>
                  <div className="flex items-center space-x-3">
                    <Icon name="Home" className="text-primary" size={24} />
                    <span className="font-semibold">Комфорт и удобство</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Дополнительные подушки для сна с приподнятой головой</li>
                    <li>• Удобная одежда на застежках спереди</li>
                    <li>• Термометр для контроля температуры</li>
                    <li>• Увлажнитель воздуха</li>
                    <li>• Книги, фильмы для досуга во время покоя</li>
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
            Готовы начать восстановление?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Запишитесь на консультацию и получите персональный план восстановления
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

export default Recovery;