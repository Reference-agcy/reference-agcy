import { Button } from "@app/_components/ui/button";
import { cn } from "@app/_lib/utils";

interface Props {
  process: {
    title: string;
    description: string;
    stage: string;
    button: {
      text: string;
      link: string;
    };
    cards: {
      title: string;
      description: string;
    }[];
  };
  isReversed: boolean;
}

export default function SingleStage({ process, isReversed }: Props) {
  return (
    <div
      className={cn(
        "relative z-10 mx-auto my-[100px] flex items-center gap-16 lang-ar:max-lg:flex-col-reverse lang-en:max-lg:flex-col-reverse lg:my-[140px] 2xl:w-[65%]",
        {
          "lang-ar:flex-row-reverse lang-en:flex-row": !isReversed,
          "lang-ar:flex-row lang-en:flex-row-reverse": isReversed,
        },
      )}
    >
      <div className="flex w-full gap-7 max-md:flex-col lg:w-1/2 lg:flex-col">
        {process.cards.map((card, i) => (
          <div
            key={i}
            data-aos="fade-in"
            data-aos-delay="200"
            className="flex min-h-[220px] flex-col gap-6 rounded-2xl bg-gray-0 px-8 py-9"
          >
            <h3 className="text-base font-medium text-gray-900">
              {card.title}
            </h3>
            <p className="text-gray-300">{card.description}</p>
          </div>
        ))}
      </div>

      <div
        data-aos={isReversed ? "fade-right" : "fade-left"}
        className="flex w-full flex-col items-start gap-3 lg:w-1/2"
      >
        <p className="uppercase text-gray-300">{process.stage}</p>
        <h2 className="text-6xl font-extrabold tracking-tight text-gray-900">
          {process.title}
        </h2>
        <p className="whitespace-pre-line text-gray-300">
          {process.description}
        </p>

        <Button className="min-h-[42px] min-w-[140px]">
          {process.button.text}
        </Button>
      </div>
    </div>
  );
}
