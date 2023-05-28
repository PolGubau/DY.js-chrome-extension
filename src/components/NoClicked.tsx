interface ClickedProps {
  toggleClicked: () => void;
}
const NoClicked = ({ toggleClicked }: ClickedProps) => {
  return (
    <>
      <button onClick={toggleClicked}>Enjoy</button>
    </>
  );
};

export default NoClicked;
