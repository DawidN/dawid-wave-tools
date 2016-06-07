module.exports = {
  activate: function() {
      atom.commands.add('atom-workspace', {
      'dawid-wave-tools:convert-to-json': () => this.converttojson(),
      'dawid-wave-tools:replace-ids': () => this.replaceids(),
      'dawid-wave-tools:open-config-file': () => this.openconfigfile(),
      'dawid-wave-tools:convert-to-saql': () => this.converttosaql()
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
    var editor = atom.workspace.getActiveTextEditor();
    atom.workspace.open("replace.json").then((editor) => {
      var text = editor.getText();
      var templateText = [
        '{',
          '"replaceids": {',
            '"replaceids1": "replaceids1success",',
            '"replaceids2": "replaceids2success"',
          '},',
          '"converttojson": {',
            '"converttojson1": "converttojson1success",',
            '"converttojson2": "converttojson2success"',
          '}',
        '}',
].join("\n");
      if (text == "") {
        editor.insertText(templateText);
        editor.save()
      }

    })},

  converttojson: function() {
    var editor = atom.workspace.getActiveTextEditor();
    var text = editor.getSelectedText();
    console.log(text);
    text = text.replace(/(\r\n|\n|\r)/gm," ");
    text = text.replace(/(^|[^\\])"/g, "$1\\\"");
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
  },

  converttosaql: function() {
    var editor = atom.workspace.getActiveTextEditor();
    var text = editor.getSelectedText();
    console.log(text);
    text = text.replace(/;/g,";\n");
    text = text.replace(/(^|[\\])"/g, '"');
    /*this.loadconfig();
    var keys = Object.keys(this.replacejson.converttojson);
    var replacejson = this.replacejson;
    var converttojson = replacejson.converttojson;
//    console.log(converttojson["converttojson1"]);

    keys.forEach(function(key){
      var value = converttojson[key];

      console.log('key:', key, 'value:',value);

      text = text.replace(key,value);
    });*/
    editor.insertText(text)
  }
}

//getSelectedText()
