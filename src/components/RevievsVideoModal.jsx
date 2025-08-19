import { X } from "lucide-react";

const revievs = [
  {
    link: "https://youtu.be/L3Ks3ABM-Ho",
    src: "./images/rev-img/1.jpg",
    alt: "video",
  },
  {
    link: "https://youtu.be/kcq6c6LFLC4",
    src: "./images/rev-img/2.jpg",
    alt: "video",
  },
  {
    link: "https://www.youtube.com/shorts/759IKRqYqcs",
    src: "./images/rev-img/3.jpg",
    alt: "video",
  },
];

const RevievsVideoModal = ({ setRevievsVideoModalOpen }) => {
  return (
    <>
      <div
        onClick={() => setRevievsVideoModalOpen(false)}
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        >
          <div className="flex justify-between items-center p-6 border-b">
            <h3 className="text-xl font-bold">
              Відеовідгуки від наших учасників
            </h3>
            <button
              onClick={() => setRevievsVideoModalOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6">
            <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
              <ul className="grid grid-flow-col auto-cols-[minmax(250px,1fr)] gap-4 overflow-x-auto overflow-y-hidden h-[500px] snap-x snap-mandatory">
                {revievs.map((rev, index) => (
                  <li key={index} className="w-full h-full snap-start">
                    <a
                      href={rev.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={rev.src}
                        alt={rev.alt}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RevievsVideoModal;
