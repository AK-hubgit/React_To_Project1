import React from "react";
/* 
    the idea for creating this Tabs.jsx is that this component should not accept any 
    state or should not accept any imports from other concepts.
    SHOULD BE JUST AN PLAIN WRAPPER COMPONENT.
*/

// A WAY TO SET CUSTOM ELEMENTS BASED ON USER REQUIREMENTS
// function Tabs({ buttons, children, buttonsContainer }) {
//   2nd way
function Tabs({ buttons, children, ButtonsContainer }) {
  // 1st way
  //   const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

export default Tabs;
