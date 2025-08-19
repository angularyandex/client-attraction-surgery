import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Prices = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const priceCategories = {
    face: {
      title: 'Пластика лица',
      services: [
        {
          name: 'Ринопластика',
          basePrice: 150000,
          maxPrice: 250000,
          description: 'Коррекция формы носа',
          includes: ['Анестезия', 'Операция', 'Перевязки', 'Контрольные осмотры'],
          duration: '2-3 часа',
          recovery: '7-14 дней'
        },
        {
          name: 'Блефаропластика верхних век',
          basePrice: 80000,
          maxPrice: 120000,
          description: 'Коррекция верхних век',
          includes: ['Анестезия', 'Операция', 'Перевязки', 'Контрольные осмотры'],
          duration: '1-1.5 часа',
          recovery: '5-7 дней'
        },
        {
          name: 'Блефаропластика нижних век',
          basePrice: 90000,
          maxPrice: 130000,
          description: 'Коррекция нижних век',
          includes: ['Анестезия', 'Операция', 'Перевязки', 'Контрольные осмотры'],
          duration: '1-1.5 часа',
          recovery: '5-7 дней'
        },
        {
          name: 'Круговая блефаропластика',
          basePrice: 150000,
          maxPrice: 200000,
          description: 'Коррекция верхних и нижних век',
          includes: ['Анестезия', 'Операция', 'Перевязки', 'Контрольные осмотры'],
          duration: '2-2.5 часа',
          recovery: '7-10 дней'
        },
        {
          name: 'Фейслифтинг',
          basePrice: 250000,
          maxPrice: 400000,
          description: 'Подтяжка лица',
          includes: ['Анестезия', 'Операция', 'Перевязки', 'Контрольные осмотры', 'Компрессионное белье'],
          duration: '3-5 часов',
          recovery: '14-21 день'
        },
        {
          name: 'Отопластика',
          basePrice: 70000,
          maxPrice: 100000,
          description: 'Коррекция ушных раковин',
          includes: ['Анестезия', 'Операция', 'Перевязки', 'Контрольные осмотры'],
          duration: '1-2 часа',
          recovery: '7-10 дней'
        }
      ]
    },
    breast: {
      title: 'Пластика груди',
      services: [
        {
          name: 'Увеличение груди',
          basePrice: 200000,
          maxPrice: 300000,
          description: 'Маммопластика с имплантами',
          includes: ['Анестезия', 'Импланты', 'Операция', 'Перевязки', 'Контрольные осмотры', 'Компрессионное белье'],
          duration: '2-3 часа',
          recovery: '7-14 дней'
        },
        {
          name: 'Подтяжка груди',
          basePrice: 180000,
          maxPrice: 250000,
          description: 'Мастопексия',
          includes: ['Анестезия', 'Операция', 'Перевязки', 'Контрольные осмотры', 'Компрессионное белье'],
          duration: '2-4 часа',
          recovery: '10-14 дней'
        },
        {
          name: 'Уменьшение груди',
          basePrice: 220000,
          maxPrice: 320000,
          description: 'Редукционная маммопластика',
          includes: ['Анестезия', 'Операция', 'Перевязки', 'Контрольные осмотры', 'Компрессионное белье'],
          duration: '3-4 часа',
          recovery: '14-21 день'
        },
        {
          name: 'Коррекция ареол',
          basePrice: 60000,
          maxPrice: 90000,
          description: 'Изменение размера и формы ареол',
          includes: ['Анестезия', 'Операция', 'Перевязки', 'Контрольные осмотры'],
          duration: '1-1.5 часа',
          recovery: '5-7 дней'
        }
      ]
    },
    body: {
      title: 'Пластика тела',
      services: [
        {
          name: 'Липосакция (1 зона)',
          basePrice: 80000,
          maxPrice: 120000,
          description: 'Удаление жира в одной зоне',
          includes: ['Анестезия', 'Операция', 'Перевязки', 'Контрольные осмотры', 'Компрессионное белье'],
          duration: '1-2 часа',
          recovery: '5-10 дней'
        },
        {
          name: 'Липосакция (2-3 зоны)',
          basePrice: 150000,
          maxPrice: 200000,
          description: 'Удаление жира в нескольких зонах',
          includes: ['Анестезия', 'Операция', 'Перевязки', 'Контрольные осмотры', 'Компрессионное белье'],
          duration: '2-3 часа',
          recovery: '7-14 дней'
        },
        {
          name: 'Абдоминопластика',
          basePrice: 180000,
          maxPrice: 280000,
          description: 'Подтяжка живота',
          includes: ['Анестезия', 'Операция', 'Перевязки', 'Контрольные осмотры', 'Компрессионное белье'],
          duration: '2-4 часа',
          recovery: '14-21 день'
        },
        {
          name: 'Бразильская подтяжка ягодиц',
          basePrice: 250000,
          maxPrice: 350000,
          description: 'Липофилинг ягодиц',
          includes: ['Анестезия', 'Операция', 'Перевязки', 'Контрольные осмотры', 'Компрессионное белье'],
          duration: '3-4 часа',
          recovery: '14-21 день'
        },
        {
          name: 'Подтяжка рук',
          basePrice: 120000,
          maxPrice: 180000,
          description: 'Брахиопластика',
          includes: ['Анестезия', 'Операция', 'Перевязки', 'Контрольные осмотры', 'Компрессионное белье'],
          duration: '2-3 часа',
          recovery: '10-14 дней'
        },
        {
          name: 'Подтяжка бедер',
          basePrice: 150000,
          maxPrice: 220000,
          description: 'Феморопластика',
          includes: ['Анестезия', 'Операция', 'Перевязки', 'Контрольные осмотры', 'Компрессионное белье'],
          duration: '2-3 часа',
          recovery: '14-21 день'
        }
      ]
    }
  };

  const additionalServices = [
    { name: 'Консультация хирурга', price: 3000 },
    { name: 'Повторная консультация', price: 1500 },
    { name: 'Анализы (базовый комплекс)', price: 8000 },
    { name: 'Анализы (расширенный комплекс)', price: 15000 },
    { name: 'Компрессионное белье', price: 5000 },
    { name: 'Дополнительная перевязка', price: 2000 },
    { name: 'Снятие швов', price: 1500 }
  ];

  const paymentOptions = [
    {
      title: 'Единовременная оплата',
      discount: '5%',
      description: 'Скидка при полной предоплате',
      icon: 'CreditCard'
    },
    {
      title: 'Рассрочка 0%',
      discount: '6 месяцев',
      description: 'Без переплат и процентов',
      icon: 'Calendar'
    },
    {
      title: 'Кредит',
      discount: 'до 36 месяцев',
      description: 'Партнерство с банками',
      icon: 'Building'
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
              <a href="/about" className="text-foreground hover:text-primary transition-colors">О враче</a>
              <a href="/prices" className="text-primary font-semibold">Цены</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Цены на услуги
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Прозрачное ценообразование без скрытых платежей. Все цены включают анестезию, операцию и послеоперационное наблюдение
          </p>
          <Dialog open={isCalculatorOpen} onOpenChange={setIsCalculatorOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Icon name="Calculator" className="mr-2" size={20} />
                Калькулятор стоимости
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </section>

      {/* Prices Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="face" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="face">Лицо</TabsTrigger>
              <TabsTrigger value="breast">Грудь</TabsTrigger>
              <TabsTrigger value="body">Тело</TabsTrigger>
            </TabsList>

            {Object.entries(priceCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">{category.title}</h2>
                </div>
                <div className="space-y-6">
                  {category.services.map((service, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="grid lg:grid-cols-3 gap-6">
                          <div className="lg:col-span-2">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                                <p className="text-muted-foreground mb-3">{service.description}</p>
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                  <div className="flex items-center space-x-1">
                                    <Icon name="Clock" size={16} />
                                    <span>{service.duration}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Icon name="Calendar" size={16} />
                                    <span>{service.recovery}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-primary">
                                  от {service.basePrice.toLocaleString()} ₽
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  до {service.maxPrice.toLocaleString()} ₽
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">В стоимость включено:</h4>
                              <div className="flex flex-wrap gap-2">
                                {service.includes.map((item, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    <Icon name="Check" className="mr-1" size={12} />
                                    {item}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center space-y-3">
                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                              Записаться
                            </Button>
                            <Button variant="outline" className="w-full">
                              Подробнее
                            </Button>
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

      {/* Additional Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Дополнительные услуги</h2>
            <p className="text-lg text-muted-foreground">
              Сопутствующие услуги и обследования
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {additionalServices.map((service, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between py-3">
                        <span className="font-medium">{service.name}</span>
                        <span className="font-bold text-lg">{service.price.toLocaleString()} ₽</span>
                      </div>
                      {index < additionalServices.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Варианты оплаты</h2>
            <p className="text-lg text-muted-foreground">
              Выберите удобный способ оплаты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {paymentOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon name={option.icon as any} className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <div className="text-2xl font-bold text-primary mb-2">{option.discount}</div>
                  <p className="text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-blue-200">
            <CardContent className="p-8">
              <div className="text-center">
                <Icon name="Info" className="text-blue-500 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Важная информация о ценах
                </h3>
                <div className="space-y-4 text-muted-foreground text-left max-w-2xl mx-auto">
                  <p>
                    • Окончательная стоимость определяется на консультации в зависимости от сложности операции
                  </p>
                  <p>
                    • Все цены включают анестезию, операцию, перевязки и контрольные осмотры в течение месяца
                  </p>
                  <p>
                    • При необходимости дополнительных процедур стоимость обсуждается отдельно
                  </p>
                  <p>
                    • Возможна оплата в рассрочку без процентов на срок до 6 месяцев
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Price Calculator Dialog */}
      <Dialog open={isCalculatorOpen} onOpenChange={setIsCalculatorOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Калькулятор стоимости</DialogTitle>
            <DialogDescription>
              Получите предварительную оценку стоимости операции
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите услугу" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rhinoplasty">Ринопластика</SelectItem>
                <SelectItem value="mammoplasty">Увеличение груди</SelectItem>
                <SelectItem value="liposuction">Липосакция</SelectItem>
                <SelectItem value="facelift">Фейслифтинг</SelectItem>
                <SelectItem value="blepharoplasty">Блефаропластика</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Ваш возраст" type="number" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Сложность операции" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="simple">Простая</SelectItem>
                <SelectItem value="medium">Средняя</SelectItem>
                <SelectItem value="complex">Сложная</SelectItem>
              </SelectContent>
            </Select>
            {calculatedPrice > 0 && (
              <div className="p-4 bg-primary/10 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-1">Предварительная стоимость:</p>
                <p className="text-2xl font-bold text-primary">{calculatedPrice.toLocaleString()} ₽</p>
              </div>
            )}
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setCalculatedPrice(150000)}
            >
              Рассчитать стоимость
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Prices;