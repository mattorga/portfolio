import { useState } from 'react'
import ChatMessages, { type Message } from './ChatMessages'
import ChatInput from './ChatInput'
import { RotateCw } from 'lucide-react'

interface ChatPanelProps {
  messages: Message[]
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
}

const ChatPanel = ({ messages, setMessages }: ChatPanelProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (content: string) => {
    const userMessage: Message = { role: 'user', content }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setIsLoading(true)

    try {
      const res = await fetch(
        'https://a5t4p2gltk5oy5zbyy3fkswxei0qdzsb.lambda-url.ap-southeast-1.on.aws/api/chat',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: updatedMessages.map(({ role, content }) => ({ role, content })),
          }),
        },
      )

      if (!res.ok) throw new Error(`${res.status}`)

      const reader = res.body!.getReader()
      const decoder = new TextDecoder()

      setMessages(prev => [...prev, { role: 'assistant', content: '' }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        setMessages(prev => {
          const updated = [...prev]
          const last = updated[updated.length - 1]
          updated[updated.length - 1] = { ...last, content: last.content + chunk }
          return updated
        })
      }
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Error: failed to get a response. Try again.',
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleClear = () => {
    if (!isLoading) {
      setMessages([])
    }
  }

  return (
    <div className="flex flex-col h-full min-h-0 border-t border-border">
      <div className="flex items-center justify-end px-4 pt-2">
        <button
          onClick={handleClear}
          disabled={isLoading || messages.length === 0}
          className="text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors cursor-pointer disabled:cursor-default"
          title="Clear chat"
        >
          <RotateCw className="size-3" />
        </button>
      </div>
      <ChatMessages messages={messages} />
      <ChatInput onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  )
}

export default ChatPanel
