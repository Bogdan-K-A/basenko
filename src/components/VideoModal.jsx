import { PlayCircle, X } from "lucide-react";

// Модалка для проигрывания видео; источник и заголовок приходят через пропсы
const VideoModal = ({ setIsVideoModalOpen, src, title }) => {
  return (
    <>
      <div
        onClick={() => setIsVideoModalOpen(false)}
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        >
          <div className="flex justify-between items-center p-6 border-b">
            <h3 className="text-xl font-bold">{title}</h3>
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6">
            <div className="bg-gray-100 rounded-xl flex items-center justify-center">
              <div className="text-center w-full">
                <video
                  src={src}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[70vh] rounded-xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoModal;
