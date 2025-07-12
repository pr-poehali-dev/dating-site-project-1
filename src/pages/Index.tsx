import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const Index = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const profiles = [
    {
      id: 1,
      name: "Анна",
      age: 25,
      location: "Москва",
      interests: ["путешествия", "кино", "йога"],
      image:
        "https://v3.fal.media/files/kangaroo/FnkrERf25G-E7jZKFMxW7_output.png",
    },
    {
      id: 2,
      name: "Дмитрий",
      age: 28,
      location: "Санкт-Петербург",
      interests: ["фотография", "музыка", "спорт"],
      image:
        "https://v3.fal.media/files/kangaroo/FnkrERf25G-E7jZKFMxW7_output.png",
    },
    {
      id: 3,
      name: "Елена",
      age: 23,
      location: "Казань",
      interests: ["искусство", "книги", "танцы"],
      image:
        "https://v3.fal.media/files/kangaroo/FnkrERf25G-E7jZKFMxW7_output.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-romantic-light via-white to-calm-light">
      {/* Header */}
      <header className="px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-romantic-light">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" className="text-romantic" size={28} />
            <h1 className="text-2xl font-bold text-gray-800">LoveConnect</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#profiles"
              className="text-gray-600 hover:text-romantic transition-colors"
            >
              Анкеты
            </a>
            <a
              href="#chat"
              className="text-gray-600 hover:text-romantic transition-colors"
            >
              Общение
            </a>
            <a
              href="#help"
              className="text-gray-600 hover:text-romantic transition-colors"
            >
              Помощь
            </a>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-romantic hover:bg-romantic-dark">
                  Войти
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl font-bold text-gray-800">
                    Добро пожаловать!
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  {/* Social Login Buttons */}
                  <Button
                    className="w-full bg-[#4C75A3] hover:bg-[#3D5F8A] text-white h-12"
                    onClick={() => setIsRegistering(true)}
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M15.07 13.68c-.42 0-.68-.28-.68-.66 0-.37.26-.65.68-.65.42 0 .68.28.68.65 0 .38-.26.66-.68.66zm-3.14 0c-.42 0-.68-.28-.68-.66 0-.37.26-.65.68-.65.42 0 .68.28.68.65 0 .38-.26.66-.68.66zm1.57-9.64C7.74 4.04 3 8.78 3 14.54 3 17.64 4.67 20.34 7.24 21.8v-6.03c-.49-.3-.82-.84-.82-1.45 0-.95.77-1.72 1.72-1.72s1.72.77 1.72 1.72c0 .61-.33 1.15-.82 1.45V21.8c2.57-1.46 4.24-4.16 4.24-7.26 0-5.76-4.74-10.5-10.5-10.5z" />
                    </svg>
                    Войти через ВКонтакте
                  </Button>

                  <Button
                    className="w-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 h-12"
                    onClick={() => setIsRegistering(true)}
                  >
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Войти через Google
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">или</span>
                    </div>
                  </div>

                  {/* Phone Registration */}
                  <div className="space-y-3">
                    <div className="relative">
                      <Icon
                        name="Phone"
                        className="absolute left-3 top-3 text-gray-400"
                        size={20}
                      />
                      <Input
                        placeholder="+7 (999) 123-45-67"
                        className="pl-10 h-12 border-gray-200 focus:border-romantic"
                        type="tel"
                      />
                    </div>
                    <Button
                      className="w-full bg-romantic hover:bg-romantic-dark h-12"
                      onClick={() => setIsRegistering(true)}
                    >
                      <Icon name="MessageSquare" size={20} className="mr-2" />
                      Получить код в SMS
                    </Button>
                  </div>

                  <div className="text-center text-xs text-gray-500 mt-4">
                    Продолжая, вы соглашаетесь с{" "}
                    <a href="#" className="text-romantic hover:underline">
                      правилами сервиса
                    </a>{" "}
                    и{" "}
                    <a href="#" className="text-romantic hover:underline">
                      политикой конфиденциальности
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <img
            src="/img/d5153bd4-58d4-4e11-9351-27a9590d9a4a.jpg"
            alt="Love Connection"
            className="w-64 h-64 mx-auto mb-8 rounded-full object-cover shadow-lg"
          />
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Найди свою <span className="text-romantic">половинку</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Умный поиск по интересам и геолокации. Безопасное общение. Настоящие
            отношения.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-romantic hover:bg-romantic-dark text-white px-8 py-3"
                >
                  Начать знакомства
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl font-bold text-gray-800">
                    Создать анкету
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  {/* Social Login Buttons */}
                  <Button
                    className="w-full bg-[#4C75A3] hover:bg-[#3D5F8A] text-white h-12"
                    onClick={() => setIsRegistering(true)}
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M15.07 13.68c-.42 0-.68-.28-.68-.66 0-.37.26-.65.68-.65.42 0 .68.28.68.65 0 .38-.26.66-.68.66zm-3.14 0c-.42 0-.68-.28-.68-.66 0-.37.26-.65.68-.65.42 0 .68.28.68.65 0 .38-.26.66-.68.66zm1.57-9.64C7.74 4.04 3 8.78 3 14.54 3 17.64 4.67 20.34 7.24 21.8v-6.03c-.49-.3-.82-.84-.82-1.45 0-.95.77-1.72 1.72-1.72s1.72.77 1.72 1.72c0 .61-.33 1.15-.82 1.45V21.8c2.57-1.46 4.24-4.16 4.24-7.26 0-5.76-4.74-10.5-10.5-10.5z" />
                    </svg>
                    Регистрация через ВКонтакте
                  </Button>

                  <Button
                    className="w-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 h-12"
                    onClick={() => setIsRegistering(true)}
                  >
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Регистрация через Google
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">или</span>
                    </div>
                  </div>

                  {/* Phone Registration */}
                  <div className="space-y-3">
                    <div className="relative">
                      <Icon
                        name="Phone"
                        className="absolute left-3 top-3 text-gray-400"
                        size={20}
                      />
                      <Input
                        placeholder="+7 (999) 123-45-67"
                        className="pl-10 h-12 border-gray-200 focus:border-romantic"
                        type="tel"
                      />
                    </div>
                    <Button
                      className="w-full bg-romantic hover:bg-romantic-dark h-12"
                      onClick={() => setIsRegistering(true)}
                    >
                      <Icon name="MessageSquare" size={20} className="mr-2" />
                      Получить код в SMS
                    </Button>
                  </div>

                  <div className="text-center text-xs text-gray-500 mt-4">
                    Продолжая, вы соглашаетесь с{" "}
                    <a href="#" className="text-romantic hover:underline">
                      правилами сервиса
                    </a>{" "}
                    и{" "}
                    <a href="#" className="text-romantic hover:underline">
                      политикой конфиденциальности
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button
              size="lg"
              variant="outline"
              className="border-calm text-calm hover:bg-calm hover:text-white px-8 py-3"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="px-6 py-16 bg-white/50">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Поиск по интересам
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="relative">
                <Icon
                  name="Search"
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <Input
                  placeholder="Поиск по интересам..."
                  className="pl-10 py-3 border-gray-200 focus:border-romantic"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "путешествия",
                  "спорт",
                  "музыка",
                  "фотография",
                  "кино",
                  "книги",
                ].map((interest) => (
                  <Badge
                    key={interest}
                    variant="secondary"
                    className="bg-calm-light text-calm-dark hover:bg-calm cursor-pointer"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative">
                <Icon
                  name="MapPin"
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <Input
                  placeholder="Ваш город..."
                  className="pl-10 py-3 border-gray-200 focus:border-romantic"
                />
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <Icon name="Radar" size={16} />
                <span>Радиус поиска: 25 км</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profiles Section */}
      <section id="profiles" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Новые анкеты
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {profiles.map((profile, index) => (
              <Card
                key={profile.id}
                className={`overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                    <Icon name="Heart" className="text-romantic" size={20} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {profile.name}
                    </h4>
                    <span className="text-gray-500">{profile.age} лет</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Icon name="MapPin" size={16} className="mr-1" />
                    <span className="text-sm">{profile.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {profile.interests.map((interest) => (
                      <Badge
                        key={interest}
                        variant="outline"
                        className="text-xs border-calm text-calm"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-romantic hover:bg-romantic-dark">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Написать
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-calm text-calm hover:bg-calm hover:text-white"
                    >
                      <Icon name="Star" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-navy-light">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-12">
            Почему выбирают нас?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-navy" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Безопасность</h4>
              <p className="text-gray-600 text-sm">
                Проверка анкет и защита личных данных
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" className="text-navy" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Точный поиск</h4>
              <p className="text-gray-600 text-sm">
                Алгоритм подбора по интересам и локации
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageSquare" className="text-navy" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Общение</h4>
              <p className="text-gray-600 text-sm">
                Удобный мессенджер для знакомств
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-romantic to-calm text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold mb-6">Готовы найти любовь?</h3>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам счастливых пар
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-white text-romantic hover:bg-gray-100 px-8 py-3"
              >
                <Icon name="Heart" size={20} className="mr-2" />
                Создать анкету
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl font-bold text-gray-800">
                  Начать знакомства
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                {/* Social Login Buttons */}
                <Button
                  className="w-full bg-[#4C75A3] hover:bg-[#3D5F8A] text-white h-12"
                  onClick={() => setIsRegistering(true)}
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M15.07 13.68c-.42 0-.68-.28-.68-.66 0-.37.26-.65.68-.65.42 0 .68.28.68.65 0 .38-.26.66-.68.66zm-3.14 0c-.42 0-.68-.28-.68-.66 0-.37.26-.65.68-.65.42 0 .68.28.68.65 0 .38-.26.66-.68.66zm1.57-9.64C7.74 4.04 3 8.78 3 14.54 3 17.64 4.67 20.34 7.24 21.8v-6.03c-.49-.3-.82-.84-.82-1.45 0-.95.77-1.72 1.72-1.72s1.72.77 1.72 1.72c0 .61-.33 1.15-.82 1.45V21.8c2.57-1.46 4.24-4.16 4.24-7.26 0-5.76-4.74-10.5-10.5-10.5z" />
                  </svg>
                  Продолжить с ВКонтакте
                </Button>

                <Button
                  className="w-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 h-12"
                  onClick={() => setIsRegistering(true)}
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Продолжить с Google
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">или</span>
                  </div>
                </div>

                {/* Phone Registration */}
                <div className="space-y-3">
                  <div className="relative">
                    <Icon
                      name="Phone"
                      className="absolute left-3 top-3 text-gray-400"
                      size={20}
                    />
                    <Input
                      placeholder="+7 (999) 123-45-67"
                      className="pl-10 h-12 border-gray-200 focus:border-romantic"
                      type="tel"
                    />
                  </div>
                  <Button
                    className="w-full bg-romantic hover:bg-romantic-dark h-12"
                    onClick={() => setIsRegistering(true)}
                  >
                    <Icon name="MessageSquare" size={20} className="mr-2" />
                    Получить код в SMS
                  </Button>
                </div>

                <div className="text-center text-xs text-gray-500 mt-4">
                  Нажимая кнопку, вы принимаете{" "}
                  <a href="#" className="text-romantic hover:underline">
                    условия использования
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Heart" className="text-romantic" size={24} />
                <span className="text-xl font-bold">LoveConnect</span>
              </div>
              <p className="text-gray-400 text-sm">
                Лучший сервис знакомств для серьезных отношений
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Знакомства</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Поиск анкет
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Совместимость
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    События
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Помощь</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Безопасность
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Поддержка
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@loveconnect.ru
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 LoveConnect. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
