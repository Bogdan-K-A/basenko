import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageGalleryProps {
  title: string;
}

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

const ImageGallery: React.FC<ImageGalleryProps> = ({ title }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              {title}
            </h2>
            <p className="text-xl text-gray-600">
              Подивись, як проходять наші тренування та які результати досягають
              учні
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    {image.caption && (
                      <p className="text-white text-sm font-medium">
                        {image.caption}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage !== null && (
            <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
              <div className="relative max-w-4xl max-h-full">
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-400 transition-colors"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-400 transition-colors"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                {/* Image */}
                <img
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />

                {/* Caption */}
                {galleryImages[currentIndex].caption && (
                  <div className="absolute -bottom-12 left-0 right-0 text-center">
                    <p className="text-white text-lg">
                      {galleryImages[currentIndex].caption}
                    </p>
                  </div>
                )}

                {/* Image Counter */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                  <span className="text-white text-sm">
                    {currentIndex + 1} / {galleryImages.length}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
