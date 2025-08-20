import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Financing = () => {
  const [loanAmount, setLoanAmount] = useState([200000]);
  const [loanTerm, setLoanTerm] = useState([12]);
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  const paymentOptions = [
    {
      title: 'Единовременная оплата',
      description: 'Полная предоплата операции',
      discount: '5%',
      icon: 'CreditCard',
      benefits: [
        'Скидка 5% от стоимости операции',
        'Приоритетная запись на удобное время',
        'Бесплатные контрольные осмотры в течение года',
        'Гарантия на результат'
      ],
      color: 'bg-green-500'
    },
    {
      title: 'Рассрочка 0%',
      description: 'Беспроцентная рассрочка до 12 месяцев',
      discount: '0%',
      icon: 'Calendar',
      benefits: [
        'Без переплат и скрытых комиссий',
        'Гибкий график платежей',
        'Минимальный пакет документов',
        'Быстрое оформление'
      ],
      color: 'bg-blue-500'
    },
    {
      title: 'Банковский кредит',
      description: 'Кредит от банков-партнеров',
      discount: 'до 36 мес',
      icon: 'Building',
      benefits: [
        'Срок кредитования до 36 месяцев',
        'Ставка от 9.9% годовых',
        'Решение за 15 минут',
        'Без справок о доходах'
      ],
      color: 'bg-purple-500'
    }
  ];

  const bankPartners = [
    {
      name: 'Сбербанк',
      rate: '9.9%',
      term: 'до 36 мес',
      amount: 'до 2 млн ₽',
      features: ['Без справок', 'Быстрое решение', 'Льготные условия']
    },
    {
      name: 'ВТБ',
      rate: '10.5%',
      term: 'до 24 мес',
      amount: 'до 1.5 млн ₽',
      features: ['Онлайн заявка', 'Гибкие условия', 'Досрочное погашение']
    },
    {
      name: 'Альфа-Банк',
      rate: '11.9%',
      term: 'до 36 мес',
      amount: 'до 3 млн ₽',
      features: ['100 дней без %', 'Кэшбэк', 'Персональные условия']
    },
    {
      name: 'Тинькофф',
      rate: '12.9%',
      term: 'до 24 мес',
      amount: 'до 1 млн ₽',
      features: ['Мгновенное решение', 'Без визита в банк', 'Удобное приложение']
    }
  ];

  const calculateMonthlyPayment = (amount: number, term: number, rate: number = 0) => {
    if (rate === 0) return amount / term;
    const monthlyRate = rate / 100 / 12;
    return (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
  };

  const procedures = [
    { name: 'Ринопластика', price: 150000 },
    { name: 'Маммопластика', price: 200000 },
    { name: 'Липосакция', price: 100000 },
    { name: 'Фейслифтинг', price: 300000 },
    { name: 'Блефаропластика', price: 80000 },
    { name: 'Абдоминопластика', price: 250000 }
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
              <a href="/prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
              <a href="/financing" className="text-primary font-semibold">Финансирование</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Финансирование операций
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Гибкие варианты оплаты для каждого пациента. Рассрочка без переплат, 
            банковские кредиты и специальные предложения.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" className="text-green-500" size={16} />
              <span>Рассрочка 0%</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" className="text-green-500" size={16} />
              <span>Быстрое оформление</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" className="text-green-500" size={16} />
              <span>Без скрытых комиссий</span>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Варианты оплаты</h2>
            <p className="text-lg text-muted-foreground">
              Выберите наиболее удобный способ оплаты операции
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {paymentOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 ${option.color}`}></div>
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={option.icon as any} className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                  <Badge variant="secondary" className="text-lg font-bold mt-2">
                    {option.discount}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <Icon name="Check" className="text-green-500" size={16} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Calculator */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Калькулятор рассрочки</h2>
            <p className="text-lg text-muted-foreground">
              Рассчитайте ежемесячный платеж для вашей операции
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Параметры рассрочки</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Сумма операции: {loanAmount[0].toLocaleString()} ₽
                    </label>
                    <Slider
                      value={loanAmount}
                      onValueChange={setLoanAmount}
                      max={500000}
                      min={50000}
                      step={10000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>50 000 ₽</span>
                      <span>500 000 ₽</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Срок рассрочки: {loanTerm[0]} мес
                    </label>
                    <Slider
                      value={loanTerm}
                      onValueChange={setLoanTerm}
                      max={36}
                      min={3}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>3 мес</span>
                      <span>36 мес</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Выберите операцию</label>
                    <Select onValueChange={(value) => setLoanAmount([parseInt(value)])}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите операцию" />
                      </SelectTrigger>
                      <SelectContent>
                        {procedures.map((procedure) => (
                          <SelectItem key={procedure.name} value={procedure.price.toString()}>
                            {procedure.name} - {procedure.price.toLocaleString()} ₽
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Расчет платежей</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Рассрочка 0%</h4>
                      <div className="text-2xl font-bold text-green-600">
                        {calculateMonthlyPayment(loanAmount[0], loanTerm[0]).toLocaleString()} ₽/мес
                      </div>
                      <p className="text-sm text-green-700">Без переплат</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Кредит 12%</h4>
                      <div className="text-2xl font-bold text-blue-600">
                        {calculateMonthlyPayment(loanAmount[0], loanTerm[0], 12).toLocaleString()} ₽/мес
                      </div>
                      <p className="text-sm text-blue-700">
                        Переплата: {(calculateMonthlyPayment(loanAmount[0], loanTerm[0], 12) * loanTerm[0] - loanAmount[0]).toLocaleString()} ₽
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Сумма операции:</span>
                        <p className="font-semibold">{loanAmount[0].toLocaleString()} ₽</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Срок:</span>
                        <p className="font-semibold">{loanTerm[0]} месяцев</p>
                      </div>
                    </div>
                  </div>
                  <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Подать заявку
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Банки-партнеры</h2>
            <p className="text-lg text-muted-foreground">
              Кредитование от ведущих банков России
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bankPartners.map((bank, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{bank.name}</CardTitle>
                  <div className="space-y-1">
                    <Badge variant="secondary" className="text-lg font-bold">
                      от {bank.rate}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{bank.term}</p>
                    <p className="text-sm text-muted-foreground">{bank.amount}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {bank.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <Icon name="Check" className="text-green-500" size={14} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Как оформить рассрочку</h2>
            <p className="text-lg text-muted-foreground">
              Простой процесс оформления в 4 шага
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Консультация',
                  description: 'Запишитесь на консультацию и определите стоимость операции'
                },
                {
                  step: '2',
                  title: 'Заявка',
                  description: 'Подайте заявку на рассрочку или кредит прямо в клинике'
                },
                {
                  step: '3',
                  title: 'Одобрение',
                  description: 'Получите решение в течение 15 минут'
                },
                {
                  step: '4',
                  title: 'Операция',
                  description: 'Проведите операцию и начните выплаты по графику'
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Dialog */}
      <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Заявка на рассрочку</DialogTitle>
            <DialogDescription>
              Заполните форму для получения рассрочки на операцию
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Имя" />
              <Input placeholder="Фамилия" />
            </div>
            <Input placeholder="Телефон" />
            <Input type="email" placeholder="Email" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Операция" />
              </SelectTrigger>
              <SelectContent>
                {procedures.map((procedure) => (
                  <SelectItem key={procedure.name} value={procedure.name}>
                    {procedure.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Сумма" value={loanAmount[0].toLocaleString()} readOnly />
              <Input placeholder="Срок (мес)" value={loanTerm[0]} readOnly />
            </div>
            <Textarea placeholder="Дополнительная информация" />
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setIsApplicationOpen(false)}
            >
              Отправить заявку
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Часто задаваемые вопросы</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Какие документы нужны для рассрочки?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Для оформления рассрочки 0% достаточно паспорта. Для банковского кредита 
                  может потребоваться справка о доходах, но многие банки предоставляют 
                  кредиты без справок.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Можно ли досрочно погасить рассрочку?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Да, досрочное погашение возможно без штрафов и комиссий. При досрочном 
                  погашении банковского кредита проценты пересчитываются.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Что если заявка не одобрена?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Мы работаем с несколькими банками, поэтому при отказе одного банка 
                  можем подать заявку в другой. Также доступна рассрочка от клиники 
                  с более лояльными условиями.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Начните свое преображение уже сегодня
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Не откладывайте мечту о красоте из-за финансовых вопросов
          </p>
          <Button size="lg" variant="secondary">
            <Icon name="Calculator" className="mr-2" size={20} />
            Рассчитать рассрочку
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Financing;