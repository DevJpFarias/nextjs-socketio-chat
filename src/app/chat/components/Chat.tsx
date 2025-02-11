'use client'

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { UsernameInput } from "./inputs/Username";
import { MessageInput } from "./inputs/Message";
import { Messages } from "./Messages";
import { Button } from "@/components/ui/button";
import { useMessages } from "@/contexts/Messages";
import { FormEvent } from "react";
import { Message } from "@/interfaces/message.interface";

export function Chat() {
  const { currentUsername, messageValue, setMessageValue, messages, setMessages } = useMessages()

  const handleSendMessage = (event: FormEvent) => {
    event.preventDefault()

    const message: Message = { author: currentUsername, content: messageValue }

    setMessages([...messages, message])

    setMessageValue('')
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 p-4 text-white">
      <Card className="w-full max-w-md bg-slate-800 py-5">
        <CardContent>
          <form id="chat" className="flex flex-col space-y-1 gap-2">
            <UsernameInput />

            <MessageInput />

            <Messages />
          </form>
        </CardContent>

        <CardFooter className="flex justify-end">
          <Button
            form="chat"
            className="bg-slate-500 hover:bg-slate-600"
            onClick={(event) => handleSendMessage(event)}
            >
              Enviar
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}