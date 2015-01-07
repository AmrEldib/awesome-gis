this["awesomeTemplates"] = this["awesomeTemplates"] || {};

this["awesomeTemplates"]["templates/navTemplate.handlebars"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <li>\r\n        <a href=\"#"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</a>\r\n    </li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, buffer = "";
  stack1 = ((helper = (helper = helpers.categories || (depth0 != null ? depth0.categories : depth0)) != null ? helper : helperMissing),(options={"name":"categories","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.categories) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n<hr />\r\n\r\n<li><a class=\"back-to-top\" href=\"\" data-toggle=\"modal\" data-target=\"#aboutDialog\">About this Site</a></li>\r\n<li><a class=\"back-to-top\" href=\"\" data-toggle=\"modal\" data-target=\"#contributorsDialog\">Contributors</a></li>\r\n<li><a class=\"back-to-top\" href=\"https://github.com/AmrEldib/awesome-gis/issues/new?labels=awesome item\">Submit New Entry</a></li>\r\n<li><a class=\"back-to-top\" href=\"https://github.com/AmrEldib/awesome-gis/issues/new?labels=bug\">Found Error?</a></li>\r\n<li><a class=\"back-to-top\" href=\"#top\">Back to top</a></li>\r\n";
},"useData":true});