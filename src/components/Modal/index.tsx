"use client";

import { ReactNode } from "react";
import { useModal } from "@/context/ModalContext";

export default function Modal({ children }: { children: ReactNode }) {
  const { closeModal } = useModal();

  return (
    <div className="modal__container">
      <div className="">
        {children}
        <button
          onClick={closeModal}
          className=""
        >
          Закрити
        </button>
      </div>
    </div>
  );
}