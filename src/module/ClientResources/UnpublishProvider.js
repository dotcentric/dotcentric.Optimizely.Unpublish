define([
  "dojo/_base/declare",
  "epi/shell/command/_CommandProviderMixin",
  "unpublish/UnpublishCommand"
], function (declare, _CommandProviderMixin, UnpublishCommand) {

  return declare([_CommandProviderMixin], {
      constructor: function () {
        this.inherited(arguments);

        var unpublishCommand = new UnpublishCommand();
        unpublishCommand.order = 99999;
        this.add("commands", unpublishCommand);
      }
  });
});