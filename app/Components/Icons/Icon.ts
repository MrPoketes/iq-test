import { CheckIcon } from "./icons/CheckIcon";
import { ChevronLeftIcon } from "./icons/ChevronLeftIcon";
import { ChevronRightIcon } from "./icons/ChevronRightIcon";
import { DoubleChevronRightIcon } from "./icons/DoubleChevronRightIcon";
import { LogoIcon } from "./icons/LogoIcon";

export interface IconProps {
  className?: string;
}

export const Icon = {
  Logo: LogoIcon,
  Check: CheckIcon,
  ChevronLeft: ChevronLeftIcon,
  ChevronRight: ChevronRightIcon,
  DoubleChevronRight: DoubleChevronRightIcon,
};
