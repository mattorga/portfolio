import { useEffect, useRef } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'

export interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatMessagesProps {
  messages: Message[]
}

const ChatMessages = ({ messages }: ChatMessagesProps) => {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <ScrollArea className="flex-1 min-h-0">
      <div className="p-4 space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className="text-sm">
            {msg.role === 'user' ? (
              <div className="text-foreground">
                <span className="text-accent">&gt; </span>
                {msg.content}
              </div>
            ) : (
              <div className="text-muted-foreground pl-4">
                {msg.content}
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
