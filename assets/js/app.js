$(document).ready(function () {
    const lightThemeURL = "assets/css/style.css";
    const darkThemeURL = "assets/css/style-dark.css";
    const lightLogoURL = "assets/images/pikapika-logo.png";
    const darkLogoURL = "assets/images/footer-logo.png";
  
    const currentMode = getMode(); // From localStorage or default
    setMode(currentMode); // Apply the current mode
  
    $("#toggleTheme").click(function () {
      const newMode = getMode() === "dark" ? "light" : "dark";
      setMode(newMode);
    });
  
    function setMode(mode) {
      if (mode === "dark") {
        $("#theme-link").attr("href", darkThemeURL);
        $("#logo-image").attr("src", darkLogoURL);
        $("#logo-image-sm").attr("src", darkLogoURL);
        $(".navbar").removeClass("navbar-light").addClass("navbar-dark");
      } else {
        $("#theme-link").attr("href", lightThemeURL);
        $("#logo-image").attr("src", lightLogoURL);
        $("#logo-image-sm").attr("src", lightLogoURL);
        $(".navbar").removeClass("navbar-dark").addClass("navbar-light");
      }
  
      // Save mode in localStorage (remove this block if you want no persistence at all)
      localStorage.setItem("preferredMode", mode);
    }
  
    function getMode() {
      // Check localStorage or default to "light"
      return localStorage.getItem("preferredMode") || "light";
    }
  });
  