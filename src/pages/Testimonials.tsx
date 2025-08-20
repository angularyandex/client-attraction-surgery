import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Testimonials = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videoTestimonials = [
    {
      id: 1,
      name: 'Анна Петрова',
      age: '32 года',
      procedure: 'Ринопластика',
      thumbnail: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      duration: '3:45',
      preview: 'Рассказывает о своем опыте ринопластики и результатах',
      featured: true
    },
    {
      id: 2,
      name: 'Мария Сидорова',
      age: '28 лет',
      procedure: 'Маммопластика',
      thumbnail: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      duration: '4:12',
      preview: 'Делится впечатлениями об увеличении груди',
      featured: true
    },
    {
      id: 3,
      name: 'Елена Козлова',
      age: '45 лет',
      procedure: 'Фейслифтинг',
      thumbnail: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      duration: '5:20',
      preview: 'Рассказывает о подтяжке лица и восстановлении',
      featured: false
    },
    {
      id: 4,
      name: 'Ольга Иванова',
      age: '35 лет',
      procedure: 'Липосакция',
      thumbnail: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      duration: '2:58',
      preview: 'Опыт липосакции живота и боков',
      featured: false
    }
  ];

  const writtenTestimonials = [
    {
      id: 1,
      name: 'Светлана К.',
      age: '29 лет',
      procedure: 'Ринопластика',
      rating: 5,
      date: '2 месяца назад',
      text: 'Долго решалась на ринопластику, но результат превзошел все ожидания! Доктор Иванов - настоящий профессионал. Операция прошла без осложнений, восстановление было комфортным. Нос выглядит естественно, дыхание улучшилось. Очень благодарна за новую жизнь без комплексов!',
      beforeAfter: true,
      verified: true
    },
    {
      id: 2,
      name: 'Татьяна М.',
      age: '34 года',
      procedure: 'Маммопластика',
      rating: 5,
      date: '3 месяца назад',
      text: 'После родов грудь потеряла форму, и я решилась на маммопластику. Выбор пал на доктора Иванова после изучения его работ. Результат потрясающий - грудь выглядит естественно, размер идеально подходит моей фигуре. Муж в восторге, а главное - я снова чувствую себя женственной!',
      beforeAfter: true,
      verified: true
    },
    {
      id: 3,
      name: 'Наталья В.',
      age: '41 год',
      procedure: 'Блефаропластика',
      rating: 5,
      date: '1 месяц назад',
      text: 'Нависающие веки делали меня старше своих лет. Блефаропластика кардинально изменила мой взгляд - он стал открытым и молодым. Операция прошла быстро, восстановление легкое. Коллеги говорят, что я помолодела на 10 лет. Спасибо доктору за мастерство!',
      beforeAfter: false,
      verified: true
    },
    {
      id: 4,
      name: 'Ирина Л.',
      age: '38 лет',
      procedure: 'Липосакция',
      rating: 4,
      date: '2 недели назад',
      text: 'Делала липосакцию живота и боков. Результат хороший, но восстановление оказалось немного дольше, чем ожидала. Сейчас, спустя 2 недели, уже вижу отличные изменения. Фигура стала более подтянутой. Планирую через полгода оценить окончательный результат.',
      beforeAfter: true,
      verified: true
    },
    {
      id: 5,
      name: 'Алина С.',
      age: '26 лет',
      procedure: 'Отопластика',
      rating: 5,
      date: '4 месяца назад',
      text: 'Всю жизнь комплексовала из-за оттопыренных ушей. Отопластика решила эту проблему раз и навсегда! Операция прошла под местной анестезией, было совсем не страшно. Уши теперь выглядят абсолютно естественно. Наконец-то могу носить любые прически!',
      beforeAfter: false,
      verified: true
    },
    {
      id: 6,
      name: 'Юлия Р.',
      age: '43 года',
      procedure: 'Абдоминопластика',
      rating: 5,
      date: '6 месяцев назад',
      text: 'После двух родов живот никак не приходил в норму. Абдоминопластика стала для меня спасением. Да, восстановление было непростым, но результат того стоил. Живот плоский, талия четко очерчена. Чувствую себя снова молодой и привлекательной. Огромное спасибо доктору!',
      beforeAfter: true,
      verified: true
    }
  ];

  const satisfactionStats = [
    { category: 'Качество результата', percentage: 98 },
    { category: 'Профессионализм врача', percentage: 99 },
    { category: 'Комфорт во время операции', percentage: 96 },
    { category: 'Послеоперационный уход', percentage: 97 },
    { category: 'Соответствие ожиданиям', percentage: 95 },
    { category: 'Рекомендуют друзьям', percentage: 98 }
  ];

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
    setIsVideoOpen(true);
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
              <a href="/reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="/testimonials" className="text-primary font-semibold">Истории пациентов</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Истории наших пациентов
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Реальные истории людей, которые изменили свою жизнь с помощью пластической хирургии. 
            Видео-отзывы и подробные рассказы о процессе и результатах.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Довольных пациентов</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Положительных отзывов</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Видео-историй</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">15</div>
              <div className="text-sm text-muted-foreground">Лет опыта</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Видео-отзывы</h2>
            <p className="text-lg text-muted-foreground">
              Наши пациенты рассказывают о своем опыте
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videoTestimonials.map((video) => (
              <Card 
                key={video.id} 
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleVideoClick(video.id.toString())}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <Icon name="Play" className="text-primary ml-1" size={24} />
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-black bg-opacity-70">
                    {video.duration}
                  </Badge>
                  {video.featured && (
                    <Badge className="absolute top-4 right-4 bg-primary">
                      Рекомендуем
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{video.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{video.age} • {video.procedure}</p>
                  <p className="text-xs text-muted-foreground">{video.preview}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Satisfaction Statistics */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Статистика удовлетворенности</h2>
            <p className="text-lg text-muted-foreground">
              Оценки наших пациентов по различным критериям
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {satisfactionStats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{stat.category}</span>
                    <span className="text-sm text-muted-foreground">{stat.percentage}%</span>
                  </div>
                  <Progress value={stat.percentage} className="h-3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Подробные отзывы</h2>
            <p className="text-lg text-muted-foreground">
              Развернутые истории наших пациентов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {writtenTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.age} • {testimonial.procedure}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {testimonial.verified && (
                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                              <Icon name="CheckCircle" className="mr-1" size={12} />
                              Проверено
                            </Badge>
                          )}
                          {testimonial.beforeAfter && (
                            <Badge variant="outline" className="text-xs">
                              Фото до/после
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Dialog */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Видео-отзыв пациента</DialogTitle>
            <DialogDescription>
              История пациента о проведенной операции
            </DialogDescription>
          </DialogHeader>
          <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Icon name="Play" className="mx-auto mb-4 text-muted-foreground" size={64} />
              <p className="text-muted-foreground">Видео-отзыв будет воспроизведен здесь</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Share Your Story */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Поделитесь своей историей</CardTitle>
                <CardDescription>
                  Ваш опыт может помочь другим людям принять решение
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Ваше имя" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Операция" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rhinoplasty">Ринопластика</SelectItem>
                        <SelectItem value="mammoplasty">Маммопластика</SelectItem>
                        <SelectItem value="liposuction">Липосакция</SelectItem>
                        <SelectItem value="facelift">Фейслифтинг</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Возраст" type="number" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Оценка" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">⭐⭐⭐⭐⭐ Отлично</SelectItem>
                        <SelectItem value="4">⭐⭐⭐⭐ Хорошо</SelectItem>
                        <SelectItem value="3">⭐⭐⭐ Удовлетворительно</SelectItem>
                        <SelectItem value="2">⭐⭐ Плохо</SelectItem>
                        <SelectItem value="1">⭐ Очень плохо</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Textarea 
                    placeholder="Расскажите о своем опыте: как проходила операция, восстановление, какие результаты получили..." 
                    className="min-h-[120px]"
                  />
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="consent" className="rounded" />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      Согласен на публикацию отзыва на сайте
                    </label>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить историю
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
            Станьте героем следующей истории успеха
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Запишитесь на консультацию и начните свой путь к изменениям
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

export default Testimonials;