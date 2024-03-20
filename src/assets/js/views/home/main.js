const searchTool = document.getElementById('searchTool');
const tools = document.querySelectorAll('nav a');

searchTool.addEventListener('input', evt => {
    let val = evt.currentTarget.value;
    tools.forEach(tool => {
        let regex = new RegExp(`${val}`, 'i');
        if (!tool.title.match(regex)) {
            tool.className = "hide-tool";
        }else{
            tool.className = "";
        }
    })
},false);