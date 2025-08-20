import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Clinic = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const clinicFeatures = [
    {
      title: 'Операционные блоки',
      description: 'Современные операционные с ламинарным потоком воздуха',
      details: [
        '5 операционных залов класса А',
        'Система очистки воздуха HEPA',
        'Контроль температуры и влажности',
        'Интегрированное медицинское оборудование',
        'Система видеозаписи операций'
      ],
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg'
    },
    {
      title: 'Палаты комфорт-класса',
      description: 'Комфортабельные палаты для восстановления',
      details: [
        'Одно- и двухместные палаты',
        'Индивидуальный санузел',
        'Кондиционирование воздуха',
        'Wi-Fi и телевидение',
        'Система вызова медперсонала'
      ],
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg'
    },
    {
      title: 'Диагностическое оборудование',
      description: 'Полный комплекс диагностических возможностей',
      details: [
        'УЗИ экспертного класса',
        'Цифровая рентгенография',
        'Лабораторная диагностика',
        '3D сканирование и моделирование',
        'Система PACS для хранения изображений'
      ],
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg'
    },
    {
      title: 'Реабилитационный центр',
      description: 'Комплексная программа восстановления',
      details: [
        'Физиотерапевтические процедуры',
        'Лимфодренажный массаж',
        'Аппаратная косметология',
        'Психологическая поддержка',
        'Индивидуальные программы'
      ],
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg'
    }
  ];

  const staff = [
    {
      name: 'Доктор Иванов А.М.',
      position: 'Главный врач, пластический хирург',
      experience: '15 лет',
      specialization: 'Ринопластика, маммопластика, фейслифтинг',
      education: 'РНИМУ им. Н.И. Пирогова, кандидат медицинских наук',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg'
    },
    {
      name: 'Доктор Петрова Е.В.',
      position: 'Анестезиолог-реаниматолог',
      experience: '12 лет',
      specialization: 'Анестезиологическое обеспечение пластических операций',
      education: 'МГМУ им. И.М. Сеченова, высшая категория',
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg'
    },
    {
      name: 'Сидорова М.А.',
      position: 'Старшая операционная медсестра',
      experience: '10 лет',
      specialization: 'Ассистирование при пластических операциях',
      education: 'Медицинский колледж, высшая категория',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg'
    }
  ];

  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Система менеджмента качества',
      issuer: 'Международная организация по стандартизации',
      validUntil: '2025'
    },
    {
      name: 'Лицензия Минздрава',
      description: 'Медицинская деятельность',
      issuer: 'Министерство здравоохранения РФ',
      validUntil: '2026'
    },
    {
      name: 'JCI Accreditation',
      description: 'Международная аккредитация качества',
      issuer: 'Joint Commission International',
      validUntil: '2025'
    },
    {
      name: 'РОАПХ',
      description: 'Член профессионального сообщества',
      issuer: 'Российское общество пластических хирургов',
      validUntil: 'Бессрочно'
    }
  ];

  const virtualTour = [
    {
      area: 'Приемная и регистратура',
      description: 'Комфортная зона ожидания с современным дизайном',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg'
    },
    {
      area: 'Кабинет консультаций',
      description: 'Уютный кабинет для приватных консультаций',
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg'
    },
    {
      area: 'Операционная',
      description: 'Современная операционная с новейшим оборудованием',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg'
    },
    {
      area: 'Палата восстановления',
      description: 'Комфортабельная палата для послеоперационного периода',
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg'
    },
    {
      area: 'Процедурный кабинет',
      description: 'Кабинет для перевязок и процедур',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg'
    },
    {
      area: 'Зона отдыха',
      description: 'Комфортная зона для сопровождающих',
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg'
    }
  ];

  const services = [
    {
      service: 'Консьерж-сервис',
      description: 'Персональное сопровождение на всех этапах',
      included: true
    },
    {
      service: 'Трансфер',
      description: 'Доставка в клинику и обратно',
      included: false
    },
    {
      service: 'Переводчик',
      description: 'Услуги переводчика для иностранных пациентов',
      included: false
    },
    {
      service: 'Размещение',
      description: 'Помощь в бронировании отеля',
      included: false
    },
    {
      service: 'Питание',
      description: 'Диетическое питание в период восстановления',
      included: true
    },
    {
      service: 'Психологическая поддержка',
      description: 'Консультации психолога до и после операции',
      included: true
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
              <a href="/clinic" className="text-primary font-semibold">О клинике</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            О нашей клинике
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Современная клиника пластической хирургии с международными стандартами качества. 
            Комфорт, безопасность и индивидуальный подход к каждому пациенту.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">2018</div>
              <div className="text-sm text-muted-foreground">Год основания</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">1500м²</div>
              <div className="text-sm text-muted-foreground">Площадь клиники</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">25</div>
              <div className="text-sm text-muted-foreground">Сотрудников</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Операционных</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Оснащение клиники</h2>
            <p className="text-lg text-muted-foreground">
              Современная инфраструктура для комфорта и безопасности пациентов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {clinicFeatures.map((feature, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <Icon name="Check" className="text-green-500" size={16} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Виртуальная экскурсия</h2>
            <p className="text-lg text-muted-foreground">
              Познакомьтесь с нашей клиникой не выходя из дома
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {virtualTour.map((area, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={area.image}
                    alt={area.area}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="secondary" size="sm">
                          <Icon name="ZoomIn" className="mr-2" size={16} />
                          Увеличить
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <img
                          src={area.image}
                          alt={area.area}
                          className="w-full rounded-lg"
                        />
                        <div className="text-center mt-4">
                          <h3 className="text-lg font-semibold mb-2">{area.area}</h3>
                          <p className="text-muted-foreground">{area.description}</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{area.area}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Наша команда</h2>
            <p className="text-lg text-muted-foreground">
              Высококвалифицированные специалисты с многолетним опытом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Clock" size={16} />
                      <span>Опыт: {member.experience}</span>
                    </div>
                    <p><span className="font-medium">Специализация:</span> {member.specialization}</p>
                    <p><span className="font-medium">Образование:</span> {member.education}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Лицензии и сертификаты</h2>
            <p className="text-lg text-muted-foreground">
              Официальные разрешения и международные сертификаты качества
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon name="Award" className="mx-auto mb-4 text-primary" size={48} />
                  <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    <Badge variant="secondary" className="text-xs">
                      До {cert.validUntil}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Дополнительные услуги</h2>
            <p className="text-lg text-muted-foreground">
              Полный спектр услуг для комфорта наших пациентов
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <Icon 
                      name={service.included ? "CheckCircle" : "Circle"} 
                      className={service.included ? "text-green-500" : "text-gray-300"} 
                      size={20} 
                    />
                    <div>
                      <h4 className="font-semibold">{service.service}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  <Badge variant={service.included ? "default" : "outline"}>
                    {service.included ? "Включено" : "Доп. услуга"}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Расположение</h2>
            <p className="text-lg text-muted-foreground">
              Удобное расположение в центре Москвы
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="text-primary" size={24} />
                    <div>
                      <h4 className="font-semibold">Адрес</h4>
                      <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 15, стр. 1</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Train" className="text-primary" size={24} />
                    <div>
                      <h4 className="font-semibold">Метро</h4>
                      <p className="text-muted-foreground">Тверская, Пушкинская, Чеховская (5 мин пешком)</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Car" className="text-primary" size={24} />
                    <div>
                      <h4 className="font-semibold">Парковка</h4>
                      <p className="text-muted-foreground">Подземная парковка, 50 мест</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" className="text-primary" size={24} />
                    <div>
                      <h4 className="font-semibold">Режим работы</h4>
                      <p className="text-muted-foreground">Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="MapPin" className="text-blue-500 mx-auto mb-4" size={64} />
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">Интерактивная карта</h3>
                    <p className="text-blue-600">г. Москва, ул. Тверская, д. 15</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Посетите нашу клинику
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Запишитесь на экскурсию или консультацию и оцените уровень нашего сервиса
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться на консультацию
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Icon name="MapPin" className="mr-2" size={20} />
              Заказать экскурсию
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clinic;