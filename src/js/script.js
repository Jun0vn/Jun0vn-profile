var projectfind = false;


const select = document.querySelector.bind(document);

document.onkeydown = function(e) {
  if (e.ctrlKey && 
      (e.keyCode === 67 || 
       e.keyCode === 86 || 
       e.keyCode === 85 || 
       e.keyCode === 117)) {
        window.location.replace("https://github.com/Jun0vn");
      return false;
  } else {
      return true;
  }

const LOADING = {
    overlayElement: select('#overlay'),
    
    start: function(){
        this.handleLoad();
    },
    
    // Function handle
    handleLoad: function(){
        let _this = this;
        let transition = 500;
        let ok = false;
        setTimeout(()=>{ok=!ok},1);
        this.overlayElement.style.transition = `opacity ${transition}ms linear`;
        window.onload = ()=>{
            if(ok)
                hiddenOverlay();
            else
                setTimeout(hiddenOverlay,500);
        }
        function hiddenOverlay(){
            _this.overlayElement.style.opacity = 0;
            setTimeout(()=>{
                document.body.removeChild(_this.overlayElement);
            },transition);
        }
    }

}

LOADING.start();
