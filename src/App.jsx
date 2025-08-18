import { useState } from "react";

import ImageGallery from "./components/ImageGallery.jsx";
import Hero from "./components/Hero.jsx";
import Header from "./components/Header.jsx";
import Problem from "./components/Problem.jsx";
import Solution from "./components/Solution.jsx";
import About from "./components/About.jsx";
import Program from "./components/Program.jsx";
import Results from "./components/Results.jsx";
import Benefits from "./components/Benefits.jsx";
import Course from "./components/Course.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Pricing from "./components/Pricing.jsx";
import Faq from "./components/Faq.jsx";
import FinalCta from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";
import VideoModal from "./components/VideoModal.jsx";
import FormModal from "./components/FormModal.jsx";
import { sendMessage } from "./api/telegramBot.js";

function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
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

  const scrollToSection = (sectionId) => {
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
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = e.target.checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
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
        `Ім’я: ${formData.firstName}`,
        `Телефон: ${formData.phone}`,
        `Тема: ${subject}`,
        `Email: ${formData.email}`,
        `Повідомлення: ${formData.comments || "-"}`,
      ].join("\n");

      // Отправляем сообщение в Telegram
      await sendMessage(message);

      // Показываем успех
      // alert("Дякуємо! Ми зв'яжемося з вами найближчим часом.");

      // Reset form and show success
      setFormData({
        firstName: "",
        phone: "",
        email: "",
        subject: "",
        comments: "",
      });
      setSubmitSuccess(true);

      // Close modal after 2 seconds
      setTimeout(() => {
        setIsContactFormOpen(false);
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
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      comments: "",
    });
    setSubmitSuccess(false);
    setSubmitError(""); // Сбрасываем ошибку
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <Header
        scrollToSection={scrollToSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      {/* Hero Section */}
      <Hero
        scrollToSection={scrollToSection}
        setIsVideoModalOpen={setIsVideoModalOpen}
      />
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
      <ImageGallery title="Наші тренування в дії" />
      {/* Key Benefits Section */}
      {/* <Benefits /> */}
      {/* Course Features Section */}
      <Course setIsVideoModalOpen={setIsVideoModalOpen} />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Pricing Section */}
      <Pricing />
      {/* FAQ Section */}
      <Faq />
      {/* Final CTA Section */}
      <FinalCta
        setIsContactFormOpen={setIsContactFormOpen}
        scrollToSection={scrollToSection}
      />
      {/* Footer */}
      <Footer />
      {/* Video Modal */}
      {/* {isVideoModalOpen && (
        <VideoModal setIsVideoModalOpen={setIsVideoModalOpen} />
      )} */}
      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <FormModal
          setIsContactFormOpen={setIsContactFormOpen}
          submitSuccess={submitSuccess}
          isSubmitting={isSubmitting}
          submitError={submitError}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          resetForm={resetForm}
        />
      )}
    </div>
  );
}

export default App;
