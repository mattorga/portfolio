import { useCallback, useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { ScrollArea } from '@/components/ui/scroll-area'

export interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatMessagesProps {
  messages: Message[]
}

type ContentSegment =
  | { type: 'text'; value: string }
  | { type: 'audio'; songId: string }

const AUDIO_REGEX = /\[AUDIO_PLAYER:([a-zA-Z0-9_-]+)/g

const SONG_MAP: Record<string, { src: string; title: string }> = {
  panaginip: { src: '/panaginip.mp3', title: 'Panaginip — Sinai' },
  mhp: { src: '/mhp.mp3', title: 'MHP (My Heart Prays) — Sinai' },
  anghel: { src: '/anghel.mp3', title: 'Anghel — Sinai' },
}

function parseContent(content: string): ContentSegment[] {
  const segments: ContentSegment[] = []
  let lastIndex = 0

  for (const match of content.matchAll(AUDIO_REGEX)) {
    const before = content.slice(lastIndex, match.index)
    if (before) segments.push({ type: 'text', value: before })
    segments.push({ type: 'audio', songId: match[1] })
    lastIndex = match.index! + match[0].length
  }

  const remaining = content.slice(lastIndex)
  if (remaining) segments.push({ type: 'text', value: remaining })

  return segments
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

const AudioPlayer = ({ songId }: { songId: string }) => {
  const song = SONG_MAP[songId]
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }
  }, [])

  const seek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    if (!audio || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    audio.currentTime = ratio * duration
  }, [duration])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onTime = () => setCurrentTime(audio.currentTime)
    const onLoaded = () => {
      setDuration(audio.duration)
      audio.play().catch(() => {})
    }

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('loadedmetadata', onLoaded)

    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('loadedmetadata', onLoaded)
    }
  }, [])

  if (!song) return null

  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <div className="my-2 rounded-lg bg-background/50 border border-border p-3 not-prose">
      <audio ref={audioRef} src={song.src} preload="metadata" />
      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          className="text-accent hover:text-foreground transition-colors text-sm font-mono shrink-0"
        >
          {playing ? '||' : '>'}
        </button>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-accent truncate">{song.title}</p>
          <div
            className="relative mt-1 h-1 bg-border rounded-full cursor-pointer"
            onClick={seek}
          >
            <div
              className="h-full bg-accent rounded-full transition-[width] duration-200"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-accent rounded-full shadow-sm transition-[left] duration-200"
              style={{ left: `calc(${progress}% - 5px)` }}
            />
          </div>
        </div>
        <span className="text-[10px] text-muted-foreground font-mono shrink-0">
          {formatTime(currentTime)}/{formatTime(duration)}
        </span>
      </div>
    </div>
  )
}

const ChatMessages = ({ messages }: ChatMessagesProps) => {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <ScrollArea className="flex-1 min-h-0">
      <div className="p-4 space-y-2">
        {messages.length === 0 && (
          <div className="text-sm text-muted-foreground pl-4">
            Hey 👋! I'm Matt's AI assistant. Ask me anything about his experience, projects, or skills.
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className="text-sm">
            {msg.role === 'user' ? (
              <div className="text-foreground">
                <span className="text-accent">&gt; </span>
                {msg.content}
              </div>
            ) : (
              <div className="text-muted-foreground pl-4 prose prose-sm prose-invert max-w-none prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5 prose-headings:my-1.5 prose-headings:text-foreground prose-strong:text-coral prose-a:text-accent">
                {parseContent(msg.content).map((segment, j) =>
                  segment.type === 'audio' ? (
                    <AudioPlayer key={j} songId={segment.songId} />
                  ) : (
                    <ReactMarkdown
                      key={j}
                      components={{
                        strong: ({ children }) => (
                          <strong className="text-zima-blue font-bold">{children}</strong>
                        ),
                      }}
                    >{segment.value}</ReactMarkdown>
                  )
                )}
              </div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </ScrollArea>
  )
}

export default ChatMessages
