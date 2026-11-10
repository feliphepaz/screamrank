import User from "@/types/user";

interface AvatarProps {
  name: string;
  type: User["type"] | null;
}

export default function Avatar({ name, type }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const backgroundColor: Record<User["type"], string> = {
    blade: "bg-class-blade",
    veil: "bg-class-veil",
    flesh: "bg-class-flesh",
    mind: "bg-class-mind",
    tape: "bg-class-tape",
    cult: "bg-class-cult",
    immune: "bg-class-immune",
    void: "bg-class-void",
  };

  const textColor: Record<User["type"], string> = {
    blade: "tone-class-blade",
    veil: "tone-class-veil",
    flesh: "tone-class-flesh",
    mind: "tone-class-mind",
    tape: "tone-class-tape",
    cult: "tone-class-cult",
    immune: "tone-class-immune",
    void: "tone-class-void",
  };

  return (
    <div
      className={`avatar ${(type && textColor[type]) || "text-black"} flex shrink-0 items-center justify-center w-9 h-9 ${(type && backgroundColor[type]) || "bg-muted"} rounded-full`}
    >
      <span className="text-avatar">{initials}</span>
    </div>
  );
}
