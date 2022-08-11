import { useState } from "react"

function getToday() {
  return new Date().toLocaleString();
}

export default function Home() {
  const [lastUpdate, setLastUpdate] = useState(getToday);
  setInterval(() => {
    setLastUpdate((time) => time = getToday())
  }, 999);
  return (
    <div>
      Home
      <p>{ lastUpdate }</p>
    </div>
  )
}