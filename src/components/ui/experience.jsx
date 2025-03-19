export const ExperienceCard = ({ title, description, imageSrc }) => {
  return (
    <div
      className="relative bg-slate-900/[0.8] backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased flex-1 bg-[linear-gradient(90deg,rgba(4,7,29,1),0%,rgba(12,14,35,1),100%)] p-4 transition-transform translate-y-1 hover:scale-110 duration-300"
      style={{ borderRadius: "calc(1.75rem * 0.96)" }}
    >
      <div className="w-full flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
        <img
          alt={title}
          loading="lazy"
          width={120}
          height={120}
          decoding="async"
          className="w-32 h-32 rounded-full object-cover"
          style={{ color: "transparent" }}
          src={`images/experience/${imageSrc}.png`}
        />
        <div className="lg:ms-5">
          <h3 className="text-xl md:text-lg font-bold text-start">{title}</h3>
          <p className="text-start mt-3">{description}</p>
        </div>
      </div>
    </div>
  );
};
