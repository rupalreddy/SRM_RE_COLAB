import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

const StatCard = ({
  title,
  value,
  icon: Icon,
  color,
}: StatCardProps) => {
  return (
    <div
      className="
        w-full
        min-w-0
        bg-white
        dark:bg-zinc-900
        border
        border-gray-200
        dark:border-zinc-800
        rounded-3xl
        p-5
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
      "
    >

      <div className="flex items-center justify-between gap-4">

        {/* LEFT */}
        <div className="flex-1 min-w-0">

          <p
            className="
              text-sm
              font-medium
              text-gray-500
              dark:text-gray-400
              leading-snug
            "
          >
            {title}
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
              text-gray-900
              dark:text-white
              leading-none
            "
          >
            {value}
          </h2>

        </div>

        {/* RIGHT ICON */}
        <div
          className={`
            w-14
            h-14
            rounded-2xl
            flex
            items-center
            justify-center
            shrink-0
            ${color}
          `}
        >

          <Icon className="w-7 h-7 text-white" />

        </div>

      </div>

    </div>
  );
};

export default StatCard;


//dws

