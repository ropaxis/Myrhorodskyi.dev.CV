import { useLang } from "@/context/LangContext";
import { useModal } from "@/context/ModalContext";
export default function ModalAuthForm({ state }: { state: string }) {
    const { text } = useLang();
    const { openModal, closeModal } = useModal();
    return (
        <div>
            <div>{state}</div>
            <button onClick={()=>closeModal()}>
                {text.auth.cancel}
            </button>
        </div>
    )
}