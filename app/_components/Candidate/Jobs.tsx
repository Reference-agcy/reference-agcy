import JobCards from "./JobCards";
import Tabs from "./Tabs";


interface Props {
  t: (key: string) => string;
}

export default function Jobs({ t }: Props) {
  return (
    <div className="flex flex-col items-center gap-[1.375rem] py-6 max-md:py-12">
      <Tabs />

      <JobCards t={t} />
    </div>
  );
}