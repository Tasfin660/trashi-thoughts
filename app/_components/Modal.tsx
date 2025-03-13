'use client'

import Image from 'next/image'
import {
	cloneElement,
	createContext,
	ReactElement,
	ReactNode,
	useContext,
	useEffect,
	useRef,
	useState
} from 'react'

import close from '@/app/_icons/close.svg'

interface Props {
	children: ReactNode
}

interface ModalContextType {
	showModal: boolean
	openModal: () => void
	closeModal: () => void
}

const ModalContext = createContext<ModalContextType>({
	showModal: false,
	openModal: () => {},
	closeModal: () => {}
})

function Modal({ children }: Props) {
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		if (showModal) document.body.style.overflow = 'hidden'
		else document.body.style.overflow = 'auto'
	}, [showModal])

	const openModal = () => setShowModal(true)
	const closeModal = () => setShowModal(false)

	return (
		<ModalContext.Provider value={{ showModal, openModal, closeModal }}>
			{children}
		</ModalContext.Provider>
	)
}

function Action({ children }: Props) {
	const { openModal } = useContext(ModalContext)
	return cloneElement(children as ReactElement<{ onClick: () => void }>, {
		onClick: openModal
	})
}

function Content({ children }: Props) {
	const { showModal, closeModal } = useContext(ModalContext)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		function handleClick(e: MouseEvent) {
			if (ref.current && !ref.current.contains(e.target as Node)) closeModal()
		}

		document.addEventListener('click', handleClick, true)

		return () => document.removeEventListener('click', handleClick, true)
	}, [closeModal])

	if (!showModal) return null

	return (
		<div className="bg-primary-500/20 modal-overlay fixed top-0 left-0 z-50 h-dvh w-full backdrop-blur-xs">
			<div
				className="border-primary-200/80 modal-transition shadow-modal fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-white p-6"
				ref={ref}>
				{cloneElement(children as ReactElement<{ closeModal: () => void }>, {
					closeModal
				})}
				<button className="absolute top-3 right-2.5" onClick={closeModal}>
					<Image
						src={close}
						alt="close icon"
						className="size-5 opacity-60 transition hover:opacity-100"
					/>
				</button>
			</div>
		</div>
	)
}

Modal.Action = Action
Modal.Content = Content

export default Modal
