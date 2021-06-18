import { useEffect, useState } from "react"
import ReactDOM from "react-dom"
export default function Modal({ show, children, onClose, title }) {
    const [isBroswer, setIsBrowser] = useState(false)
    useEffect(() => setIsBrowser(true), [])

    const modalContent = show ? (
        <div className="modal-content">
            <h1>This is a modal content page</h1>
        </div>
    ) : null

    if (isBroswer) {
        return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'))
    } else {
        return null
    }
}
