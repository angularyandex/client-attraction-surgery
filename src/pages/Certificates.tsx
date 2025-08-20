import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const educationCertificates = [
    {
      id: 1,
      title: 'Диплом о высшем образовании',
      institution: 'РНИМУ им. Н.И. Пирогова',
      year: '2008',
      description: 'Лечебное дело, красный диплом',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      type: 'education'
    },
    {
      id: 2,
      title: 'Диплом ординатуры',
      institution: 'НИИ СП им. Н.В. Склифосовского',
      year: '2010',
      description: 'Пластическая хирургия',
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      type: 'education'
    },
    {
      id: 3,
      title: 'Диплом кандидата медицинских наук',
      institution: 'РНИМУ им. Н.И. Пирогова',
      year: '2012',
      description: 'Диссертация по реконструктивной хирургии',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      type: 'education'
    }
  ];

  const professionalCertificates = [
    {
      id: 4,
      title: 'Сертификат специалиста',
      institution: 'Минздрав России',
      year: '2023',
      description: 'Пластическая хирургия, действителен до 2028 года',
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      type: 'professional'
    },
    {
      id: 5,
      title: 'Лицензия на медицинскую деятельность',
      institution: 'Росздравнадзор',
      year: '2023',
      description: 'Пластическая хирургия и косметология',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      type: 'professional'
    },
    {
      id: 6,
      title: 'Сертификат повышения квалификации',
      institution: 'РНИМУ им. Н.И. Пирогова',
      year: '2023',
      description: 'Современные методы пластической хирургии',
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      type: 'professional'
    }
  ];

  const membershipCertificates = [
    {
      id: 7,
      title: 'Член РОАПХ',
      institution: 'Российское общество пластических хирургов',
      year: '2018',
      description: 'Действительный член общества',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      type: 'membership'
    },
    {
      id: 8,
      title: 'European Board Certification',
      institution: 'European Board of Plastic Surgery',
      year: '2020',
      description: 'Международная сертификация',
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      type: 'membership'
    },
    {
      id: 9,
      title: 'Член ISAPS',
      institution: 'International Society of Aesthetic Plastic Surgery',
      year: '2021',
      description: 'Международное общество эстетической пластической хирургии',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      type: 'membership'
    }
  ];

  const trainingCertificates = [
    {
      id: 10,
      title: 'Стажировка в Германии',
      institution: 'Университетская клиника Мюнхена',
      year: '2015',
      description: 'Современные методы ринопластики',
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      type: 'training'
    },
    {
      id: 11,
      title: 'Мастер-класс в Швейцарии',
      institution: 'Swiss Plastic Surgery Center',
      year: '2016',
      description: 'Эндоскопические методы в пластической хирургии',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      type: 'training'
    },
    {
      id: 12,
      title: 'Курс по маммопластике',
      institution: 'American Society of Plastic Surgeons',
      year: '2019',
      description: 'Современные импланты и техники',
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      type: 'training'
    },
    {
      id: 13,
      title: 'Сертификат по липосакции',
      institution: 'European Academy of Cosmetic Surgery',
      year: '2020',
      description: 'Ультразвуковая и лазерная липосакция',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      type: 'training'
    }
  ];

  const achievements = [
    {
      title: 'Лучший пластический хирург года',
      organization: 'Медицинская премия "Призвание"',
      year: '2022',
      description: 'За выдающиеся достижения в пластической хирургии'
    },
    {
      title: 'Золотая медаль',
      organization: 'Международный конгресс пластических хирургов',
      year: '2021',
      description: 'За инновационные методики в ринопластике'
    },
    {
      title: 'Почетная грамота',
      organization: 'Министерство здравоохранения РФ',
      year: '2020',
      description: 'За многолетний добросовестный труд'
    },
    {
      title: 'Диплом лауреата',
      organization: 'Конкурс "Лучший врач России"',
      year: '2019',
      description: 'В номинации "Пластическая хирургия"'
    }
  ];

  const statistics = [
    { label: 'Лет практики', value: '15+' },
    { label: 'Сертификатов', value: '25+' },
    { label: 'Курсов повышения квалификации', value: '50+' },
    { label: 'Международных стажировок', value: '8' }
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
              <a href="/certificates" className="text-primary font-semibold">Сертификаты</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-amber-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Сертификаты и дипломы
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Подтверждение высокой квалификации и непрерывного профессионального развития. 
            Все документы имеют официальное подтверждение.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="education">Образование</TabsTrigger>
              <TabsTrigger value="professional">Сертификаты</TabsTrigger>
              <TabsTrigger value="membership">Членство</TabsTrigger>
              <TabsTrigger value="training">Стажировки</TabsTrigger>
            </TabsList>

            {/* Education */}
            <TabsContent value="education">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Образование</h2>
                <p className="text-lg text-muted-foreground">
                  Базовое медицинское образование и специализация
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {educationCertificates.map((cert) => (
                  <Card key={cert.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-blue-500">
                        {cert.year}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                      <CardDescription>{cert.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full">
                            <Icon name="ZoomIn" className="mr-2" size={16} />
                            Увеличить
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full rounded-lg"
                          />
                          <div className="text-center mt-4">
                            <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                            <p className="text-muted-foreground">{cert.institution}, {cert.year}</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Professional */}
            <TabsContent value="professional">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Профессиональные сертификаты</h2>
                <p className="text-lg text-muted-foreground">
                  Действующие лицензии и сертификаты специалиста
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {professionalCertificates.map((cert) => (
                  <Card key={cert.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-green-500">
                        Действующий
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                      <CardDescription>{cert.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full">
                            <Icon name="ZoomIn" className="mr-2" size={16} />
                            Увеличить
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full rounded-lg"
                          />
                          <div className="text-center mt-4">
                            <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                            <p className="text-muted-foreground">{cert.institution}, {cert.year}</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Membership */}
            <TabsContent value="membership">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Членство в организациях</h2>
                <p className="text-lg text-muted-foreground">
                  Участие в профессиональных медицинских сообществах
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {membershipCertificates.map((cert) => (
                  <Card key={cert.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-purple-500">
                        Член
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                      <CardDescription>{cert.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full">
                            <Icon name="ZoomIn" className="mr-2" size={16} />
                            Увеличить
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full rounded-lg"
                          />
                          <div className="text-center mt-4">
                            <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                            <p className="text-muted-foreground">{cert.institution}, {cert.year}</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Training */}
            <TabsContent value="training">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Стажировки и курсы</h2>
                <p className="text-lg text-muted-foreground">
                  Непрерывное обучение и освоение новых методик
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trainingCertificates.map((cert) => (
                  <Card key={cert.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-orange-500">
                        {cert.year}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                      <CardDescription>{cert.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full">
                            <Icon name="ZoomIn" className="mr-2" size={16} />
                            Увеличить
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full rounded-lg"
                          />
                          <div className="text-center mt-4">
                            <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                            <p className="text-muted-foreground">{cert.institution}, {cert.year}</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Награды и достижения</h2>
            <p className="text-lg text-muted-foreground">
              Признание профессионального мастерства
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Icon name="Award" className="text-white" size={24} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
                      <p className="text-primary font-medium mb-2">{achievement.organization}</p>
                      <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                      <Badge variant="outline">{achievement.year}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Notice */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-green-200 bg-green-50">
            <CardContent className="p-8">
              <div className="text-center">
                <Icon name="ShieldCheck" className="text-green-500 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Подтверждение подлинности
                </h3>
                <div className="space-y-4 text-muted-foreground text-left max-w-2xl mx-auto">
                  <p>
                    • Все представленные документы имеют официальное подтверждение
                  </p>
                  <p>
                    • Сертификаты и лицензии регулярно продлеваются в установленные сроки
                  </p>
                  <p>
                    • Информацию о действительности документов можно проверить в реестрах Минздрава
                  </p>
                  <p>
                    • Копии всех документов доступны для ознакомления на консультации
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Доверьте свою красоту профессионалу
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Высокая квалификация и многолетний опыт - гарантия отличного результата
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

export default Certificates;