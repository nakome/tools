const imageDisplay=document.getElementById("image-display"),imageWebp=document.getElementById("image-webp"),saveToWebp=document.getElementById("saveToWebp"),output=document.getElementById("output"),size=document.getElementById("size"),imgInput=document.getElementById("image-input"),maxWidth=document.getElementById("minWidth"),maxHeight=document.getElementById("minHeight");function convertDataUriToWebP(e){let t=maxWidth.value||300,a=maxHeight.value||200,n=e.split(",")[1],i=atob(n),o=new ArrayBuffer(i.length),m=new Uint8Array(o);for(let e=0;e<i.length;e++)m[e]=i.charCodeAt(e);let g=new Blob([o],{type:"image/png"}),r=URL.createObjectURL(g),d=new Image;d.onload=function(){let e=document.createElement("canvas");e.width=d.width,e.height=d.height;let n=e.getContext("2d"),i=Math.min(t/d.width,a/d.height);e.width=parseInt(d.width*i),e.height=parseInt(d.height*i),n.drawImage(d,0,0,e.width,e.height);let o=e.toDataURL("image/webp"),m=Math.round(3*o.length/4/1024);size.innerText=`Size: ${m}kb`,imageWebp.src=o,imageWebp.style.display="block",saveToWebp.href=o,saveToWebp.removeAttribute("disabled"),saveToWebp.setAttribute("download","image.webp")},d.src=r}(()=>{const e=window.localStorage,t=maxWidth.value||600,a=maxHeight.value||300;e.setItem("webp-converter",""),maxWidth.addEventListener("change",(()=>{n(),i()})),maxHeight.addEventListener("change",(()=>{n(),i()}));const n=()=>{const n=imageDisplay.getAttribute("src"),i=setTimeout((()=>{imageDisplay.src=e.getItem("webp-converter")||n,imageDisplay.style.display="block",e.getItem("webp-converter")&&convertDataUriToWebP(e.getItem("webp-converter"),t,a),clearTimeout(i)}),200)},i=()=>{imgInput.addEventListener("change",(()=>{if(imgInput.files.length){const t=new FileReader;t.onload=async t=>{const a=t.target.result;(e=>{const t=.75*e.length;return!(parseInt(t)>parseInt(4194304)&&(alert("The size of the image exceeds the local storage quota."),1))})(a)&&(e.setItem("webp-converter",a),n())},t.readAsDataURL(imgInput.files[0])}}),!1)};n(),i()})();