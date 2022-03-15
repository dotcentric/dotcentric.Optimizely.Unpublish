define([
  "dojo/_base/declare",
  "epi-cms/contentediting/ContentActionSupport",
  "epi/shell/command/_Command",
],
function (
  declare,
  ContentActionSupport,
  _Command) 
  {
    return declare([_Command], 
    {
      name       : "Unpublish",
      label      : "Unpublish",
      tooltip    : "Expire the content immediately removing it from public access",
      iconClass  : "epi-iconStop",
      canExecute: true,

      _execute: function () {
        // Get the model
        let model = this.get("model");
        if (!model || !model.contentData) {
            this.set("canExecute", false);
            return;
        }

        // Check if this user can unpublish
        let canExecute = model.canChangeContent() 
        && ContentActionSupport.hasAccess(model.contentData.accessMask, ContentActionSupport.accessLevel.Publish); // Ensure the user has Publish access right

        if (!canExecute){
          return alert("Sorry, you don't seem to have permission to do that.");
        }

        if (model.contentData.status === 100){
          return alert("This content is unpublished.");
        }

        this.set("canExecute", canExecute);

        // Setup the model
        let now = new Date().toISOString();
        let expireState = {
          "stopPublish": now.substring(0, now.length-5) + "Z",
          "archiveLink": null
        }

        // Unpublish the content
        model.saveAndPublishProperty("iversionable_expire", expireState, ContentActionSupport.saveAction.SkipValidation);

        // Refresh the ui. 
        // If you know how to do this using the shell context properly please let me know,
        // for some reason using the topic.publish() events all create a new draft content version that
        // we don't need/want on top of the unpublished state change.
        setTimeout(function() {
          document.location.reload()
        }, 1500); 
    }});
  }
);