function CustomHtml(options) {
    this.button = document.createElement('button');
    this.button.className = 'medium-editor-action';
    this.button.innerText = options.buttonText || "</>";
    this.button.onclick = this.onClick.bind(this);
    this.options = options;
    this.insertHtmlAtCaret = function (html) {
        var sel, range;
        if (window.getSelection) {
            // IE9 and non-IE
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();

                // Range.createContextualFragment() would be useful here but is
                // only relatively recently standardized and is not supported in
                // some browsers (IE9, for one)
                var el = document.createElement("div");
                el.innerHTML = html;
                var frag = document.createDocumentFragment(), node, lastNode;
                while ( (node = el.firstChild) ) {
                    lastNode = frag.appendChild(node);
                }
                range.insertNode(frag);

                // Preserve the selection
                if (lastNode) {
                    range = range.cloneRange();
                    range.setStartAfter(lastNode);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
        } else if (document.selection && document.selection.type != "Control") {
            // IE < 9
            document.selection.createRange().pasteHTML(html);
        }
    }
}

CustomHtml.prototype.onClick = function() {
    this.insertHtmlAtCaret(this.options.htmlToInsert);
};

CustomHtml.prototype.getButton = function() {
    return this.button;
};

CustomHtml.prototype.checkState = function (node) {};
