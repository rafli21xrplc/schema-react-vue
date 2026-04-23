interface EventHandlerProps {
  text: string;
}

export default function EventHandler({ text }: EventHandlerProps) {
  function handleClick() {
    alert("clicked!");
  }

  return (
    <button onClick={handleClick}>{text}</button>
  );
}