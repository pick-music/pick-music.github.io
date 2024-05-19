import {BaseHeader} from "@/app/_containers/BaseHeader";
import React from "react";
import {MainScrollProvider} from "@/providers/MainScrollProvider";

export interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  return (
    <MainScrollProvider>
      <div className="flex min-h-screen flex-col">
        <BaseHeader/>
        <main className="h-[300vh] grow pt-[var(--header-height)]">
          {children}
        </main>
        <footer className="flex flex-none basis-auto items-center justify-center">
          <p>© 2024</p>
        </footer>
      </div>
    </MainScrollProvider>
  )
}