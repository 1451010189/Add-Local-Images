function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

  
    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {
        // Only process image files.
        if (!f.type.match('image.*')) {
            continue;
        }
        var reader = new FileReader();  //biến hiện images ra   
        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            return function (e) {
                // render thumbnail.
                var span = document.createElement('span');
                span.innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>' ,'<i class="fa fa-times time " ></i>'].join('');             	          	
                document.getElementById('previewImg').insertBefore(span, null); //chèn images vào span dựng sẵn có ID previewImg
            
            };
        })
        (f);
        // Read in the image file as a data URL.     
        	reader.readAsDataURL(f);    	       
    }
}
document.getElementById('files').addEventListener('change', handleFileSelect, false);