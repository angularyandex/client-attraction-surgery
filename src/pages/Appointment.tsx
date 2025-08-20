import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [consultationType, setConsultationType] = useState<string>('');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      age: '',
      gender: ''
    },
    medicalInfo: {
      service: '',
      previousSurgeries: false,
      allergies: false,
      medications: false,
      chronicDiseases: false,
      additionalInfo: ''
    },
    preferences: {
      consultationType: '',
      preferredTime: '',
      communicationMethod: '',
      questions: ''
    }
  });

  const timeSlots = {
    morning: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
    afternoon: ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30'],
    evening: ['17:00', '17:30', '18:00']
  };

  const consultationTypes = [
    {
      type: 'first-consultation',
      name: 'Первичная консультация',
      duration: '45 минут',
      price: 3000,
      description: 'Подробное обсуждение ваших пожеланий, осмотр, составление плана операции',
      includes: ['Детальный осмотр', 'Рекомендации', 'План операции', 'Расчет стоимости', '3D моделирование']
    },
    {
      type: 'repeat-consultation',
      name: 'Повторная консультация',
      duration: '30 минут',
      price: 1500,
      description: 'Дополнительные вопросы, уточнение деталей операции',
      includes: ['Ответы на вопросы', 'Корректировка плана', 'Подготовка к операции']
    },
    {
      type: 'online-consultation',
      name: 'Онлайн консультация',
      duration: '30 минут',
      price: 2000,
      description: 'Консультация по видеосвязи из любой точки мира',
      includes: ['Предварительная оценка', 'Рекомендации', 'План дальнейших действий']
    }
  ];

  const services = [
    'Ринопластика',
    'Маммопластика (увеличение груди)',
    'Маммопластика (подтяжка груди)',
    'Маммопластика (уменьшение груди)',
    'Липосакция',
    'Фейслифтинг',
    'Блефаропластика (верхние веки)',
    'Блефаропластика (нижние веки)',
    'Блефаропластика (круговая)',
    'Абдоминопластика',
    'Отопластика',
    'Липофилинг',
    'Другое'
  ];

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Appointment booking:', {
      ...formData,
      date: selectedDate,
      time: selectedTime,
      consultationType
    });
    // Здесь будет логика отправки формы
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return formData.personalInfo.firstName && formData.personalInfo.phone && formData.personalInfo.email;
      case 2:
        return formData.medicalInfo.service;
      case 3:
        return selectedDate && selectedTime && consultationType;
      case 4:
        return true;
      default:
        return false;
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
              <a href="/appointment" className="text-primary font-semibold">Запись</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Онлайн запись на консультацию
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Удобная система записи на консультацию. Выберите подходящее время, 
            заполните анкету и получите подтверждение в течение часа.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" className="text-primary" size={16} />
              <span>Быстрое оформление</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" className="text-primary" size={16} />
              <span>Удобное время</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" className="text-primary" size={16} />
              <span>Подтверждение в течение часа</span>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= step ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {currentStep > step ? (
                      <Icon name="Check" size={20} />
                    ) : (
                      <span className="font-bold">{step}</span>
                    )}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-1 mx-2 ${
                      currentStep > step ? 'bg-primary' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-sm">
              <span className={currentStep >= 1 ? 'text-primary font-medium' : 'text-muted-foreground'}>
                Личные данные
              </span>
              <span className={currentStep >= 2 ? 'text-primary font-medium' : 'text-muted-foreground'}>
                Медицинская информация
              </span>
              <span className={currentStep >= 3 ? 'text-primary font-medium' : 'text-muted-foreground'}>
                Дата и время
              </span>
              <span className={currentStep >= 4 ? 'text-primary font-medium' : 'text-muted-foreground'}>
                Подтверждение
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Личная информация</CardTitle>
                  <CardDescription>
                    Заполните основную информацию о себе
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Имя"
                      value={formData.personalInfo.firstName}
                      onChange={(e) => setFormData({
                        ...formData,
                        personalInfo: { ...formData.personalInfo, firstName: e.target.value }
                      })}
                    />
                    <Input
                      placeholder="Фамилия"
                      value={formData.personalInfo.lastName}
                      onChange={(e) => setFormData({
                        ...formData,
                        personalInfo: { ...formData.personalInfo, lastName: e.target.value }
                      })}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Телефон"
                      value={formData.personalInfo.phone}
                      onChange={(e) => setFormData({
                        ...formData,
                        personalInfo: { ...formData.personalInfo, phone: e.target.value }
                      })}
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.personalInfo.email}
                      onChange={(e) => setFormData({
                        ...formData,
                        personalInfo: { ...formData.personalInfo, email: e.target.value }
                      })}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Возраст"
                      value={formData.personalInfo.age}
                      onChange={(e) => setFormData({
                        ...formData,
                        personalInfo: { ...formData.personalInfo, age: e.target.value }
                      })}
                    />
                    <Select
                      value={formData.personalInfo.gender}
                      onValueChange={(value) => setFormData({
                        ...formData,
                        personalInfo: { ...formData.personalInfo, gender: value }
                      })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Пол" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="female">Женский</SelectItem>
                        <SelectItem value="male">Мужской</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Medical Information */}
            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Медицинская информация</CardTitle>
                  <CardDescription>
                    Эта информация поможет врачу лучше подготовиться к консультации
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Интересующая услуга</label>
                    <Select
                      value={formData.medicalInfo.service}
                      onValueChange={(value) => setFormData({
                        ...formData,
                        medicalInfo: { ...formData.medicalInfo, service: value }
                      })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map(service => (
                          <SelectItem key={service} value={service}>{service}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={formData.medicalInfo.previousSurgeries}
                        onCheckedChange={(checked) => setFormData({
                          ...formData,
                          medicalInfo: { ...formData.medicalInfo, previousSurgeries: checked as boolean }
                        })}
                      />
                      <label className="text-sm">У меня были пластические операции</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={formData.medicalInfo.allergies}
                        onCheckedChange={(checked) => setFormData({
                          ...formData,
                          medicalInfo: { ...formData.medicalInfo, allergies: checked as boolean }
                        })}
                      />
                      <label className="text-sm">У меня есть аллергии на лекарства</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={formData.medicalInfo.medications}
                        onCheckedChange={(checked) => setFormData({
                          ...formData,
                          medicalInfo: { ...formData.medicalInfo, medications: checked as boolean }
                        })}
                      />
                      <label className="text-sm">Принимаю лекарства постоянно</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={formData.medicalInfo.chronicDiseases}
                        onCheckedChange={(checked) => setFormData({
                          ...formData,
                          medicalInfo: { ...formData.medicalInfo, chronicDiseases: checked as boolean }
                        })}
                      />
                      <label className="text-sm">У меня есть хронические заболевания</label>
                    </div>
                  </div>
                  <Textarea
                    placeholder="Дополнительная медицинская информация, вопросы или пожелания"
                    value={formData.medicalInfo.additionalInfo}
                    onChange={(e) => setFormData({
                      ...formData,
                      medicalInfo: { ...formData.medicalInfo, additionalInfo: e.target.value }
                    })}
                    className="min-h-[100px]"
                  />
                </CardContent>
              </Card>
            )}

            {/* Step 3: Date and Time Selection */}
            {currentStep === 3 && (
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Выберите тип консультации</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={consultationType} onValueChange={setConsultationType}>
                      <div className="space-y-4">
                        {consultationTypes.map((consultation) => (
                          <div key={consultation.type} className="flex items-center space-x-2">
                            <RadioGroupItem value={consultation.type} id={consultation.type} />
                            <Label htmlFor={consultation.type} className="flex-1 cursor-pointer">
                              <div className="p-4 border rounded-lg hover:bg-slate-50">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-semibold">{consultation.name}</h4>
                                  <Badge variant="secondary">{consultation.price.toLocaleString()} ₽</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">{consultation.description}</p>
                                <div className="text-xs text-muted-foreground">
                                  Длительность: {consultation.duration}
                                </div>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Выберите дату и время</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Дата консультации</label>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border"
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Время консультации</label>
                      <Tabs defaultValue="morning" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="morning">Утро</TabsTrigger>
                          <TabsTrigger value="afternoon">День</TabsTrigger>
                          <TabsTrigger value="evening">Вечер</TabsTrigger>
                        </TabsList>
                        {Object.entries(timeSlots).map(([period, slots]) => (
                          <TabsContent key={period} value={period}>
                            <div className="grid grid-cols-3 gap-2">
                              {slots.map((time) => (
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
                          </TabsContent>
                        ))}
                      </Tabs>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Подтверждение записи</CardTitle>
                  <CardDescription>
                    Проверьте данные перед отправкой заявки
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-4">Личная информация:</h3>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Имя:</span> {formData.personalInfo.firstName} {formData.personalInfo.lastName}</p>
                        <p><span className="font-medium">Телефон:</span> {formData.personalInfo.phone}</p>
                        <p><span className="font-medium">Email:</span> {formData.personalInfo.email}</p>
                        <p><span className="font-medium">Возраст:</span> {formData.personalInfo.age}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">Детали консультации:</h3>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Услуга:</span> {formData.medicalInfo.service}</p>
                        <p><span className="font-medium">Тип консультации:</span> {
                          consultationTypes.find(c => c.type === consultationType)?.name
                        }</p>
                        <p><span className="font-medium">Дата:</span> {selectedDate?.toLocaleDateString('ru-RU')}</p>
                        <p><span className="font-medium">Время:</span> {selectedTime}</p>
                        <p><span className="font-medium">Стоимость:</span> {
                          consultationTypes.find(c => c.type === consultationType)?.price.toLocaleString()
                        } ₽</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Что включает консультация:</h4>
                    <ul className="space-y-1">
                      {consultationTypes.find(c => c.type === consultationType)?.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <Icon name="Check" className="text-green-500" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="consent" />
                    <label htmlFor="consent" className="text-sm">
                      Согласен с <a href="#" className="text-primary underline">условиями обработки персональных данных</a>
                    </label>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevStep}
                disabled={currentStep === 1}
              >
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад
              </Button>
              {currentStep < 4 ? (
                <Button
                  onClick={handleNextStep}
                  disabled={!isStepValid(currentStep)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Далее
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={16} />
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Альтернативные способы записи</h2>
            <p className="text-lg text-muted-foreground">
              Если у вас возникли сложности с онлайн записью
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Phone" className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-lg font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground mb-4">
                  Позвоните нам для записи на консультацию
                </p>
                <Button variant="outline" className="w-full">
                  +7 (495) 123-45-67
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="MessageCircle" className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-4">
                  Напишите нам в мессенджер
                </p>
                <Button variant="outline" className="w-full">
                  Написать в WhatsApp
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="MapPin" className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-lg font-semibold mb-2">Личный визит</h3>
                <p className="text-muted-foreground mb-4">
                  Приходите в клинику для записи
                </p>
                <Button variant="outline" className="w-full">
                  Как добраться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Information */}
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
                    • Консультация оплачивается в день визита наличными или картой
                  </p>
                  <p>
                    • При записи на операцию стоимость консультации засчитывается
                  </p>
                  <p>
                    • Для отмены или переноса записи уведомите нас за 24 часа
                  </p>
                  <p>
                    • Возьмите с собой документы и результаты предыдущих обследований
                  </p>
                  <p>
                    • Приходите без макияжа для операций на лице
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Appointment;