import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const About = () => {
  const achievements = [
    { title: 'Лет опыта', value: '15+', icon: 'Award' },
    { title: 'Операций проведено', value: '2000+', icon: 'Users' },
    { title: 'Довольных пациентов', value: '98%', icon: 'Heart' },
    { title: 'Сертификатов', value: '25+', icon: 'Certificate' }
  ];

  const education = [
    {
      year: '2008',
      title: 'РНИМУ им. Н.И. Пирогова',
      description: 'Лечебное дело, красный диплом',
      type: 'education'
    },
    {
      year: '2010',
      title: 'Ординатура по пластической хирургии',
      description: 'НИИ СП им. Н.В. Склифосовского',
      type: 'education'
    },
    {
      year: '2012',
      title: 'Кандидат медицинских наук',
      description: 'Диссертация по реконструктивной хирургии',
      type: 'degree'
    },
    {
      year: '2015-2016',
      title: 'Стажировка в Европе',
      description: 'Германия, Швейцария - изучение новых методик',
      type: 'training'
    },
    {
      year: '2018',
      title: 'Член РОАПХ',
      description: 'Российское общество пластических хирургов',
      type: 'membership'
    },
    {
      year: '2020',
      title: 'Международная сертификация',
      description: 'European Board of Plastic Surgery',
      type: 'certification'
    }
  ];

  const specializations = [
    { name: 'Ринопластика', level: 95 },
    { name: 'Маммопластика', level: 90 },
    { name: 'Фейслифтинг', level: 88 },
    { name: 'Липосакция', level: 92 },
    { name: 'Блефаропластика', level: 94 },
    { name: 'Абдоминопластика', level: 87 }
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
              <a href="/about" className="text-primary font-semibold">О враче</a>
              <a href="/gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Доктор Иванов Алексей Михайлович
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Пластический хирург высшей категории, кандидат медицинских наук
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Award" className="text-primary" size={20} />
                  <span>15+ лет опыта в пластической хирургии</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="GraduationCap" className="text-primary" size={20} />
                  <span>Кандидат медицинских наук</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" className="text-primary" size={20} />
                  <span>Более 2000 успешных операций</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Heart" className="text-primary" size={20} />
                  <span>Член Российского общества пластических хирургов</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg"
                alt="Доктор Иванов"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Достижения</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Icon name={achievement.icon as any} className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="text-3xl font-bold text-foreground mb-2">{achievement.value}</h3>
                  <p className="text-muted-foreground">{achievement.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Образование и карьера</h2>
            <p className="text-lg text-muted-foreground">Путь профессионального развития</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{item.year}</span>
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Специализации</h2>
            <p className="text-lg text-muted-foreground">Уровень экспертизы в различных областях</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {specializations.map((spec, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{spec.name}</span>
                    <span className="text-sm text-muted-foreground">{spec.level}%</span>
                  </div>
                  <Progress value={spec.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Философия работы</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Eye" className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold mb-3">Индивидуальный подход</h3>
                  <p className="text-muted-foreground">
                    Каждый пациент уникален, поэтому мы разрабатываем персональный план лечения
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Shield" className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold mb-3">Безопасность</h3>
                  <p className="text-muted-foreground">
                    Используем только проверенные методики и современное оборудование
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Star" className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold mb-3">Естественность</h3>
                  <p className="text-muted-foreground">
                    Стремимся к естественным результатам, подчеркивающим вашу красоту
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готовы начать свое преображение?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Запишитесь на консультацию и узнайте, как мы можем помочь вам
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

export default About;