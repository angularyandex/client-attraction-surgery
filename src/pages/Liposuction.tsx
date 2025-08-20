import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const Liposuction = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedZones, setSelectedZones] = useState<string[]>([]);

  const liposuctionMethods = [
    {
      name: 'Классическая липосакция',
      description: 'Традиционный метод удаления жира',
      advantages: ['Проверенная методика', 'Эффективность', 'Доступная цена'],
      price: 'от 80 000 ₽',
      zones: '1-2 зоны'
    },
    {
      name: 'Ультразвуковая липосакция',
      description: 'Разрушение жира ультразвуком',
      advantages: ['Меньше травм', 'Подтяжка кожи', 'Точность'],
      price: 'от 120 000 ₽',
      zones: '2-3 зоны'
    },
    {
      name: 'Лазерная липосакция',
      description: 'Современная методика с лазером',
      advantages: ['Минимальная травматичность', 'Быстрое восстановление', 'Лифтинг-эффект'],
      price: 'от 150 000 ₽',
      zones: '1-3 зоны'
    }
  ];

  const bodyZones = [
    { name: 'Живот', price: 80000, popular: true },
    { name: 'Бока', price: 60000, popular: true },
    { name: 'Бедра', price: 70000, popular: true },
    { name: 'Ягодицы', price: 65000, popular: false },
    { name: 'Руки', price: 50000, popular: false },
    { name: 'Спина', price: 55000, popular: false },
    { name: 'Подбородок', price: 40000, popular: false },
    { name: 'Колени', price: 45000, popular: false }
  ];

  const beforeAfterCases = [
    {
      id: 1,
      zones: 'Живот + бока',
      volume: '2.5 л',
      method: 'Ультразвуковая',
      recovery: '5 дней'
    },
    {
      id: 2,
      zones: 'Бедра + ягодицы',
      volume: '3.2 л',
      method: 'Лазерная',
      recovery: '7 дней'
    },
    {
      id: 3,
      zones: 'Руки',
      volume: '1.1 л',
      method: 'Классическая',
      recovery: '3 дня'
    }
  ];

  const handleZoneChange = (zoneName: string, checked: boolean) => {
    if (checked) {
      setSelectedZones([...selectedZones, zoneName]);
    } else {
      setSelectedZones(selectedZones.filter(zone => zone !== zoneName));
    }
  };

  const calculateTotalPrice = () => {
    return selectedZones.reduce((total, zoneName) => {
      const zone = bodyZones.find(z => z.name === zoneName);
      return total + (zone?.price || 0);
    }, 0);
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
              <a href="/liposuction" className="text-primary font-semibold">Липосакция</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Консультация
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-teal-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Липосакция
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Удаление жировых отложений для коррекции фигуры. Современные методики 
                с минимальной травматичностью и быстрым восстановлением.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Zap" className="text-yellow-500" size={20} />
                  <span>Быстрый результат</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" className="text-green-500" size={20} />
                  <span>Безопасные методики</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-blue-500" size={20} />
                  <span>Короткий период восстановления</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg"
                alt="Липосакция"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Методы липосакции</h2>
            <p className="text-lg text-muted-foreground">
              Выбираем оптимальную методику для каждого случая
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {liposuctionMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{method.name}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-lg font-bold">
                        {method.price}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{method.zones}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Преимущества:</h4>
                      <ul className="space-y-1">
                        {method.advantages.map((advantage, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <Icon name="Check" className="text-green-500" size={16} />
                            <span>{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Zone Calculator */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Калькулятор стоимости</h2>
            <p className="text-lg text-muted-foreground">
              Выберите зоны для коррекции и рассчитайте стоимость
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Выберите зоны коррекции</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bodyZones.map((zone) => (
                      <div key={zone.name} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            checked={selectedZones.includes(zone.name)}
                            onCheckedChange={(checked) => handleZoneChange(zone.name, checked as boolean)}
                          />
                          <span className="font-medium">{zone.name}</span>
                          {zone.popular && (
                            <Badge variant="secondary" className="text-xs">Популярно</Badge>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {zone.price.toLocaleString()} ₽
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Расчет стоимости</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {selectedZones.length > 0 ? (
                      <>
                        <div className="space-y-2">
                          <h4 className="font-semibold">Выбранные зоны:</h4>
                          {selectedZones.map((zoneName) => {
                            const zone = bodyZones.find(z => z.name === zoneName);
                            return (
                              <div key={zoneName} className="flex justify-between text-sm">
                                <span>{zoneName}</span>
                                <span>{zone?.price.toLocaleString()} ₽</span>
                              </div>
                            );
                          })}
                        </div>
                        <div className="border-t pt-4">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">Итого:</span>
                            <span className="text-2xl font-bold text-primary">
                              {calculateTotalPrice().toLocaleString()} ₽
                            </span>
                          </div>
                        </div>
                        {selectedZones.length > 1 && (
                          <div className="p-3 bg-green-50 rounded-lg">
                            <p className="text-sm text-green-800">
                              Скидка 10% при операции на 2+ зонах: 
                              <span className="font-semibold ml-1">
                                -{(calculateTotalPrice() * 0.1).toLocaleString()} ₽
                              </span>
                            </p>
                          </div>
                        )}
                      </>
                    ) : (
                      <p className="text-muted-foreground text-center py-8">
                        Выберите зоны для расчета стоимости
                      </p>
                    )}
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Записаться на консультацию
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Результаты липосакции</h2>
            <p className="text-lg text-muted-foreground">
              Примеры наших работ с указанием объема удаленного жира
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {beforeAfterCases.map((case_item) => (
              <Card key={case_item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img
                        src="/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg"
                        alt="До липосакции"
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-red-500">ДО</Badge>
                    </div>
                    <div className="relative">
                      <img
                        src="/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg"
                        alt="После липосакции"
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-green-500">ПОСЛЕ</Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{case_item.zones}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Удалено жира: {case_item.volume}</p>
                      <p>Метод: {case_item.method}</p>
                      <p>Восстановление: {case_item.recovery}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Dialog */}
      <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Консультация по липосакции</DialogTitle>
            <DialogDescription>
              Запишитесь на консультацию для определения оптимальных зон коррекции
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <Input placeholder="Ваше имя" />
            <Input placeholder="Телефон" />
            <Input placeholder="Email" />
            <Textarea placeholder="Какие зоны хотели бы скорректировать?" />
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setIsConsultationOpen(false)}
            >
              Записаться на консультацию
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готовы изменить свою фигуру?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Запишитесь на консультацию и узнайте, какие зоны можно скорректировать
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

export default Liposuction;