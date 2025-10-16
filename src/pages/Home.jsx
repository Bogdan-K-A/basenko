import { useState, useCallback, useMemo } from "react";
import ImageGallery from "../components/ImageGallery.jsx";
import Hero from "../components/Hero.jsx";
import Header from "../components/Header.jsx";
import Problem from "../components/Problem.jsx";
import Solution from "../components/Solution.jsx";
import About from "../components/About.jsx";
import Program from "../components/Program.jsx";
import Results from "../components/Results.jsx";
import Course from "../components/Course.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Pricing from "../components/Pricing.jsx";
import Faq from "../components/Faq.jsx";
import FinalCta from "../components/FinalCta.jsx";
import Footer from "../components/Footer.jsx";
import { sendMessage } from "../api/telegramBot.js";
import VideoModal from "../components/VideoModal.jsx";
import RevievsVideoModal from "../components/RevievsVideoModal.jsx";
import FormModal from "../components/FormModal.jsx";
import VideoGallery from "../components/VideoGallery.jsx";

// Простой хук для модалок: open/close + состояние
const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  return { isOpen, open, close };
};

const Home = () => {
  const videoModal = useModal();
  const [currentVideo, setCurrentVideo] = useState({ src: "", title: "" }); // выбранное видео
  const contactForm = useModal();
  const reviewsVideoModal = useModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    subject: "",
    comments: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Мемоизированные обработчики
  const scrollToSection = useCallback((sectionId) => {
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
  }, []);

  // Обработчики open/close заменены на useModal
  // Form handlers
  const handleInputChange = useCallback((e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = e.target.checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitError(""); // Сбрасываем ошибку

      try {
        let subject = "";
        switch (formData.subject) {
          case "course":
            subject = "Питання про курс";
            break;
          case "partnership":
            subject = "Співпраця";
            break;
          case "other":
            subject = "Інше";
            break;
          default:
            subject = "Загальне питання";
        }
        // Формируем сообщение для Telegram
        const message = [
          "НОВЕ ПИТАННЯ З САЙТУ ФОРМУЛА БІГУ:",
          `Ім'я: ${formData.firstName}`,
          `Телефон: ${formData.phone}`,
          `Тема: ${subject}`,
          `Email: ${formData.email}`,
          `Повідомлення: ${formData.comments || "-"}`,
        ].join("\n");

        // Отправляем сообщение в Telegram
        await sendMessage(message);

        // Reset form and show success
        setFormData({
          firstName: "",
          phone: "",
          email: "",
          subject: "",
          comments: "",
        });
        setSubmitSuccess(true);

        // Close modal after 3 seconds
        setTimeout(() => {
          contactForm.close();
          setSubmitSuccess(false);
        }, 3000);
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitError(
          error.message ||
            "Помилка при відправці. Спробуйте ще раз або зв'яжіться з нами по телефону."
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  const resetForm = useCallback(() => {
    setFormData({
      firstName: "",
      email: "",
      phone: "",
      subject: "",
      comments: "",
    });
    setSubmitSuccess(false);
    setSubmitError(""); // Сбрасываем ошибку
  }, []);

  // Открыть видео курса
  const openCourseVideo = useCallback(() => {
    setCurrentVideo({
      src: "./video/2.mp4",
      title: 'Знайомство з курсом "Формула Бігу"',
    });
    videoModal.open();
  }, [videoModal.open]);

  // Открыть видео галереи
  const openGalleryVideo = useCallback(() => {
    setCurrentVideo({
      src: "./video/record.mp4",
      title: "Наші тренування в дії",
    });
    videoModal.open();
  }, [videoModal.open]);

  // Мемоизированные пропсы для компонентов
  const heroProps = useMemo(
    () => ({
      scrollToSection,
      // Открывает модалку и заранее устанавливает видео 2.mp4
      setIsVideoModalOpen: openCourseVideo,
    }),
    [scrollToSection, openCourseVideo]
  );

  const finalCtaProps = useMemo(
    () => ({
      setIsContactFormOpen: contactForm.open,
      scrollToSection,
    }),
    [contactForm.open, scrollToSection]
  );

  const formModalProps = useMemo(
    () => ({
      setIsContactFormOpen: contactForm.close,
      submitSuccess,
      isSubmitting,
      submitError,
      formData,
      handleInputChange,
      handleSubmit,
      resetForm,
    }),
    [
      contactForm.close,
      submitSuccess,
      isSubmitting,
      submitError,
      formData,
      handleInputChange,
      handleSubmit,
      resetForm,
    ]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <Header
        scrollToSection={scrollToSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      {/* Hero Section */}
      <Hero {...heroProps} />
      {/* Problem Section */}
      <Problem scrollToSection={scrollToSection} />
      {/* Solution Section */}
      <Solution />
      {/* About Trainer */}
      <About />
      {/* Monthly Program Section */}
      <Program />
      {/* Results/Benefits */}
      <Results />
      {/* Image Gallery */}
      {/* <ImageGallery title="Наші тренування в дії" /> */}
      <VideoGallery
        title="Наші тренування в дії"
        setIsVideoModalOpen={openGalleryVideo}
      />

      {/* Course Features Section */}
      <Course
        setIsVideoModalOpen={openCourseVideo}
        scrollToSection={scrollToSection}
      />
      {/* Testimonials Section */}
      <Testimonials handleRevievsVideoModalOpen={reviewsVideoModal.open} />
      {/* Pricing Section */}
      <Pricing />
      {/* FAQ Section */}
      <Faq />
      {/* Final CTA Section */}
      <FinalCta {...finalCtaProps} />
      {/* Footer */}
      <Footer />

      {/* Video Modal */}
      {videoModal.isOpen && (
        <VideoModal
          setIsVideoModalOpen={videoModal.close}
          src={currentVideo.src}
          title={currentVideo.title}
        />
      )}
      {/* Revievs Video Modal */}
      {reviewsVideoModal.isOpen && (
        <RevievsVideoModal setRevievsVideoModalOpen={reviewsVideoModal.close} />
      )}
      {/* Contact Form Modal */}
      {contactForm.isOpen && <FormModal {...formModalProps} />}
    </div>
  );
};

export default Home;
