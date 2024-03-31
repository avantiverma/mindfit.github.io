function openTest(testType) {
    let message;
    if (testType === 'anxiety') {
      message = "Anxiety Test page will open shortly";
      window.open("anxietyteet.html", "_self"); // Open Anxiety Test page
    } else if (testType === 'depression') {
      message = "Depression Test page will open shortly";
      window.open("depressiontest.html", "_self"); // Open Depression Test page
    } else {
      message = "Please select a valid test.";
    }
  
    alert(message);
  }