import { useState, KeyboardEvent } from 'react'

interface ChatInputProps {
  onSubmit: (message: string) => void
  isLoading: boolean
}

const ChatInput = ({ onSubmit, isLoading }: ChatInputProps) => {
  const [input, setInput] = useState('')

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && input.trim()) {
      e.preventDefault()
      onSubmit(input.trim())
      setInput('')
    }
  }

  return (
    <div className="flex items-center gap-2 px-4 py-3 border-t border-border">
      <span className="text-accent text-sm">&gt;</span>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={isLoading ? 'Waiting for response...' : 'Type a message...'}
        disabled={isLoading}
        className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none disabled:opacity-50"
      />
    </div>
  )
}

export default ChatInput
