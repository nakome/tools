import searchBar from "./controllers/searchBar.js";
import { searchTool } from "./controllers/vars.js";

searchTool.addEventListener('input', searchBar,false);