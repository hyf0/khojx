import "./App.css";
import { CommonLayout } from "./layouts/CommonLayout";
import { ChatPage } from "./pages/ChatPage";


function App() {
  return (
    <div className="dark:bg-slate-800 dark:text-white">
      <CommonLayout>
        <ChatPage />
      </CommonLayout>
    </div>
  )
}

export default App;
