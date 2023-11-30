import { FC, PropsWithChildren, Suspense, useState } from "react";
import { getHistory, sendChat } from "../utils/api";
import { use } from "../utils/use";
import { BotMessage } from "../components/BotMessage";
import { UserMessage } from "../components/UserMessage";
import { SendButton } from "../components/SendButton";


const Messages: FC<{ historyPromise: ReturnType<typeof getHistory> }> = ({ historyPromise }) => {
  console.log('rendering messages')
  const res = use(historyPromise)

  return <div ref={ref => {
    if (ref) {
      ref.scrollTop = ref.scrollHeight
    }
  }} className="h-full overflow-auto p-4 space-y-4 bg-gray-100 dark:bg-gray-900">{res.response.map((message) => {
    if (message.by === 'you') {
      return <UserMessage msg={message.message} />
    } else if (message.by === 'khoj') {
      return <BotMessage msg={message.message} />
    } else {
      throw new Error('Invalid message')
    }
  })}</div>
}

export function UserChatInput() {
  const [input, setInput] = useState('')

  return (<div className="flex px-4 py-3 bg-white shadow items-center">
    <input
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
      placeholder="Type your message here..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <SendButton onClick={() => {
      if (input === '') return
      sendChat(input)
    }} />
  </div>)
}


export function ChatPage() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-hidden">
        <Suspense fallback="loading...">
          <Messages historyPromise={getHistory()} />
        </Suspense>
      </div>
      <UserChatInput />
    </div>
  )
}
