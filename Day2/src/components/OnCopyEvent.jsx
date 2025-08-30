import React from "react";

const OnCopyEvent = () => {
  const handleCopy = () => {
    alert("Kyu re chutiye, bahut maja aa rha na copy karne m  ");
  };
  return (
    <div onCopy={handleCopy}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum rerum
      eligendi voluptas odit ea! Delectus veritatis distinctio consequatur
      deserunt iste ab unde nesciunt neque, sint ad quaerat tempora quis
      voluptates?
    </div>
  );
};

export default OnCopyEvent;
