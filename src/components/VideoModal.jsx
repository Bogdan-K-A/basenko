import { PlayCircle, X } from "lucide-react";

const VideoModal = ({ setIsVideoModalOpen }) => {
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
              <div className="text-center ">
                <video
                  src="./video/2.mp4"
                  controls
                  autoPlay
                  className="h-full w-full rounded-xl"
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
