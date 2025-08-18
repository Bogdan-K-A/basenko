import { CheckCircle, MessageCircle, Phone, Mail, X } from "lucide-react";

const FormModal = ({
  setIsContactFormOpen,
  submitSuccess,
  isSubmitting,
  submitError,
  formData,
  handleInputChange,
  handleSubmit,
  resetForm,
}) => {
  return (
    <>
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
              <>
                <div className="text-center mb-6">
                  <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <p className="text-gray-600">
                    Маєте питання? Заповніть форму і ми зв'яжемося з вами
                    найближчим часом!
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Показываем ошибку если есть */}
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            !
                          </span>
                        </div>
                        <span className="text-red-800">{submitError}</span>
                      </div>
                    </div>
                  )}

                  {/* Показываем статус отправки */}
                  {isSubmitting && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-blue-800">
                          Відправляємо повідомлення...
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="grid  gap-4">
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
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Тема *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Оберіть тему</option>
                      <option value="general">Загальне питання</option>
                      <option value="course">Питання про курс</option>
                      <option value="partnership">Співпраця</option>
                      <option value="other">Інше</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="comments"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Повідомлення *
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Опишіть ваше питання або повідомлення..."
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Надсилання...
                        </>
                      ) : (
                        <>
                          Надіслати повідомлення
                          <MessageCircle className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        resetForm();
                        setIsContactFormOpen(false);
                      }}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      Скасувати
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 p-6 border-t">
            <h4 className="font-semibold text-gray-900 mb-3">
              Контактна інформація
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+380 (67) 123-45-67</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@formulabigu.com</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormModal;
