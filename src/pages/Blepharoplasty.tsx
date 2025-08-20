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

const Blepharoplasty = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const blepharoplastyTypes = [
    {
      name: 'Верхняя блефаропластика',
      description: 'Коррекция верхних век',
      problems: ['Нависающие веки', 'Избыток кожи', 'Усталый взгляд'],
      price: 80000,
      duration: '1-1.5 часа',
      recovery: '5-7 дней'
    },
    {
      name: 'Нижняя блефаропластика',
      description: 'Коррекция нижних век',
      problems: ['Мешки под глазами', 'Грыжи век', 'Темные круги'],
      price: 90000,
      duration: '1-1.5 часа',
      recovery: '7-10 дней'
    },
    {
      name: 'Круговая блефаропластика',
      description: 'Комплексная коррекция верхних и нижних век',
      problems: ['Комплексные проблемы', 'Возрастные изменения', 'Максимальный эффект'],
      price: 150000,
      duration: '2-2.5 часа',
      recovery: '7-14 дней'
    }
  ];

  const techniques = [
    {
      name: 'Классическая блефаропластика',
      description: 'Традиционная методика с разрезами',
      advantages: ['Максимальный эффект', 'Удаление избытка кожи', 'Долговременный результат'],
      suitable: 'При значительных изменениях'
    },
    {
      name: 'Трансконъюнктивальная',
      description: 'Операция через внутреннюю поверхность века',
      advantages: ['Нет внешних рубцов', 'Быстрое заживление', 'Минимальная травматичность'],
      suitable: 'При грыжах без избытка кожи'
    },
    {
      name: 'Лазерная блефаропластика',
      description: 'Использование лазера для разрезов',
      advantages: ['Точность', 'Меньше кровотечений', 'Быстрое заживление'],
      suitable: 'Для всех типов коррекции'
    }
  ];

  const beforeAfterCases = [
    {
      id: 1,
      type: 'Верхняя блефаропластика',
      age: '45 лет',
      problem: 'Нависающие веки',
      result: 'Открытый взгляд'
    },
    {
      id: 2,
      type: 'Нижняя блефаропластика',
      age: '38 лет',
      problem: 'Мешки под глазами',
      result: 'Свежий вид'
    },
    {
      id: 3,
      type: 'Круговая блефаропластика',
      age: '52 года',
      problem: 'Комплексные изменения',
      result: 'Омоложение на 10 лет'
    }
  ];

  const handleTypeChange = (typeName: string, checked: boolean) => {
    if (checked) {
      setSelectedTypes([...selectedTypes, typeName]);
    } else {
      setSelectedTypes(selectedTypes.filter(type => type !== typeName));
    }
  };

  const calculateTotalPrice = () => {
    return selectedTypes.reduce((total, typeName) => {
      const type = blepharoplastyTypes.find(t => t.name === typeName);
      return total + (type?.price || 0);
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
              <a href="/blepharoplasty" className="text-primary font-semibold">Блефаропластика</a>
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
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Блефаропластика
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Коррекция век для устранения возрастных изменений и создания 
                открытого, молодого взгляда. Минимальная травматичность и быстрое восстановление.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Eye" className="text-blue-500" size={20} />
                  <span>Открытый взгляд</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-green-500" size={20} />
                  <span>Быстрое восстановление</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Sparkles" className="text-purple-500" size={20} />
                  <span>Естественный результат</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg"
                alt="Блефаропластика"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Blepharoplasty */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Виды блефаропластики</h2>
            <p className="text-lg text-muted-foreground">
              Выбираем оптимальный вид коррекции в зависимости от проблем
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blepharoplastyTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{type.name}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Длительность:</span>
                        <p className="font-medium">{type.duration}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Восстановление:</span>
                        <p className="font-medium">{type.recovery}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Решаемые проблемы:</h4>
                      <ul className="space-y-1">
                        {type.problems.map((problem, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <Icon name="Check" className="text-green-500" size={16} />
                            <span>{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t">
                      <Badge variant="secondary" className="text-lg font-bold w-full justify-center">
                        {type.price.toLocaleString()} ₽
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Методики проведения</h2>
            <p className="text-lg text-muted-foreground">
              Современные техники для достижения оптимального результата
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {techniques.map((technique, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{technique.name}</CardTitle>
                  <CardDescription>{technique.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Преимущества:</h4>
                      <ul className="space-y-1">
                        {technique.advantages.map((advantage, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <Icon name="Plus" className="text-blue-500" size={16} />
                            <span>{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <span className="font-semibold">Подходит:</span> {technique.suitable}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Калькулятор стоимости</h2>
            <p className="text-lg text-muted-foreground">
              Выберите необходимые виды коррекции
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">Выберите виды коррекции:</h3>
                    <div className="space-y-4">
                      {blepharoplastyTypes.map((type) => (
                        <div key={type.name} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Checkbox
                              checked={selectedTypes.includes(type.name)}
                              onCheckedChange={(checked) => handleTypeChange(type.name, checked as boolean)}
                            />
                            <div>
                              <p className="font-medium">{type.name}</p>
                              <p className="text-sm text-muted-foreground">{type.description}</p>
                            </div>
                          </div>
                          <span className="text-sm font-medium">
                            {type.price.toLocaleString()} ₽
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {selectedTypes.length > 0 && (
                    <div className="border-t pt-4">
                      <div className="space-y-2">
                        {selectedTypes.map((typeName) => {
                          const type = blepharoplastyTypes.find(t => t.name === typeName);
                          return (
                            <div key={typeName} className="flex justify-between text-sm">
                              <span>{typeName}</span>
                              <span>{type?.price.toLocaleString()} ₽</span>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex justify-between items-center mt-4 pt-2 border-t">
                        <span className="font-semibold">Итого:</span>
                        <span className="text-2xl font-bold text-primary">
                          {calculateTotalPrice().toLocaleString()} ₽
                        </span>
                      </div>
                      {selectedTypes.length > 1 && (
                        <div className="mt-4 p-3 bg-green-50 rounded-lg">
                          <p className="text-sm text-green-800">
                            При комбинированной операции скидка 10%: 
                            <span className="font-semibold ml-1">
                              -{(calculateTotalPrice() * 0.1).toLocaleString()} ₽
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Записаться на консультацию
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Результаты блефаропластики</h2>
            <p className="text-lg text-muted-foreground">
              Примеры наших работ по коррекции век
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
                        alt="До блефаропластики"
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-red-500">ДО</Badge>
                    </div>
                    <div className="relative">
                      <img
                        src="/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg"
                        alt="После блефаропластики"
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-green-500">ПОСЛЕ</Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{case_item.type}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Возраст: {case_item.age}</p>
                      <p>Проблема: {case_item.problem}</p>
                      <p>Результат: {case_item.result}</p>
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
            <DialogTitle>Консультация по блефаропластике</DialogTitle>
            <DialogDescription>
              Запишитесь на консультацию для определения оптимального вида коррекции век
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <Input placeholder="Ваше имя" />
            <Input placeholder="Телефон" />
            <Input placeholder="Email" />
            <Textarea placeholder="Какие проблемы с веками вас беспокоят?" />
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
            Откройте свой взгляд
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Запишитесь на консультацию и узнайте, как блефаропластика может изменить ваш взгляд
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

export default Blepharoplasty;