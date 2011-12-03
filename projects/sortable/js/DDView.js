smalltalk.addPackage('DDView', []);
smalltalk.addClass('DDView', smalltalk.SmackboneView, ['model'], 'DDView');
smalltalk.addMethod(
unescape('_initializeOn_'),
smalltalk.method({
selector: unescape('initializeOn%3A'),
category: 'not yet classified',
fn: function (aModel){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.SmackboneView);
self['@model']=aModel;
return self;},
args: ["aModel"],
source: unescape('initializeOn%3A%20aModel%0A%0A%09super%20initialize.%0A%09model%20%3A%3D%20aModel'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.DDView);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
category: 'not yet classified',
fn: function (aModel){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_", [aModel]);
return self;},
args: ["aModel"],
source: unescape('on%3A%20aModel%0A%0A%09%5E%20self%20new%20initializeOn%3A%20aModel'),
messageSends: ["initializeOn:", "new"],
referencedClasses: []
}),
smalltalk.DDView.klass);


smalltalk.addClass('ParticipantView', smalltalk.DDView, [], 'DDView');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("participant-name")]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@model'], "_name", [])]);})(smalltalk.send(html, "_span", []));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%0A%09html%20span%20class%3A%20%27participant-name%27%3B%20with%3A%20model%20name.'),
messageSends: ["class:", "with:", "name", "span"],
referencedClasses: []
}),
smalltalk.ParticipantView);



smalltalk.addClass('ParticipantsView', smalltalk.DDView, [], 'DDView');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
var list=nil;
((($receiver = smalltalk.send(self['@model'], "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){(function($rec){smalltalk.send($rec, "_id_", [smalltalk.send(self, "_id", [])]);return smalltalk.send($rec, "_with_", [(function(){return list=smalltalk.send(smalltalk.send(self, "_renderParticipantsOn_", [html]), "_asJQuery", []);})]);})(smalltalk.send(html, "_div", []));smalltalk.send(list, "_sortable", []);return smalltalk.send(list, "_bind_do_", ["sortstop", (function(){return smalltalk.send(self, "_updateModel", []);})]);})() : (function(){return (function($rec){smalltalk.send($rec, "_id_", [smalltalk.send(self, "_id", [])]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderParticipantFormOn_", [html]);})]);})(smalltalk.send(html, "_div", []));})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){(function($rec){smalltalk.send($rec, "_id_", [smalltalk.send(self, "_id", [])]);return smalltalk.send($rec, "_with_", [(function(){return list=smalltalk.send(smalltalk.send(self, "_renderParticipantsOn_", [html]), "_asJQuery", []);})]);})(smalltalk.send(html, "_div", []));smalltalk.send(list, "_sortable", []);return smalltalk.send(list, "_bind_do_", ["sortstop", (function(){return smalltalk.send(self, "_updateModel", []);})]);}), (function(){return (function($rec){smalltalk.send($rec, "_id_", [smalltalk.send(self, "_id", [])]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderParticipantFormOn_", [html]);})]);})(smalltalk.send(html, "_div", []));})]));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%7C%20list%20%7C%20%0A%09model%20isEmpty%0A%09%09ifFalse%3A%20%5B%20%0A%09%09%09html%20div%20id%3A%20self%20id%3B%20with%3A%20%5B%20list%20%3A%3D%20%28%20self%20renderParticipantsOn%3A%20html%20%29%20asJQuery%20%5D.%0A%09%09%09list%20sortable.%0A%09%09%09list%20bind%3A%20%27sortstop%27%20do%3A%20%5B%20self%20updateModel%20%5D%5D%0A%09%09ifTrue%3A%20%5B%20%0A%09%09%09html%20div%20id%3A%20self%20id%3B%20with%3A%20%5B%20self%20renderParticipantFormOn%3A%20html%20%5D%5D'),
messageSends: ["ifFalse:ifTrue:", "isEmpty", "id:", "id", "with:", "asJQuery", "renderParticipantsOn:", "div", "sortable", "bind:do:", "updateModel", "renderParticipantFormOn:"],
referencedClasses: []
}),
smalltalk.ParticipantsView);

smalltalk.addMethod(
unescape('_renderParticipantsOn_'),
smalltalk.method({
selector: unescape('renderParticipantsOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
return (function($rec){smalltalk.send($rec, "_id_", ["sortable"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self['@model'], "_do_", [(function(aParticipant){return smalltalk.send(self, "_renderParticipant_on_", [aParticipant, html]);})]);})]);})(smalltalk.send(html, "_ul", []));
return self;},
args: ["html"],
source: unescape('renderParticipantsOn%3A%20html%0A%09%5E%20%0A%20%20%20%20%20%20%20%20%20%20%09html%20ul%20id%3A%20%27sortable%27%3B%20with%3A%20%5B%0A%20%20%20%20%20%20%20%09%09%09model%20do%3A%20%5B%20%3AaParticipant%20%7C%20self%20renderParticipant%3A%20aParticipant%20on%3A%20html%20%5D%5D%0A'),
messageSends: ["id:", "with:", "do:", "renderParticipant:on:", "ul"],
referencedClasses: []
}),
smalltalk.ParticipantsView);

smalltalk.addMethod(
unescape('_renderParticipant_on_'),
smalltalk.method({
selector: unescape('renderParticipant%3Aon%3A'),
category: 'not yet classified',
fn: function (aParticipant, html){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.ParticipantWidget || ParticipantWidget), "_on_onDelete_onAdd_", [aParticipant, (function(aParticipant){smalltalk.send(self['@model'], "_remove_", [aParticipant]);return smalltalk.send(self, "_refresh", []);}), (function(aNewParticipant, anExistingParticipant){smalltalk.send(self['@model'], "_insert_after_", [aNewParticipant, anExistingParticipant]);return smalltalk.send(self, "_refresh", []);})]), "_renderOn_", [html]);
return self;},
args: ["aParticipant", "html"],
source: unescape('renderParticipant%3A%20aParticipant%20on%3A%20html%0A%09%5E%20%28%20ParticipantWidget%20%0A%09%09on%3A%20aParticipant%20%0A%09%09onDelete%3A%20%5B%20%3AaParticipant%20%7C%20model%20remove%3A%20aParticipant.%20self%20refresh%20%5D%0A%20%20%20%20%20%20%20%20%20%20%09onAdd%3A%20%5B%20%3AaNewParticipant%20%3AanExistingParticipant%20%7C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09model%20insert%3A%20aNewParticipant%20after%3A%20anExistingParticipant.%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09self%20refresh.%20%5D%0A%20%20%20%20%20%20%20%20%20%20%29%20renderOn%3A%20html%20'),
messageSends: ["renderOn:", "on:onDelete:onAdd:", "remove:", "refresh", "insert:after:"],
referencedClasses: ["ParticipantWidget"]
}),
smalltalk.ParticipantsView);

smalltalk.addMethod(
unescape('_refresh'),
smalltalk.method({
selector: unescape('refresh'),
category: 'not yet classified',
fn: function (){
var self=this;
var selector=nil;
smalltalk.send(self, "_persistModel", []);
selector=smalltalk.send(smalltalk.send(self, "_idSelector", []), "_asJQuery", []);
smalltalk.send(selector, "_empty", []);
smalltalk.send(self, "_appendToJQuery_", [selector]);
return self;},
args: [],
source: unescape('refresh%0A%09%7C%20selector%20%7C%0A%22%09self%20updateModel.%22%0A%09self%20persistModel.%0A%09selector%20%3A%3D%20self%20idSelector%20asJQuery.%0A%09selector%20empty.%0A%09self%20appendToJQuery%3A%20selector.'),
messageSends: ["persistModel", "asJQuery", "idSelector", "empty", "appendToJQuery:"],
referencedClasses: []
}),
smalltalk.ParticipantsView);

smalltalk.addMethod(
unescape('_idSelector'),
smalltalk.method({
selector: unescape('idSelector'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_id", [])]);
return self;},
args: [],
source: unescape('idSelector%0A%09%5E%20%27%23%27%2C%20self%20id'),
messageSends: [unescape("%2C"), "id"],
referencedClasses: []
}),
smalltalk.ParticipantsView);

smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'not yet classified',
fn: function (){
var self=this;
return "participants";
return self;},
args: [],
source: unescape('id%0A%09%5E%20%27participants%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ParticipantsView);

smalltalk.addMethod(
unescape('_renderParticipantFormOn_'),
smalltalk.method({
selector: unescape('renderParticipantFormOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.ParticipantForm || ParticipantForm), "_onAdd_", [(function(aParticipant){smalltalk.send(self['@model'], "_add_", [aParticipant]);return smalltalk.send(self, "_refresh", []);})]), "_renderOn_", [html]);
return self;},
args: ["html"],
source: unescape('renderParticipantFormOn%3A%20html%0A%09%5E%20%28%20ParticipantForm%20%0A%20%20%20%20%20%20%20%20%20%20%20%09onAdd%3A%20%5B%20%3AaParticipant%20%7C%20model%20add%3A%20aParticipant.%20self%20refresh%20%5D%29%20renderOn%3A%20html'),
messageSends: ["renderOn:", "onAdd:", "add:", "refresh"],
referencedClasses: ["ParticipantForm"]
}),
smalltalk.ParticipantsView);

smalltalk.addMethod(
unescape('_updateModel'),
smalltalk.method({
selector: unescape('updateModel'),
category: 'not yet classified',
fn: function (){
var self=this;
var newModel=nil;
var count=nil;
var elements=nil;
newModel=smalltalk.send((smalltalk.Participants || Participants), "_new", []);
count=(0);
elements=smalltalk.send(smalltalk.send(self, "_selector", []), "_find_", [unescape("span.participant-name")]);
smalltalk.send(smalltalk.send(elements, "_length", []), "_timesRepeat_", [(function(){var element=nil;
element=smalltalk.send(elements, "_at_", [count]);smalltalk.send(newModel, "_add_", [smalltalk.send((smalltalk.Participant || Participant), "_named_", [smalltalk.send(element, "_innerHTML", [])])]);return count=((($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})]);
self['@model']=newModel;
smalltalk.send(self, "_persistModel", []);
return self;},
args: [],
source: unescape('updateModel%0A%7C%20newModel%20count%20elements%20%7C%0A%09newModel%20%3A%3D%20Participants%20new.%0A%09count%20%3A%3D0.%0A%09elements%20%3A%3D%20%28%20self%20selector%20find%3A%20%27span.participant-name%27%20%29.%0A%09elements%20length%20timesRepeat%3A%20%5B%20%7C%20element%20%7C%20element%20%3A%3D%20elements%20at%3A%20count.%20newModel%20add%3A%20%28%20Participant%20named%3A%20element%20innerHTML%20%29.%20count%20%3A%3D%20count%20+%201%20%5D.%0A%09model%20%3A%3D%20newModel.%0A%09self%20persistModel.'),
messageSends: ["new", "find:", "selector", "timesRepeat:", "length", "at:", "add:", "named:", "innerHTML", unescape("+"), "persistModel"],
referencedClasses: ["Participants", "Participant"]
}),
smalltalk.ParticipantsView);

smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_idSelector", []), "_asJQuery", []);
return self;},
args: [],
source: unescape('selector%0A%09%5E%20self%20idSelector%20asJQuery.'),
messageSends: ["asJQuery", "idSelector"],
referencedClasses: []
}),
smalltalk.ParticipantsView);

smalltalk.addMethod(
unescape('_persistModel'),
smalltalk.method({
selector: unescape('persistModel'),
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_localStorage", []), "_at_put_", ["participants", smalltalk.send(self['@model'], "_asJSON", [])]);
return self;},
args: [],
source: unescape('persistModel%0A%0A%09window%20localStorage%20at%3A%20%27participants%27%20put%3A%20model%20asJSON.'),
messageSends: ["at:put:", "localStorage", "asJSON"],
referencedClasses: []
}),
smalltalk.ParticipantsView);


smalltalk.addMethod(
unescape('_fixture'),
smalltalk.method({
selector: unescape('fixture'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_", [smalltalk.send(smalltalk.send((smalltalk.DDFactory || DDFactory), "_new", []), "_participants", [])]);
return self;},
args: [],
source: unescape('fixture%0A%09%5E%20self%20new%20initializeOn%3A%20%28%20DDFactory%20new%20participants%20%29'),
messageSends: ["initializeOn:", "new", "participants"],
referencedClasses: ["DDFactory"]
}),
smalltalk.ParticipantsView.klass);


smalltalk.addClass('ParticipantWidget', smalltalk.SmackboneView, ['model', 'deleteCallback', 'plusCallback', 'addParticipant', 'addCallback'], 'DDView');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
var addSelector=nil;
var addButton=nil;
smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("ui-state-default")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("ui-icon%20ui-icon-arrowthick-2-n-s%20sortable")]);return smalltalk.send($rec, "_with_", [(function(){return nil;})]);})(smalltalk.send(html, "_span", []));smalltalk.send(smalltalk.send((smalltalk.ParticipantView || ParticipantView), "_on_", [self['@model']]), "_renderOn_", [html]);smalltalk.send(html, "_with_", [" "]);smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(html, "_button", []), "_with_", ["x"]), "_asJQuery", []), "_bind_do_", ["click", (function(){return smalltalk.send(self['@deleteCallback'], "_value_", [self['@model']]);})]);smalltalk.send(html, "_with_", [" "]);addButton=smalltalk.send(smalltalk.send(smalltalk.send(html, "_button", []), "_with_", [unescape("+")]), "_asJQuery", []);return smalltalk.send(addButton, "_click_", [(function(){smalltalk.send(addButton, "_hide", []);return smalltalk.send(smalltalk.send((smalltalk.ParticipantAfterForm || ParticipantAfterForm), "_calledBy_onAdd_onCancel_", [self['@model'], self['@addCallback'], (function(){smalltalk.send(addSelector, "_empty", []);return smalltalk.send(addButton, "_show", []);})]), "_appendToJQuery_", [addSelector]);})]);})]);})(smalltalk.send(html, "_li", []));return addSelector=smalltalk.send(smalltalk.send(smalltalk.send(html, "_li", []), "_class_", [unescape("ui-state-default")]), "_asJQuery", []);})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%7C%20addSelector%20addButton%20%7C%0A%0A%09html%20li%20with%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%09html%20li%20class%3A%20%27ui-state-default%27%3B%20with%3A%20%5B%20%0A%20%20%20%20%20%20%20%20%09%09html%20span%20class%3A%20%27ui-icon%20ui-icon-arrowthick-2-n-s%20sortable%27%3B%20with%3A%20%5B%20%5D.%0A%20%20%20%20%20%20%20%20%20%20%09%09%28%20ParticipantView%20on%3A%20model%20%29%20renderOn%3A%20html.%20%0A%20%20%20%20%20%20%20%20%20%20%09%09html%20with%3A%20%27%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09%28%20html%20button%20with%3A%20%27x%27%20%29%20asJQuery%20bind%3A%20%27click%27%20do%3A%20%5B%20deleteCallback%20value%3A%20model%20%5D.%0A%20%20%20%20%20%20%20%20%20%20%09%09html%20with%3A%20%27%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09addButton%20%3A%3D%20%28%20html%20button%20with%3A%20%27+%27%20%29%20asJQuery.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%09%09addButton%20click%3A%20%5B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09addButton%20hide.%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%28%20ParticipantAfterForm%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09calledBy%3A%20model%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09onAdd%3A%20addCallback%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09onCancel%3A%20%5B%20addSelector%20empty.%20addButton%20show.%20%5D%20%20%29%20appendToJQuery%3A%20addSelector%20%5D%5D.%20%0A%09%09%09addSelector%20%3A%3D%20%28%20html%20li%20class%3A%20%27ui-state-default%27%20%29%20asJQuery.%0A%20%20%20%20%20%20%20%20%5D.'),
messageSends: ["with:", "li", "class:", "span", "renderOn:", "on:", "bind:do:", "asJQuery", "button", "value:", "click:", "hide", "appendToJQuery:", "calledBy:onAdd:onCancel:", "empty", "show"],
referencedClasses: ["ParticipantView", "ParticipantAfterForm"]
}),
smalltalk.ParticipantWidget);

smalltalk.addMethod(
unescape('_initializeOn_onDelete_onAdd_'),
smalltalk.method({
selector: unescape('initializeOn%3AonDelete%3AonAdd%3A'),
category: 'not yet classified',
fn: function (aParticipant, aBlock, anotherBlock){
var self=this;
self['@model']=aParticipant;
self['@deleteCallback']=aBlock;
self['@addCallback']=anotherBlock;
return self;},
args: ["aParticipant", "aBlock", "anotherBlock"],
source: unescape('initializeOn%3A%20aParticipant%20onDelete%3A%20aBlock%20onAdd%3A%20anotherBlock%0A%0A%09model%20%3A%3D%20aParticipant.%0A%09deleteCallback%20%3A%3D%20aBlock.%0A%09addCallback%20%3A%3D%20anotherBlock.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ParticipantWidget);


smalltalk.addMethod(
unescape('_on_onDelete_onAdd_'),
smalltalk.method({
selector: unescape('on%3AonDelete%3AonAdd%3A'),
category: 'not yet classified',
fn: function (aParticipant, aBlock, anotherBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_onDelete_onAdd_", [aParticipant, aBlock, anotherBlock]);
return self;},
args: ["aParticipant", "aBlock", "anotherBlock"],
source: unescape('on%3A%20aParticipant%20onDelete%3A%20aBlock%20onAdd%3A%20anotherBlock%0A%0A%09%5E%20self%20new%20initializeOn%3A%20aParticipant%20onDelete%3A%20aBlock%20onAdd%3A%20anotherBlock'),
messageSends: ["initializeOn:onDelete:onAdd:", "new"],
referencedClasses: []
}),
smalltalk.ParticipantWidget.klass);


smalltalk.addClass('DDRouter', smalltalk.SmackboneRouter, ['initiativeTracker'], 'DDView');
smalltalk.addMethod(
unescape('_initiativeTracker'),
smalltalk.method({
selector: unescape('initiativeTracker'),
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_domRoot", []), "_empty", []), "_append_", [smalltalk.send(smalltalk.send(self['@initiativeTracker'], "_render", []), "_el", [])]);
return self;},
args: [],
source: unescape('initiativeTracker%0A%09self%20domRoot%20empty%20append%3A%20initiativeTracker%20render%20el.'),
messageSends: ["append:", "empty", "domRoot", "el", "render"],
referencedClasses: []
}),
smalltalk.DDRouter);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function (){
var self=this;
var persisted=nil;
var jsonObject=nil;
var initialList=nil;
persisted=smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_localStorage", []), "_at_", ["participants"]);
((($receiver = smalltalk.send(persisted, "_isKindOf_", [(smalltalk.String || String)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){jsonObject=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_eval_", [smalltalk.send(smalltalk.send(unescape("%28"), "__comma", [persisted]), "__comma", [unescape("%29")])]);return initialList=smalltalk.send((smalltalk.Participants || Participants), "_fromJSON_", [jsonObject]);})() : (function(){return initialList=smalltalk.send(smalltalk.send((smalltalk.DDFactory || DDFactory), "_new", []), "_participants", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){jsonObject=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_eval_", [smalltalk.send(smalltalk.send(unescape("%28"), "__comma", [persisted]), "__comma", [unescape("%29")])]);return initialList=smalltalk.send((smalltalk.Participants || Participants), "_fromJSON_", [jsonObject]);}), (function(){return initialList=smalltalk.send(smalltalk.send((smalltalk.DDFactory || DDFactory), "_new", []), "_participants", []);})]));
self['@initiativeTracker']=smalltalk.send((smalltalk.InitiativeTracker || InitiativeTracker), "_with_", [smalltalk.send((smalltalk.ParticipantsView || ParticipantsView), "_on_", [initialList])]);
return self;},
args: [],
source: unescape('initialize%0A%7C%20persisted%20jsonObject%20initialList%20%7C%0A%0A%09persisted%20%3A%3D%20%28%20window%20localStorage%20at%3A%20%27participants%27%20%29.%0A%09%28%20persisted%20isKindOf%3A%20String%20%29%20%0A%09%09ifTrue%3A%20%5B%20jsonObject%20%3A%3D%20Compiler%20new%20eval%3A%20%27%28%27%2C%20persisted%2C%20%27%29%27.%20initialList%20%3A%3D%20Participants%20fromJSON%3A%20jsonObject%20%5D%0A%09%09ifFalse%3A%20%5B%20initialList%20%3A%3D%20DDFactory%20new%20participants%20%5D.%0A%0A%09initiativeTracker%20%3A%3D%20%0A%09%09InitiativeTracker%20%0A%09%09%09with%3A%20%28%20ParticipantsView%20on%3A%20initialList%20%29'),
messageSends: ["at:", "localStorage", "ifTrue:ifFalse:", "isKindOf:", "eval:", "new", unescape("%2C"), "fromJSON:", "participants", "with:", "on:"],
referencedClasses: ["String", "Compiler", "Participants", "DDFactory", "InitiativeTracker", "ParticipantsView"]
}),
smalltalk.DDRouter);

smalltalk.addMethod(
unescape('_domRoot'),
smalltalk.method({
selector: unescape('domRoot'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(unescape("%23container"), "_asJQuery", []);
return self;},
args: [],
source: unescape('domRoot%0A%09%5E%20%27%23container%27%20asJQuery'),
messageSends: ["asJQuery"],
referencedClasses: []
}),
smalltalk.DDRouter);

smalltalk.addMethod(
unescape('_routes'),
smalltalk.method({
selector: unescape('routes'),
category: 'not yet classified',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["", "initiativeTracker"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: unescape('routes%0A%09%5E%20%28Dictionary%20new%29%0A%09%09at%3A%20%27%27%20put%3A%20%27initiativeTracker%27%3B%0A%09%09yourself.'),
messageSends: ["at:put:", "yourself", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DDRouter);



smalltalk.addClass('InitiativeTracker', smalltalk.DDView, ['participants'], 'DDView');
smalltalk.addMethod(
unescape('_initializeWith_'),
smalltalk.method({
selector: unescape('initializeWith%3A'),
category: 'not yet classified',
fn: function (aParticipants){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.DDView);
self['@participants']=aParticipants;
return self;},
args: ["aParticipants"],
source: unescape('initializeWith%3A%20aParticipants%0A%0A%09super%20initialize.%0A%09participants%20%3A%3D%20aParticipants%09%0A%0A%09%22TODO%22%0A%09%22make%20name%20editable%22%0A%09%22strange%20when%20adding%20when%20two%20inputs%20open%22%0A%09%22add%20roll%20value%3F%20%28%20seperately%20editable%20from%20name%20%29%22%0A%09%22move%20buttons%20away%20from%20name%22'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.InitiativeTracker);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
smalltalk.send(html, "_h2_", ["Track Initiative"]);
smalltalk.send(self['@participants'], "_renderOn_", [html]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%22%09html%20button%20asJQuery%20click%3A%20%5B%20participants%20refresh%20%5D.%22%0A%09html%20h2%3A%20%27Track%20Initiative%27.%0A%09participants%20renderOn%3A%20html'),
messageSends: ["h2:", "renderOn:"],
referencedClasses: []
}),
smalltalk.InitiativeTracker);


smalltalk.addMethod(
unescape('_with_'),
smalltalk.method({
selector: unescape('with%3A'),
category: 'not yet classified',
fn: function (aParticipants){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeWith_", [aParticipants]);
return self;},
args: ["aParticipants"],
source: unescape('with%3A%20aParticipants%0A%09%5E%20self%20new%20initializeWith%3A%20aParticipants'),
messageSends: ["initializeWith:", "new"],
referencedClasses: []
}),
smalltalk.InitiativeTracker.klass);

smalltalk.addMethod(
unescape('_fetch'),
smalltalk.method({
selector: unescape('fetch'),
category: 'not yet classified',
fn: function (){
var self=this;
var persisted=nil;
var jsonObject=nil;
var initialList=nil;
persisted=smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_localStorage", []), "_at_", ["participants"]);
((($receiver = smalltalk.send(persisted, "_isKindOf_", [(smalltalk.String || String)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){jsonObject=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_eval_", [smalltalk.send(smalltalk.send(unescape("%28"), "__comma", [persisted]), "__comma", [unescape("%29")])]);return initialList=smalltalk.send((smalltalk.Participants || Participants), "_fromJSON_", [jsonObject]);})() : (function(){return initialList=smalltalk.send(smalltalk.send((smalltalk.DDFactory || DDFactory), "_new", []), "_participants", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){jsonObject=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_eval_", [smalltalk.send(smalltalk.send(unescape("%28"), "__comma", [persisted]), "__comma", [unescape("%29")])]);return initialList=smalltalk.send((smalltalk.Participants || Participants), "_fromJSON_", [jsonObject]);}), (function(){return initialList=smalltalk.send(smalltalk.send((smalltalk.DDFactory || DDFactory), "_new", []), "_participants", []);})]));
return smalltalk.send(self, "_with_", [smalltalk.send((smalltalk.ParticipantsView || ParticipantsView), "_on_", [initialList])]);
return self;},
args: [],
source: unescape('fetch%0A%7C%20persisted%20jsonObject%20initialList%20%7C%0A%0A%09persisted%20%3A%3D%20%28%20window%20localStorage%20at%3A%20%27participants%27%20%29.%0A%09%28%20persisted%20isKindOf%3A%20String%20%29%20%0A%09%09ifTrue%3A%20%5B%20%20jsonObject%20%3A%3D%20Compiler%20new%20eval%3A%20%27%28%27%2C%20persisted%2C%20%27%29%27.%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20initialList%20%3A%3D%20Participants%20fromJSON%3A%20jsonObject%20%5D%0A%09%09ifFalse%3A%20%5B%20initialList%20%3A%3D%20DDFactory%20new%20participants%20%5D.%0A%0A%09%5E%20self%20with%3A%20%28%20ParticipantsView%20on%3A%20initialList%20%29'),
messageSends: ["at:", "localStorage", "ifTrue:ifFalse:", "isKindOf:", "eval:", "new", unescape("%2C"), "fromJSON:", "participants", "with:", "on:"],
referencedClasses: ["String", "Compiler", "Participants", "DDFactory", "ParticipantsView"]
}),
smalltalk.InitiativeTracker.klass);


smalltalk.addClass('AddParticipantWidget', smalltalk.DDView, ['addAction'], 'DDView');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
var input=nil;
var addButton=nil;
input=smalltalk.send(html, "_input", []);
addButton=smalltalk.send(smalltalk.send(html, "_button", []), "_with_", [unescape("+")]);
smalltalk.send(smalltalk.send(addButton, "_asJQuery", []), "_bind_do_", ["click", (function(){return smalltalk.send(self['@addAction'], "_value_", [smalltalk.send((smalltalk.Participant || Participant), "_named_", [smalltalk.send(smalltalk.send(input, "_asJQuery", []), "_val", [])])]);})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%7C%20input%20addButton%20%7C%20%0A%0A%09input%20%3A%3D%20html%20input.%0A%20%20%20%20%20%20%20%20addButton%20%3A%3D%20%28%20html%20button%20with%3A%20%27+%27%20%29.%0A%20%20%20%20%20%20%20%20addButton%20asJQuery%20bind%3A%20%27click%27%20do%3A%20%5B%20addAction%20value%3A%20%28%20Participant%20named%3A%20input%20asJQuery%20val%20%29.%20%5D.%20'),
messageSends: ["input", "with:", "button", "bind:do:", "asJQuery", "value:", "named:", "val"],
referencedClasses: ["Participant"]
}),
smalltalk.AddParticipantWidget);

smalltalk.addMethod(
unescape('_initializeOnAdd_'),
smalltalk.method({
selector: unescape('initializeOnAdd%3A'),
category: 'not yet classified',
fn: function (aBlock){
var self=this;
self['@addAction']=aBlock;
return self;},
args: ["aBlock"],
source: unescape('initializeOnAdd%3A%20aBlock%0A%0A%09addAction%20%3A%3D%20aBlock'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AddParticipantWidget);


smalltalk.addMethod(
unescape('_initializeOnAdd_'),
smalltalk.method({
selector: unescape('initializeOnAdd%3A'),
category: 'not yet classified',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOnAdd_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('initializeOnAdd%3A%20aBlock%0A%0A%09%5E%20self%20new%20initializeOnAdd%3A%20aBlock'),
messageSends: ["initializeOnAdd:", "new"],
referencedClasses: []
}),
smalltalk.AddParticipantWidget.klass);


smalltalk.addClass('ParticipantAfterForm', smalltalk.SmackboneView, ['callingParticipant', 'addCallback', 'cancelCallback'], 'DDView');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
var input=nil;
var addButton=nil;
var cancelButton=nil;
input=smalltalk.send(smalltalk.send(html, "_input", []), "_asJQuery", []);
smalltalk.send(input, "_focus", []);
addButton=smalltalk.send(smalltalk.send(html, "_button", []), "_with_", [unescape("+")]);
smalltalk.send(smalltalk.send(addButton, "_asJQuery", []), "_bind_do_", ["click", (function(){return smalltalk.send(self['@addCallback'], "_value_value_", [smalltalk.send((smalltalk.Participant || Participant), "_named_", [smalltalk.send(input, "_val", [])]), self['@callingParticipant']]);})]);
cancelButton=smalltalk.send(smalltalk.send(html, "_button", []), "_with_", ["x"]);
smalltalk.send(smalltalk.send(cancelButton, "_asJQuery", []), "_bind_do_", ["click", (function(){return smalltalk.send(self['@cancelCallback'], "_value", []);})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%7C%20input%20addButton%20cancelButton%20%7C%20%0A%0A%09input%20%3A%3D%20html%20input%20asJQuery.%0A%09input%20focus.%0A%20%20%20%20%20%20%20%20addButton%20%3A%3D%20%28%20html%20button%20with%3A%20%27+%27%20%29.%0A%20%20%20%20%20%20%20%20addButton%20asJQuery%20bind%3A%20%27click%27%20do%3A%20%5B%20addCallback%20value%3A%20%28%20Participant%20named%3A%20input%20val%20%29%20value%3A%20callingParticipant%20%5D.%20%0A%20%20%20%20%20%20%20%20cancelButton%20%3A%3D%20%28%20html%20button%20with%3A%20%27x%27%20%29.%0A%20%20%20%20%20%20%20%20cancelButton%20asJQuery%20bind%3A%20%27click%27%20do%3A%20%5B%20cancelCallback%20value%20%5D.'),
messageSends: ["asJQuery", "input", "focus", "with:", "button", "bind:do:", "value:value:", "named:", "val", "value"],
referencedClasses: ["Participant"]
}),
smalltalk.ParticipantAfterForm);

smalltalk.addMethod(
unescape('_initializeCalledBy_onAdd_onCancel_'),
smalltalk.method({
selector: unescape('initializeCalledBy%3AonAdd%3AonCancel%3A'),
category: 'not yet classified',
fn: function (aParticipant, aBlock, anotherBlock){
var self=this;
self['@callingParticipant']=aParticipant;
self['@addCallback']=aBlock;
self['@cancelCallback']=anotherBlock;
return self;},
args: ["aParticipant", "aBlock", "anotherBlock"],
source: unescape('initializeCalledBy%3A%20aParticipant%20onAdd%3A%20aBlock%20onCancel%3A%20anotherBlock%0A%0A%09callingParticipant%20%3A%3D%20aParticipant.%0A%09addCallback%20%3A%3D%20aBlock.%0A%09cancelCallback%20%3A%3D%20anotherBlock.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ParticipantAfterForm);


smalltalk.addMethod(
unescape('_calledBy_onAdd_onCancel_'),
smalltalk.method({
selector: unescape('calledBy%3AonAdd%3AonCancel%3A'),
category: 'not yet classified',
fn: function (aParticipant, aBlock, anotherBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeCalledBy_onAdd_onCancel_", [aParticipant, aBlock, anotherBlock]);
return self;},
args: ["aParticipant", "aBlock", "anotherBlock"],
source: unescape('calledBy%3A%20aParticipant%20onAdd%3A%20aBlock%20onCancel%3A%20anotherBlock%0A%0A%09%5E%20self%20new%20initializeCalledBy%3A%20aParticipant%20onAdd%3A%20aBlock%20onCancel%3A%20anotherBlock'),
messageSends: ["initializeCalledBy:onAdd:onCancel:", "new"],
referencedClasses: []
}),
smalltalk.ParticipantAfterForm.klass);


smalltalk.addClass('ParticipantForm', smalltalk.SmackboneView, ['callingParticipant', 'addCallback', 'cancelCallback'], 'DDView');
smalltalk.addMethod(
unescape('_initializeOnAdd_'),
smalltalk.method({
selector: unescape('initializeOnAdd%3A'),
category: 'not yet classified',
fn: function (aBlock){
var self=this;
self['@addCallback']=aBlock;
return self;},
args: ["aBlock"],
source: unescape('initializeOnAdd%3A%20aBlock%0A%0A%09addCallback%20%3A%3D%20aBlock'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ParticipantForm);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
var input=nil;
var addButton=nil;
input=smalltalk.send(html, "_input", []);
addButton=smalltalk.send(smalltalk.send(html, "_button", []), "_with_", [unescape("+")]);
smalltalk.send(smalltalk.send(addButton, "_asJQuery", []), "_bind_do_", ["click", (function(){return smalltalk.send(self['@addCallback'], "_value_", [smalltalk.send((smalltalk.Participant || Participant), "_named_", [smalltalk.send(smalltalk.send(input, "_asJQuery", []), "_val", [])])]);})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%7C%20input%20addButton%20%7C%0A%09input%20%3A%3D%20html%20input.%0A%20%20%20%20%20%20%20%20addButton%20%3A%3D%20%28%20html%20button%20with%3A%20%27+%27%20%29.%0A%20%20%20%20%20%20%20%20addButton%20asJQuery%20bind%3A%20%27click%27%20do%3A%20%5B%20addCallback%20value%3A%20%28%20Participant%20named%3A%20input%20asJQuery%20val%20%29%20%5D.%20%0A'),
messageSends: ["input", "with:", "button", "bind:do:", "asJQuery", "value:", "named:", "val"],
referencedClasses: ["Participant"]
}),
smalltalk.ParticipantForm);


smalltalk.addMethod(
unescape('_onAdd_'),
smalltalk.method({
selector: unescape('onAdd%3A'),
category: 'not yet classified',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOnAdd_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onAdd%3A%20aBlock%0A%0A%09%5E%20self%20new%20initializeOnAdd%3A%20aBlock'),
messageSends: ["initializeOnAdd:", "new"],
referencedClasses: []
}),
smalltalk.ParticipantForm.klass);


