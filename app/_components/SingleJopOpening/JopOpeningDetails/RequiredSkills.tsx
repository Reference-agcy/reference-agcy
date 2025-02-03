import { Badge } from "@app/_components/ui/badge";

type RequiredSkillsProps = { requiredSkills: string };

function RequiredSkills({ requiredSkills }: RequiredSkillsProps) {
  const preparedSkills = requiredSkills.split(",").map((skill) => skill.trim());

  return (
    <ul className="flex flex-wrap gap-2">
      {preparedSkills.map((skill, index) => (
        <li key={`required-skill-${index}`}>
          <Badge>{skill}</Badge>
        </li>
      ))}
    </ul>
  );
}

export default RequiredSkills;
