import '@/styles/globals.css'

export default function App(data) {
  const { Component, pageProps } = data;
  console.log(data);
  return <Component {...pageProps} />
}
