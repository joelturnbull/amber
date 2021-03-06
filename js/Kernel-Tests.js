smalltalk.addPackage('Kernel-Tests', {});
smalltalk.addClass('StringTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testJoin'),
smalltalk.method({
selector: unescape('testJoin'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("hello%2Cworld"), smalltalk.send(unescape("%2C"), "_join_", [["hello", "world"]])]);
return self;},
args: [],
source: unescape('testJoin%0A%09self%20assert%3A%20%27hello%2Cworld%27%20equals%3A%20%28%27%2C%27%20join%3A%20%23%28%27hello%27%20%27world%27%29%29'),
messageSends: ["assert:equals:", "join:"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
unescape('_testStreamContents'),
smalltalk.method({
selector: unescape('testStreamContents'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", ["hello world", smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(aStream){return (function($rec){smalltalk.send($rec, "_nextPutAll_", ["hello"]);smalltalk.send($rec, "_space", []);return smalltalk.send($rec, "_nextPutAll_", ["world"]);})(aStream);})])]);
return self;},
args: [],
source: unescape('testStreamContents%0A%09self%20%0A%09%09assert%3A%20%27hello%20world%27%20%0A%09%09equals%3A%20%28String%20streamContents%3A%20%5B%3AaStream%7C%20aStream%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09nextPutAll%3A%20%27hello%27%3B%20space%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09nextPutAll%3A%20%27world%27%5D%29'),
messageSends: ["assert:equals:", "streamContents:", "nextPutAll:", "space"],
referencedClasses: ["String"]
}),
smalltalk.StringTest);

smalltalk.addMethod(
unescape('_testIncludesSubString'),
smalltalk.method({
selector: unescape('testIncludesSubString'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send("amber", "_includesSubString_", ["ber"])]);
smalltalk.send(self, "_deny_", [smalltalk.send("amber", "_includesSubString_", ["zork"])]);
return self;},
args: [],
source: unescape('testIncludesSubString%0A%09self%20assert%3A%20%28%27amber%27%20includesSubString%3A%20%27ber%27%29.%0A%09self%20deny%3A%20%28%27amber%27%20includesSubString%3A%20%27zork%27%29.'),
messageSends: ["assert:", "includesSubString:", "deny:"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
unescape('_testEquality'),
smalltalk.method({
selector: unescape('testEquality'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send("hello", "__eq", ["hello"])]);
smalltalk.send(self, "_deny_", [smalltalk.send("hello", "__eq", ["world"])]);
smalltalk.send(self, "_assert_", [smalltalk.send("hello", "__eq", [smalltalk.send("hello", "_yourself", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_yourself", []), "__eq", ["hello"])]);
smalltalk.send(self, "_deny_", [smalltalk.send("", "__eq", [(0)])]);
return self;},
args: [],
source: unescape('testEquality%0A%09self%20assert%3A%20%27hello%27%20%3D%20%27hello%27.%0A%09self%20deny%3A%20%27hello%27%20%3D%20%27world%27.%0A%0A%09self%20assert%3A%20%27hello%27%20%20%3D%20%27hello%27%20yourself.%0A%09self%20assert%3A%20%27hello%27%20yourself%20%3D%20%27hello%27.%0A%0A%09%22test%20JS%20falsy%20value%22%0A%09self%20deny%3A%20%27%27%20%3D%200'),
messageSends: ["assert:", unescape("%3D"), "deny:", "yourself"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
unescape('_testCopyWithoutAll'),
smalltalk.method({
selector: unescape('testCopyWithoutAll'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", ["hello world", smalltalk.send(unescape("*hello*%20*world*"), "_copyWithoutAll_", [unescape("*")])]);
return self;},
args: [],
source: unescape('testCopyWithoutAll%0A%09self%20%0A%09%09assert%3A%20%27hello%20world%27%20%0A%09%09equals%3A%20%28%27*hello*%20*world*%27%20copyWithoutAll%3A%20%27*%27%29'),
messageSends: ["assert:equals:", "copyWithoutAll:"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
unescape('_testAt'),
smalltalk.method({
selector: unescape('testAt'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_at_", [(1)]), "__eq", ["h"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_at_", [(5)]), "__eq", ["o"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_at_ifAbsent_", [(6), (function(){return nil;})]), "__eq", [nil])]);
return self;},
args: [],
source: unescape('testAt%0A%09self%20assert%3A%20%28%27hello%27%20at%3A%201%29%20%3D%20%27h%27.%0A%09self%20assert%3A%20%28%27hello%27%20at%3A%205%29%20%3D%20%27o%27.%0A%09self%20assert%3A%20%28%27hello%27%20at%3A%206%20ifAbsent%3A%20%5Bnil%5D%29%20%3D%20nil'),
messageSends: ["assert:", unescape("%3D"), "at:", "at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
unescape('_testAtPut'),
smalltalk.method({
selector: unescape('testAtPut'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send("hello", "_at_put_", [(1), "a"]);}), (smalltalk.Error || Error)]);
return self;},
args: [],
source: unescape('testAtPut%0A%09%22String%20instances%20are%20read-only%22%0A%09self%20should%3A%20%5B%27hello%27%20at%3A%201%20put%3A%20%27a%27%5D%20raise%3A%20Error'),
messageSends: ["should:raise:", "at:put:"],
referencedClasses: ["Error"]
}),
smalltalk.StringTest);



smalltalk.addClass('DictionaryTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testPrintString'),
smalltalk.method({
selector: unescape('testPrintString'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("a%20Dictionary%28%27firstname%27%20-%3E%20%27James%27%20%2C%20%27lastname%27%20-%3E%20%27Bond%27%29"), (function($rec){smalltalk.send($rec, "_at_put_", ["firstname", "James"]);smalltalk.send($rec, "_at_put_", ["lastname", "Bond"]);return smalltalk.send($rec, "_printString", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []))]);
return self;},
args: [],
source: unescape('testPrintString%0A%09self%0A%09%09assert%3A%20%27a%20Dictionary%28%27%27firstname%27%27%20-%3E%20%27%27James%27%27%20%2C%20%27%27lastname%27%27%20-%3E%20%27%27Bond%27%27%29%27%20%0A%09%09equals%3A%20%28Dictionary%20new%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09at%3A%27firstname%27%20put%3A%20%27James%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09at%3A%27lastname%27%20put%3A%20%27Bond%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09printString%29'),
messageSends: ["assert:equals:", "at:put:", "printString", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
unescape('_testEquality'),
smalltalk.method({
selector: unescape('testEquality'),
category: 'tests',
fn: function (){
var self=this;
var d1=nil;
var d2=nil;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []), "__eq", [smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])])]);
d1=(function($rec){smalltalk.send($rec, "_at_put_", [(1), (2)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
d2=(function($rec){smalltalk.send($rec, "_at_put_", [(1), (2)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(self, "_assert_", [smalltalk.send(d1, "__eq", [d2])]);
d2=(function($rec){smalltalk.send($rec, "_at_put_", [(1), (3)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(self, "_deny_", [smalltalk.send(d1, "__eq", [d2])]);
d2=(function($rec){smalltalk.send($rec, "_at_put_", [(2), (2)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(self, "_deny_", [smalltalk.send(d1, "__eq", [d2])]);
d2=(function($rec){smalltalk.send($rec, "_at_put_", [(1), (2)]);smalltalk.send($rec, "_at_put_", [(3), (4)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(self, "_deny_", [smalltalk.send(d1, "__eq", [d2])]);
return self;},
args: [],
source: unescape('testEquality%0A%09%7C%20d1%20d2%20%7C%0A%0A%09self%20assert%3A%20Dictionary%20new%20%3D%20Dictionary%20new.%0A%09%09%0A%09d1%20%3A%3D%20Dictionary%20new%20at%3A%201%20put%3A%202%3B%20yourself.%0A%09d2%20%3A%3D%20Dictionary%20new%20at%3A%201%20put%3A%202%3B%20yourself.%0A%09self%20assert%3A%20d1%20%3D%20d2.%0A%0A%09d2%20%3A%3D%20Dictionary%20new%20at%3A%201%20put%3A%203%3B%20yourself.%0A%09self%20deny%3A%20d1%20%3D%20d2.%0A%0A%09d2%20%3A%3D%20Dictionary%20new%20at%3A%202%20put%3A%202%3B%20yourself.%0A%09self%20deny%3A%20d1%20%3D%20d2.%0A%0A%09d2%20%3A%3D%20Dictionary%20new%20at%3A%201%20put%3A%202%3B%20at%3A%203%20put%3A%204%3B%20yourself.%0A%09self%20deny%3A%20d1%20%3D%20d2.'),
messageSends: ["assert:", unescape("%3D"), "new", "at:put:", "yourself", "deny:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
unescape('_testDynamicDictionaries'),
smalltalk.method({
selector: unescape('testDynamicDictionaries'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.Dictionary._fromPairs_([smalltalk.send((1), "__minus_gt", ["hello"]),smalltalk.send((2), "__minus_gt", ["world"])]), "__eq", [smalltalk.send((smalltalk.Dictionary || Dictionary), "_with_with_", [smalltalk.send((1), "__minus_gt", ["hello"]), smalltalk.send((2), "__minus_gt", ["world"])])])]);
return self;},
args: [],
source: unescape('testDynamicDictionaries%0A%09self%20assert%3A%20%23%7B1%20-%3E%20%27hello%27.%202%20-%3E%20%27world%27%7D%20%3D%20%28Dictionary%20with%3A%201%20-%3E%20%27hello%27%20with%3A%202%20-%3E%20%27world%27%29'),
messageSends: ["assert:", unescape("%3D"), unescape("-%3E"), "with:with:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
unescape('_testAccessing'),
smalltalk.method({
selector: unescape('testAccessing'),
category: 'tests',
fn: function (){
var self=this;
var d=nil;
d=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(d, "_at_put_", ["hello", "world"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_at_", ["hello"]), "__eq", ["world"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_at_ifAbsent_", ["hello", (function(){return nil;})]), "__eq", ["world"])]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(d, "_at_ifAbsent_", ["foo", (function(){return nil;})]), "__eq", ["world"])]);
smalltalk.send(d, "_at_put_", [(1), (2)]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_at_", [(1)]), "__eq", [(2)])]);
smalltalk.send(d, "_at_put_", [smalltalk.send((1), "__at", [(3)]), (3)]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_at_", [smalltalk.send((1), "__at", [(3)])]), "__eq", [(3)])]);
return self;},
args: [],
source: unescape('testAccessing%0A%09%7C%20d%20%7C%0A%0A%09d%20%3A%3D%20Dictionary%20new.%0A%0A%09d%20at%3A%20%27hello%27%20put%3A%20%27world%27.%0A%09self%20assert%3A%20%28d%20at%3A%20%27hello%27%29%20%3D%20%27world%27.%0A%09self%20assert%3A%20%28d%20at%3A%20%27hello%27%20ifAbsent%3A%20%5Bnil%5D%29%20%3D%20%27world%27.%0A%09self%20deny%3A%20%28d%20at%3A%20%27foo%27%20ifAbsent%3A%20%5Bnil%5D%29%20%3D%20%27world%27.%0A%0A%09d%20at%3A%201%20put%3A%202.%0A%09self%20assert%3A%20%28d%20at%3A%201%29%20%3D%202.%0A%0A%09d%20at%3A%201@3%20put%3A%203.%0A%09self%20assert%3A%20%28d%20at%3A%201@3%29%20%3D%203'),
messageSends: ["new", "at:put:", "assert:", unescape("%3D"), "at:", "at:ifAbsent:", "deny:", unescape("@")],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
unescape('_testSize'),
smalltalk.method({
selector: unescape('testSize'),
category: 'tests',
fn: function (){
var self=this;
var d=nil;
d=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_size", []), "__eq", [(0)])]);
smalltalk.send(d, "_at_put_", [(1), (2)]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_size", []), "__eq", [(1)])]);
smalltalk.send(d, "_at_put_", [(2), (3)]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_size", []), "__eq", [(2)])]);
return self;},
args: [],
source: unescape('testSize%0A%09%7C%20d%20%7C%0A%0A%09d%20%3A%3D%20Dictionary%20new.%0A%09self%20assert%3A%20d%20size%20%3D%200.%0A%0A%09d%20at%3A%201%20put%3A%202.%0A%09self%20assert%3A%20d%20size%20%3D%201.%0A%0A%09d%20at%3A%202%20put%3A%203.%0A%09self%20assert%3A%20d%20size%20%3D%202.'),
messageSends: ["new", "assert:", unescape("%3D"), "size", "at:put:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
unescape('_testValues'),
smalltalk.method({
selector: unescape('testValues'),
category: 'tests',
fn: function (){
var self=this;
var d=nil;
d=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(d, "_at_put_", [(1), (2)]);
smalltalk.send(d, "_at_put_", [(2), (3)]);
smalltalk.send(d, "_at_put_", [(3), (4)]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_values", []), "__eq", [[(2), (3), (4)]])]);
return self;},
args: [],
source: unescape('testValues%0A%09%7C%20d%20%7C%0A%0A%09d%20%3A%3D%20Dictionary%20new.%0A%09d%20at%3A%201%20put%3A%202.%0A%09d%20at%3A%202%20put%3A%203.%0A%09d%20at%3A%203%20put%3A%204.%0A%0A%09self%20assert%3A%20d%20values%20%3D%20%23%282%203%204%29'),
messageSends: ["new", "at:put:", "assert:", unescape("%3D"), "values"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
unescape('_testKeys'),
smalltalk.method({
selector: unescape('testKeys'),
category: 'tests',
fn: function (){
var self=this;
var d=nil;
d=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(d, "_at_put_", [(1), (2)]);
smalltalk.send(d, "_at_put_", [(2), (3)]);
smalltalk.send(d, "_at_put_", [(3), (4)]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_keys", []), "__eq", [[(1), (2), (3)]])]);
return self;},
args: [],
source: unescape('testKeys%0A%09%7C%20d%20%7C%0A%0A%09d%20%3A%3D%20Dictionary%20new.%0A%09d%20at%3A%201%20put%3A%202.%0A%09d%20at%3A%202%20put%3A%203.%0A%09d%20at%3A%203%20put%3A%204.%0A%0A%09self%20assert%3A%20d%20keys%20%3D%20%23%281%202%203%29'),
messageSends: ["new", "at:put:", "assert:", unescape("%3D"), "keys"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);



smalltalk.addClass('BooleanTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testLogic'),
smalltalk.method({
selector: unescape('testLogic'),
category: 'tests',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_&", [true])]);smalltalk.send($rec, "_deny_", [smalltalk.send(true, "_&", [false])]);smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_&", [true])]);return smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_&", [false])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_|", [true])]);smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_|", [false])]);smalltalk.send($rec, "_assert_", [smalltalk.send(false, "_|", [true])]);return smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_|", [false])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_&", [(1) > (0)])]);smalltalk.send($rec, "_deny_", [smalltalk.send((1) > (0), "_&", [false])]);return smalltalk.send($rec, "_deny_", [smalltalk.send((1) > (0), "_&", [(1) > (2)])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(false, "_|", [(1) > (0)])]);smalltalk.send($rec, "_assert_", [smalltalk.send((1) > (0), "_|", [false])]);return smalltalk.send($rec, "_assert_", [smalltalk.send((1) > (0), "_|", [(1) > (2)])]);})(self);
return self;},
args: [],
source: unescape('testLogic%0A%20%0A%09%22Trivial%20logic%20table%22%0A%09self%20assert%3A%20%28true%20%26%20true%29%3B%20deny%3A%20%28true%20%26%20false%29%3B%20deny%3A%20%28false%20%26%20true%29%3B%20deny%3A%20%28false%20%26%20false%29.%0A%09self%20assert%3A%20%28true%20%7C%20true%29%3B%20assert%3A%20%28true%20%7C%20false%29%3B%20assert%3A%20%28false%20%7C%20true%29%3B%20deny%3A%20%28false%20%7C%20false%29.%0A%20%20%20%20%20%20%20%20%22Checking%20that%20expressions%20work%20fine%20too%22%0A%09self%20assert%3A%20%28true%20%26%20%281%20%3E%200%29%29%3B%20deny%3A%20%28%281%20%3E%200%29%20%26%20false%29%3B%20deny%3A%20%28%281%20%3E%200%29%20%26%20%281%20%3E%202%29%29.%0A%20%20%20%20%20%20%20%20self%20assert%3A%20%28false%20%7C%20%281%20%3E%200%29%29%3B%20assert%3A%20%28%281%20%3E%200%29%20%7C%20false%29%3B%20assert%3A%20%28%281%20%3E%200%29%20%7C%20%281%20%3E%202%29%29'),
messageSends: ["assert:", unescape("%26"), "deny:", unescape("%7C"), unescape("%3E")],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
unescape('_testEquality'),
smalltalk.method({
selector: unescape('testEquality'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_deny_", [smalltalk.send((0), "__eq", [false])]);
smalltalk.send(self, "_deny_", [smalltalk.send(false, "__eq", [(0)])]);
smalltalk.send(self, "_deny_", [smalltalk.send("", "__eq", [false])]);
smalltalk.send(self, "_deny_", [smalltalk.send(false, "__eq", [""])]);
smalltalk.send(self, "_assert_", [smalltalk.send(true, "__eq", [true])]);
smalltalk.send(self, "_deny_", [smalltalk.send(false, "__eq", [true])]);
smalltalk.send(self, "_deny_", [smalltalk.send(true, "__eq", [false])]);
smalltalk.send(self, "_assert_", [smalltalk.send(false, "__eq", [false])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(true, "_yourself", []), "__eq", [true])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(true, "_yourself", []), "__eq", [smalltalk.send(true, "_yourself", [])])]);
return self;},
args: [],
source: unescape('testEquality%0A%09%22We%27re%20on%20top%20of%20JS...just%20be%20sure%20to%20check%20the%20basics%21%22%0A%0A%09self%20deny%3A%200%20%3D%20false.%20%0A%09self%20deny%3A%20false%20%3D%200.%0A%09self%20deny%3A%20%27%27%20%3D%20false.%0A%09self%20deny%3A%20false%20%3D%20%27%27.%0A%0A%09self%20assert%3A%20true%20%3D%20true.%0A%09self%20deny%3A%20false%20%3D%20true.%0A%09self%20deny%3A%20true%20%3D%20false.%0A%09self%20assert%3A%20false%20%3D%20false.%0A%0A%09%22JS%20may%20do%20some%20type%20coercing%20after%20sending%20a%20message%22%0A%09self%20assert%3A%20true%20yourself%20%3D%20true.%0A%09self%20assert%3A%20true%20yourself%20%3D%20true%20yourself'),
messageSends: ["deny:", unescape("%3D"), "assert:", "yourself"],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
unescape('_testLogicKeywords'),
smalltalk.method({
selector: unescape('testLogicKeywords'),
category: 'tests',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_and_", [(function(){return true;})])]);smalltalk.send($rec, "_deny_", [smalltalk.send(true, "_and_", [(function(){return false;})])]);smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_and_", [(function(){return true;})])]);return smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_and_", [(function(){return false;})])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_or_", [(function(){return true;})])]);smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_or_", [(function(){return false;})])]);smalltalk.send($rec, "_assert_", [smalltalk.send(false, "_or_", [(function(){return true;})])]);return smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_or_", [(function(){return false;})])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_and_", [(function(){return (1) > (0);})])]);smalltalk.send($rec, "_deny_", [smalltalk.send((1) > (0), "_and_", [(function(){return false;})])]);return smalltalk.send($rec, "_deny_", [smalltalk.send((1) > (0), "_and_", [(function(){return (1) > (2);})])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(false, "_or_", [(function(){return (1) > (0);})])]);smalltalk.send($rec, "_assert_", [smalltalk.send((1) > (0), "_or_", [(function(){return false;})])]);return smalltalk.send($rec, "_assert_", [smalltalk.send((1) > (0), "_or_", [(function(){return (1) > (2);})])]);})(self);
return self;},
args: [],
source: unescape('testLogicKeywords%0A%20%0A%09%22Trivial%20logic%20table%22%0A%09self%20%0A%09%09assert%3A%20%28true%20and%3A%20%5B%20true%5D%29%3B%20%0A%09%09deny%3A%20%28true%20and%3A%20%5B%20false%20%5D%29%3B%20%0A%09%09deny%3A%20%28false%20and%3A%20%5B%20true%20%5D%29%3B%20%0A%09%09deny%3A%20%28false%20and%3A%20%5B%20false%20%5D%29.%0A%09self%20%0A%09%09assert%3A%20%28true%20or%3A%20%5B%20true%20%5D%29%3B%20%0A%09%09assert%3A%20%28true%20or%3A%20%5B%20false%20%5D%29%3B%20%0A%09%09assert%3A%20%28false%20or%3A%20%5B%20true%20%5D%29%3B%20%0A%09%09deny%3A%20%28false%20or%3A%20%5B%20false%20%5D%29.%0A%20%20%20%20%20%20%20%20%0A%09%22Checking%20that%20expressions%20work%20fine%20too%22%0A%09self%20%0A%09%09assert%3A%20%28true%20and%3A%20%5B%201%20%3E%200%20%5D%29%3B%20%0A%09%09deny%3A%20%28%281%20%3E%200%29%20and%3A%20%5B%20false%20%5D%29%3B%20%0A%09%09deny%3A%20%28%281%20%3E%200%29%20and%3A%20%5B%201%20%3E%202%20%5D%29.%0A%20%20%20%20%20%20%20%20self%20%0A%09%09assert%3A%20%28false%20or%3A%20%5B%201%20%3E%200%20%5D%29%3B%20%0A%09%09assert%3A%20%28%281%20%3E%200%29%20or%3A%20%5B%20false%20%5D%29%3B%20%0A%09%09assert%3A%20%28%281%20%3E%200%29%20or%3A%20%5B%201%20%3E%202%20%5D%29'),
messageSends: ["assert:", "and:", "deny:", "or:", unescape("%3E")],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
unescape('_testIfTrueIfFalse'),
smalltalk.method({
selector: unescape('testIfTrueIfFalse'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(((($receiver = true).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "alternative block";})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return "alternative block";})])), "__eq", ["alternative block"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(((($receiver = true).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return "alternative block";})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return "alternative block";})])), "__eq", [nil])]);
smalltalk.send(self, "_assert_", [smalltalk.send(((($receiver = false).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "alternative block";})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return "alternative block";})])), "__eq", [nil])]);
smalltalk.send(self, "_assert_", [smalltalk.send(((($receiver = false).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return "alternative block";})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return "alternative block";})])), "__eq", ["alternative block"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(((($receiver = false).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "alternative block";})() : (function(){return "alternative block2";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "alternative block";}), (function(){return "alternative block2";})])), "__eq", ["alternative block2"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(((($receiver = false).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return "alternative block";})() : (function(){return "alternative block2";})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return "alternative block";}), (function(){return "alternative block2";})])), "__eq", ["alternative block"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(((($receiver = true).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "alternative block";})() : (function(){return "alternative block2";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "alternative block";}), (function(){return "alternative block2";})])), "__eq", ["alternative block"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(((($receiver = true).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return "alternative block";})() : (function(){return "alternative block2";})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return "alternative block";}), (function(){return "alternative block2";})])), "__eq", ["alternative block2"])]);
return self;},
args: [],
source: unescape('testIfTrueIfFalse%0A%20%0A%09self%20assert%3A%20%28true%20ifTrue%3A%20%5B%27alternative%20block%27%5D%29%20%3D%20%27alternative%20block%27.%0A%09self%20assert%3A%20%28true%20ifFalse%3A%20%5B%27alternative%20block%27%5D%29%20%3D%20nil.%0A%0A%09self%20assert%3A%20%28false%20ifTrue%3A%20%5B%27alternative%20block%27%5D%29%20%3D%20nil.%0A%09self%20assert%3A%20%28false%20ifFalse%3A%20%5B%27alternative%20block%27%5D%29%20%3D%20%27alternative%20block%27.%0A%0A%09self%20assert%3A%20%28false%20ifTrue%3A%20%5B%27alternative%20block%27%5D%20ifFalse%3A%20%5B%27alternative%20block2%27%5D%29%20%3D%20%27alternative%20block2%27.%0A%09self%20assert%3A%20%28false%20ifFalse%3A%20%5B%27alternative%20block%27%5D%20ifTrue%3A%20%5B%27alternative%20block2%27%5D%29%20%3D%20%27alternative%20block%27.%0A%0A%09self%20assert%3A%20%28true%20ifTrue%3A%20%5B%27alternative%20block%27%5D%20ifFalse%3A%20%5B%27alternative%20block2%27%5D%29%20%3D%20%27alternative%20block%27.%0A%09self%20assert%3A%20%28true%20ifFalse%3A%20%5B%27alternative%20block%27%5D%20ifTrue%3A%20%5B%27alternative%20block2%27%5D%29%20%3D%20%27alternative%20block2%27.'),
messageSends: ["assert:", unescape("%3D"), "ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:"],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
unescape('_testIdentity'),
smalltalk.method({
selector: unescape('testIdentity'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(true, "__eq_eq", [true])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(true, "_yourself", []), "__eq_eq", [true])]);
smalltalk.send(self, "_assert_", [smalltalk.send(true, "__eq_eq", [smalltalk.send(true, "_yourself", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(true, "_yourself", []), "__eq_eq", [smalltalk.send(true, "_yourself", [])])]);
smalltalk.send(self, "_deny_", [smalltalk.send(true, "__eq_eq", [false])]);
return self;},
args: [],
source: unescape('testIdentity%0A%09self%20assert%3A%20true%20%3D%3D%20true.%0A%09self%20assert%3A%20true%20yourself%20%3D%3D%20true.%0A%09self%20assert%3A%20true%20%3D%3D%20true%20yourself.%0A%09self%20assert%3A%20true%20yourself%20%3D%3D%20true%20yourself.%0A%0A%09self%20deny%3A%20true%20%3D%3D%20false'),
messageSends: ["assert:", unescape("%3D%3D"), "yourself", "deny:"],
referencedClasses: []
}),
smalltalk.BooleanTest);



smalltalk.addClass('NumberTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testPrintShowingDecimalPlaces'),
smalltalk.method({
selector: unescape('testPrintShowingDecimalPlaces'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", ["23.00", smalltalk.send((23), "_printShowingDecimalPlaces_", [(2)])]);
smalltalk.send(self, "_assert_equals_", ["23.57", smalltalk.send((23.5698), "_printShowingDecimalPlaces_", [(2)])]);
smalltalk.send(self, "_assert_equals_", [unescape("-234.56700"), smalltalk.send(smalltalk.send((234.567), "_negated", []), "_printShowingDecimalPlaces_", [(5)])]);
smalltalk.send(self, "_assert_equals_", ["23", smalltalk.send((23.4567), "_printShowingDecimalPlaces_", [(0)])]);
smalltalk.send(self, "_assert_equals_", ["24", smalltalk.send((23.5567), "_printShowingDecimalPlaces_", [(0)])]);
smalltalk.send(self, "_assert_equals_", [unescape("-23"), smalltalk.send(smalltalk.send((23.4567), "_negated", []), "_printShowingDecimalPlaces_", [(0)])]);
smalltalk.send(self, "_assert_equals_", [unescape("-24"), smalltalk.send(smalltalk.send((23.5567), "_negated", []), "_printShowingDecimalPlaces_", [(0)])]);
smalltalk.send(self, "_assert_equals_", ["100000000.0", smalltalk.send((100000000), "_printShowingDecimalPlaces_", [(1)])]);
smalltalk.send(self, "_assert_equals_", ["0.98000", smalltalk.send((0.98), "_printShowingDecimalPlaces_", [(5)])]);
smalltalk.send(self, "_assert_equals_", [unescape("-0.98"), smalltalk.send(smalltalk.send((0.98), "_negated", []), "_printShowingDecimalPlaces_", [(2)])]);
smalltalk.send(self, "_assert_equals_", ["2.57", smalltalk.send((2.567), "_printShowingDecimalPlaces_", [(2)])]);
smalltalk.send(self, "_assert_equals_", [unescape("-2.57"), smalltalk.send((-2.567), "_printShowingDecimalPlaces_", [(2)])]);
smalltalk.send(self, "_assert_equals_", ["0.00", smalltalk.send((0), "_printShowingDecimalPlaces_", [(2)])]);
return self;},
args: [],
source: unescape('testPrintShowingDecimalPlaces%0A%09self%20assert%3A%20%2723.00%27%20equals%3A%20%2823%20printShowingDecimalPlaces%3A%202%29.%0A%09self%20assert%3A%20%2723.57%27%20equals%3A%20%2823.5698%20printShowingDecimalPlaces%3A%202%29.%0A%09self%20assert%3A%20%27-234.56700%27%20equals%3A%28%20234.567%20negated%20printShowingDecimalPlaces%3A%205%29.%0A%09self%20assert%3A%20%2723%27%20equals%3A%20%2823.4567%20printShowingDecimalPlaces%3A%200%29.%0A%09self%20assert%3A%20%2724%27%20equals%3A%20%2823.5567%20printShowingDecimalPlaces%3A%200%29.%0A%09self%20assert%3A%20%27-23%27%20equals%3A%20%2823.4567%20negated%20printShowingDecimalPlaces%3A%200%29.%0A%09self%20assert%3A%20%27-24%27%20equals%3A%20%2823.5567%20negated%20printShowingDecimalPlaces%3A%200%29.%0A%09self%20assert%3A%20%27100000000.0%27%20equals%3A%20%28100000000%20printShowingDecimalPlaces%3A%201%29.%0A%09self%20assert%3A%20%270.98000%27%20equals%3A%20%280.98%20printShowingDecimalPlaces%3A%205%29.%0A%09self%20assert%3A%20%27-0.98%27%20equals%3A%20%280.98%20negated%20printShowingDecimalPlaces%3A%202%29.%0A%09self%20assert%3A%20%272.57%27%20equals%3A%20%282.567%20printShowingDecimalPlaces%3A%202%29.%0A%09self%20assert%3A%20%27-2.57%27%20equals%3A%20%28-2.567%20printShowingDecimalPlaces%3A%202%29.%0A%09self%20assert%3A%20%270.00%27%20equals%3A%20%280%20printShowingDecimalPlaces%3A%202%29.'),
messageSends: ["assert:equals:", "printShowingDecimalPlaces:", "negated"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testEquality'),
smalltalk.method({
selector: unescape('testEquality'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send((1), "__eq", [(1)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((0), "__eq", [(0)])]);
smalltalk.send(self, "_deny_", [smalltalk.send((1), "__eq", [(0)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((1), "_yourself", []), "__eq", [(1)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((1), "__eq", [smalltalk.send((1), "_yourself", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((1), "_yourself", []), "__eq", [smalltalk.send((1), "_yourself", [])])]);
smalltalk.send(self, "_deny_", [smalltalk.send((0), "__eq", [false])]);
smalltalk.send(self, "_deny_", [smalltalk.send(false, "__eq", [(0)])]);
smalltalk.send(self, "_deny_", [smalltalk.send("", "__eq", [(0)])]);
smalltalk.send(self, "_deny_", [smalltalk.send((0), "__eq", [""])]);
return self;},
args: [],
source: unescape('testEquality%0A%09self%20assert%3A%201%20%3D%201.%0A%09self%20assert%3A%200%20%3D%200.%0A%09self%20deny%3A%201%20%3D%200.%0A%0A%09self%20assert%3A%201%20yourself%20%3D%201.%0A%09self%20assert%3A%201%20%3D%201%20yourself.%0A%09self%20assert%3A%201%20yourself%20%3D%201%20yourself.%0A%09%0A%09self%20deny%3A%200%20%3D%20false.%0A%09self%20deny%3A%20false%20%3D%200.%0A%09self%20deny%3A%20%27%27%20%3D%200.%0A%09self%20deny%3A%200%20%3D%20%27%27'),
messageSends: ["assert:", unescape("%3D"), "deny:", "yourself"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testArithmetic'),
smalltalk.method({
selector: unescape('testArithmetic'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send((1.5) + (1), "__eq", [(2.5)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((2) - (1), "__eq", [(1)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((-2) - (1), "__eq", [(-3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((12) / (2), "__eq", [(6)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((3) * (4), "__eq", [(12)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(((($receiver = (1) + (2)).klass === smalltalk.Number) ? $receiver *(3) : smalltalk.send($receiver, "__star", [(3)])), "__eq", [(9)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((1) + (2) * (3), "__eq", [(7)])]);
return self;},
args: [],
source: unescape('testArithmetic%0A%09%0A%09%22We%20rely%20on%20JS%20here%2C%20so%20we%20won%27t%20test%20complex%20behavior%2C%20just%20check%20if%20%0A%09message%20sends%20are%20corrects%22%0A%0A%09self%20assert%3A%201.5%20+%201%20%3D%202.5.%0A%09self%20assert%3A%202%20-%201%20%3D%201.%0A%09self%20assert%3A%20-2%20-%201%20%3D%20-3.%0A%09self%20assert%3A%2012%20/%202%20%3D%206.%0A%09self%20assert%3A%203%20*%204%20%3D%2012.%0A%0A%09%22Simple%20parenthesis%20and%20execution%20order%22%0A%0A%09self%20assert%3A%201%20+%202%20*%203%20%3D%209.%0A%09self%20assert%3A%201%20+%20%282%20*%203%29%20%3D%207'),
messageSends: ["assert:", unescape("%3D"), unescape("+"), unescape("-"), unescape("/"), unescape("*")],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testRounded'),
smalltalk.method({
selector: unescape('testRounded'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3), "_rounded", []), "__eq", [(3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3.212), "_rounded", []), "__eq", [(3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3.51), "_rounded", []), "__eq", [(4)])]);
return self;},
args: [],
source: unescape('testRounded%0A%09%0A%09self%20assert%3A%203%20rounded%20%3D%203.%0A%09self%20assert%3A%203.212%20rounded%20%3D%203.%0A%09self%20assert%3A%203.51%20rounded%20%3D%204'),
messageSends: ["assert:", unescape("%3D"), "rounded"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testNegated'),
smalltalk.method({
selector: unescape('testNegated'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3), "_negated", []), "__eq", [(-3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((-3), "_negated", []), "__eq", [(3)])]);
return self;},
args: [],
source: unescape('testNegated%0A%09self%20assert%3A%203%20negated%20%3D%20-3.%0A%09self%20assert%3A%20-3%20negated%20%3D%203'),
messageSends: ["assert:", unescape("%3D"), "negated"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testComparison'),
smalltalk.method({
selector: unescape('testComparison'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [(3) > (2)]);
smalltalk.send(self, "_assert_", [(2) < (3)]);
smalltalk.send(self, "_deny_", [(3) < (2)]);
smalltalk.send(self, "_deny_", [(2) > (3)]);
smalltalk.send(self, "_assert_", [(3) >= (3)]);
smalltalk.send(self, "_assert_", [(3.1) >= (3)]);
smalltalk.send(self, "_assert_", [(3) <= (3)]);
smalltalk.send(self, "_assert_", [(3) <= (3.1)]);
return self;},
args: [],
source: unescape('testComparison%0A%0A%09self%20assert%3A%203%20%3E%202.%0A%09self%20assert%3A%202%20%3C%203.%0A%09%0A%09self%20deny%3A%203%20%3C%202.%0A%09self%20deny%3A%202%20%3E%203.%0A%0A%09self%20assert%3A%203%20%3E%3D%203.%0A%09self%20assert%3A%203.1%20%3E%3D%203.%0A%09self%20assert%3A%203%20%3C%3D%203.%0A%09self%20assert%3A%203%20%3C%3D%203.1'),
messageSends: ["assert:", unescape("%3E"), unescape("%3C"), "deny:", unescape("%3E%3D"), unescape("%3C%3D")],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testTruncated'),
smalltalk.method({
selector: unescape('testTruncated'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3), "_truncated", []), "__eq", [(3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3.212), "_truncated", []), "__eq", [(3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3.51), "_truncated", []), "__eq", [(3)])]);
return self;},
args: [],
source: unescape('testTruncated%0A%09%0A%09self%20assert%3A%203%20truncated%20%3D%203.%0A%09self%20assert%3A%203.212%20truncated%20%3D%203.%0A%09self%20assert%3A%203.51%20truncated%20%3D%203'),
messageSends: ["assert:", unescape("%3D"), "truncated"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testCopying'),
smalltalk.method({
selector: unescape('testCopying'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((1), "_copy", []), "__eq_eq", [(1)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((1), "_deepCopy", []), "__eq_eq", [(1)])]);
return self;},
args: [],
source: unescape('testCopying%0A%09self%20assert%3A%201%20copy%20%3D%3D%201.%0A%09self%20assert%3A%201%20deepCopy%20%3D%3D%201'),
messageSends: ["assert:", unescape("%3D%3D"), "copy", "deepCopy"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testMinMax'),
smalltalk.method({
selector: unescape('testMinMax'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((2), "_max_", [(5)]), (5)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((2), "_min_", [(5)]), (2)]);
return self;},
args: [],
source: unescape('testMinMax%0A%09%0A%09self%20assert%3A%20%282%20max%3A%205%29%20equals%3A%205.%0A%09self%20assert%3A%20%282%20min%3A%205%29%20equals%3A%202'),
messageSends: ["assert:equals:", "max:", "min:"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testIdentity'),
smalltalk.method({
selector: unescape('testIdentity'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send((1), "__eq_eq", [(1)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((0), "__eq_eq", [(0)])]);
smalltalk.send(self, "_deny_", [smalltalk.send((1), "__eq_eq", [(0)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((1), "_yourself", []), "__eq_eq", [(1)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((1), "__eq_eq", [smalltalk.send((1), "_yourself", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((1), "_yourself", []), "__eq_eq", [smalltalk.send((1), "_yourself", [])])]);
smalltalk.send(self, "_deny_", [smalltalk.send((1), "__eq_eq", [(2)])]);
return self;},
args: [],
source: unescape('testIdentity%0A%09self%20assert%3A%201%20%3D%3D%201.%0A%09self%20assert%3A%200%20%3D%3D%200.%0A%09self%20deny%3A%201%20%3D%3D%200.%0A%0A%09self%20assert%3A%201%20yourself%20%3D%3D%201.%0A%09self%20assert%3A%201%20%3D%3D%201%20yourself.%0A%09self%20assert%3A%201%20yourself%20%3D%3D%201%20yourself.%0A%09%0A%09self%20deny%3A%201%20%3D%3D%202'),
messageSends: ["assert:", unescape("%3D%3D"), "deny:", "yourself"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testSqrt'),
smalltalk.method({
selector: unescape('testSqrt'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((4), "_sqrt", []), "__eq", [(2)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((16), "_sqrt", []), "__eq", [(4)])]);
return self;},
args: [],
source: unescape('testSqrt%0A%09%0A%09self%20assert%3A%204%20sqrt%20%3D%202.%0A%09self%20assert%3A%2016%20sqrt%20%3D%204'),
messageSends: ["assert:", unescape("%3D"), "sqrt"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testSquared'),
smalltalk.method({
selector: unescape('testSquared'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((4), "_squared", []), "__eq", [(16)])]);
return self;},
args: [],
source: unescape('testSquared%0A%09%0A%09self%20assert%3A%204%20squared%20%3D%2016'),
messageSends: ["assert:", unescape("%3D"), "squared"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testTimesRepeat'),
smalltalk.method({
selector: unescape('testTimesRepeat'),
category: 'tests',
fn: function (){
var self=this;
var i=nil;
i=(0);
smalltalk.send((0), "_timesRepeat_", [(function(){return i=((($receiver = i).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})]);
smalltalk.send(self, "_assert_equals_", [i, (0)]);
smalltalk.send((5), "_timesRepeat_", [(function(){return i=((($receiver = i).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})]);
smalltalk.send(self, "_assert_equals_", [i, (5)]);
return self;},
args: [],
source: unescape('testTimesRepeat%0A%09%7C%20i%20%7C%0A%0A%09i%20%3A%3D%200.%0A%090%20timesRepeat%3A%20%5Bi%20%3A%3D%20i%20+%201%5D.%0A%09self%20assert%3A%20i%20equals%3A%200.%0A%0A%095%20timesRepeat%3A%20%5Bi%20%3A%3D%20i%20+%201%5D.%0A%09self%20assert%3A%20i%20equals%3A%205'),
messageSends: ["timesRepeat:", unescape("+"), "assert:equals:"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testTo'),
smalltalk.method({
selector: unescape('testTo'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((1), "_to_", [(5)]), [(1), (2), (3), (4), (5)]]);
return self;},
args: [],
source: unescape('testTo%0A%09self%20assert%3A%20%281%20to%3A%205%29%20equals%3A%20%23%281%202%203%204%205%29'),
messageSends: ["assert:equals:", "to:"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testToBy'),
smalltalk.method({
selector: unescape('testToBy'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((0), "_to_by_", [(6), (2)]), [(0), (2), (4), (6)]]);
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send((1), "_to_by_", [(4), (0)]);}), (smalltalk.Error || Error)]);
return self;},
args: [],
source: unescape('testToBy%0A%09self%20assert%3A%20%280%20to%3A%206%20by%3A%202%29%20equals%3A%20%23%280%202%204%206%29.%0A%0A%09self%20should%3A%20%5B1%20to%3A%204%20by%3A%200%5D%20raise%3A%20Error'),
messageSends: ["assert:equals:", "to:by:", "should:raise:"],
referencedClasses: ["Error"]
}),
smalltalk.NumberTest);



smalltalk.addClass('JSObjectProxyTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testMethodWithArguments'),
smalltalk.method({
selector: unescape('testMethodWithArguments'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_hasClass_", ["amber"])]);
smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_addClass_", ["amber"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_hasClass_", ["amber"])]);
smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_removeClass_", ["amber"]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_hasClass_", ["amber"])]);
return self;},
args: [],
source: unescape('testMethodWithArguments%0A%09self%20deny%3A%20%28%27body%27%20asJQuery%20hasClass%3A%20%27amber%27%29.%0A%0A%09%27body%27%20asJQuery%20addClass%3A%20%27amber%27.%0A%09self%20assert%3A%20%28%27body%27%20asJQuery%20hasClass%3A%20%27amber%27%29.%0A%0A%09%27body%27%20asJQuery%20removeClass%3A%20%27amber%27.%0A%09self%20deny%3A%20%28%27body%27%20asJQuery%20hasClass%3A%20%27amber%27%29.'),
messageSends: ["deny:", "hasClass:", "asJQuery", "addClass:", "assert:", "removeClass:"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
unescape('_testYourself'),
smalltalk.method({
selector: unescape('testYourself'),
category: 'tests',
fn: function (){
var self=this;
var body=nil;
body=(function($rec){smalltalk.send($rec, "_addClass_", ["amber"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send("body", "_asJQuery", []));
smalltalk.send(self, "_assert_", [smalltalk.send(body, "_hasClass_", ["amber"])]);
smalltalk.send(body, "_removeClass_", ["amber"]);
smalltalk.send(self, "_deny_", [smalltalk.send(body, "_hasClass_", ["amber"])]);
return self;},
args: [],
source: unescape('testYourself%0A%09%7Cbody%7C%0A%09body%20%3A%3D%20%27body%27%20asJQuery%0A%09%09%09%09addClass%3A%20%27amber%27%3B%0A%09%09%09%09yourself.%0A%0A%09self%20assert%3A%20%28body%20hasClass%3A%20%27amber%27%29.%0A%0A%09body%20removeClass%3A%20%27amber%27.%0A%09self%20deny%3A%20%28body%20hasClass%3A%20%27amber%27%29.'),
messageSends: ["addClass:", "yourself", "asJQuery", "assert:", "hasClass:", "removeClass:", "deny:"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
unescape('_testPropertyThatReturnsEmptyString'),
smalltalk.method({
selector: unescape('testPropertyThatReturnsEmptyString'),
category: 'tests',
fn: function (){
var self=this;
document.location.hash = '';
smalltalk.send(self, "_assert_equals_", ["", smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_location", []), "_hash", [])]);
smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_location", []), "_hash_", ["test"]);
smalltalk.send(self, "_assert_equals_", [unescape("%23test"), smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_location", []), "_hash", [])]);
return self;},
args: [],
source: unescape('testPropertyThatReturnsEmptyString%0A%09%3Cdocument.location.hash%20%3D%20%27%27%3E.%0A%09self%20assert%3A%20%27%27%20equals%3A%20document%20location%20hash.%0A%0A%09document%20location%20hash%3A%20%27test%27.%0A%09self%20assert%3A%20%27%23test%27%20equals%3A%20document%20location%20hash.'),
messageSends: ["assert:equals:", "hash", "location", "hash:"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);



smalltalk.addClass('PackageTest', smalltalk.TestCase, ['zorkPackage', 'grulPackage', 'backUpCommitPathJs', 'backUpCommitPathSt'], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
category: 'running',
fn: function (){
var self=this;
self['@backUpCommitPathJs']=smalltalk.send((smalltalk.Package || Package), "_defaultCommitPathJs", []);
self['@backUpCommitPathSt']=smalltalk.send((smalltalk.Package || Package), "_defaultCommitPathSt", []);
smalltalk.send((smalltalk.Package || Package), "_resetCommitPaths", []);
self['@zorkPackage']=smalltalk.send(smalltalk.send((smalltalk.Package || Package), "_new", []), "_name_", ["Zork"]);
self['@grulPackage']=(function($rec){smalltalk.send($rec, "_name_", ["Grul"]);smalltalk.send($rec, "_commitPathJs_", [unescape("server/grul/js")]);smalltalk.send($rec, "_commitPathSt_", [unescape("grul/st")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Package || Package), "_new", []));
return self;},
args: [],
source: unescape('setUp%0A%09backUpCommitPathJs%20%3A%3D%20Package%20defaultCommitPathJs.%0A%09backUpCommitPathSt%20%3A%3D%20Package%20defaultCommitPathSt.%0A%0A%09Package%20resetCommitPaths.%0A%0A%09zorkPackage%20%3A%3D%20Package%20new%20name%3A%20%27Zork%27.%0A%09grulPackage%20%3A%3D%20Package%20new%20%0A%09%09%09%09%09name%3A%20%27Grul%27%3B%0A%09%09%09%09%09commitPathJs%3A%20%27server/grul/js%27%3B%0A%09%09%09%09%09commitPathSt%3A%20%27grul/st%27%3B%0A%09%09%09%09%09yourself'),
messageSends: ["defaultCommitPathJs", "defaultCommitPathSt", "resetCommitPaths", "name:", "new", "commitPathJs:", "commitPathSt:", "yourself"],
referencedClasses: ["Package"]
}),
smalltalk.PackageTest);

smalltalk.addMethod(
unescape('_tearDown'),
smalltalk.method({
selector: unescape('tearDown'),
category: 'running',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_defaultCommitPathJs_", [self['@backUpCommitPathJs']]);return smalltalk.send($rec, "_defaultCommitPathSt_", [self['@backUpCommitPathSt']]);})((smalltalk.Package || Package));
return self;},
args: [],
source: unescape('tearDown%0A%09%20Package%20%0A%09%09defaultCommitPathJs%3A%20backUpCommitPathJs%3B%0A%09%09defaultCommitPathSt%3A%20backUpCommitPathSt'),
messageSends: ["defaultCommitPathJs:", "defaultCommitPathSt:"],
referencedClasses: ["Package"]
}),
smalltalk.PackageTest);

smalltalk.addMethod(
unescape('_testGrulCommitPathStShouldBeGrulSt'),
smalltalk.method({
selector: unescape('testGrulCommitPathStShouldBeGrulSt'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("grul/st"), smalltalk.send(self['@grulPackage'], "_commitPathSt", [])]);
return self;},
args: [],
source: unescape('testGrulCommitPathStShouldBeGrulSt%0A%09self%20assert%3A%20%27grul/st%27%20equals%3A%20grulPackage%20commitPathSt'),
messageSends: ["assert:equals:", "commitPathSt"],
referencedClasses: []
}),
smalltalk.PackageTest);

smalltalk.addMethod(
unescape('_testZorkCommitPathStShouldBeSt'),
smalltalk.method({
selector: unescape('testZorkCommitPathStShouldBeSt'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", ["st", smalltalk.send(self['@zorkPackage'], "_commitPathSt", [])]);
return self;},
args: [],
source: unescape('testZorkCommitPathStShouldBeSt%0A%09self%20assert%3A%20%27st%27%20equals%3A%20zorkPackage%20commitPathSt'),
messageSends: ["assert:equals:", "commitPathSt"],
referencedClasses: []
}),
smalltalk.PackageTest);

smalltalk.addMethod(
unescape('_testZorkCommitPathJsShouldBeJs'),
smalltalk.method({
selector: unescape('testZorkCommitPathJsShouldBeJs'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", ["js", smalltalk.send(self['@zorkPackage'], "_commitPathJs", [])]);
return self;},
args: [],
source: unescape('testZorkCommitPathJsShouldBeJs%0A%09self%20assert%3A%20%27js%27%20equals%3A%20zorkPackage%20commitPathJs'),
messageSends: ["assert:equals:", "commitPathJs"],
referencedClasses: []
}),
smalltalk.PackageTest);

smalltalk.addMethod(
unescape('_testGrulCommitPathJsShouldBeServerGrulJs'),
smalltalk.method({
selector: unescape('testGrulCommitPathJsShouldBeServerGrulJs'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("server/grul/js"), smalltalk.send(self['@grulPackage'], "_commitPathJs", [])]);
return self;},
args: [],
source: unescape('testGrulCommitPathJsShouldBeServerGrulJs%0A%09self%20assert%3A%20%27server/grul/js%27%20equals%3A%20grulPackage%20commitPathJs'),
messageSends: ["assert:equals:", "commitPathJs"],
referencedClasses: []
}),
smalltalk.PackageTest);



smalltalk.addClass('PackageWithDefaultCommitPathChangedTest', smalltalk.PackageTest, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
category: 'running',
fn: function (){
var self=this;
smalltalk.send(self, "_setUp", [], smalltalk.PackageTest);
(function($rec){smalltalk.send($rec, "_defaultCommitPathJs_", [unescape("javascripts/")]);return smalltalk.send($rec, "_defaultCommitPathSt_", [unescape("smalltalk/")]);})((smalltalk.Package || Package));
return self;},
args: [],
source: unescape('setUp%0A%09super%20setUp.%0A%0A%09Package%0A%09%09defaultCommitPathJs%3A%20%27javascripts/%27%3B%0A%09%09defaultCommitPathSt%3A%20%27smalltalk/%27.'),
messageSends: ["setUp", "defaultCommitPathJs:", "defaultCommitPathSt:"],
referencedClasses: ["Package"]
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
unescape('_testGrulCommitPathJsShouldBeServerGrulJs'),
smalltalk.method({
selector: unescape('testGrulCommitPathJsShouldBeServerGrulJs'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("server/grul/js"), smalltalk.send(self['@grulPackage'], "_commitPathJs", [])]);
return self;},
args: [],
source: unescape('testGrulCommitPathJsShouldBeServerGrulJs%0A%09self%20assert%3A%20%27server/grul/js%27%20equals%3A%20grulPackage%20commitPathJs'),
messageSends: ["assert:equals:", "commitPathJs"],
referencedClasses: []
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
unescape('_testGrulCommitPathStShouldBeGrulSt'),
smalltalk.method({
selector: unescape('testGrulCommitPathStShouldBeGrulSt'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("grul/st"), smalltalk.send(self['@grulPackage'], "_commitPathSt", [])]);
return self;},
args: [],
source: unescape('testGrulCommitPathStShouldBeGrulSt%0A%09self%20assert%3A%20%27grul/st%27%20equals%3A%20grulPackage%20commitPathSt'),
messageSends: ["assert:equals:", "commitPathSt"],
referencedClasses: []
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
unescape('_testZorkCommitPathJsShouldBeJavascript'),
smalltalk.method({
selector: unescape('testZorkCommitPathJsShouldBeJavascript'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("javascripts/"), smalltalk.send(self['@zorkPackage'], "_commitPathJs", [])]);
return self;},
args: [],
source: unescape('testZorkCommitPathJsShouldBeJavascript%0A%09self%20assert%3A%20%27javascripts/%27%20equals%3A%20zorkPackage%20commitPathJs'),
messageSends: ["assert:equals:", "commitPathJs"],
referencedClasses: []
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
unescape('_testZorkCommitPathStShouldBeSmalltalk'),
smalltalk.method({
selector: unescape('testZorkCommitPathStShouldBeSmalltalk'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("smalltalk/"), smalltalk.send(self['@zorkPackage'], "_commitPathSt", [])]);
return self;},
args: [],
source: unescape('testZorkCommitPathStShouldBeSmalltalk%0A%09self%20assert%3A%20%27smalltalk/%27%20equals%3A%20zorkPackage%20commitPathSt'),
messageSends: ["assert:equals:", "commitPathSt"],
referencedClasses: []
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);


smalltalk.addMethod(
unescape('_shouldInheritSelectors'),
smalltalk.method({
selector: unescape('shouldInheritSelectors'),
category: 'accessing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('shouldInheritSelectors%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PackageWithDefaultCommitPathChangedTest.klass);


smalltalk.addClass('BlockClosureTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testValue'),
smalltalk.method({
selector: unescape('testValue'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(){return (1) + (1);}), "_value", []), (2)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(x){return ((($receiver = x).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));}), "_value_", [(2)]), (3)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(x, y){return ((($receiver = x).klass === smalltalk.Number) ? $receiver *y : smalltalk.send($receiver, "__star", [y]));}), "_value_value_", [(2), (4)]), (8)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(a, b, c){return (1);}), "_value", []), (1)]);
return self;},
args: [],
source: unescape('testValue%0A%09self%20assert%3A%20%28%5B1+1%5D%20value%29%20equals%3A%202.%0A%09self%20assert%3A%20%28%5B%3Ax%20%7C%20x%20+1%5D%20value%3A%202%29%20equals%3A%203.%0A%09self%20assert%3A%20%28%5B%3Ax%20%3Ay%20%7C%20x*y%5D%20value%3A%202%20value%3A%204%29%20equals%3A%208.%20%0A%0A%09%22Arguments%20are%20optional%20in%20Amber.%20This%20isn%27t%20ANSI%20compliant.%22%0A%0A%09self%20assert%3A%20%28%5B%3Aa%20%3Ab%20%3Ac%20%7C%201%5D%20value%29%20equals%3A%201'),
messageSends: ["assert:equals:", "value", unescape("+"), "value:", "value:value:", unescape("*")],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
unescape('_testOnDo'),
smalltalk.method({
selector: unescape('testOnDo'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send((function(){return smalltalk.send(smalltalk.send((smalltalk.Error || Error), "_new", []), "_signal", []);}), "_on_do_", [(smalltalk.Error || Error), (function(ex){return true;})])]);
return self;},
args: [],
source: unescape('testOnDo%0A%09self%20assert%3A%20%28%5BError%20new%20signal%5D%20on%3A%20Error%20do%3A%20%5B%3Aex%20%7C%20true%5D%29'),
messageSends: ["assert:", "on:do:", "signal", "new"],
referencedClasses: ["Error"]
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
unescape('_testEnsure'),
smalltalk.method({
selector: unescape('testEnsure'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send((function(){return smalltalk.send((smalltalk.Error || Error), "_new", []);}), "_ensure_", [(function(){return true;})])]);
return self;},
args: [],
source: unescape('testEnsure%0A%09self%20assert%3A%20%28%5BError%20new%5D%20ensure%3A%20%5Btrue%5D%29'),
messageSends: ["assert:", "ensure:", "new"],
referencedClasses: ["Error"]
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
unescape('_testNumArgs'),
smalltalk.method({
selector: unescape('testNumArgs'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(){return nil;}), "_numArgs", []), (0)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(a, b){return nil;}), "_numArgs", []), (2)]);
return self;},
args: [],
source: unescape('testNumArgs%0A%09self%20assert%3A%20%5B%5D%20numArgs%20equals%3A%200.%0A%09self%20assert%3A%20%5B%3Aa%20%3Ab%20%7C%20%5D%20numArgs%20equals%3A%202'),
messageSends: ["assert:equals:", "numArgs"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
unescape('_testValueWithPossibleArguments'),
smalltalk.method({
selector: unescape('testValueWithPossibleArguments'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(){return (1);}), "_valueWithPossibleArguments_", [[(3), (4)]]), (1)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(a){return ((($receiver = a).klass === smalltalk.Number) ? $receiver +(4) : smalltalk.send($receiver, "__plus", [(4)]));}), "_valueWithPossibleArguments_", [[(3), (4)]]), (7)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(a, b){return ((($receiver = a).klass === smalltalk.Number) ? $receiver +b : smalltalk.send($receiver, "__plus", [b]));}), "_valueWithPossibleArguments_", [[(3), (4), (5)]]), (7)]);
return self;},
args: [],
source: unescape('testValueWithPossibleArguments%0A%09self%20assert%3A%20%28%5B1%5D%20valueWithPossibleArguments%3A%20%23%283%204%29%29%20equals%3A%201.%0A%09self%20assert%3A%20%28%5B%3Aa%20%7C%20a%20+%204%5D%20valueWithPossibleArguments%3A%20%23%283%204%29%29%20equals%3A%207.%0A%09self%20assert%3A%20%28%5B%3Aa%20%3Ab%20%7C%20a%20+%20b%5D%20valueWithPossibleArguments%3A%20%23%283%204%205%29%29%20equals%3A%207.'),
messageSends: ["assert:equals:", "valueWithPossibleArguments:", unescape("+")],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
unescape('_testWhileTrue'),
smalltalk.method({
selector: unescape('testWhileTrue'),
category: 'tests',
fn: function (){
var self=this;
var i=nil;
i=(0);
(function(){while((function(){return ((($receiver = i).klass === smalltalk.Number) ? $receiver <(5) : smalltalk.send($receiver, "__lt", [(5)]));})()) {(function(){return i=((($receiver = i).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})()}})();
smalltalk.send(self, "_assert_equals_", [i, (5)]);
i=(0);
(function(){while((function(){i=((($receiver = i).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return ((($receiver = i).klass === smalltalk.Number) ? $receiver <(5) : smalltalk.send($receiver, "__lt", [(5)]));})()) {}})();
smalltalk.send(self, "_assert_equals_", [i, (5)]);
return self;},
args: [],
source: unescape('testWhileTrue%0A%09%7C%20i%20%7C%0A%09i%20%3A%3D%200.%0A%09%5Bi%20%3C%205%5D%20whileTrue%3A%20%5Bi%20%3A%3D%20i%20+%201%5D.%0A%09self%20assert%3A%20i%20equals%3A%205.%0A%0A%09i%20%3A%3D%200.%0A%09%5Bi%20%3A%3D%20i%20+%201.%20i%20%3C%205%5D%20whileTrue.%0A%09self%20assert%3A%20i%20equals%3A%205'),
messageSends: ["whileTrue:", unescape("%3C"), unescape("+"), "assert:equals:", "whileTrue"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
unescape('_testWhileFalse'),
smalltalk.method({
selector: unescape('testWhileFalse'),
category: 'tests',
fn: function (){
var self=this;
var i=nil;
i=(0);
(function(){while(!(function(){return ((($receiver = i).klass === smalltalk.Number) ? $receiver >(5) : smalltalk.send($receiver, "__gt", [(5)]));})()) {(function(){return i=((($receiver = i).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})()}})();
smalltalk.send(self, "_assert_equals_", [i, (6)]);
i=(0);
(function(){while(!(function(){i=((($receiver = i).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return ((($receiver = i).klass === smalltalk.Number) ? $receiver >(5) : smalltalk.send($receiver, "__gt", [(5)]));})()) {}})();
smalltalk.send(self, "_assert_equals_", [i, (6)]);
return self;},
args: [],
source: unescape('testWhileFalse%0A%09%7C%20i%20%7C%0A%09i%20%3A%3D%200.%0A%09%5Bi%20%3E%205%5D%20whileFalse%3A%20%5Bi%20%3A%3D%20i%20+%201%5D.%0A%09self%20assert%3A%20i%20equals%3A%206.%0A%0A%09i%20%3A%3D%200.%0A%09%5Bi%20%3A%3D%20i%20+%201.%20i%20%3E%205%5D%20whileFalse.%0A%09self%20assert%3A%20i%20equals%3A%206'),
messageSends: ["whileFalse:", unescape("%3E"), unescape("+"), "assert:equals:", "whileFalse"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
unescape('_testCompiledSource'),
smalltalk.method({
selector: unescape('testCompiledSource'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(){return (1) + (1);}), "_compiledSource", []), unescape("function%20%28%29%7Breturn%20%281%29%20+%20%281%29%3B%7D")]);
return self;},
args: [],
source: unescape('testCompiledSource%0A%09self%20assert%3A%20%5B1+1%5D%20compiledSource%20equals%3A%20%20%27function%20%28%29%7Breturn%20%281%29%20+%20%281%29%3B%7D%27%20'),
messageSends: ["assert:equals:", "compiledSource", unescape("+")],
referencedClasses: []
}),
smalltalk.BlockClosureTest);



smalltalk.addClass('ObjectTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testEquality'),
smalltalk.method({
selector: unescape('testEquality'),
category: 'tests',
fn: function (){
var self=this;
var o=nil;
o=smalltalk.send((smalltalk.Object || Object), "_new", []);
smalltalk.send(self, "_deny_", [smalltalk.send(o, "__eq", [smalltalk.send((smalltalk.Object || Object), "_new", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(o, "__eq", [o])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(o, "_yourself", []), "__eq", [o])]);
smalltalk.send(self, "_assert_", [smalltalk.send(o, "__eq", [smalltalk.send(o, "_yourself", [])])]);
return self;},
args: [],
source: unescape('testEquality%0A%09%7C%20o%20%7C%0A%09o%20%3A%3D%20Object%20new.%0A%09self%20deny%3A%20o%20%3D%20Object%20new.%0A%09self%20assert%3A%20o%20%3D%20o.%0A%09self%20assert%3A%20o%20yourself%20%3D%20o.%0A%09self%20assert%3A%20o%20%3D%20o%20yourself'),
messageSends: ["new", "deny:", unescape("%3D"), "assert:", "yourself"],
referencedClasses: ["Object"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
unescape('_testIdentity'),
smalltalk.method({
selector: unescape('testIdentity'),
category: 'tests',
fn: function (){
var self=this;
var o=nil;
o=smalltalk.send((smalltalk.Object || Object), "_new", []);
smalltalk.send(self, "_deny_", [smalltalk.send(o, "__eq_eq", [smalltalk.send((smalltalk.Object || Object), "_new", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(o, "__eq_eq", [o])]);
return self;},
args: [],
source: unescape('testIdentity%0A%09%7C%20o%20%7C%0A%09o%20%3A%3D%20Object%20new.%0A%09self%20deny%3A%20o%20%3D%3D%20Object%20new.%0A%09self%20assert%3A%20o%20%3D%3D%20o'),
messageSends: ["new", "deny:", unescape("%3D%3D"), "assert:"],
referencedClasses: ["Object"]
}),
smalltalk.ObjectTest);



