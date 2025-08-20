import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Insurance = () => {
  const [isClaimOpen, setIsClaimOpen] = useState(false);

  const insurancePartners = [
    {
      name: 'СОГАЗ-Мед',
      logo: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      coverage: 'Реконструктивные операции',
      procedures: ['Восстановление после травм', 'Врожденные дефекты', 'Онкореконструкция'],
      requirements: 'Направление врача, медицинские показания',
      processing: '14-30 дней'
    },
    {
      name: 'ВТБ Медицинское страхование',
      logo: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      coverage: 'Реконструктивная хирургия',
      procedures: ['Маммопластика после мастэктомии', 'Ринопластика по показаниям', 'Реконструкция'],
      requirements: 'Полис ДМС, заключение врача',
      processing: '7-14 дней'
    },
    {
      name: 'РЕСО-Гарантия',
      logo: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      coverage: 'Медицинские показания',
      procedures: ['Септопластика', 'Реконструктивные операции', 'Устранение дефектов'],
      requirements: 'Направление специалиста, обоснование',
      processing: '10-21 день'
    },
    {
      name: 'АльфаСтрахование',
      logo: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      coverage: 'Функциональные нарушения',
      procedures: ['Коррекция дыхания', 'Устранение функциональных проблем'],
      requirements: 'Медицинские показания, обследование',
      processing: '5-14 дней'
    }
  ];

  const coveredProcedures = [
    {
      procedure: 'Септопластика',
      indication: 'Нарушение носового дыхания',
      coverage: '100%',
      requirements: 'Заключение ЛОР-врача, риноманометрия',
      documents: ['Направление врача', 'Результаты обследования', 'Полис ОМС/ДМС']
    },
    {
      procedure: 'Реконструкция груди',
      indication: 'После мастэктомии',
      coverage: '100%',
      requirements: 'Онкологическое заключение, период ремиссии',
      documents: ['Выписка из онкодиспансера', 'Заключение онколога', 'Полис ОМС']
    },
    {
      procedure: 'Устранение врожденных дефектов',
      indication: 'Врожденные аномалии развития',
      coverage: '100%',
      requirements: 'Медико-генетическое заключение',
      documents: ['Заключение генетика', 'Медицинская карта', 'Полис ОМС']
    },
    {
      procedure: 'Реконструкция после травм',
      indication: 'Последствия травм и ожогов',
      coverage: '80-100%',
      requirements: 'Документы о травме, заключение хирурга',
      documents: ['Справка о травме', 'Медицинские документы', 'Полис страхования']
    }
  ];

  const claimProcess = [
    {
      step: 1,
      title: 'Консультация',
      description: 'Получите консультацию врача и определите медицинские показания',
      duration: '1 день',
      documents: ['Паспорт', 'Полис страхования', 'Медицинские документы']
    },
    {
      step: 2,
      title: 'Обследование',
      description: 'Пройдите необходимые обследования для подтверждения показаний',
      duration: '3-7 дней',
      documents: ['Анализы', 'Заключения специалистов', 'Инструментальные исследования']
    },
    {
      step: 3,
      title: 'Подача документов',
      description: 'Подайте документы в страховую компанию для получения одобрения',
      duration: '1 день',
      documents: ['Заявление', 'Медицинские документы', 'Справки']
    },
    {
      step: 4,
      title: 'Рассмотрение',
      description: 'Страховая компания рассматривает заявку и принимает решение',
      duration: '7-30 дней',
      documents: ['Дополнительные справки при необходимости']
    },
    {
      step: 5,
      title: 'Операция',
      description: 'При одобрении проводится операция за счет страховой компании',
      duration: 'По плану',
      documents: ['Согласие на операцию', 'Документы страховой']
    }
  ];

  const faqItems = [
    {
      question: 'Какие операции покрывает страховка?',
      answer: 'Страховка покрывает операции, выполняемые по медицинским показаниям: септопластику при нарушении дыхания, реконструкцию груди после мастэктомии, устранение врожденных дефектов, реконструкцию после травм. Эстетические операции страховкой не покрываются.'
    },
    {
      question: 'Сколько времени занимает получение одобрения?',
      answer: 'Время рассмотрения зависит от страховой компании и сложности случая. Обычно это занимает от 7 до 30 дней. Экстренные случаи рассматриваются в приоритетном порядке.'
    },
    {
      question: 'Что делать, если страховая отказала?',
      answer: 'При отказе можно подать апелляцию с дополнительными медицинскими документами, обратиться в другую страховую компанию или рассмотреть возможность частичного покрытия расходов.'
    },
    {
      question: 'Можно ли доплатить за улучшение условий?',
      answer: 'Да, при операции по страховке можно доплатить за улучшенные условия: одноместную палату, импланты премиум-класса, дополнительные процедуры. Доплата производится отдельно.'
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
              <a href="/prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
              <a href="/insurance" className="text-primary font-semibold">Страхование</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Страхование операций
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Многие пластические операции могут быть покрыты страховкой при наличии 
            медицинских показаний. Мы поможем оформить все необходимые документы.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" className="text-green-500" size={16} />
              <span>Работаем со всеми страховыми</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="FileText" className="text-blue-500" size={16} />
              <span>Помощь в оформлении</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" className="text-purple-500" size={16} />
              <span>Быстрое рассмотрение</span>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Страховые партнеры</h2>
            <p className="text-lg text-muted-foreground">
              Мы работаем с ведущими страховыми компаниями России
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {insurancePartners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <CardTitle className="text-xl">{partner.name}</CardTitle>
                      <Badge variant="secondary">{partner.coverage}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Покрываемые процедуры:</h4>
                      <ul className="space-y-1">
                        {partner.procedures.map((procedure, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <Icon name="Check" className="text-green-500" size={16} />
                            <span>{procedure}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div>
                        <span className="font-medium">Требования:</span>
                        <p className="text-muted-foreground">{partner.requirements}</p>
                      </div>
                      <div>
                        <span className="font-medium">Срок рассмотрения:</span>
                        <p className="text-muted-foreground">{partner.processing}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Covered Procedures */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Покрываемые операции</h2>
            <p className="text-lg text-muted-foreground">
              Операции, которые могут быть оплачены страховой компанией
            </p>
          </div>
          <div className="space-y-6">
            {coveredProcedures.map((procedure, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{procedure.procedure}</h3>
                      <p className="text-muted-foreground mb-3">{procedure.indication}</p>
                      <Badge 
                        variant="secondary" 
                        className="bg-green-100 text-green-800 text-lg font-bold"
                      >
                        Покрытие: {procedure.coverage}
                      </Badge>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Требования:</h4>
                      <p className="text-sm text-muted-foreground mb-3">{procedure.requirements}</p>
                      <h4 className="font-semibold mb-2">Необходимые документы:</h4>
                      <ul className="space-y-1">
                        {procedure.documents.map((doc, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <Icon name="FileText" className="text-blue-500" size={14} />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-center">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Подать заявку
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Claim Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Процесс получения покрытия</h2>
            <p className="text-lg text-muted-foreground">
              Пошаговый алгоритм оформления страхового случая
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {claimProcess.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xl">{step.step}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Необходимые документы:</h4>
                            <ul className="space-y-1">
                              {step.documents.map((doc, idx) => (
                                <li key={idx} className="flex items-center space-x-2 text-sm">
                                  <Icon name="FileText" className="text-blue-500" size={16} />
                                  <span>{doc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex items-center">
                            <div>
                              <span className="text-sm text-muted-foreground">Длительность этапа:</span>
                              <p className="font-semibold text-lg">{step.duration}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Часто задаваемые вопросы</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Claim Application Dialog */}
      <Dialog open={isClaimOpen} onOpenChange={setIsClaimOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Заявка на страховое покрытие</DialogTitle>
            <DialogDescription>
              Заполните форму для получения консультации по страховому покрытию
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
                <SelectValue placeholder="Страховая компания" />
              </SelectTrigger>
              <SelectContent>
                {insurancePartners.map((partner) => (
                  <SelectItem key={partner.name} value={partner.name}>
                    {partner.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Интересующая операция" />
              </SelectTrigger>
              <SelectContent>
                {coveredProcedures.map((procedure) => (
                  <SelectItem key={procedure.procedure} value={procedure.procedure}>
                    {procedure.procedure}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Textarea placeholder="Медицинские показания и дополнительная информация" />
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setIsClaimOpen(false)}
            >
              Отправить заявку
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Узнайте о возможности страхового покрытия
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Запишитесь на консультацию и выясните, покрывает ли ваша страховка необходимую операцию
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться на консультацию
            </Button>
            <Dialog open={isClaimOpen} onOpenChange={setIsClaimOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Icon name="FileText" className="mr-2" size={20} />
                  Подать заявку
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;