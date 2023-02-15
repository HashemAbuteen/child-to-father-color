function CustomButton({ color, onClick }) {
  const buttonStyle = {
    backgroundColor: color,
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  function handleClick() {
    onClick(color);
  }

  return (
    <button style={buttonStyle} onClick={handleClick}>
      Click me!
    </button>
  );
}

export default CustomButton;
