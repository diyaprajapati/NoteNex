function toggleTheme() {
    document.body.classList.toggle('dark-theme');
  
    if(document.body.classList.contains("dark-theme")) {
        localStorage.setItem("dark", "true");
    }
    else {
        localStorage.setItem("dark","false");
    }
  }
  function loadThisThing() {
    if(localStorage.getItem("dark") === "true") {
      document.body.classList.add("dark-theme");
    }
  }