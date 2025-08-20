import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Technology = () => {
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);

  const technologies = [
    {
      name: 'Ультразвуковая ринопластика',
      category: 'Ринопластика',
      description: 'Современная методика коррекции носа с использованием ультразвука',
      advantages: [
        'Минимальная травматичность',
        'Точная коррекция костных структур',
        'Быстрое заживление',
        'Меньше отеков и синяков',
        'Сохранение мягких тканей'
      ],
      howItWorks: 'Ультразвуковые волны деликатно разрушают костную ткань, позволяя хирургу точно моделировать форму носа без повреждения окружающих тканей.',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      price: 'от 220 000 ₽',
      featured: true
    },
    {
      name: 'Эндоскопическая хирургия',
      category: 'Фейслифтинг',
      description: 'Малоинвазивная подтяжка лица через небольшие разрезы',
      advantages: [
        'Минимальные рубцы',
        'Быстрое восстановление',
        'Высокая точность',
        'Меньше осложнений',
        'Естественный результат'
      ],
      howItWorks: 'Через небольшие разрезы вводится эндоскоп с камерой, позволяющий хирургу видеть операционное поле и проводить точные манипуляции.',
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      price: 'от 280 000 ₽',
      featured: true
    },
    {
      name: 'Лазерная липосакция',
      category: 'Липосакция',
      description: 'Удаление жира с одновременной подтяжкой кожи',
      advantages: [
        'Подтяжка кожи',
        'Минимальная травматичность',
        'Быстрое восстановление',
        'Точность воздействия',
        'Стимуляция коллагена'
      ],
      howItWorks: 'Лазерное излучение разрушает жировые клетки и стимулирует выработку коллагена, обеспечивая подтяжку кожи.',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      price: 'от 150 000 ₽',
      featured: false
    },
    {
      name: '3D моделирование',
      category: 'Планирование',
      description: 'Виртуальное планирование операции и прогнозирование результата',
      advantages: [
        'Визуализация результата',
        'Точное планирование',
        'Снижение рисков',
        'Понимание ожиданий',
        'Индивидуальный подход'
      ],
      howItWorks: 'Специальное ПО создает 3D модель лица или тела пациента, позволяя спланировать операцию и показать ожидаемый результат.',
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      price: 'Включено в стоимость',
      featured: true
    },
    {
      name: 'Когезивные гелевые импланты',
      category: 'Маммопластика',
      description: 'Импланты нового поколения с улучшенными свойствами',
      advantages: [
        'Естественные ощущения',
        'Безопасность',
        'Долговечность',
        'Стабильность формы',
        'Пожизненная гарантия'
      ],
      howItWorks: 'Когезивный гель имеет память формы и не растекается даже при повреждении оболочки, обеспечивая максимальную безопасность.',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      price: 'от 200 000 ₽',
      featured: false
    },
    {
      name: 'Радиочастотная подтяжка',
      category: 'Омоложение',
      description: 'Безоперационная подтяжка кожи радиочастотными волнами',
      advantages: [
        'Без операции',
        'Нет периода восстановления',
        'Стимуляция коллагена',
        'Постепенное улучшение',
        'Безопасность'
      ],
      howItWorks: 'Радиочастотная энергия нагревает глубокие слои кожи, стимулируя выработку нового коллагена и подтяжку тканей.',
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      price: 'от 50 000 ₽',
      featured: false
    }
  ];

  const equipment = [
    {
      name: 'Операционный микроскоп Carl Zeiss',
      purpose: 'Микрохирургические операции',
      benefits: ['Увеличение в 40 раз', 'Точность манипуляций', 'Минимальная травматичность']
    },
    {
      name: 'Ультразвуковой аппарат Piezotome',
      purpose: 'Ультразвуковая ринопластика',
      benefits: ['Селективное воздействие', 'Сохранение мягких тканей', 'Быстрое заживление']
    },
    {
      name: 'Лазерная система SmartLipo',
      purpose: 'Лазерная липосакция',
      benefits: ['Подтяжка кожи', 'Минимальные разрезы', 'Быстрое восстановление']
    },
    {
      name: 'Эндоскопическая система Karl Storz',
      purpose: 'Эндоскопические операции',
      benefits: ['HD визуализация', 'Минимальные разрезы', 'Высокая точность']
    },
    {
      name: 'Система 3D планирования Crisalix',
      purpose: 'Виртуальное моделирование',
      benefits: ['Визуализация результата', 'Точное планирование', 'Понимание ожиданий']
    },
    {
      name: 'Аппарат ИВЛ Dräger',
      purpose: 'Анестезиологическое обеспечение',
      benefits: ['Безопасность наркоза', 'Точный контроль', 'Быстрое пробуждение']
    }
  ];

  const innovations = [
    {
      title: 'Биодеградируемые нити',
      description: 'Рассасывающиеся нити для подтяжки без операции',
      status: 'Доступно',
      applications: ['Подтяжка лица', 'Коррекция овала', 'Лифтинг бровей']
    },
    {
      title: 'Стволовые клетки',
      description: 'Использование собственных стволовых клеток для омоложения',
      status: 'В разработке',
      applications: ['Омоложение кожи', 'Ускорение заживления', 'Улучшение результатов']
    },
    {
      title: 'Роботизированная хирургия',
      description: 'Операции с помощью роботизированных систем',
      status: 'Планируется',
      applications: ['Микрохирургия', 'Точные манипуляции', 'Минимальная травматичность']
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
              <a href="/technology" className="text-primary font-semibold">Технологии</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Современные технологии
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Мы используем самые передовые технологии и оборудование для достижения 
            наилучших результатов с минимальной травматичностью.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Современных технологий</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Сертифицированное оборудование</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Операционных</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Мониторинг</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Наши технологии</h2>
            <p className="text-lg text-muted-foreground">
              Передовые методики для каждого вида операций
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-48 object-cover"
                  />
                  {tech.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary">
                      Инновация
                    </Badge>
                  )}
                  <Badge className="absolute top-4 right-4 bg-black bg-opacity-70">
                    {tech.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{tech.name}</CardTitle>
                  <CardDescription>{tech.description}</CardDescription>
                  <Badge variant="secondary" className="text-lg font-bold w-fit">
                    {tech.price}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Преимущества:</h4>
                      <ul className="space-y-1">
                        {tech.advantages.slice(0, 3).map((advantage, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <Icon name="Check" className="text-green-500" size={16} />
                            <span>{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={() => setSelectedTechnology(tech.name)}
                        >
                          Подробнее
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{tech.name}</DialogTitle>
                          <DialogDescription>{tech.description}</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <img
                            src={tech.image}
                            alt={tech.name}
                            className="w-full rounded-lg"
                          />
                          <div>
                            <h4 className="font-semibold mb-2">Как это работает:</h4>
                            <p className="text-sm text-muted-foreground">{tech.howItWorks}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Все преимущества:</h4>
                            <ul className="space-y-1">
                              {tech.advantages.map((advantage, idx) => (
                                <li key={idx} className="flex items-center space-x-2 text-sm">
                                  <Icon name="Check" className="text-green-500" size={16} />
                                  <span>{advantage}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Оборудование клиники</h2>
            <p className="text-lg text-muted-foreground">
              Современное медицинское оборудование ведущих мировых производителей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription>{item.purpose}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <Icon name="Zap" className="text-blue-500" size={16} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Инновации будущего</h2>
            <p className="text-lg text-muted-foreground">
              Технологии, которые мы внедряем и планируем использовать
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{innovation.title}</CardTitle>
                    <Badge 
                      variant={innovation.status === 'Доступно' ? 'default' : 
                               innovation.status === 'В разработке' ? 'secondary' : 'outline'}
                    >
                      {innovation.status}
                    </Badge>
                  </div>
                  <CardDescription>{innovation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold mb-2">Применение:</h4>
                    <ul className="space-y-1">
                      {innovation.applications.map((app, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <Icon name="ArrowRight" className="text-primary" size={16} />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Стандарты безопасности</h2>
            <p className="text-lg text-muted-foreground">
              Соблюдение международных протоколов безопасности
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Shield" className="mx-auto mb-4 text-green-500" size={48} />
                <h3 className="text-lg font-semibold mb-2">ISO 9001</h3>
                <p className="text-sm text-muted-foreground">Международный стандарт качества</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Award" className="mx-auto mb-4 text-blue-500" size={48} />
                <h3 className="text-lg font-semibold mb-2">JCI</h3>
                <p className="text-sm text-muted-foreground">Аккредитация Joint Commission International</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="CheckCircle" className="mx-auto mb-4 text-purple-500" size={48} />
                <h3 className="text-lg font-semibold mb-2">FDA</h3>
                <p className="text-sm text-muted-foreground">Одобренные препараты и импланты</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Lock" className="mx-auto mb-4 text-red-500" size={48} />
                <h3 className="text-lg font-semibold mb-2">HIPAA</h3>
                <p className="text-sm text-muted-foreground">Защита персональных данных</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Оцените преимущества современных технологий
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Запишитесь на консультацию и узнайте, какие технологии подойдут для вашего случая
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

export default Technology;