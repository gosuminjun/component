import Button from "@/components/Button/Button";

function Home() {
  const buttonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <Button
        width="100px"
        text="hello"
        theme="warning"
        onClick={buttonClick}
      />
    </>
  );
}

export default Home;
