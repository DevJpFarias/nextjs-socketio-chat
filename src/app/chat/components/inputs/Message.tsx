'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMessages } from "@/contexts/Messages";

export function MessageInput() {
  const { messageValue, setMessageValue } = useMessages()

  return (
    <div className="flex flex-col space-y-1">
      <Label htmlFor="message">Message</Label>
      <Input
        type="text"
        id="message"
        name="message"
        placeholder="Digite sua mensagem"
        required
        value={messageValue}
        onChange={(event) => setMessageValue(event.target.value)}
      />
    </div>
  )
}