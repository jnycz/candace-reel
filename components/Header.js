import styles from './Footer.module.css'

export default function Header({ title }) {
  return (
    <>
      <h1 className="text-xl visually-hidden text-left py-10">{title}</h1>
    </>
  )
}

