const convertToCss = document.getElementById("convertToCss");

const textAreaInput = document.getElementById("textAreaInput");
const textAreaInputEditor = CodeMirror.fromTextArea(textAreaInput, {
  theme: "dracula",
  lineNumbers: true,
  matchBrackets: true,
  lineWrapping: true,
  mode: "text/typescript",
});

const textAreaOutput = document.getElementById("textAreaOutput");
const textAreaOutputEditor = CodeMirror.fromTextArea(textAreaOutput, {
  mode: "javascript",
  theme: "dracula",
  lineNumbers: true,
  lineWrapping: true,
  readOnly: true,
});

let demo = `interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}`;

textAreaInputEditor.setValue(demo);
transformToHtml();

convertToCss.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaOutputEditor.setValue('🛸 Reciving data...');
  let w = setTimeout(() => {
    transformToHtml();
    clearTimeout(w);
  }, 800);
})

/**
 * Transform markdown to html
 */
async function transformToHtml() {
  try {
      let options = {
          target: "ESNext",
          module: "ES6",
          removeComments: true,
          strict: true
      };

      let outputJs = window.ts.transpile(textAreaInputEditor.getValue(), options);
      textAreaOutputEditor.setValue(outputJs);
  } catch (error) {
      textAreaOutputEditor.setValue("Error durante la transpilación:", error);
  }
}