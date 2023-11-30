import { FC } from "react";

export const Header: FC = () => (
  <div className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-800">
    <h1 className="text-lg font-bold">Khoj<span className="opacity-0 hover:opacity-100">X</span></h1>
    <div className="flex items-center space-x-4">
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
        Settings
      </button>
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
        Help
      </button>
    </div>
  </div>
)
