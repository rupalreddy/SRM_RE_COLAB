interface SectionTitleProps {
  badge: string;
  title: string;
  description: string;
}

const SectionTitle = ({
  badge,
  title,
  description,
}: SectionTitleProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto">

      <p className="text-blue-600 font-semibold mb-4">
        {badge}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
        {title}
      </h2>

      <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
        {description}
      </p>

    </div>
  );
};

export default SectionTitle;