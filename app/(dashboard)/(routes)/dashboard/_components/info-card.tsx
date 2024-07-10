import { IconBadge } from "@/components/icon-badge";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  variant?: "default" | "success";
  label: string;
  numberOfitems: number;
}

const InfoCard = ({
  variant,
  icon: Icon,
  numberOfitems,
  label,
}: InfoCardProps) => {
  return (
    <div className="border rounded-md flex items-center gap-x-2 p-3">
      <IconBadge variant={variant} icon={Icon} />
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-gray-500 text-sm">
          {numberOfitems} {"cours"}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
