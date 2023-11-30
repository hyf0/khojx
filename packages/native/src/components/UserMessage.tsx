import { FC } from "react"

export const UserMessage: FC<{ msg: string }> = ({ msg }) => {
  return <div className="flex flex-col items-end space-y-2">
    <div className="flex items-center space-x-2">
      <div className="bg-green-200 dark:bg-green-700 dark:text-white text-green-800 rounded-lg px-3 py-2 text-sm">
        {msg.split('\n').map((line) => <p>{line}</p>)}
      </div>
    </div>
    <span className="text-xs text-gray-500">10:46 AM</span>
  </div>
}
