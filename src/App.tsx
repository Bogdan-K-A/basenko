import { useState } from "react";
import {
  Play,
  Users,
  Award,
  Clock,
  ArrowRight,
  Star,
  CheckCircle,
  Target,
  Heart,
  Zap,
  Shield,
  PlayCircle,
  X,
  Quote,
  Calendar,
  Trophy,
  MessageCircle,
  Menu,
  Phone,
  Mail,
  TrendingUp,
} from "lucide-react";
import ImageGallery from "./components/ImageGallery";

const navBar = [
  { label: "Про курс", id: "about" },
  { label: "Програма", id: "program" },
  { label: "Переваги", id: "benefits" },
  { label: "Відгуки", id: "testimonials" },
  { label: "Тарифи", id: "pricing" },
  { label: "FAQ", id: "faq" },
];
const courseModules = [
  {
    day: "Понеділок",
    title: "Біг + Техніка",
    description:
      "Відпрацювання правильної техніки бігу, постановка стопи, робота з ритмом дихання",
    icon: Target,
    color: "blue",
    image:
      "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
  {
    day: "Вівторок",
    title: "Силові + Стабілізація",
    description:
      "Функціональні вправи для зміцнення м'язів кора, ніг та профілактики травм",
    icon: Zap,
    color: "orange",
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
  {
    day: "Четвер",
    title: "Біг + Інтервали",
    description:
      "Високоінтенсивні інтервальні тренування для розвитку швидкості та витривалості",
    icon: Heart,
    color: "red",
    image:
      "https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
  {
    day: "Субота",
    title: "Лонгран / Груповий забіг",
    description:
      "Довгі пробіжки для розвитку аеробної витривалості та групова мотивація",
    icon: Users,
    color: "green",
    image:
      "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
];

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    alt: "Тренування на стадіоні",
    caption: "Групові тренування на свіжому повітрі",
  },
  {
    src: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    alt: "Біг у парку",
    caption: "Індивідуальні тренування в парку",
  },
  {
    src: "https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    alt: "Розминка перед бігом",
    caption: "Правильна розминка - основа безпечного бігу",
  },
  {
    src: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    alt: "Фініш забігу",
    caption: "Досягнення цілей разом з командою",
  },
  {
    src: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    alt: "Тренування взимку",
    caption: "Тренуємося цілий рік незалежно від погоди",
  },
  {
    src: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    alt: "Медитація після бігу",
    caption: "Відновлення та релаксація після тренування",
  },
];

function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agreement: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64; // Height of fixed header
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  // Form handlers
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form and show success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        agreement: false,
      });
      setSubmitSuccess(true);

      // Close modal after 2 seconds
      setTimeout(() => {
        setIsContactFormOpen(false);
        setSubmitSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      agreement: false,
    });
    setSubmitSuccess(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center">
                  {/* <Target className="w-6 h-6 text-white" /> */}
                  <img
                    src="./images/logo.png"
                    alt="Formula Bigu"
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    Формула Бігу
                  </h1>
                  <p className="text-xs text-gray-600 hidden sm:block">
                    Онлайн тренування
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navBar.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>+380 (67) 123-45-67</span>
                </div>
                {/* <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>info@formulabigu.com</span>
                </div> */}
              </div>
              <button
                onClick={() => scrollToSection("pricing")}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Почати зараз
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              {navBar.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 border-t border-gray-200">
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+380 (67) 123-45-67</span>
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>info@formulabigu.com</span>
                  </div> */}
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-full font-semibold">
                  Почати зараз
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Running training background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-blue-50/80"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Твій біг.</span>
                <br />
                <span className="text-blue-600">Твій ритм.</span>
                <br />
                <span className="text-orange-500">Твій результат.</span>
                <br />
                <span className="text-gray-800 text-3xl sm:text-4xl lg:text-5xl mt-4 block">
                  Приєднуйся до{" "}
                  <span className="text-blue-600 font-extrabold">
                    Формули Бігу!
                  </span>
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
                Онлайн-тренування з голосовим супроводом, технікою, мотивацією
                та планом, який доводить до результату з будь-якої точки світу.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Приєднатися зараз
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Дивитися відео
                </button>
              </div>

              {/* Social Proof */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                <div className="flex flex-col items-center lg:items-start space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-orange-500" />
                    <span className="font-bold text-gray-900">
                      Олімпійський досвід
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 text-center lg:text-left">
                    Працював з олімпійцями
                  </p>
                </div>

                <div className="flex flex-col items-center lg:items-start space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-6 h-6 text-blue-500" />
                    <span className="font-bold text-gray-900">10+ років</span>
                  </div>
                  <p className="text-sm text-gray-600 text-center lg:text-left">
                    Професійного досвіду
                  </p>
                </div>

                <div className="flex flex-col items-center lg:items-start space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-green-500" />
                    <span className="font-bold text-gray-900">
                      1000+ учасників
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 text-center lg:text-left">
                    Досягли своїх цілей
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              {/* Feature Cards */}
              <div className="space-y-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        Голосовий супровід
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Персональний тренер завжди з тобою
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 transform hover:scale-105 transition-all duration-300 ml-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        Індивідуальний план
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Адаптований під твій рівень
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        Спільнота бігунів
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Підтримка та мотивація 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-[30px] sm:-top-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-4 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs opacity-90">Задоволених клієнтів</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-2xl p-4 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold">5★</div>
                  <div className="text-xs opacity-90">Середній рейтинг</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-800">
              Знайомі відчуття?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-400">
                <div className="text-4xl mb-4">😔</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Немає мотивації
                </h3>
                <p className="text-gray-600">
                  Хочеш почати бігати, але не знаєш з чого розпочати. Кожен раз
                  відкладаєш "на завтра"
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-400">
                <div className="text-4xl mb-4">🏃‍♂️</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Швидко втомлюєшся
                </h3>
                <p className="text-gray-600">
                  Після кількох хвилин бігу важко дихати, болять ноги і хочеться
                  зупинитися
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-400">
                <div className="text-4xl mb-4">❓</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Немає плану
                </h3>
                <p className="text-gray-600">
                  Не розумієш, як правильно тренуватися, щоб бачити прогрес і не
                  травмуватися
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                <strong className="text-orange-500">Ти не один!</strong> 87%
                людей кидають біг через перший місяць через відсутність
                правильної методики та підтримки.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section
        id="solution"
        className="py-20 bg-gradient-to-r from-blue-500 to-cyan-400"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Рішення вже існує!
              </h2>
              <p className="text-xl text-blue-50 max-w-3xl mx-auto">
                "Формула Бігу" - це науково обґрунтована система тренувань, яка
                допоможе тобі стати бігуном за 8 тижнів
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      Персональний підхід
                    </h3>
                    <p className="text-blue-50">
                      Індивідуальний план тренувань під твій рівень підготовки
                      та цілі
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      Без перевантажень
                    </h3>
                    <p className="text-blue-50">
                      Поступове нарощування навантаження без ризику травм
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      24/7 підтримка
                    </h3>
                    {/* <p className="text-blue-50">
                      Постійна підтримка тренера через мобільний додаток
                    </p> */}
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white text-center">
                  Що ти отримуєш:
                </h3>
                <div className="space-y-4">
                  {[
                    "24 живі онлайн тренування",
                    "Персональний план харчування",
                    "Доступ до закритої спільноти",
                    // "Мобільний додаток з трекінгом",
                    "Сертифікат після завершення",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-300" />
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Trainer */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="bg-gradient-to-br from-orange-400 to-red-400 w-80 h-80 mx-auto rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  СБ
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
                  <Award className="w-5 h-5 text-orange-500" />
                  <span className="text-orange-700 font-semibold">
                    Майстер спорту України
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                  Сергій Басенко
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Професійний тренер з бігу з 15-річним досвідом. Підготував 12
                  олімпійців, понад 50 майстрів спорту та допоміг більше ніж
                  2000 людей досягти своїх цілей у бігу.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">
                      10+
                    </div>
                    <div className="text-gray-600">років досвіду</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">
                      1000+
                    </div>
                    <div className="text-gray-600">учнів</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">12</div>
                    <div className="text-gray-600">олімпійців</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">
                      50+
                    </div>
                    <div className="text-gray-600">майстрів спорту</div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <Quote className="w-8 h-8 text-orange-500 mb-4" />
                  <p className="text-gray-700 italic text-lg">
                    "Моя місія - показати кожній людині, що біг може стати
                    джерелом радості та здоров'я, а не страждання. Правильна
                    методика - ключ до успіху!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Program Section */}
      <section
        id="program"
        className="py-20 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Програма на місяць
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Структурована система тренувань, що дає відчуття прогресу та
              результативності
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {courseModules.map((training, index) => {
              return (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={training.image}
                        alt={training.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                      {/* Day Badge */}
                      <div
                        className={`absolute top-4 left-4 bg-${training.color}-500 text-white px-3 py-1 rounded-full text-sm font-semibold`}
                      >
                        {training.day}
                      </div>

                      {/* Icon */}
                      <div
                        className={`absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center`}
                      >
                        <training.icon
                          className={`w-6 h-6 text-${training.color}-600`}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {training.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {training.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Indicator */}
          {/* <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Твій прогрес по тижнях
              </h3>
              <p className="text-gray-600">
                Поступове збільшення навантаження та складності
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { week: "Тиждень 1", focus: "Адаптація", progress: 25 },
                { week: "Тиждень 2", focus: "Техніка", progress: 50 },
                { week: "Тиждень 3", focus: "Витривалість", progress: 75 },
                { week: "Тиждень 4", focus: "Результат", progress: 100 },
              ].map((week, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <svg
                      className="w-20 h-20 transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        className="text-gray-200"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-blue-600"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeDasharray={`${week.progress}, 100`}
                        strokeLinecap="round"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-900">
                        {week.progress}%
                      </span>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{week.week}</h4>
                  <p className="text-sm text-gray-600">{week.focus}</p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Гнучкий графік</h4>
              <p className="text-gray-600 text-sm">
                Адаптуйте тренування під свій розклад
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
              <Trophy className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">
                Прогресивне навантаження
              </h4>
              <p className="text-gray-600 text-sm">
                Поступове збільшення інтенсивності
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
              <Users className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">
                Групова підтримка
              </h4>
              <p className="text-gray-600 text-sm">
                Мотивація від спільноти бігунів
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results/Benefits */}
      <section id="results" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                Твої результати через 8 тижнів
              </h2>
              <p className="text-xl text-gray-600">
                Гарантовані зміни при виконанні програми курсу
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-green-400 to-green-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Пробіжиш 5-10 км
                </h3>
                <p className="text-gray-600">
                  Без задишки і дискомфорту долатимеш дистанції, про які раніше
                  не мріяв
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Покращиш здоров'я
                </h3>
                <p className="text-gray-600">
                  Нормалізується тиск, покращиться робота серця, зміцниться
                  імунітет
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Отримаєш енергію
                </h3>
                <p className="text-gray-600">
                  Підвищиться працездатність, покращиться настрій і якість сну
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Схуднеш на 5-12 кг
                </h3>
                <p className="text-gray-600">
                  Природне спалювання жиру та формування красивого рельєфу тіла
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-red-400 to-red-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Підвищиш самооцінку
                </h3>
                <p className="text-gray-600">
                  Відчуття гордості за досягнення та нова впевненість у собі
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-teal-400 to-teal-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Знайдеш однодумців
                </h3>
                <p className="text-gray-600">
                  Станеш частиною спільноти активних і мотивованих людей
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 bg-green-100 px-6 py-3 rounded-full">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-green-800 font-semibold text-lg">
                  Гарантія результату або повернення коштів
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <ImageGallery images={galleryImages} title="Наші тренування в дії" />

      {/* Key Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              П'ять стовпів успішного бігу
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Наша методика базується на комплексному підході до розвитку бігуна
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                icon: Target,
                title: "Техніка",
                description: "Правильна постановка стопи та біомеханіка руху",
                color: "blue",
              },
              {
                icon: Heart,
                title: "Витривалість",
                description: "Розвиток серцево-судинної системи",
                color: "red",
              },
              {
                icon: Zap,
                title: "Сила",
                description: "Функціональна підготовка м'язів",
                color: "yellow",
              },
              {
                icon: Shield,
                title: "Гнучкість",
                description: "Мобільність суглобів та профілактика травм",
                color: "green",
              },
              {
                icon: Trophy,
                title: "Мотивація",
                description: "Психологічна підготовка та досягнення цілей",
                color: "purple",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full bg-${benefit.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon
                    className={`w-10 h-10 text-${benefit.color}-600`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Features Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-blue-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Що включає курс "Формула Бігу"?
              </h2>

              <div className="space-y-6">
                {[
                  "Персональний план тренувань на 12 тижнів",
                  "Голосовий супровід кожного тренування",
                  "Відеоуроки з техніки бігу та розминки",
                  "Доступ до закритої спільноти бігунів",
                  "Щотижневі прямі ефіри з тренером",
                  // "Мобільний додаток для відстеження прогресу",
                  "Індивідуальні консультації (2 рази на місяць)",
                  "Сертифікат після завершення курсу",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-lg">{feature}</p>
                  </div>
                ))}
              </div>

              {/* <div className="mt-10">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Детальніше про курс
                </button>
              </div> */}
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Running training session"
                className="rounded-2xl shadow-2xl"
              />

              {/* Video Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                >
                  <PlayCircle className="w-12 h-12 text-blue-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Історії успіху наших учасників
            </h2>
            <p className="text-xl text-gray-600">
              Реальні результати реальних людей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Олена Петренко",
                result: "Пробігла перший марафон за 4:15",
                text: "Завдяки 'Формулі Бігу' я не тільки пробігла свій перший марафон, але й отримала неймовірне задоволення від процесу. Голосовий супровід допомагав не здаватися навіть у найважчі моменти.",
                image:
                  "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
              },
              {
                name: "Андрій Коваленко",
                result: "Схуд на 15 кг за 3 місяці",
                text: "Курс змінив моє ставлення до бігу. Тепер це не просто фізичне навантаження, а медитація в русі. Результат перевершив усі очікування!",
                image:
                  "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
              },
              {
                name: "Марія Іваненко",
                result: "Покращила час на 10км на 8 хвилин",
                text: "Професійний підхід тренера та підтримка спільноти створили ідеальні умови для розвитку. Рекомендую всім, хто хоче серйозно займатися бігом!",
                image:
                  "https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Quote className="w-8 h-8 text-blue-400 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-blue-600 font-semibold">
                      {testimonial.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Інвестуй у свій успіх
            </h2>
            <p className="text-xl text-gray-600">
              Обери тариф, який підходить саме тобі
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Базовий
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  ₴2,999
                </div>
                <p className="text-gray-600">одноразовий платіж</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "12-тижневий план тренувань",
                  "Голосовий супровід",
                  "Доступ до спільноти",
                  // "Мобільний додаток",
                  "Базова підтримка",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full font-semibold transition-colors duration-300">
                Обрати базовий
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-xl border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Найпопулярніший
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Преміум</h3>
                <div className="text-4xl font-bold text-white mb-2">₴4,999</div>
                <p className="text-blue-100">одноразовий платіж</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Все з базового тарифу",
                  "Індивідуальні консультації",
                  "Персональний план харчування",
                  "Пріоритетна підтримка",
                  "Сертифікат завершення",
                  "Доступ до архіву тренувань",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-white hover:bg-gray-100 text-blue-600 py-4 rounded-full font-semibold transition-colors duration-300">
                Обрати преміум
              </button>
            </div>
          </div>

          {/* <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Не впевнений? Спробуй безкоштовне тренування!
            </p>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Безкоштовне тренування
            </button>
          </div> */}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Часті запитання
            </h2>
            <p className="text-xl text-gray-600">
              Відповіді на найпопулярніші питання
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Чи підходить курс для початківців?",
                answer:
                  "Абсолютно! Курс розроблений для людей з будь-яким рівнем підготовки. Ми починаємо з основ і поступово збільшуємо навантаження.",
              },
              {
                question: "Скільки часу потрібно приділяти тренуванням?",
                answer:
                  "Рекомендуємо 3-4 тренування на тиждень по 30-60 хвилин. Програма гнучка і адаптується під ваш графік.",
              },
              {
                question: "Чи потрібне спеціальне обладнання?",
                answer:
                  "Потрібні лише якісні бігові кросівки. Все інше обладнання опціональне і може бути замінено підручними засобами.",
              },
              {
                question: "Що робити, якщо я пропустив тренування?",
                answer:
                  "Нічого страшного! Програма дозволяє гнучко планувати тренування. Ви завжди можете наздогнати пропущене.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`transform transition-transform duration-300 ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовий змінити своє життя?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Приєднуйся до тисяч людей, які вже трансформували своє тіло та розум
            завдяки бігу
          </p>

          <div
            onClick={() => scrollToSection("pricing")}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              Почати зараз
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsContactFormOpen(true)}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Задати питання
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <Calendar className="w-8 h-8 text-blue-200 mx-auto mb-2" />
              <p className="text-blue-100">
                Гарантія повернення коштів 30 днів
              </p>
            </div>
            <div>
              <Shield className="w-8 h-8 text-blue-200 mx-auto mb-2" />
              <p className="text-blue-100">Безпечні платежі</p>
            </div>
            <div>
              <Users className="w-8 h-8 text-blue-200 mx-auto mb-2" />
              <p className="text-blue-100">Підтримка 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Формула Бігу</h3>
              <p className="text-gray-400 leading-relaxed">
                Онлайн-тренування з бігу для досягнення ваших спортивних цілей
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Курси</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Базовий курс
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Преміум курс
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Індивідуальні тренування
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Підтримка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Часті питання
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакти
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Технічна підтримка
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакти</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@formulabigu.com</p>
                <p>Телефон: +380 (67) 123-45-67</p>
                <p>Telegram: @formulabigu</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Формула Бігу. Всі права захищені.</p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold">
                Знайомство з курсом "Формула Бігу"
              </h3>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <PlayCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Тут буде ваше промо-відео курсу
                    <br />
                    (30-45 секунд знайомства з "Формулою Бігу")
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-in fade-in duration-300"
          onClick={() => setIsContactFormOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold text-gray-900">
                Форма зворотного зв'язку
              </h3>
              <button
                onClick={() => setIsContactFormOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="text-center mb-6">
                <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <p className="text-gray-600">
                  Маєте питання? Заповніть форму і ми зв'яжемося з вами
                  найближчим часом!
                </p>
              </div>

              {submitSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Дякуємо за повідомлення!
                  </h3>
                  <p className="text-gray-600">
                    Ми зв'яжемося з вами найближчим часом.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Ім'я *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Ваше ім'я"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Прізвище
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Ваше прізвище"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="+380 (67) 123-45-67"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Тема звернення
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Оберіть тему</option>
                      <option value="course-info">Інформація про курс</option>
                      <option value="pricing">Питання по тарифам</option>
                      <option value="technical">Технічна підтримка</option>
                      <option value="partnership">Співпраця</option>
                      <option value="other">Інше</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Повідомлення *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Опишіть ваше питання або повідомлення..."
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="agreement"
                      name="agreement"
                      checked={formData.agreement}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor="agreement"
                      className="text-sm text-gray-600"
                    >
                      Я погоджуюся з{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        умовами обробки персональних даних
                      </a>
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Надсилання...
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-5 h-5" />
                          Надіслати повідомлення
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        resetForm();
                        setIsContactFormOpen(false);
                      }}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 rounded-lg font-semibold transition-colors duration-300"
                    >
                      Скасувати
                    </button>
                  </div>
                </form>
              )}

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-center text-sm text-gray-500">
                  <p className="mb-2">Або зв'яжіться з нами безпосередньо:</p>
                  <div className="flex justify-center gap-6">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span>+380 (67) 123-45-67</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span>info@formulabigu.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
