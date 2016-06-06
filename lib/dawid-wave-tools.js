module.exports = {
  activate: function() {
      atom.commands.add('atom-workspace', {
      'dawid-wave-tools:convert-to-json': () => this.converttojson()
    });
  },

  converttojson: function() {
    var editor = atom.workspace.getActiveTextEditor();
    var text = editor.getSelectedText();
    text = text.replace(/\n/g, "");
    text = text.replace(/\"/g, "\\\"");
    editor.insertText(text)
        }
   }

//getSelectedText()
