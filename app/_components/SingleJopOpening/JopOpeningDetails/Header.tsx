import ActionsButtons from "@app/_components/SingleJopOpening/ActionsButtons";

type HeaderProps = {
  jobTitle: string;
};

function Header({ jobTitle }: HeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-gray-900">{jobTitle}</h2>
      <ActionsButtons />
    </div>
  );
}

export default Header;
