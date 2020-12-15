const textarea = document.getElementById('text-markdown');
const preview = document.getElementById('preview-area');

textarea.addEventListener('keydown', () =>{
    preview.textContent = textarea.value;
})