module.exports = {
  activate: function() {
      atom.commands.add('atom-workspace', {
      'dawid-wave-tools:convert-to-json': () => this.converttojson(),
      'dawid-wave-tools:replace-ids': () => this.replaceids(),
      'dawid-wave-tools:open-config-file': () => this.openconfigfile()
    });
  },

  loadconfig: function() {
    this.replacejson = require("../replace.json");
    },

  replaceids: function() {
    var editor = atom.workspace.getActiveTextEditor();
    var text = editor.getSelectedText();
    this.loadconfig();
    var keys = Object.keys(this.replacejson.replaceids);
    var replacejson = this.replacejson;
    var replaceids = replacejson.replaceids;
    keys.forEach(function(key){
      var value = replaceids[key];
      console.log('key:', key, 'value:',value);
      text = text.replace(key,value);
    });
    editor.insertText(text);
  },

  openconfigfile: function() {
    atom.workspace.open("replace.json")
  },

  converttojson: function() {
    var editor = atom.workspace.getActiveTextEditor();
    var text = editor.getSelectedText();
    text = text.replace(/\n/g, "");
    text = text.replace(/\"/g, "\\\"");
    this.loadconfig();
    var keys = Object.keys(this.replacejson.converttojson);
    var replacejson = this.replacejson;
    var converttojson = replacejson.converttojson;
//    console.log(converttojson["converttojson1"]);

    keys.forEach(function(key){
      var value = converttojson[key];

      console.log('key:', key, 'value:',value);

      text = text.replace(key,value);
    });
    editor.insertText(text);
  }
}

//getSelectedText()
