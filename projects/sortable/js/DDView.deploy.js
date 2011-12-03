smalltalk.addPackage('DDView', []);
smalltalk.addClass('DDView', smalltalk.SmackboneView, ['model'], 'DDView');
smalltalk.addMethod(
'_initializeOn_',
smalltalk.method({
selector: 'initializeOn:',
fn: function (aModel){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.SmackboneView);
self['@model']=aModel;
return self;}
}),
smalltalk.DDView);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
fn: function (aModel){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_", [aModel]);
return self;}
}),
smalltalk.DDView.klass);


smalltalk.addClass('ParticipantView', smalltalk.DDView, [], 'DDView');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("participant-name")]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@model'], "_name", [])]);})(smalltalk.send(html, "_span", []));
return self;}
}),
smalltalk.ParticipantView);



smalltalk.addClass('ParticipantsView', smalltalk.DDView, [], 'DDView');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
var list=nil;
((($receiver = smalltalk.send(self['@model'], "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){(function($rec){smalltalk.send($rec, "_id_", [smalltalk.send(self, "_id", [])]);return smalltalk.send($rec, "_with_", [(function(){return list=smalltalk.send(smalltalk.send(self, "_renderParticipantsOn_", [html]), "_asJQuery", []);})]);})(smalltalk.send(html, "_div", []));smalltalk.send(list, "_sortable", []);return smalltalk.send(list, "_bind_do_", ["sortstop", (function(){return smalltalk.send(self, "_updateModel", []);})]);})() : (function(){return (function($rec){smalltalk.send($rec, "_id_", [smalltalk.send(self, "_id", [])]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderParticipantFormOn_", [html]);})]);})(smalltalk.send(html, "_div", []));})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){(function($rec){smalltalk.send($rec, "_id_", [smalltalk.send(self, "_id", [])]);return smalltalk.send($rec, "_with_", [(function(){return list=smalltalk.send(smalltalk.send(self, "_renderParticipantsOn_", [html]), "_asJQuery", []);})]);})(smalltalk.send(html, "_div", []));smalltalk.send(list, "_sortable", []);return smalltalk.send(list, "_bind_do_", ["sortstop", (function(){return smalltalk.send(self, "_updateModel", []);})]);}), (function(){return (function($rec){smalltalk.send($rec, "_id_", [smalltalk.send(self, "_id", [])]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderParticipantFormOn_", [html]);})]);})(smalltalk.send(html, "_div", []));})]));
return self;}
}),
smalltalk.ParticipantsView);

smalltalk.addMethod(
'_renderParticipantsOn_',
smalltalk.method({
selector: 'renderParticipantsOn:',
fn: function (html){
var self=this;
return (function($rec){smalltalk.send($rec, "_id_", ["sortable"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self['@model'], "_do_", [(function(aParticipant){return smalltalk.send(self, "_renderParticipant_on_", [aParticipant, html]);})]);})]);})(smalltalk.send(html, "_ul", []));
return self;}
}),
smalltalk.ParticipantsView);

smalltalk.addMethod(
'_renderParticipant_on_',
smalltalk.method({
selector: 'renderParticipant:on:',
fn: function (aParticipant, html){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.ParticipantWidget || ParticipantWidget), "_on_onDelete_onAdd_", [aParticipant, (function(aParticipant){smalltalk.send(self['@model'], "_remove_", [aParticipant]);return smalltalk.send(self, "_refresh", []);}), (function(aNewParticipant, anExistingParticipant){smalltalk.send(self['@model'], "_insert_after_", [aNewParticipant, anExistingParticipant]);return smalltalk.send(self, "_refresh", []);})]), "_renderOn_", [html]);
return self;}
}),
smalltalk.ParticipantsView);

smalltalk.addMethod(
'_refresh',
smalltalk.method({
selector: 'refresh',
fn: function (){
var self=this;
var selector=nil;
smalltalk.send(self, "_persistModel", []);
selector=smalltalk.send(smalltalk.send(self, "_idSelector", []), "_asJQuery", []);
smalltalk.send(selector, "_empty", []);
smalltalk.send(self, "_appendToJQuery_", [selector]);
return self;}
}),
smalltalk.ParticipantsView);

smalltalk.addMethod(
'_idSelector',
smalltalk.method({
selector: 'idSelector',
fn: function (){
var self=this;
return smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_id", [])]);
return self;}
}),
smalltalk.ParticipantsView);

smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function (){
var self=this;
return "participants";
return self;}
}),
smalltalk.ParticipantsView);

smalltalk.addMethod(
'_renderParticipantFormOn_',
smalltalk.method({
selector: 'renderParticipantFormOn:',
fn: function (html){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.ParticipantForm || ParticipantForm), "_onAdd_", [(function(aParticipant){smalltalk.send(self['@model'], "_add_", [aParticipant]);return smalltalk.send(self, "_refresh", []);})]), "_renderOn_", [html]);
return self;}
}),
smalltalk.ParticipantsView);

smalltalk.addMethod(
'_updateModel',
smalltalk.method({
selector: 'updateModel',
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
return self;}
}),
smalltalk.ParticipantsView);

smalltalk.addMethod(
'_selector',
smalltalk.method({
selector: 'selector',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_idSelector", []), "_asJQuery", []);
return self;}
}),
smalltalk.ParticipantsView);

smalltalk.addMethod(
'_persistModel',
smalltalk.method({
selector: 'persistModel',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_localStorage", []), "_at_put_", ["participants", smalltalk.send(self['@model'], "_asJSON", [])]);
return self;}
}),
smalltalk.ParticipantsView);


smalltalk.addMethod(
'_fixture',
smalltalk.method({
selector: 'fixture',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_", [smalltalk.send(smalltalk.send((smalltalk.DDFactory || DDFactory), "_new", []), "_participants", [])]);
return self;}
}),
smalltalk.ParticipantsView.klass);


smalltalk.addClass('ParticipantWidget', smalltalk.SmackboneView, ['model', 'deleteCallback', 'plusCallback', 'addParticipant', 'addCallback'], 'DDView');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
var addSelector=nil;
var addButton=nil;
smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("ui-state-default")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("ui-icon%20ui-icon-arrowthick-2-n-s%20sortable")]);return smalltalk.send($rec, "_with_", [(function(){return nil;})]);})(smalltalk.send(html, "_span", []));smalltalk.send(smalltalk.send((smalltalk.ParticipantView || ParticipantView), "_on_", [self['@model']]), "_renderOn_", [html]);smalltalk.send(html, "_with_", [" "]);smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(html, "_button", []), "_with_", ["x"]), "_asJQuery", []), "_bind_do_", ["click", (function(){return smalltalk.send(self['@deleteCallback'], "_value_", [self['@model']]);})]);smalltalk.send(html, "_with_", [" "]);addButton=smalltalk.send(smalltalk.send(smalltalk.send(html, "_button", []), "_with_", [unescape("+")]), "_asJQuery", []);return smalltalk.send(addButton, "_click_", [(function(){smalltalk.send(addButton, "_hide", []);return smalltalk.send(smalltalk.send((smalltalk.ParticipantAfterForm || ParticipantAfterForm), "_calledBy_onAdd_onCancel_", [self['@model'], self['@addCallback'], (function(){smalltalk.send(addSelector, "_empty", []);return smalltalk.send(addButton, "_show", []);})]), "_appendToJQuery_", [addSelector]);})]);})]);})(smalltalk.send(html, "_li", []));return addSelector=smalltalk.send(smalltalk.send(smalltalk.send(html, "_li", []), "_class_", [unescape("ui-state-default")]), "_asJQuery", []);})]);
return self;}
}),
smalltalk.ParticipantWidget);

smalltalk.addMethod(
'_initializeOn_onDelete_onAdd_',
smalltalk.method({
selector: 'initializeOn:onDelete:onAdd:',
fn: function (aParticipant, aBlock, anotherBlock){
var self=this;
self['@model']=aParticipant;
self['@deleteCallback']=aBlock;
self['@addCallback']=anotherBlock;
return self;}
}),
smalltalk.ParticipantWidget);


smalltalk.addMethod(
'_on_onDelete_onAdd_',
smalltalk.method({
selector: 'on:onDelete:onAdd:',
fn: function (aParticipant, aBlock, anotherBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_onDelete_onAdd_", [aParticipant, aBlock, anotherBlock]);
return self;}
}),
smalltalk.ParticipantWidget.klass);


smalltalk.addClass('DDRouter', smalltalk.SmackboneRouter, ['initiativeTracker'], 'DDView');
smalltalk.addMethod(
'_initiativeTracker',
smalltalk.method({
selector: 'initiativeTracker',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_domRoot", []), "_empty", []), "_append_", [smalltalk.send(smalltalk.send(self['@initiativeTracker'], "_render", []), "_el", [])]);
return self;}
}),
smalltalk.DDRouter);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
var persisted=nil;
var jsonObject=nil;
var initialList=nil;
persisted=smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_localStorage", []), "_at_", ["participants"]);
((($receiver = smalltalk.send(persisted, "_isKindOf_", [(smalltalk.String || String)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){jsonObject=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_eval_", [smalltalk.send(smalltalk.send(unescape("%28"), "__comma", [persisted]), "__comma", [unescape("%29")])]);return initialList=smalltalk.send((smalltalk.Participants || Participants), "_fromJSON_", [jsonObject]);})() : (function(){return initialList=smalltalk.send(smalltalk.send((smalltalk.DDFactory || DDFactory), "_new", []), "_participants", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){jsonObject=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_eval_", [smalltalk.send(smalltalk.send(unescape("%28"), "__comma", [persisted]), "__comma", [unescape("%29")])]);return initialList=smalltalk.send((smalltalk.Participants || Participants), "_fromJSON_", [jsonObject]);}), (function(){return initialList=smalltalk.send(smalltalk.send((smalltalk.DDFactory || DDFactory), "_new", []), "_participants", []);})]));
self['@initiativeTracker']=smalltalk.send((smalltalk.InitiativeTracker || InitiativeTracker), "_with_", [smalltalk.send((smalltalk.ParticipantsView || ParticipantsView), "_on_", [initialList])]);
return self;}
}),
smalltalk.DDRouter);

smalltalk.addMethod(
'_domRoot',
smalltalk.method({
selector: 'domRoot',
fn: function (){
var self=this;
return smalltalk.send(unescape("%23container"), "_asJQuery", []);
return self;}
}),
smalltalk.DDRouter);

smalltalk.addMethod(
'_routes',
smalltalk.method({
selector: 'routes',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["", "initiativeTracker"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;}
}),
smalltalk.DDRouter);



smalltalk.addClass('InitiativeTracker', smalltalk.DDView, ['participants'], 'DDView');
smalltalk.addMethod(
'_initializeWith_',
smalltalk.method({
selector: 'initializeWith:',
fn: function (aParticipants){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.DDView);
self['@participants']=aParticipants;
return self;}
}),
smalltalk.InitiativeTracker);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
smalltalk.send(html, "_h2_", ["Track Initiative"]);
smalltalk.send(self['@participants'], "_renderOn_", [html]);
return self;}
}),
smalltalk.InitiativeTracker);


smalltalk.addMethod(
'_with_',
smalltalk.method({
selector: 'with:',
fn: function (aParticipants){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeWith_", [aParticipants]);
return self;}
}),
smalltalk.InitiativeTracker.klass);

smalltalk.addMethod(
'_fetch',
smalltalk.method({
selector: 'fetch',
fn: function (){
var self=this;
var persisted=nil;
var jsonObject=nil;
var initialList=nil;
persisted=smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_localStorage", []), "_at_", ["participants"]);
((($receiver = smalltalk.send(persisted, "_isKindOf_", [(smalltalk.String || String)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){jsonObject=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_eval_", [smalltalk.send(smalltalk.send(unescape("%28"), "__comma", [persisted]), "__comma", [unescape("%29")])]);return initialList=smalltalk.send((smalltalk.Participants || Participants), "_fromJSON_", [jsonObject]);})() : (function(){return initialList=smalltalk.send(smalltalk.send((smalltalk.DDFactory || DDFactory), "_new", []), "_participants", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){jsonObject=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_eval_", [smalltalk.send(smalltalk.send(unescape("%28"), "__comma", [persisted]), "__comma", [unescape("%29")])]);return initialList=smalltalk.send((smalltalk.Participants || Participants), "_fromJSON_", [jsonObject]);}), (function(){return initialList=smalltalk.send(smalltalk.send((smalltalk.DDFactory || DDFactory), "_new", []), "_participants", []);})]));
return smalltalk.send(self, "_with_", [smalltalk.send((smalltalk.ParticipantsView || ParticipantsView), "_on_", [initialList])]);
return self;}
}),
smalltalk.InitiativeTracker.klass);


smalltalk.addClass('AddParticipantWidget', smalltalk.DDView, ['addAction'], 'DDView');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
var input=nil;
var addButton=nil;
input=smalltalk.send(html, "_input", []);
addButton=smalltalk.send(smalltalk.send(html, "_button", []), "_with_", [unescape("+")]);
smalltalk.send(smalltalk.send(addButton, "_asJQuery", []), "_bind_do_", ["click", (function(){return smalltalk.send(self['@addAction'], "_value_", [smalltalk.send((smalltalk.Participant || Participant), "_named_", [smalltalk.send(smalltalk.send(input, "_asJQuery", []), "_val", [])])]);})]);
return self;}
}),
smalltalk.AddParticipantWidget);

smalltalk.addMethod(
'_initializeOnAdd_',
smalltalk.method({
selector: 'initializeOnAdd:',
fn: function (aBlock){
var self=this;
self['@addAction']=aBlock;
return self;}
}),
smalltalk.AddParticipantWidget);


smalltalk.addMethod(
'_initializeOnAdd_',
smalltalk.method({
selector: 'initializeOnAdd:',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOnAdd_", [aBlock]);
return self;}
}),
smalltalk.AddParticipantWidget.klass);


smalltalk.addClass('ParticipantAfterForm', smalltalk.SmackboneView, ['callingParticipant', 'addCallback', 'cancelCallback'], 'DDView');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
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
return self;}
}),
smalltalk.ParticipantAfterForm);

smalltalk.addMethod(
'_initializeCalledBy_onAdd_onCancel_',
smalltalk.method({
selector: 'initializeCalledBy:onAdd:onCancel:',
fn: function (aParticipant, aBlock, anotherBlock){
var self=this;
self['@callingParticipant']=aParticipant;
self['@addCallback']=aBlock;
self['@cancelCallback']=anotherBlock;
return self;}
}),
smalltalk.ParticipantAfterForm);


smalltalk.addMethod(
'_calledBy_onAdd_onCancel_',
smalltalk.method({
selector: 'calledBy:onAdd:onCancel:',
fn: function (aParticipant, aBlock, anotherBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeCalledBy_onAdd_onCancel_", [aParticipant, aBlock, anotherBlock]);
return self;}
}),
smalltalk.ParticipantAfterForm.klass);


smalltalk.addClass('ParticipantForm', smalltalk.SmackboneView, ['callingParticipant', 'addCallback', 'cancelCallback'], 'DDView');
smalltalk.addMethod(
'_initializeOnAdd_',
smalltalk.method({
selector: 'initializeOnAdd:',
fn: function (aBlock){
var self=this;
self['@addCallback']=aBlock;
return self;}
}),
smalltalk.ParticipantForm);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
var input=nil;
var addButton=nil;
input=smalltalk.send(html, "_input", []);
addButton=smalltalk.send(smalltalk.send(html, "_button", []), "_with_", [unescape("+")]);
smalltalk.send(smalltalk.send(addButton, "_asJQuery", []), "_bind_do_", ["click", (function(){return smalltalk.send(self['@addCallback'], "_value_", [smalltalk.send((smalltalk.Participant || Participant), "_named_", [smalltalk.send(smalltalk.send(input, "_asJQuery", []), "_val", [])])]);})]);
return self;}
}),
smalltalk.ParticipantForm);


smalltalk.addMethod(
'_onAdd_',
smalltalk.method({
selector: 'onAdd:',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOnAdd_", [aBlock]);
return self;}
}),
smalltalk.ParticipantForm.klass);


