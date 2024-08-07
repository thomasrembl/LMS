import { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const backroundVariants = cva("rounded-full flex items-center justify-center", {
  variants: {
    variant: {
      default: "bg-blue-ribbon-200",
      success: "bg-emerald-100",
      edit: "bg-blue-ribbon-200",
    },
    size: {
      default: "p-2",
      sm: "p-1",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const iconVariant = cva("", {
  variants: {
    variant: {
      default: "text-blue-ribbon-950",
      success: "text-emerald-700",
      edit: "text-blue-ribbon-500",
    },
    size: {
      default: "h-8 w-8",
      sm: "h-4 w-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type BackgroundVariantsProps = VariantProps<typeof backroundVariants>;
type IconVariantsProps = VariantProps<typeof iconVariant>;

interface IconBadgeProps extends BackgroundVariantsProps, IconVariantsProps {
  icon: LucideIcon;
}

export const IconBadge = ({ icon: Icon, variant, size }: IconBadgeProps) => {
  return (
    <div className={cn(backroundVariants({ variant, size }))}>
      <Icon className={cn(iconVariant({ variant, size }))} />
    </div>
  );
};
