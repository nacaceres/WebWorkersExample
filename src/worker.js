onmessage = e => {
  const message = e.data;
  console.log("From main: "+message)

  const reply = setTimeout(()=> postMessage("Polo!"), 3000)
}
