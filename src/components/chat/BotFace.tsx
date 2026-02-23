import { cn } from "@/lib/utils"

type BotFaceState = "idle" | "hover" | "open"

const BotFace = ({ state }: { state: BotFaceState }) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex items-center justify-center w-full h-full",
        state === "idle" && "bot-face--looking"
      )}
    >
      {/* Left eye */}
      <div className={cn(
        "rounded-full bg-current transition-all duration-200",
        state === "idle" && "w-[5px] h-[5px] bot-eye--idle",
        state === "hover" && "w-[6px] h-[4px] bot-eye--alert",
        state === "open" && "w-[5px] h-[3px] rounded-t-full rounded-b-none bot-eye--happy"
      )} />
      {/* Connecting line */}
      <div className={cn(
        "bg-current transition-all duration-200",
        state === "idle" && "w-[8px] h-[1px] bot-line--idle",
        state === "hover" && "w-[8px] h-[1.5px] bot-line--alert",
        state === "open" && "w-[8px] h-[1px] bot-line--happy"
      )} />
      {/* Right eye */}
      <div className={cn(
        "rounded-full bg-current transition-all duration-200",
        state === "idle" && "w-[5px] h-[5px] bot-eye--idle",
        state === "hover" && "w-[6px] h-[4px] bot-eye--alert",
        state === "open" && "w-[5px] h-[3px] rounded-t-full rounded-b-none bot-eye--happy"
      )} />
    </div>
  )
}

export default BotFace
