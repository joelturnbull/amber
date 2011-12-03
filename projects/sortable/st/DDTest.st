Smalltalk current createPackage: 'DDTest' properties: #{'methods'->[object Object]. 'inheritedMethods'->[object Object]. 'klass'->Array. '_size'->a BlockClosure. '_at_put_'->a BlockClosure}!
TestCase subclass: #DDTest
	instanceVariableNames: 'factory'
	category: 'DDTest'!

!DDTest methodsFor: 'not yet classified'!

setUp

	factory := DDFactory new
! !

Object subclass: #DDFactory
	instanceVariableNames: 'participants participant members participantB'
	category: 'DDTest'!

!DDFactory methodsFor: 'not yet classified'!

participants

	^ participants ifNil: [ 
		participants := Participants with: ( Array 
          		with: self participant
          		with: self participantB )]
!

participant

	^ participant ifNil: [ participant := Participant named: 'Thokul Longclaw' ]
!

participantB

	^ participantB ifNil: [ participantB := Participant named: 'Asmodeus' ]
! !

DDTest subclass: #ParticipantViewTest
	instanceVariableNames: ''
	category: 'DDTest'!

!ParticipantViewTest methodsFor: 'not yet classified'!

testDisplaysName
| model view |

	model := factory participant.
	view := ( ParticipantView on: model ) render.
	self assert: ( view el text includesSubString: model name ).
! !

DDTest subclass: #ParticipantsViewTest
	instanceVariableNames: ''
	category: 'DDTest'!

!ParticipantsViewTest methodsFor: 'not yet classified'!

testNamesSortable
| collection view |

	collection := factory participants.
	view := ( ParticipantsView on: collection ) render.
	window drag: ( Array with: view el with: 10 with: 10 ).
!

testDisplaysNamesInOrder
| collection view listItems |

	collection := factory participants.
	view := ( ParticipantsView on: collection ) render.
	listItems := view el contents contents.
	collection 
		withIndexDo: [ :aParticipant :anIndex | self assert: ( listItems at: anIndex - 1 ) innerHTML = aParticipant name ]
! !

DDTest subclass: #ParticipantTest
	instanceVariableNames: ''
	category: 'DDTest'!

!ParticipantTest methodsFor: 'not yet classified'!

testIsNamed
| model name |
	
	model := Participant named: 'Thokul Longclaw'.
	self assert: model name = 'Thokul Longclaw'.
!

testEquality
| a b |
	
	a := Participant named: 'Thokul Longclaw'.
	b := Participant named: 'Thokul Longclaw'.
	self assert: a = b.
! !

DDTest subclass: #ParticipantsTest
	instanceVariableNames: ''
	category: 'DDTest'!

!ParticipantsTest methodsFor: 'not yet classified'!

testNew
| model |
	model := Participants new.
	self assert: model participants isEmpty.
!

testMoveLastToFirst
| participants a b c d e |
	participants := Participants new.
	a := Participant named: 'a'.
	b := Participant named: 'b'.
	participants add: a; add: b.
	participants move: b to: a.
	self assert: participants first = b.
	self assert: participants last = a.
!

testMoveFirstToLast
| participants a b c d e |
	participants := Participants new.
	a := Participant named: 'a'.
	b := Participant named: 'b'.
	participants add: a; add: b.

	participants move: a to: b.
	self assert: participants first = b.
	self assert: participants last = a.
!

testMoveMiddleToFirst
| participants a b c |
	participants := Participants new.
	a := Participant named: 'a'.
	b := Participant named: 'b'.
	c := Participant named: 'c'.
	participants add: a; add: b; add: c.
	participants move: b to: a.
	self assert: participants first = b.
	self assert: participants second = a.
	self assert: participants last = c.
!

testMoveMiddleToLast
| participants a b c |
	participants := Participants new.
	a := Participant named: 'a'.
	b := Participant named: 'b'.
	c := Participant named: 'c'.
	participants add: a; add: b; add: c.
	participants move: b to: c.
	self assert: participants first = a.
	self assert: participants second = c.
	self assert: participants last = b.
!

testMoveMiddleToMiddleFirst
| participants a b c |
	participants := Participants new.
	a := Participant named: 'a'.
	b := Participant named: 'b'.
	c := Participant named: 'c'.
	participants add: a; add: b; add: c.
	participants move: b to: b.
	self assert: participants first = a.
	self assert: participants second = b.
	self assert: participants last = c.
!

testMoveMiddleUp
| participants a b c d |
	participants := Participants new.
	a := Participant named: 'a'.
	b := Participant named: 'b'.
	c := Participant named: 'c'.
	d := Participant named: 'd'.
	participants add: a; add: b; add: c; add: d.
	participants move: c to: b.
	self assert: participants first = a.
	self assert: participants second = c.
	self assert: participants third = b.
	self assert: participants last = d.
!

testMoveMiddleDown
| participants a b c d |
	participants := Participants new.
	a := Participant named: 'a'.
	b := Participant named: 'b'.
	c := Participant named: 'c'.
	d := Participant named: 'd'.
	participants add: a; add: b; add: c; add: d.
	participants move: b to: c.
	self assert: participants first = a.
	self assert: participants second = c.
	self assert: participants third = b.
	self assert: participants last = d.
! !

