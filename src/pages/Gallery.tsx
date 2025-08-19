import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = {
    rhinoplasty: {
      title: 'Ринопластика',
      items: [
        {
          id: 1,
          before: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
          after: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
          description: 'Коррекция горбинки носа',
          age: '28 лет',
          recovery: '10 дней'
        },
        {
          id: 2,
          before: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
          after: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
          description: 'Уменьшение кончика носа',
          age: '32 года',
          recovery: '8 дней'
        },
        {
          id: 3,
          before: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
          after: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
          description: 'Исправление искривления',
          age: '25 лет',
          recovery: '12 дней'
        }
      ]
    },
    breast: {
      title: 'Маммопластика',
      items: [
        {
          id: 4,
          before: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
          after: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
          description: 'Увеличение груди 275мл',
          age: '26 лет',
          recovery: '14 дней'
        },
        {
          id: 5,
          before: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
          after: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
          description: 'Подтяжка груди',
          age: '35 лет',
          recovery: '16 дней'
        }
      ]
    },
    body: {
      title: 'Пластика тела',
      items: [
        {
          id: 6,
          before: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
          after: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
          description: 'Липосакция живота',
          age: '30 лет',
          recovery: '7 дней'
        },
        {
          id: 7,
          before: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
          after: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
          description: 'Абдоминопластика',
          age: '38 лет',
          recovery: '21 день'
        }
      ]
    },
    face: {
      title: 'Пластика лица',
      items: [
        {
          id: 8,
          before: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
          after: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
          description: 'Блефаропластика',
          age: '45 лет',
          recovery: '7 дней'
        },
        {
          id: 9,
          before: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
          after: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
          description: 'Фейслифтинг',
          age: '52 года',
          recovery: '18 дней'
        }
      ]
    }
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
              <a href="/about" className="text-foreground hover:text-primary transition-colors">О враче</a>
              <a href="/gallery" className="text-primary font-semibold">Галерея</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Галерея результатов
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Реальные результаты наших пациентов. Фотографии до и после операций с согласия пациентов
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" className="text-green-500" size={16} />
              <span>Конфиденциальность</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Camera" className="text-blue-500" size={16} />
              <span>Профессиональные фото</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" className="text-purple-500" size={16} />
              <span>Реальные результаты</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="rhinoplasty" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="rhinoplasty">Ринопластика</TabsTrigger>
              <TabsTrigger value="breast">Грудь</TabsTrigger>
              <TabsTrigger value="body">Тело</TabsTrigger>
              <TabsTrigger value="face">Лицо</TabsTrigger>
            </TabsList>

            {Object.entries(galleryItems).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">{category.title}</h2>
                  <p className="text-muted-foreground">
                    Результаты операций с фотографиями до и после
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-2">
                          <div className="relative">
                            <img
                              src={item.before}
                              alt="До операции"
                              className="w-full h-48 object-cover"
                            />
                            <div className="absolute top-2 left-2">
                              <Badge variant="secondary" className="text-xs">
                                ДО
                              </Badge>
                            </div>
                          </div>
                          <div className="relative">
                            <img
                              src={item.after}
                              alt="После операции"
                              className="w-full h-48 object-cover"
                            />
                            <div className="absolute top-2 right-2">
                              <Badge className="text-xs bg-green-500">
                                ПОСЛЕ
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold mb-2">{item.description}</h3>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>Возраст: {item.age}</span>
                            <span>Восстановление: {item.recovery}</span>
                          </div>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                className="w-full mt-3"
                                onClick={() => setSelectedImage(item.after)}
                              >
                                <Icon name="ZoomIn" className="mr-2" size={16} />
                                Увеличить
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="text-center mb-2 font-semibold">До операции</h4>
                                  <img
                                    src={item.before}
                                    alt="До операции"
                                    className="w-full rounded-lg"
                                  />
                                </div>
                                <div>
                                  <h4 className="text-center mb-2 font-semibold">После операции</h4>
                                  <img
                                    src={item.after}
                                    alt="После операции"
                                    className="w-full rounded-lg"
                                  />
                                </div>
                              </div>
                              <div className="text-center mt-4">
                                <h3 className="text-lg font-semibold mb-2">{item.description}</h3>
                                <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                                  <span>Возраст пациента: {item.age}</span>
                                  <span>Период восстановления: {item.recovery}</span>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
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

      {/* Important Notice */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center">
                <Icon name="Info" className="text-blue-500 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Важная информация
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Все фотографии размещены с письменного согласия пациентов. 
                    Результаты индивидуальны и могут отличаться.
                  </p>
                  <p>
                    Фотографии сделаны в одинаковых условиях освещения и ракурса 
                    для объективной оценки результатов.
                  </p>
                  <p>
                    Окончательный результат оценивается через 6-12 месяцев после операции.
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
            Хотите увидеть больше результатов?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Запишитесь на консультацию, и мы покажем вам дополнительные примеры работ
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

export default Gallery;