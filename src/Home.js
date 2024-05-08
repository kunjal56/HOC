import React from 'react'

function Home() {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};
const Input = ({ onChange, value }) => {
    return (
      <input type="text" onChange={onChange} value={value} />
    );
  };
  const withStyles = (WrappedComponent, styles) => {
    return (props) => {
      return <WrappedComponent {...props} style={styles} />;
    };
  };
  
  <div>
      <ButtonWithStyles onClick={handleButtonClick}>Click me!</ButtonWithStyles>
      <InputWithStyles onChange={handleInputChange} />
    </div>
  const App = () => {
    const handleButtonClick = () => {
      alert('Button clicked!');
    };
  
    const handleInputChange = (event) => {
      console.log(event.target.value);
    };
  
    return (
      <div>
        <ButtonWithStyles onClick={handleButtonClick}>Click me!</ButtonWithStyles>
        <InputWithStyles onChange={handleInputChange} />
      </div>
    );
  };
  
  
export default Home
