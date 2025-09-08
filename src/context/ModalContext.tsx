"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import Modal from "@/components/Modal";

interface ModalContextType  {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ReactNode | null>(null);

  const openModal = (c: ReactNode) => setContent(c);
  const closeModal = () => setContent(null);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {content && (
        <Modal>
          {content}
        </Modal>
      )}
    </ModalContext.Provider>
  );
}