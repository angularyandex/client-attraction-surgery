import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const BeforeAfter = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'Все операции' },
    { id: 'rhinoplasty', name: 'Ринопластика' },
    { id: 'mammoplasty', name: 'Маммопластика' },
    { id: 'liposuction', name: 'Липосакция' },
    { id: 'facelift', name: 'Фейслифтинг' },
    { id: 'blepharoplasty', name: 'Блефаропластика' },
    { id: 'abdominoplasty', name: 'Абдоминопластика' }
  ];

  const beforeAfterCases = [
    {
      id: 1,
      category: 'rhinoplasty',
      title: 'Ринопластика - коррекция горбинки',
      age: '28 лет',
      method: 'Закрытая ринопластика',
      recovery: '10 дней',
      description: 'Удаление горбинки носа и коррекция кончика',
      beforeImage: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      afterImage: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      featured: true
    },
    {
      id: 2,
      category: 'mammoplasty',
      title: 'Увеличение груди - 275 мл',
      age: '26 лет',
      method: 'Силиконовые импланты',
      recovery: '14 дней',
      description: 'Увеличение груди с размера A до размера C',
      beforeImage: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      afterImage: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      featured: true
    },
    {
      id: 3,
      category: 'liposuction',
      title: 'Липосакция живота и боков',
      age: '35 лет',
      method: 'Ультразвуковая липосакция',
      recovery: '7 дней',
      description: 'Удаление 2.5 л жира из области живота и боков',
      beforeImage: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      afterImage: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      featured: false
    },
    {
      id: 4,
      category: 'facelift',
      title: 'SMAS-лифтинг лица',
      age: '52 года',
      method: 'SMAS-лифтинг',
      recovery: '18 дней',
      description: 'Комплексная подтяжка лица и шеи',
      beforeImage: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      afterImage: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      featured: true
    },
    {
      id: 5,
      category: 'blepharoplasty',
      title: 'Блефаропластика верхних век',
      age: '45 лет',
      method: 'Классическая блефаропластика',
      recovery: '7 дней',
      description: 'Удаление избытка кожи верхних век',
      beforeImage: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      afterImage: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      featured: false
    },
    {
      id: 6,
      category: 'abdominoplasty',
      title: 'Абдоминопластика',
      age: '38 лет',
      method: 'Полная абдоминопластика',
      recovery: '21 день',
      description: 'Подтяжка живота после родов',
      beforeImage: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      afterImage: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      featured: false
    },
    {
      id: 7,
      category: 'rhinoplasty',
      title: 'Ринопластика - уменьшение кончика',
      age: '32 года',
      method: 'Открытая ринопластика',
      recovery: '12 дней',
      description: 'Коррекция формы и размера кончика носа',
      beforeImage: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      afterImage: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      featured: false
    },
    {
      id: 8,
      category: 'mammoplasty',
      title: 'Подтяжка груди',
      age: '42 года',
      method: 'Мастопексия',
      recovery: '16 дней',
      description: 'Подтяжка груди без изменения размера',
      beforeImage: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      afterImage: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      featured: false
    },
    {
      id: 9,
      category: 'liposuction',
      title: 'Липосакция бедер',
      age: '29 лет',
      method: 'Лазерная липосакция',
      recovery: '5 дней',
      description: 'Коррекция внутренней поверхности бедер',
      beforeImage: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      afterImage: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      featured: false
    }
  ];

  const filteredCases = selectedCategory === 'all' 
    ? beforeAfterCases 
    : beforeAfterCases.filter(case_item => case_item.category === selectedCategory);

  const featuredCases = beforeAfterCases.filter(case_item => case_item.featured);

  const statistics = [
    { label: 'Операций проведено', value: '2000+' },
    { label: 'Довольных пациентов', value: '98%' },
    { label: 'Лет опыта', value: '15+' },
    { label: 'Видов операций', value: '25+' }
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
              <a href="/before-after" className="text-primary font-semibold">До и После</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-50 to-purple-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Результаты наших работ
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Реальные фотографии пациентов до и после операций. Все фото размещены 
            с письменного согласия пациентов.
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

      {/* Featured Cases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Лучшие результаты</h2>
            <p className="text-lg text-muted-foreground">
              Наиболее впечатляющие примеры наших работ
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCases.map((case_item) => (
              <Card key={case_item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img
                        src={case_item.beforeImage}
                        alt="До операции"
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-red-500">ДО</Badge>
                    </div>
                    <div className="relative">
                      <img
                        src={case_item.afterImage}
                        alt="После операции"
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-green-500">ПОСЛЕ</Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{case_item.title}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground mb-3">
                      <p>Возраст: {case_item.age}</p>
                      <p>Метод: {case_item.method}</p>
                      <p>Восстановление: {case_item.recovery}</p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">
                          <Icon name="ZoomIn" className="mr-2" size={16} />
                          Увеличить
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-center mb-2 font-semibold">До операции</h4>
                            <img
                              src={case_item.beforeImage}
                              alt="До операции"
                              className="w-full rounded-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-center mb-2 font-semibold">После операции</h4>
                            <img
                              src={case_item.afterImage}
                              alt="После операции"
                              className="w-full rounded-lg"
                            />
                          </div>
                        </div>
                        <div className="text-center mt-4">
                          <h3 className="text-lg font-semibold mb-2">{case_item.title}</h3>
                          <p className="text-muted-foreground mb-4">{case_item.description}</p>
                          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                            <span>Возраст: {case_item.age}</span>
                            <span>Метод: {case_item.method}</span>
                            <span>Восстановление: {case_item.recovery}</span>
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

      {/* All Cases with Filter */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Все результаты</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Полная галерея наших работ по категориям
            </p>
            <div className="max-w-md mx-auto">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите категорию" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((case_item) => (
              <Card key={case_item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img
                        src={case_item.beforeImage}
                        alt="До операции"
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-red-500">ДО</Badge>
                    </div>
                    <div className="relative">
                      <img
                        src={case_item.afterImage}
                        alt="После операции"
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-green-500">ПОСЛЕ</Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{case_item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{case_item.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-3">
                      <span>Возраст: {case_item.age}</span>
                      <span>Восстановление: {case_item.recovery}</span>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="w-full">
                          <Icon name="ZoomIn" className="mr-2" size={14} />
                          Подробнее
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-center mb-2 font-semibold">До операции</h4>
                            <img
                              src={case_item.beforeImage}
                              alt="До операции"
                              className="w-full rounded-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-center mb-2 font-semibold">После операции</h4>
                            <img
                              src={case_item.afterImage}
                              alt="После операции"
                              className="w-full rounded-lg"
                            />
                          </div>
                        </div>
                        <div className="text-center mt-4">
                          <h3 className="text-lg font-semibold mb-2">{case_item.title}</h3>
                          <p className="text-muted-foreground mb-4">{case_item.description}</p>
                          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                            <span>Возраст: {case_item.age}</span>
                            <span>Метод: {case_item.method}</span>
                            <span>Восстановление: {case_item.recovery}</span>
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

      {/* Important Notice */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-blue-200 bg-blue-50">
            <CardContent className="p-8">
              <div className="text-center">
                <Icon name="Info" className="text-blue-500 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Важная информация
                </h3>
                <div className="space-y-4 text-muted-foreground text-left max-w-2xl mx-auto">
                  <p>
                    • Все фотографии размещены с письменного согласия пациентов
                  </p>
                  <p>
                    • Результаты индивидуальны и могут отличаться в зависимости от особенностей организма
                  </p>
                  <p>
                    • Фотографии сделаны в одинаковых условиях освещения для объективной оценки
                  </p>
                  <p>
                    • Окончательный результат оценивается через 6-12 месяцев после операции
                  </p>
                  <p>
                    • Для получения подобного результата необходима индивидуальная консультация
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
            Хотите получить такой же результат?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Запишитесь на консультацию и узнайте, как мы можем помочь именно вам
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

export default BeforeAfter;