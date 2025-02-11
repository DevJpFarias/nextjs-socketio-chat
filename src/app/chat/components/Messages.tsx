'use client'

import { useMessages } from "@/contexts/Messages"
import { v4 as uuid } from "uuid"

export function Messages() {
  const { messages } = useMessages()

  return (
    <div className="messages bg-slate-700 border rounded-md p-4 h-40 overflow-y-auto text-sm">
      {
        messages.map((message) => {
          return (
            <div className="message" key={uuid()}>
              <p><strong>{message.author}</strong> {message.content}</p>
            </div>
          )
        })
      }
    </div>
  )
}