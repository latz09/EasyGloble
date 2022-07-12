import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="scroll-smooth ">
      <Head />
      <body> 
        <Main />
        <NextScript />
        <div id='modal-root'></div>
      </body>
    </Html>
  )
}