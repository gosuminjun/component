import Button from "@/components/Button/Button";

function Home() {
  const buttonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <Button text="hello" theme="warning" onClick={buttonClick} />
    </>
  );
}

export default Home;
