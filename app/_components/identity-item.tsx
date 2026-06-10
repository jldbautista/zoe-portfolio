import type { IconName } from "../_lib/types";
import Icon from "./icon";

export default function IdentityItem({
  children,
  icon,
  title,
}: {
  children?: React.ReactNode;
  icon: IconName;
  title: string;
}) {
  return (
    <div className="grid grid-cols-[28px_1fr] items-start gap-3">
      <span className="grid h-7 w-7 place-items-center text-[var(--color-green)]">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div>
        <p className="font-mono text-sm font-semibold leading-6 text-[var(--color-text)]">
          {title}
        </p>
        {children ? (
          <p className="font-sans text-sm leading-6 text-[var(--color-muted)]">
            {children}
          </p>
        ) : null}
      </div>
    </div>
  );
}
