interface EventObjectProps {
  text: string;
}

export default function EventObject({ text }: EventObjectProps) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(e);
    alert("clicked!");
  }

  return (
    <button onClick={handleClick}>{text}</button>
  );
}