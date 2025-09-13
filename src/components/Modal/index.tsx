"use client";

import { ReactNode } from "react";
import { useModal } from "@/context/ModalContext";
import {createPortal} from 'react-dom'

export default function Modal({ children }: { children: ReactNode }) {
  const { openModal } = useModal();
if (!openModal) return null;

  return createPortal (
    <div className="modal__container">
      <div className="">
        {children}
      </div>
    </div>,
    document.body
  );
} 