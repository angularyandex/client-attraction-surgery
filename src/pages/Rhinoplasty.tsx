import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Rhinoplasty = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const rhinoplastyTypes = [
    {
      name: 'Закрытая ринопластика',
      description: 'Операция через внутренние разрезы без внешних рубцов',
      advantages: ['Нет видимых рубцов', 'Меньше отеков', 'Быстрое восстановление'],
      price: 'от 150 000 ₽',
      duration: '2-3 часа'
    },
    {
      name: 'Открытая ринопластика',
      description: 'Операция с разрезом на колумелле для лучшего доступа',
      advantages: ['Максимальный контроль', 'Сложные коррекции', 'Точность результата'],
      price: 'от 180 000 ₽',
      duration: '3-4 часа'
    },
    {
      name: 'Ультразвуковая ринопластика',
      description: 'Современная методика с использованием ультразвука',
      advantages: ['Минимальная травматичность', 'Быстрое заживление', 'Точная коррекция'],
      price: 'от 220 000 ₽',
      duration: '2-3 часа'
    }
  ];

  const recoveryStages = [
    { stage: 'День операции', description: 'Наложение гипсовой повязки', duration: '1 день' },
    { stage: '1-3 дня', description: 'Максимальные отеки и синяки', duration: '3 дня' },
    { stage: '7 дней', description: 'Снятие гипса и швов', duration: '1 неделя' },
    { stage: '2 недели', description: 'Уменьшение отеков на 70%', duration: '2 недели' },
    { stage: '1 месяц', description: 'Возвращение к обычной жизни', duration: '1 месяц' },
    { stage: '6-12 месяцев', description: 'Окончательный результат', duration: '6-12 месяцев' }
  ];

  const beforeAfterCases = [
    {
      id: 1,
      type: 'Коррекция горбинки',
      age: '28 лет',
      method: 'Закрытая ринопластика',
      recovery: '10 дней'
    },
    {
      id: 2,
      type: 'Уменьшение кончика',
      age: '32 года',
      method: 'Открытая ринопластика',
      recovery: '12 дней'
    },
    {
      id: 3,
      type: 'Исправление искривления',
      age: '25 лет',
      method: 'Ультразвуковая',
      recovery: '8 дней'
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
              <a href="/rhinoplasty" className="text-primary font-semibold">Ринопластика</a>
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
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ринопластика
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Коррекция формы носа для улучшения эстетики и функции дыхания. 
                Современные методики с минимальной травматичностью.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-500" size={20} />
                  <span>Без видимых рубцов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-500" size={20} />
                  <span>Быстрое восстановление</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-500" size={20} />
                  <span>Естественный результат</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg"
                alt="Ринопластика"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Rhinoplasty */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Виды ринопластики</h2>
            <p className="text-lg text-muted-foreground">
              Выбираем оптимальную методику для каждого пациента
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {rhinoplastyTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{type.name}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-lg font-bold">
                        {type.price}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{type.duration}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Преимущества:</h4>
                      <ul className="space-y-1">
                        {type.advantages.map((advantage, idx) => (
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

      {/* Recovery Timeline */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Этапы восстановления</h2>
            <p className="text-lg text-muted-foreground">
              Подробный план реабилитации после ринопластики
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {recoveryStages.map((stage, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">{stage.stage}</h3>
                        <p className="text-muted-foreground mb-2">{stage.description}</p>
                        <Badge variant="outline">{stage.duration}</Badge>
                      </div>
                      <div className="flex-shrink-0">
                        <Progress value={(index + 1) * 16.67} className="w-20" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Cases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Результаты операций</h2>
            <p className="text-lg text-muted-foreground">
              Примеры наших работ по ринопластике
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
                        alt="До операции"
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-red-500">ДО</Badge>
                    </div>
                    <div className="relative">
                      <img
                        src="/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg"
                        alt="После операции"
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-green-500">ПОСЛЕ</Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{case_item.type}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Возраст: {case_item.age}</p>
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

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Часто задаваемые вопросы</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Больно ли делать ринопластику?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Операция проводится под общим наркозом, поэтому во время процедуры вы ничего не почувствуете. 
                  После операции возможен дискомфорт, который легко контролируется обезболивающими препаратами.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Когда будет виден окончательный результат?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Предварительный результат виден через 2-3 недели, когда спадают основные отеки. 
                  Окончательный результат формируется в течение 6-12 месяцев.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Можно ли исправить дыхание одновременно?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Да, во время ринопластики можно одновременно исправить искривление носовой перегородки 
                  и другие проблемы, мешающие нормальному дыханию.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultation Dialog */}
      <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Консультация по ринопластике</DialogTitle>
            <DialogDescription>
              Запишитесь на консультацию для обсуждения вашего случая
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <Input placeholder="Ваше имя" />
            <Input placeholder="Телефон" />
            <Input placeholder="Email" />
            <Textarea placeholder="Опишите, что хотели бы изменить в форме носа" />
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
            Готовы изменить форму носа?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Запишитесь на консультацию и узнайте, какая методика подойдет именно вам
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

export default Rhinoplasty;