import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const Consultation = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [consultationType, setConsultationType] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    service: '',
    questions: '',
    hasAllergies: false,
    hasSurgeries: false,
    takingMedications: false
  });

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const consultationTypes = [
    {
      type: 'Первичная консультация',
      price: 3000,
      duration: '45 минут',
      description: 'Подробное обсуждение ваших пожеланий и возможностей',
      includes: ['Осмотр', 'Рекомендации', 'План операции', 'Расчет стоимости']
    },
    {
      type: 'Повторная консультация',
      price: 1500,
      duration: '30 минут',
      description: 'Дополнительные вопросы и уточнения',
      includes: ['Корректировка плана', 'Ответы на вопросы', 'Подготовка к операции']
    },
    {
      type: 'Онлайн консультация',
      price: 2000,
      duration: '30 минут',
      description: 'Консультация по видеосвязи',
      includes: ['Предварительная оценка', 'Рекомендации', 'План дальнейших действий']
    }
  ];

  const services = [
    'Ринопластика',
    'Маммопластика',
    'Липосакция',
    'Фейслифтинг',
    'Блефаропластика',
    'Абдоминопластика',
    'Отопластика',
    'Другое'
  ];

  const preparationSteps = [
    {
      title: 'За 2 недели до консультации',
      items: [
        'Прекратите прием препаратов, влияющих на свертываемость крови',
        'Исключите алкоголь и курение',
        'Соберите медицинские документы'
      ]
    },
    {
      title: 'За 1 неделю до консультации',
      items: [
        'Сдайте необходимые анализы (если назначены)',
        'Подготовьте список вопросов',
        'Изучите информацию об операции'
      ]
    },
    {
      title: 'В день консультации',
      items: [
        'Приходите без макияжа (для операций на лице)',
        'Возьмите с собой документы',
        'Будьте готовы к подробному обсуждению'
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation booking:', {
      ...formData,
      date: selectedDate,
      time: selectedTime,
      type: consultationType
    });
    // Здесь будет логика отправки формы
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
              <a href="/consultation" className="text-primary font-semibold">Консультация</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Запись на консультацию
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Первый шаг к вашему преображению. Подробное обсуждение ваших пожеланий 
            и составление индивидуального плана операции.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" className="text-primary" size={16} />
              <span>45 минут</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" className="text-primary" size={16} />
              <span>Конфиденциально</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" className="text-primary" size={16} />
              <span>Профессионально</span>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Виды консультаций</h2>
            <p className="text-lg text-muted-foreground">
              Выберите подходящий формат консультации
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {consultationTypes.map((consultation, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-lg transition-shadow cursor-pointer ${
                  consultationType === consultation.type ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setConsultationType(consultation.type)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{consultation.type}</CardTitle>
                    <Badge variant="secondary" className="text-lg font-bold">
                      {consultation.price.toLocaleString()} ₽
                    </Badge>
                  </div>
                  <CardDescription>{consultation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Длительность:</span>
                      <span className="font-medium">{consultation.duration}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Включает:</h4>
                      <ul className="space-y-1">
                        {consultation.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <Icon name="Check" className="text-green-500" size={16} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Запись на консультацию</h2>
              <p className="text-lg text-muted-foreground">
                Заполните форму для записи на удобное время
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Личная информация</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <Input
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                    <Input
                      placeholder="Возраст"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                    />
                    <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Интересующая услуга" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map(service => (
                          <SelectItem key={service} value={service}>{service}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Textarea
                      placeholder="Ваши вопросы и пожелания"
                      value={formData.questions}
                      onChange={(e) => setFormData({...formData, questions: e.target.value})}
                      className="min-h-[100px]"
                    />
                  </CardContent>
                </Card>

                {/* Date and Time Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle>Выбор даты и времени</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Выберите дату</label>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border"
                        disabled={(date) => date < new Date()}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Выберите время</label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant={selectedTime === time ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Medical Information */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Медицинская информация</CardTitle>
                  <CardDescription>
                    Эта информация поможет врачу лучше подготовиться к консультации
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={formData.hasAllergies}
                      onCheckedChange={(checked) => setFormData({...formData, hasAllergies: checked as boolean})}
                    />
                    <label className="text-sm">У меня есть аллергии на лекарства</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={formData.hasSurgeries}
                      onCheckedChange={(checked) => setFormData({...formData, hasSurgeries: checked as boolean})}
                    />
                    <label className="text-sm">У меня были пластические операции</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={formData.takingMedications}
                      onCheckedChange={(checked) => setFormData({...formData, takingMedications: checked as boolean})}
                    />
                    <label className="text-sm">Принимаю лекарства постоянно</label>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="mt-8 text-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12"
                >
                  Записаться на консультацию
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  После отправки заявки с вами свяжется администратор для подтверждения записи
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Preparation Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Подготовка к консультации</h2>
            <p className="text-lg text-muted-foreground">
              Как правильно подготовиться к встрече с врачом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {preparationSteps.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <Icon name="CheckCircle" className="text-green-500 mt-0.5" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Есть вопросы?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Свяжитесь с нами любым удобным способом
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <Button size="lg" variant="secondary">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (495) 123-45-67
            </Button>
            <Button size="lg" variant="secondary">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать в WhatsApp
            </Button>
            <Button size="lg" variant="secondary">
              <Icon name="Mail" className="mr-2" size={20} />
              info@plastikklinik.ru
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation;