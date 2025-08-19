import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Адрес клиники',
      content: 'г. Москва, ул. Тверская, д. 15, стр. 1',
      additional: '3-й этаж, кабинеты 301-305'
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
      additional: 'Круглосуточно для экстренных случаев'
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@plastikklinik.ru',
      additional: 'Ответим в течение 2 часов'
    },
    {
      icon: 'Clock',
      title: 'Часы работы',
      content: 'Пн-Пт: 9:00-18:00',
      additional: 'Сб: 10:00-16:00, Вс: выходной'
    }
  ];

  const socialLinks = [
    { name: 'WhatsApp', icon: 'Phone', url: 'https://wa.me/74951234567', color: 'bg-green-500' },
    { name: 'Telegram', icon: 'MessageCircle', url: 'https://t.me/plastikklinik', color: 'bg-blue-500' },
    { name: 'VKontakte', icon: 'Users', url: 'https://vk.com/plastikklinik', color: 'bg-blue-600' },
    { name: 'Instagram', icon: 'Camera', url: 'https://instagram.com/plastikklinik', color: 'bg-pink-500' }
  ];

  const workingHours = [
    { day: 'Понедельник', hours: '9:00 - 18:00', available: true },
    { day: 'Вторник', hours: '9:00 - 18:00', available: true },
    { day: 'Среда', hours: '9:00 - 18:00', available: true },
    { day: 'Четверг', hours: '9:00 - 18:00', available: true },
    { day: 'Пятница', hours: '9:00 - 18:00', available: true },
    { day: 'Суббота', hours: '10:00 - 16:00', available: true },
    { day: 'Воскресенье', hours: 'Выходной', available: false }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
              <a href="/about" className="text-foreground hover:text-primary transition-colors">О враче</a>
              <a href="/gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
              <a href="/contacts" className="text-primary font-semibold">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-teal-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Контакты
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом. Мы всегда готовы ответить на ваши вопросы и помочь с записью на консультацию
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon name={info.icon as any} className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="text-foreground font-medium mb-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.additional}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Записаться на консультацию</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
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
                  </div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Интересующая услуга" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rhinoplasty">Ринопластика</SelectItem>
                      <SelectItem value="mammoplasty">Маммопластика</SelectItem>
                      <SelectItem value="liposuction">Липосакция</SelectItem>
                      <SelectItem value="facelift">Фейслифтинг</SelectItem>
                      <SelectItem value="blepharoplasty">Блефаропластика</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    placeholder="Ваш вопрос или дополнительная информация"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-[100px]"
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-6">
              {/* Working Hours */}
              <Card>
                <CardHeader>
                  <CardTitle>Режим работы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {workingHours.map((schedule, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="font-medium">{schedule.day}</span>
                        <div className="flex items-center space-x-2">
                          <span className={schedule.available ? 'text-foreground' : 'text-muted-foreground'}>
                            {schedule.hours}
                          </span>
                          {schedule.available && (
                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                              Открыто
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Мы в социальных сетях</CardTitle>
                  <CardDescription>
                    Следите за новостями и результатами работ
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg border hover:shadow-md transition-shadow"
                      >
                        <div className={`p-2 rounded-full ${social.color}`}>
                          <Icon name={social.icon as any} className="text-white" size={16} />
                        </div>
                        <span className="font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-800">Экстренная связь</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="Phone" className="text-red-600" size={16} />
                      <span className="font-medium">+7 (495) 123-45-67</span>
                    </div>
                    <p className="text-sm text-red-700">
                      Круглосуточная линия для пациентов после операций
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Как нас найти</h2>
            <p className="text-lg text-muted-foreground">
              Мы находимся в центре Москвы, рядом с метро Тверская
            </p>
          </div>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="MapPin" className="text-blue-500 mx-auto mb-4" size={64} />
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Интерактивная карта</h3>
                  <p className="text-blue-600">г. Москва, ул. Тверская, д. 15</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8 text-center">
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center space-x-2">
                <Icon name="Car" className="text-primary" size={20} />
                <span className="text-sm">Парковка рядом</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Train" className="text-primary" size={20} />
                <span className="text-sm">Метро Тверская</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Bus" className="text-primary" size={20} />
                <span className="text-sm">Остановка рядом</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;