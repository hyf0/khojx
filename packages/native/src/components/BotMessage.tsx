import { FC } from "react"
import Markdown from "react-markdown"
import { CopyButton } from "./CopyButton"

export const BotMessage: FC<{ msg: string }> = ({ msg }) => {
  return (
    <div className="flex flex-col items-start space-y-2">
      <div className="flex items-center space-x-2">
        <div className="rounded-lg px-3 py-2 bg-white dark:bg-black">
          <div className="markdown-body">
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
