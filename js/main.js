document.addEventListener("DOMContentLoaded", () => {

    var rangeSlider = document.getElementById('formControlRange');
    var borderSizeRangeSlider = document.getElementById('formControlSizeRange');
    var rangeValue = document.getElementById('border_width_label');
    var borderSizerangeValue = document.getElementById('border_size_label');
    var previewCode = document.getElementById('previewCode');
    var copyCode = document.getElementById('copyCode');
    var copyBtn = document.getElementById('copyBtn');
    var borderStyle = document.getElementById('borderStyle');
    var bgColor = document.getElementById('bgColor');
    var bgColorLabel = document.getElementById('bgColorLabel');
  
    var all_radius = 10;
    var all_borderSize = 2;
    var border_style = 'dashed';
    var background_color = '';
    var bgColorLabel_Code = '';
    var coding="";
  
    function borderRadius(e) {
        
        all_radius = rangeSlider.value;
        all_borderSize = borderSizeRangeSlider.value;
        background_color = bgColor.value;
        border_style = borderStyle.value;
        console.log(border_style);
        coding=`
        border-radius:${all_radius}px;
        border:${all_borderSize}px ${border_style} red;
        background:${background_color};
        `
        copyCode.value=coding;
        rangeValue.innerHTML = all_radius + 'px';
        borderSizerangeValue.innerHTML = all_borderSize + 'px';
        bgColorLabel.value = background_color;
        previewCode.style.cssText = coding;

    }




    rangeSlider.addEventListener('mousemove', borderRadius);
    borderSizeRangeSlider.addEventListener('mousemove', borderRadius);
    borderStyle.addEventListener('change', borderRadius);
    bgColor.addEventListener('input', borderRadius);

    copyBtn.addEventListener('click', ()=>{
        document.querySelector('textarea').select();
        document.execCommand('copy');
        snackBar();
    });

    borderRadius();

    // Snack Bar
    function snackBar(){
        var showSnack = document.getElementById('Snackbar');
        showSnack.className = 'show';
        setTimeout(function(){
            showSnack.className = showSnack.className.replace("show", ""); 
            }, 3000);
      
     }

})