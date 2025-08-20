import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = {
    general: {
      title: 'Общие вопросы',
      questions: [
        {
          question: 'Как выбрать пластического хирурга?',
          answer: 'При выборе пластического хирурга обратите внимание на: образование и сертификаты, опыт работы (не менее 5 лет), портфолио работ, отзывы пациентов, наличие лицензии клиники, использование современного оборудования. Обязательно проведите личную консультацию и убедитесь, что врач внушает доверие.'
        },
        {
          question: 'Сколько стоит пластическая операция?',
          answer: 'Стоимость зависит от сложности операции, используемых материалов, квалификации хирурга и уровня клиники. Примерные цены: ринопластика от 150 000 ₽, маммопластика от 200 000 ₽, липосакция от 80 000 ₽. Точная стоимость определяется на консультации.'
        },
        {
          question: 'В каком возрасте можно делать пластические операции?',
          answer: 'Минимальный возраст для большинства операций - 18 лет (после завершения формирования организма). Оптимальный возраст зависит от типа операции: ринопластика - с 18 лет, маммопластика - с 18-20 лет, фейслифтинг - обычно после 40 лет. Верхней возрастной границы нет при отсутствии противопоказаний.'
        },
        {
          question: 'Какие анализы нужны перед операцией?',
          answer: 'Стандартный набор включает: общий анализ крови, биохимический анализ крови, коагулограмму, анализы на ВИЧ, гепатиты B и C, сифилис, общий анализ мочи, ЭКГ, флюорографию. Дополнительно могут потребоваться консультации специалистов и УЗИ. Анализы действительны 10-14 дней.'
        },
        {
          question: 'Можно ли делать несколько операций одновременно?',
          answer: 'Да, комбинированные операции возможны и часто практикуются. Это экономит время на восстановление и может быть дешевле. Однако решение принимается индивидуально с учетом состояния здоровья, объема вмешательств и рисков. Популярные сочетания: ринопластика + блефаропластика, маммопластика + липосакция.'
        }
      ]
    },
    rhinoplasty: {
      title: 'Ринопластика',
      questions: [
        {
          question: 'Больно ли делать ринопластику?',
          answer: 'Операция проводится под общим наркозом, поэтому во время процедуры боли нет. После операции возможен дискомфорт и болезненность, которые легко контролируются обезболивающими препаратами. Большинство пациентов отмечают, что боль менее выражена, чем ожидалось.'
        },
        {
          question: 'Когда можно увидеть результат ринопластики?',
          answer: 'Предварительный результат виден через 2-3 недели после снятия гипса. Однако окончательный результат формируется в течение 6-12 месяцев из-за постепенного спадания отеков. Кончик носа может оставаться слегка отечным до года.'
        },
        {
          question: 'Можно ли исправить дыхание во время ринопластики?',
          answer: 'Да, во время эстетической ринопластики можно одновременно исправить функциональные проблемы: искривление носовой перегородки, увеличенные носовые раковины, полипы. Это называется риносептопластика и позволяет улучшить как внешний вид, так и дыхание.'
        },
        {
          question: 'Останутся ли рубцы после ринопластики?',
          answer: 'При закрытой ринопластике все разрезы делаются внутри носа, поэтому видимых рубцов нет. При открытой ринопластике остается небольшой рубец на колумелле (перемычке между ноздрями), который через несколько месяцев становится практически незаметным.'
        },
        {
          question: 'Сколько длится восстановление после ринопластики?',
          answer: 'Гипс снимается через 7-10 дней, швы - через 7 дней. К работе можно вернуться через 1-2 недели. Спорт разрешен через 1-2 месяца. Полное восстановление занимает 6-12 месяцев. Первые 2 недели нужно избегать физических нагрузок и наклонов головы.'
        }
      ]
    },
    mammoplasty: {
      title: 'Маммопластика',
      questions: [
        {
          question: 'Какие импланты лучше выбрать?',
          answer: 'Современные силиконовые импланты безопасны и долговечны. Выбор между круглыми и анатомическими зависит от ваших целей: круглые дают больше объема сверху, анатомические - более естественную форму. Размер подбирается с учетом анатомии, пожеланий и рекомендаций хирурга.'
        },
        {
          question: 'Можно ли кормить грудью после маммопластики?',
          answer: 'В большинстве случаев грудное вскармливание возможно. Риск снижения лактации минимален при периареолярном и субмаммарном доступах. При трансаксиллярном доступе функция молочных желез не нарушается. Планируя беременность, обсудите это с хирургом при выборе методики.'
        },
        {
          question: 'Как долго служат импланты?',
          answer: 'Современные импланты имеют пожизненную гарантию производителя. Однако рекомендуется контрольное обследование каждые 10-15 лет. Замена может потребоваться при развитии капсулярной контрактуры, разрыве импланта или желании изменить размер.'
        },
        {
          question: 'Потеряется ли чувствительность груди?',
          answer: 'Временное снижение чувствительности возможно в первые месяцы после операции. В большинстве случаев чувствительность полностью восстанавливается в течение 6-12 месяцев. Полная потеря чувствительности встречается крайне редко (менее 1% случаев).'
        },
        {
          question: 'Когда можно заниматься спортом после маммопластики?',
          answer: 'Легкие прогулки разрешены с первых дней. Через 2 недели можно вернуться к обычной активности. Спорт без нагрузки на руки и грудь - через 1 месяц. Полноценные тренировки, включая упражнения на грудные мышцы, - через 2-3 месяца после разрешения хирурга.'
        }
      ]
    },
    recovery: {
      title: 'Восстановление',
      questions: [
        {
          question: 'Как ускорить заживление после операции?',
          answer: 'Для быстрого заживления важно: строго соблюдать рекомендации хирурга, принимать назначенные препараты, правильно питаться (больше белка, витаминов), не курить и не употреблять алкоголь, избегать физических нагрузок, высыпаться, посещать все контрольные осмотры.'
        },
        {
          question: 'Что делать, если появились осложнения?',
          answer: 'При любых тревожных симптомах (сильная боль, кровотечение, повышение температуры, необычные выделения) немедленно свяжитесь с хирургом. У нас есть круглосуточная линия для экстренных случаев. Не занимайтесь самолечением - раннее обращение поможет избежать серьезных проблем.'
        },
        {
          question: 'Когда можно выходить на работу?',
          answer: 'Сроки зависят от типа операции и характера работы. Офисная работа: через 3-7 дней после небольших операций, через 1-2 недели после крупных. Физический труд: через 2-4 недели. Работа с людьми: когда спадут отеки и синяки (1-3 недели).'
        },
        {
          question: 'Можно ли загорать после пластической операции?',
          answer: 'Загорать можно не ранее чем через 2-3 месяца после операции, когда полностью заживут рубцы. Свежие рубцы нужно защищать от солнца минимум 6 месяцев, используя солнцезащитный крем SPF 50+. Иначе они могут стать темными и заметными.'
        },
        {
          question: 'Нужно ли носить компрессионное белье?',
          answer: 'Да, компрессионное белье обязательно после большинства операций. Оно уменьшает отеки, поддерживает ткани в правильном положении, снижает риск осложнений. Носить нужно постоянно первые 2-4 недели, затем только днем еще 2-4 недели. Точные сроки определяет хирург.'
        }
      ]
    }
  };

  const allQuestions = Object.values(faqCategories).flatMap(category => 
    category.questions.map(q => ({ ...q, category: category.title }))
  );

  const filteredQuestions = allQuestions.filter(q =>
    q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <a href="/faq" className="text-primary font-semibold">FAQ</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Часто задаваемые вопросы
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о пластической хирургии, 
            подготовке к операциям и восстановлении.
          </p>
          <div className="max-w-md mx-auto">
            <Input
              placeholder="Поиск по вопросам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {searchQuery ? (
            // Search Results
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Результаты поиска
                </h2>
                <p className="text-muted-foreground">
                  Найдено {filteredQuestions.length} вопросов
                </p>
              </div>
              {filteredQuestions.length > 0 ? (
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredQuestions.map((q, index) => (
                    <AccordionItem key={index} value={`search-${index}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left">
                        <div>
                          <div className="font-semibold">{q.question}</div>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {q.category}
                          </Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {q.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-12">
                  <Icon name="Search" className="mx-auto mb-4 text-muted-foreground" size={48} />
                  <h3 className="text-xl font-semibold mb-2">Вопросы не найдены</h3>
                  <p className="text-muted-foreground">
                    Попробуйте изменить поисковый запрос или задайте вопрос нашему специалисту
                  </p>
                </div>
              )}
            </div>
          ) : (
            // Categories
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="general">Общие</TabsTrigger>
                  <TabsTrigger value="rhinoplasty">Ринопластика</TabsTrigger>
                  <TabsTrigger value="mammoplasty">Маммопластика</TabsTrigger>
                  <TabsTrigger value="recovery">Восстановление</TabsTrigger>
                </TabsList>

                {Object.entries(faqCategories).map(([key, category]) => (
                  <TabsContent key={key} value={key}>
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-foreground mb-4">{category.title}</h2>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((q, index) => (
                        <AccordionItem key={index} value={`${key}-${index}`} className="border rounded-lg px-6">
                          <AccordionTrigger className="text-left font-semibold">
                            {q.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {q.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          )}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Полезная информация</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Clock" className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-semibold mb-2">Консультация</h3>
                <p className="text-muted-foreground">45 минут подробного обсуждения</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Shield" className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-semibold mb-2">Гарантия</h3>
                <p className="text-muted-foreground">Пожизненная гарантия на импланты</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Users" className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-semibold mb-2">Опыт</h3>
                <p className="text-muted-foreground">Более 2000 успешных операций</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Heart" className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-semibold mb-2">Результат</h3>
                <p className="text-muted-foreground">98% довольных пациентов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Не нашли ответ на свой вопрос?</CardTitle>
                <CardDescription>
                  Задайте вопрос нашему специалисту, и мы ответим в течение 24 часов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Ваше имя" />
                    <Input placeholder="Телефон" />
                  </div>
                  <Input type="email" placeholder="Email" />
                  <Textarea 
                    placeholder="Ваш вопрос" 
                    className="min-h-[120px]"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="Send" className="mr-2" size={16} />
                    Задать вопрос
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готовы к консультации?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Запишитесь на встречу с врачом и получите персональные ответы на все вопросы
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

export default FAQ;