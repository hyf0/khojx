export function SendButton({ onClick }: { onClick?: () => void }) {
  return (<button onClick={onClick} className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ml-4 bg-white text-gray-800 border border-gray-300 hover:bg-gray-200">
    Send
  </button>)
};
