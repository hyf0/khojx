import { PropsWithChildren, type FC } from "react";
import { ErrorBoundary } from 'react-error-boundary'
import { Header } from "../components/Header";



export const CommonLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-col h-screen">
    <Header />
    <div className="flex-1 overflow-hidden">
      <ErrorBoundary fallback={<div>something wrong</div>}>
        {children}
      </ErrorBoundary>
    </div>
  </div>
)
