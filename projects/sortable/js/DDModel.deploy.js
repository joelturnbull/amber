smalltalk.addPackage('DDModel', []);
smalltalk.addClass('Participant', smalltalk.Object, ['name'], 'DDModel');
smalltalk.addMethod(
'_initializeNamed_',
smalltalk.method({
selector: 'initializeNamed:',
fn: function (aName){
var self=this;
self['@name']=aName;
return self;}
}),
smalltalk.Participant);

smalltalk.addMethod(
'_name',
smalltalk.method({
selector: 'name',
fn: function (){
var self=this;
return self['@name'];
return self;}
}),
smalltalk.Participant);

smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
fn: function (aModel){
var self=this;
return smalltalk.send(smalltalk.send(aModel, "_isKindOf_", [smalltalk.send(self, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(aModel, "_name", []), "__eq", [smalltalk.send(self, "_name", [])]);})]);
return self;}
}),
smalltalk.Participant);


smalltalk.addMethod(
'_named_',
smalltalk.method({
selector: 'named:',
fn: function (aName){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeNamed_", [aName]);
return self;}
}),
smalltalk.Participant.klass);

smalltalk.addMethod(
'_fromJSON_',
smalltalk.method({
selector: 'fromJSON:',
fn: function (aJSONObject){
var self=this;
return smalltalk.send(self, "_named_", [smalltalk.send(aJSONObject, "_name", [])]);
return self;}
}),
smalltalk.Participant.klass);


smalltalk.addClass('Participants', smalltalk.Object, ['collection'], 'DDModel');
smalltalk.addMethod(
'_initializeWith_',
smalltalk.method({
selector: 'initializeWith:',
fn: function (aCollection){
var self=this;
self['@collection']=aCollection;
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_do_',
smalltalk.method({
selector: 'do:',
fn: function (aBlock){
var self=this;
return smalltalk.send(self['@collection'], "_do_", [aBlock]);
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_first',
smalltalk.method({
selector: 'first',
fn: function (){
var self=this;
return smalltalk.send(self['@collection'], "_first", []);
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_second',
smalltalk.method({
selector: 'second',
fn: function (){
var self=this;
return smalltalk.send(self['@collection'], "_second", []);
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_add_',
smalltalk.method({
selector: 'add:',
fn: function (anElement){
var self=this;
smalltalk.send(self['@collection'], "_add_", [anElement]);
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_participants',
smalltalk.method({
selector: 'participants',
fn: function (){
var self=this;
return self['@collection'];
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_last',
smalltalk.method({
selector: 'last',
fn: function (){
var self=this;
return smalltalk.send(self['@collection'], "_last", []);
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_move_to_',
smalltalk.method({
selector: 'move:to:',
fn: function (movingElement, bumpedElement){
var self=this;
var newCollection=nil;
var targetIndex=nil;
targetIndex=smalltalk.send(self['@collection'], "_indexOf_", [bumpedElement]);
((($receiver = smalltalk.send(smalltalk.send(bumpedElement, "__eq", [smalltalk.send(self['@collection'], "_last", [])]), "_and_", [(function(){return smalltalk.send(movingElement, "__eq", [smalltalk.send(self['@collection'], "_at_", [((($receiver = smalltalk.send(self['@collection'], "_size", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))])]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_switchLastTwoElements", []);})() : (function(){return smalltalk.send(self, "_move_toIndex_", [movingElement, targetIndex]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_switchLastTwoElements", []);}), (function(){return smalltalk.send(self, "_move_toIndex_", [movingElement, targetIndex]);})]));
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_move_toIndex_',
smalltalk.method({
selector: 'move:toIndex:',
fn: function (movingElement, targetIndex){
var self=this;
var newCollection=nil;
newCollection=smalltalk.send((smalltalk.Array || Array), "_new", []);
smalltalk.send(self['@collection'], "_remove_", [movingElement]);
smalltalk.send(self['@collection'], "_withIndexDo_", [(function(anElement, anIndex){((($receiver = smalltalk.send(anIndex, "__eq", [targetIndex])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(newCollection, "_add_", [movingElement]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(newCollection, "_add_", [movingElement]);})]));return smalltalk.send(newCollection, "_add_", [anElement]);})]);
self['@collection']=newCollection;
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_switchLastTwoElements',
smalltalk.method({
selector: 'switchLastTwoElements',
fn: function (){
var self=this;
var lastElement=nil;
var nextLastElement=nil;
lastElement=smalltalk.send(self['@collection'], "_last", []);
smalltalk.send(self['@collection'], "_remove_", [lastElement]);
nextLastElement=smalltalk.send(self['@collection'], "_last", []);
smalltalk.send(self['@collection'], "_remove_", [nextLastElement]);
smalltalk.send(self['@collection'], "_add_", [lastElement]);
smalltalk.send(self['@collection'], "_add_", [nextLastElement]);
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_third',
smalltalk.method({
selector: 'third',
fn: function (){
var self=this;
return smalltalk.send(self['@collection'], "_third", []);
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_withIndexDo_',
smalltalk.method({
selector: 'withIndexDo:',
fn: function (aBlock){
var self=this;
return smalltalk.send(self['@collection'], "_withIndexDo_", [aBlock]);
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_remove_',
smalltalk.method({
selector: 'remove:',
fn: function (anElement){
var self=this;
smalltalk.send(self['@collection'], "_remove_", [anElement]);
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_insert_after_',
smalltalk.method({
selector: 'insert:after:',
fn: function (newElement, anElement){
var self=this;
var targetIndex=nil;
((($receiver = smalltalk.send(anElement, "__eq", [smalltalk.send(self['@collection'], "_last", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_add_", [newElement]);})() : (function(){targetIndex=((($receiver = smalltalk.send(self['@collection'], "_indexOf_", [anElement])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));smalltalk.send(self, "_add_", [newElement]);return smalltalk.send(self, "_move_toIndex_", [newElement, targetIndex]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_add_", [newElement]);}), (function(){targetIndex=((($receiver = smalltalk.send(self['@collection'], "_indexOf_", [anElement])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));smalltalk.send(self, "_add_", [newElement]);return smalltalk.send(self, "_move_toIndex_", [newElement, targetIndex]);})]));
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_move_after_',
smalltalk.method({
selector: 'move:after:',
fn: function (movingElement, anElement){
var self=this;
var targetIndex=nil;
targetIndex=smalltalk.send(self['@collection'], "_indexOf_", [anElement]);
smalltalk.send(self, "_move_toIndex_", [movingElement, targetIndex]);
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_indexOf_',
smalltalk.method({
selector: 'indexOf:',
fn: function (anElement){
var self=this;
return smalltalk.send(self['@collection'], "_indexOf_", [anElement]);
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_isEmpty',
smalltalk.method({
selector: 'isEmpty',
fn: function (){
var self=this;
return smalltalk.send(self['@collection'], "_isEmpty", []);
return self;}
}),
smalltalk.Participants);


smalltalk.addMethod(
'_with_',
smalltalk.method({
selector: 'with:',
fn: function (aCollection){
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicNew", []), "_initializeWith_", [aCollection]);
return self;}
}),
smalltalk.Participants.klass);

smalltalk.addMethod(
'_new',
smalltalk.method({
selector: 'new',
fn: function (){
var self=this;
return smalltalk.send(self, "_with_", [smalltalk.send((smalltalk.Array || Array), "_new", [])]);
return self;}
}),
smalltalk.Participants.klass);

smalltalk.addMethod(
'_fromJSON_',
smalltalk.method({
selector: 'fromJSON:',
fn: function (aJSONObject){
var self=this;
var collection=nil;
collection=smalltalk.send(smalltalk.send(aJSONObject, "_collection", []), "_collect_", [(function(aParticipantJSON){return smalltalk.send((smalltalk.Participant || Participant), "_fromJSON_", [aParticipantJSON]);})]);
return smalltalk.send(self, "_with_", [collection]);
return self;}
}),
smalltalk.Participants.klass);


