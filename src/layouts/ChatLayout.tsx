// src/layouts/ChatLayout.tsx
import { MessagesProvider } from "@/contexts/Messages";
import { ComponentWithChildren } from "@/models/component-with-children";

export default function ChatLayout({
  children,
}: ComponentWithChildren) {
  return (
    <MessagesProvider>
      {children}
    </MessagesProvider>
  );
}