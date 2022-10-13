var projectfind = false;


const select = document.querySelector.bind(document);

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
