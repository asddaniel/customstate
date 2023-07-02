function setCustomState(varname){  
    let event;    
    if (localStorage.getItem("customState") != undefined) {
      event = JSON.parse(localStorage.getItem("customState") || '{}');  
    } else {   
       event = {};   
    }   
  
     event = { ...event, ...varname };
    write_html(); 
    localStorage.setItem("customState", JSON.stringify(event));
  }
  
  function write_html() {
    let states = document.querySelectorAll("[data-state]");   
    let event;   
  
     if (localStorage.getItem("customState") != undefined) {
      event = JSON.parse(localStorage.getItem("customState") || '{}');   
    } else {
       event = {};   
    }  
  
    Array.from(states).map(e => {
      const key = e.getAttribute("data-state");    
      if (key) {
        e.textContent = event[key.trim()];   
      }     
    });
  }
  
  export { setCustomState };