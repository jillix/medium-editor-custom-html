# medium-editor-custom-html
Insert custom HTML using a new button in the Medium Editor toolbar

# Documentation

## `new CustomHtml(options)`
Creates a new instance of CustomHtml extension.

### Params:
* **Object** *options* An object containing the extension configuration. The
following fields should be provided:
 - buttonText: the text of the button (default: `</>`)
 - htmlToInsert: the HTML code that should be inserted

## `onClick()`
The click event handler that calls `insertHtmlAtCaret` method.

## `getButton()`
This function is called by the Medium Editor and returns the button that is
added in the toolbar

### Return:
* **HTMLButtonElement** The button that is attached in the Medium Editor
toolbar

# Example

Load in the page the following scripts in this order:

 - Medium Editor JS
 - Custom HTML Medium Editor Extension
 - Your custom script (that creates the editor and contains the custom handlers)

```js
window.onload = function () {
    var myEditor = new MediumEditor(".container", {
        buttons: [
            "bold"
          , "italic"
          , "underline"
          , "anchor"
          , "header1"
          , "header2"
          , "quote"
          , "customHtml"
        ]
      , extensions: {
            "customHtml": new CustomHtml({
                buttonText: "<hr>"
              , htmlToInsert: "<hr class='someclass'>"
            })
        }
    });
};
```

# Development
Run the following commands to download and install the extension:

```sh
$ git clone git@github.com:jillix/medium-editor-custom-html.git medium-editor-custom-html
$ cd medium-editor-custom-html
$ npm install
```

# How to contribute

1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

# License
See the [LICENSE](./LICENSE) file.
