const textarea = document.getElementById('text-markdown');
const preview = document.getElementById('preview-area');
let text;

function toMarkdown(textTrans) {
    text = textTrans
        // titles
        .replace(/^# (.*)$/gim, '<h1>$1</h1>')
        .replace(/^#{2} (.*)$/gim, '<h2>$1</h2>')
        .replace(/^#{3} (.*)$/gim, '<h3>$1</h3>')
        .replace(/^#{4} (.*)$/gim, '<h4>$1</h4>')
        .replace(/^#{5} (.*)$/gim, '<h5>$1</h5>')
        .replace(/^#{6} (.*)$/gim, '<h6>$1</h6>')
        // hr
        .replace(/^\_{3,}$/gim, '<hr />')
        .replace(/^\-{3,}$/gim, '<hr />')
        .replace(/^\*{3,}$/gim, '<hr />')
        // blockquote
        .replace(/^\> (.*)$/gim, '<blockquote>$1</blockquote>')
        // bold and italic
        .replace(/\*{2}(.*)\*{2}/gim, '<strong>$1</strong>')
        .replace(/\_{2}(.*)\_{2}/gim, '<strong>$1</strong>')
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        .replace(/\_(.*)\_/gim, '<em>$1</em>')
        .replace(/\~{2}(.*)\~{2}/gim, '<s>$1</s>')
        // lists
            // to do
        // codes
        .replace(/\`(.*)\`/gim, '<code>$1</code>')
        // .replace(/^\`{3}((\s)+(.*)+)+$/gim, '<pre><code>$1</code></pre>')
        // links and co
		.replace(/\!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
        .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
        
        .replace(/\n/gim, "<br />")

	return text.trim()
}

textarea.addEventListener('keyup', (e) =>{
    let textTrans = textarea.value;
    toMarkdown(textTrans)
    preview.innerHTML = text;
})