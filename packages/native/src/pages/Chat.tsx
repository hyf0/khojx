import { FC, PropsWithChildren, Suspense, useMemo } from "react";
import { getHistory } from "../utils/api";
import { use } from "../utils/use";
import Markdown from 'react-markdown'
import { CopyButton } from "../components/CopyButton";


const Message: FC<{ from: 'khoj' | 'you', msg: string, time: string }> = ({ msg }) => {
    return (
        <div className="flex flex-col items-start space-y-2">
            <div className="flex items-center space-x-2">
                <div className="bg-blue-200 text-blue-800 rounded-lg px-3 py-2 text-sm">
                    <span className="font-bold">AI:</span> {'\n' + msg}
                </div>
            </div>
            <span className="text-xs text-gray-500">{ }</span>
        </div>
    )
}

const BotMessage: FC<{ msg: string }> = ({ msg }) => {
    return (
        <div className="flex flex-col items-start space-y-2">
            <div className="flex items-center space-x-2">
                <div className="bg-blue-200 dark:bg-blue-700 text-blue-800 rounded-lg px-3 py-2 text-sm">
                    <div className="markdown-body text-[14px] dark:text-white bg-blue-200">
                        <Markdown>{msg}</Markdown>
                    </div>
                </div>
            </div>
            <div className="flex">
                <span className="text-xs text-gray-500">10:45 AM</span>
                <CopyButton />
            </div>
        </div>
    )
}
const UserMessage: FC<{ msg: string }> = ({ msg }) => {
    return <div className="flex flex-col items-end space-y-2">
        <div className="flex items-center space-x-2">
            <div className="bg-green-200 dark:bg-green-700 dark:text-white text-green-800 rounded-lg px-3 py-2 text-sm">
                {msg.split('\n').map((line) => <p>{line}</p>)}
            </div>
        </div>
        <span className="text-xs text-gray-500">10:46 AM</span>
    </div>
}

const SentButton: FC = () => {
    return <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
        Send
    </button>

}
const Messages: FC<{ historyPromise: ReturnType<typeof getHistory> }> = ({ historyPromise }) => {
    console.log('rendering messages')
    const res = use(historyPromise)

    return res.response.map((message) => {
        if (message.by === 'you') {
            return <UserMessage msg={message.message} />
        } else if (message.by === 'khoj') {
            return <BotMessage msg={message.message} />
        } else {
            throw new Error('Invalid message')
        }
    })
}

export const ChatPage: FC<PropsWithChildren> = ({ }) => (
    <div className=" h-full flex flex-col">
        <div className="flex-1 overflow-auto p-4 space-y-4 bg-gray-100 dark:bg-gray-900">
            <Suspense fallback="loading...">
                <Messages historyPromise={getHistory()} />
            </Suspense>
        </div>
        <div className="p-4 bg-gray-200 dark:bg-gray-800">
            <div className="flex space-x-2">
                <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-grow"
                    placeholder="Type your message"
                />
                <SentButton />
            </div>
        </div>
    </div>
)

