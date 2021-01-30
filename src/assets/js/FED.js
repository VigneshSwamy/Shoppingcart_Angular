function bigImg(x) {
    
    x.style.width = "106%";
    x.style.height = "106%";
  }
  
  function normalImg(x) {
    x.style.width = "100%";
    x.style.height = "106%";
  }
  $(document).on('click','.rejectButton',function(){    
    console.log("started");
    $(this).prev().addClass("strike");
    $(this).hide();
    
  });
