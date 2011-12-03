smalltalk.addPackage('DDModel', []);
smalltalk.addClass('Participant', smalltalk.Object, ['name'], 'DDModel');
smalltalk.addMethod(
unescape('_initializeNamed_'),
smalltalk.method({
selector: unescape('initializeNamed%3A'),
category: 'not yet classified',
fn: function (aName){
var self=this;
self['@name']=aName;
return self;},
args: ["aName"],
source: unescape('initializeNamed%3A%20aName%0A%09name%20%3A%3D%20aName'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Participant);

smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@name'];
return self;},
args: [],
source: unescape('name%0A%09%5E%20name'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Participant);

smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'not yet classified',
fn: function (aModel){
var self=this;
return smalltalk.send(smalltalk.send(aModel, "_isKindOf_", [smalltalk.send(self, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(aModel, "_name", []), "__eq", [smalltalk.send(self, "_name", [])]);})]);
return self;},
args: ["aModel"],
source: unescape('%3D%20aModel%0A%0A%09%5E%20%28%20aModel%20isKindOf%3A%20self%20class%20%29%20%0A%09%09and%3A%20%5B%20aModel%20name%20%3D%20self%20name%20%5D'),
messageSends: ["and:", "isKindOf:", "class", unescape("%3D"), "name"],
referencedClasses: []
}),
smalltalk.Participant);


smalltalk.addMethod(
unescape('_named_'),
smalltalk.method({
selector: unescape('named%3A'),
category: 'not yet classified',
fn: function (aName){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeNamed_", [aName]);
return self;},
args: ["aName"],
source: unescape('named%3A%20aName%0A%0A%09%5E%20self%20new%20initializeNamed%3A%20aName'),
messageSends: ["initializeNamed:", "new"],
referencedClasses: []
}),
smalltalk.Participant.klass);

smalltalk.addMethod(
unescape('_fromJSON_'),
smalltalk.method({
selector: unescape('fromJSON%3A'),
category: 'not yet classified',
fn: function (aJSONObject){
var self=this;
return smalltalk.send(self, "_named_", [smalltalk.send(aJSONObject, "_name", [])]);
return self;},
args: ["aJSONObject"],
source: unescape('fromJSON%3A%20aJSONObject%0A%0A%09%5E%20self%20named%3A%20aJSONObject%20name'),
messageSends: ["named:", "name"],
referencedClasses: []
}),
smalltalk.Participant.klass);


smalltalk.addClass('Participants', smalltalk.Object, ['collection'], 'DDModel');
smalltalk.addMethod(
unescape('_initializeWith_'),
smalltalk.method({
selector: unescape('initializeWith%3A'),
category: 'not yet classified',
fn: function (aCollection){
var self=this;
self['@collection']=aCollection;
return self;},
args: ["aCollection"],
source: unescape('initializeWith%3A%20aCollection%0A%0A%09collection%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_do_'),
smalltalk.method({
selector: unescape('do%3A'),
category: 'not yet classified',
fn: function (aBlock){
var self=this;
return smalltalk.send(self['@collection'], "_do_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('do%3A%20aBlock%0A%0A%09%5E%20collection%20do%3A%20aBlock'),
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_first'),
smalltalk.method({
selector: unescape('first'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(self['@collection'], "_first", []);
return self;},
args: [],
source: unescape('first%20%0A%09%5E%20collection%20first'),
messageSends: ["first"],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_second'),
smalltalk.method({
selector: unescape('second'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(self['@collection'], "_second", []);
return self;},
args: [],
source: unescape('second%20%0A%09%5E%20collection%20second'),
messageSends: ["second"],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
category: 'not yet classified',
fn: function (anElement){
var self=this;
smalltalk.send(self['@collection'], "_add_", [anElement]);
return self;},
args: ["anElement"],
source: unescape('add%3A%20anElement%0A%09collection%20add%3A%20anElement'),
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_participants'),
smalltalk.method({
selector: unescape('participants'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@collection'];
return self;},
args: [],
source: unescape('participants%0A%0A%09%5E%20collection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_last'),
smalltalk.method({
selector: unescape('last'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(self['@collection'], "_last", []);
return self;},
args: [],
source: unescape('last%0A%09%5E%20collection%20last'),
messageSends: ["last"],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_move_to_'),
smalltalk.method({
selector: unescape('move%3Ato%3A'),
category: 'not yet classified',
fn: function (movingElement, bumpedElement){
var self=this;
var newCollection=nil;
var targetIndex=nil;
targetIndex=smalltalk.send(self['@collection'], "_indexOf_", [bumpedElement]);
((($receiver = smalltalk.send(smalltalk.send(bumpedElement, "__eq", [smalltalk.send(self['@collection'], "_last", [])]), "_and_", [(function(){return smalltalk.send(movingElement, "__eq", [smalltalk.send(self['@collection'], "_at_", [((($receiver = smalltalk.send(self['@collection'], "_size", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))])]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_switchLastTwoElements", []);})() : (function(){return smalltalk.send(self, "_move_toIndex_", [movingElement, targetIndex]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_switchLastTwoElements", []);}), (function(){return smalltalk.send(self, "_move_toIndex_", [movingElement, targetIndex]);})]));
return self;},
args: ["movingElement", "bumpedElement"],
source: unescape('move%3A%20movingElement%20to%3A%20bumpedElement%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%7C%20newCollection%20targetIndex%20%7C%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%0A%20%20%20%20targetIndex%20%3A%3D%20collection%20indexOf%3A%20bumpedElement.%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%28%28%20bumpedElement%20%3D%20collection%20last%20%29%20and%3A%20%5B%20movingElement%20%3D%20%28%20collection%20at%3A%20%28%20collection%20size%20-%201%20%29%20%29%20%5D%29%20%0A%20%20%20%20%09ifTrue%3A%20%5B%20self%20switchLastTwoElements%20%5D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%09ifFalse%3A%20%5B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20move%3A%20movingElement%20toIndex%3A%20targetIndex%20%5D'),
messageSends: ["indexOf:", "ifTrue:ifFalse:", "and:", unescape("%3D"), "last", "at:", unescape("-"), "size", "switchLastTwoElements", "move:toIndex:"],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_move_toIndex_'),
smalltalk.method({
selector: unescape('move%3AtoIndex%3A'),
category: 'not yet classified',
fn: function (movingElement, targetIndex){
var self=this;
var newCollection=nil;
newCollection=smalltalk.send((smalltalk.Array || Array), "_new", []);
smalltalk.send(self['@collection'], "_remove_", [movingElement]);
smalltalk.send(self['@collection'], "_withIndexDo_", [(function(anElement, anIndex){((($receiver = smalltalk.send(anIndex, "__eq", [targetIndex])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(newCollection, "_add_", [movingElement]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(newCollection, "_add_", [movingElement]);})]));return smalltalk.send(newCollection, "_add_", [anElement]);})]);
self['@collection']=newCollection;
return self;},
args: ["movingElement", "targetIndex"],
source: unescape('move%3A%20movingElement%20toIndex%3A%20targetIndex%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%7C%20newCollection%20%7C%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%0AnewCollection%20%3A%3D%20Array%20new.%0Acollection%20remove%3A%20movingElement.%0Acollection%0A%20%20withIndexDo%3A%20%5B%20%3AanElement%20%3AanIndex%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28%20anIndex%20%3D%20targetIndex%20%29%20ifTrue%3A%20%5B%20newCollection%20add%3A%20movingElement%20%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20newCollection%20add%3A%20anElement%20%5D.%0Acollection%20%3A%3D%20newCollection.'),
messageSends: ["new", "remove:", "withIndexDo:", "ifTrue:", unescape("%3D"), "add:"],
referencedClasses: ["Array"]
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_switchLastTwoElements'),
smalltalk.method({
selector: unescape('switchLastTwoElements'),
category: 'not yet classified',
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
return self;},
args: [],
source: unescape('switchLastTwoElements%0A%7C%20lastElement%20nextLastElement%20%7C%0A%0A%20%20lastElement%20%3A%3D%20collection%20last.%0A%20%20collection%20remove%3A%20lastElement.%0A%20%20nextLastElement%20%3A%3D%20collection%20last.%0A%20%20collection%20remove%3A%20nextLastElement.%0A%20%20collection%20add%3A%20lastElement.%0A%20%20collection%20add%3A%20nextLastElement.'),
messageSends: ["last", "remove:", "add:"],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_third'),
smalltalk.method({
selector: unescape('third'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(self['@collection'], "_third", []);
return self;},
args: [],
source: unescape('third%20%0A%09%5E%20collection%20third'),
messageSends: ["third"],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_withIndexDo_'),
smalltalk.method({
selector: unescape('withIndexDo%3A'),
category: 'not yet classified',
fn: function (aBlock){
var self=this;
return smalltalk.send(self['@collection'], "_withIndexDo_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('withIndexDo%3A%20aBlock%0A%0A%09%5E%20collection%20withIndexDo%3A%20aBlock'),
messageSends: ["withIndexDo:"],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
category: 'not yet classified',
fn: function (anElement){
var self=this;
smalltalk.send(self['@collection'], "_remove_", [anElement]);
return self;},
args: ["anElement"],
source: unescape('remove%3A%20anElement%0A%09collection%20remove%3A%20anElement'),
messageSends: ["remove:"],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_insert_after_'),
smalltalk.method({
selector: unescape('insert%3Aafter%3A'),
category: 'not yet classified',
fn: function (newElement, anElement){
var self=this;
var targetIndex=nil;
((($receiver = smalltalk.send(anElement, "__eq", [smalltalk.send(self['@collection'], "_last", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_add_", [newElement]);})() : (function(){targetIndex=((($receiver = smalltalk.send(self['@collection'], "_indexOf_", [anElement])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));smalltalk.send(self, "_add_", [newElement]);return smalltalk.send(self, "_move_toIndex_", [newElement, targetIndex]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_add_", [newElement]);}), (function(){targetIndex=((($receiver = smalltalk.send(self['@collection'], "_indexOf_", [anElement])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));smalltalk.send(self, "_add_", [newElement]);return smalltalk.send(self, "_move_toIndex_", [newElement, targetIndex]);})]));
return self;},
args: ["newElement", "anElement"],
source: unescape('insert%3A%20newElement%20after%3A%20anElement%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%7C%20targetIndex%20%7C%20%0A%0A%28%20anElement%20%3D%20collection%20last%20%29%20%0A%09ifTrue%3A%20%5B%20self%20add%3A%20newElement%20%5D%0A%09ifFalse%3A%20%5B%0A%20%20%20%20%09%09targetIndex%20%3A%3D%20%28%20collection%20indexOf%3A%20anElement%20%29%20+%201.%0A%20%20%20%20%09%09self%20add%3A%20newElement.%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%09%09self%20move%3A%20newElement%20toIndex%3A%20targetIndex.%20%5D'),
messageSends: ["ifTrue:ifFalse:", unescape("%3D"), "last", "add:", unescape("+"), "indexOf:", "move:toIndex:"],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_move_after_'),
smalltalk.method({
selector: unescape('move%3Aafter%3A'),
category: 'not yet classified',
fn: function (movingElement, anElement){
var self=this;
var targetIndex=nil;
targetIndex=smalltalk.send(self['@collection'], "_indexOf_", [anElement]);
smalltalk.send(self, "_move_toIndex_", [movingElement, targetIndex]);
return self;},
args: ["movingElement", "anElement"],
source: unescape('move%3A%20movingElement%20after%3A%20anElement%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%7C%20targetIndex%20%7C%0A%20%20%20%20targetIndex%20%3A%3D%20%28%20collection%20indexOf%3A%20anElement%20%29.%0A%20%20%20%20self%20move%3A%20movingElement%20toIndex%3A%20targetIndex.'),
messageSends: ["indexOf:", "move:toIndex:"],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_indexOf_'),
smalltalk.method({
selector: unescape('indexOf%3A'),
category: 'not yet classified',
fn: function (anElement){
var self=this;
return smalltalk.send(self['@collection'], "_indexOf_", [anElement]);
return self;},
args: ["anElement"],
source: unescape('indexOf%3A%20anElement%0A%0A%09%5E%20collection%20indexOf%3A%20anElement'),
messageSends: ["indexOf:"],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_isEmpty'),
smalltalk.method({
selector: unescape('isEmpty'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(self['@collection'], "_isEmpty", []);
return self;},
args: [],
source: unescape('isEmpty%20%0A%09%5E%20collection%20isEmpty'),
messageSends: ["isEmpty"],
referencedClasses: []
}),
smalltalk.Participants);


smalltalk.addMethod(
unescape('_with_'),
smalltalk.method({
selector: unescape('with%3A'),
category: 'not yet classified',
fn: function (aCollection){
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicNew", []), "_initializeWith_", [aCollection]);
return self;},
args: ["aCollection"],
source: unescape('with%3A%20aCollection%0A%0A%09%5E%20self%20basicNew%20initializeWith%3A%20aCollection'),
messageSends: ["initializeWith:", "basicNew"],
referencedClasses: []
}),
smalltalk.Participants.klass);

smalltalk.addMethod(
unescape('_new'),
smalltalk.method({
selector: unescape('new'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(self, "_with_", [smalltalk.send((smalltalk.Array || Array), "_new", [])]);
return self;},
args: [],
source: unescape('new%0A%0A%09%5E%20self%20with%3A%20Array%20new.'),
messageSends: ["with:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.Participants.klass);

smalltalk.addMethod(
unescape('_fromJSON_'),
smalltalk.method({
selector: unescape('fromJSON%3A'),
category: 'not yet classified',
fn: function (aJSONObject){
var self=this;
var collection=nil;
collection=smalltalk.send(smalltalk.send(aJSONObject, "_collection", []), "_collect_", [(function(aParticipantJSON){return smalltalk.send((smalltalk.Participant || Participant), "_fromJSON_", [aParticipantJSON]);})]);
return smalltalk.send(self, "_with_", [collection]);
return self;},
args: ["aJSONObject"],
source: unescape('fromJSON%3A%20aJSONObject%0A%7C%20collection%20%7C%0A%0A%09collection%20%3A%3D%20aJSONObject%20collection%20collect%3A%20%5B%20%3AaParticipantJSON%20%7C%20Participant%20fromJSON%3A%20aParticipantJSON%20%5D.%0A%09%5E%20self%20with%3A%20collection.'),
messageSends: ["collect:", "collection", "fromJSON:", "with:"],
referencedClasses: ["Participant"]
}),
smalltalk.Participants.klass);


