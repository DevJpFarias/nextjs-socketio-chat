'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMessages } from "@/contexts/Messages";

export function UsernameInput() {
  const { currentUsername, setCurrentUsername } = useMessages()

  return (
    <div className="flex flex-col space-y-1">
      <Label htmlFor="username">Usuário</Label>
      <Input
        type="text"
        id="username"
        name="username"
        placeholder="Digite seu usuário"
        required
        value={currentUsername}
        onChange={(event) => setCurrentUsername(event.target.value)}
      />
    </div>
  )
}