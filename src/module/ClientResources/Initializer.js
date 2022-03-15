define([
  'dojo/_base/declare',
  'epi/_Module',
  "epi/dependency",
  "unpublish/UnpublishProvider"
], function(declare, _Module, dependency, UnpublishProvider) {
  return declare([_Module], {
      initialize: function() {
        this.inherited(arguments);

        var commandRegistry = dependency.resolve("epi.globalcommandregistry");
        commandRegistry.registerProvider("epi.cms.publishmenu", new UnpublishProvider());
      }
  });
});