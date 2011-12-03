Smalltalk current createPackage: 'DDView' properties: #{'methods'->[object Object]. 'inheritedMethods'->[object Object]. 'klass'->Array. '_size'->a BlockClosure. '_at_put_'->a BlockClosure}!
SmackboneView subclass: #DDView
	instanceVariableNames: 'model'
	category: 'DDView'!

!DDView methodsFor: 'not yet classified'!

initializeOn: aModel

	super initialize.
	model := aModel
! !

!DDView class methodsFor: 'not yet classified'!

on: aModel

	^ self new initializeOn: aModel
! !

DDView subclass: #ParticipantView
	instanceVariableNames: ''
	category: 'DDView'!

!ParticipantView methodsFor: 'not yet classified'!

renderOn: html

	html span class: 'participant-name'; with: model name.
! !

DDView subclass: #ParticipantsView
	instanceVariableNames: ''
	category: 'DDView'!

!ParticipantsView methodsFor: 'not yet classified'!

renderOn: html
| list | 
	model isEmpty
		ifFalse: [ 
			html div id: self id; with: [ list := ( self renderParticipantsOn: html ) asJQuery ].
			list sortable.
			list bind: 'sortstop' do: [ self updateModel ]]
		ifTrue: [ 
			html div id: self id; with: [ self renderParticipantFormOn: html ]]
!

renderParticipantsOn: html
	^ 
          	html ul id: 'sortable'; with: [
       			model do: [ :aParticipant | self renderParticipant: aParticipant on: html ]]
!

renderParticipant: aParticipant on: html
	^ ( ParticipantWidget 
		on: aParticipant 
		onDelete: [ :aParticipant | model remove: aParticipant. self refresh ]
          	onAdd: [ :aNewParticipant :anExistingParticipant | 
                        		model insert: aNewParticipant after: anExistingParticipant. 
                        		self refresh. ]
          ) renderOn: html
!

refresh
	| selector |
"	self updateModel."
	self persistModel.
	selector := self idSelector asJQuery.
	selector empty.
	self appendToJQuery: selector.
!

idSelector
	^ '#', self id
!

id
	^ 'participants'
!

renderParticipantFormOn: html
	^ ( ParticipantForm 
           	onAdd: [ :aParticipant | model add: aParticipant. self refresh ]) renderOn: html
!

updateModel
| newModel count elements |
	newModel := Participants new.
	count :=0.
	elements := ( self selector find: 'span.participant-name' ).
	elements length timesRepeat: [ | element | element := elements at: count. newModel add: ( Participant named: element innerHTML ). count := count + 1 ].
	model := newModel.
	self persistModel.
!

selector
	^ self idSelector asJQuery.
!

persistModel

	window localStorage at: 'participants' put: model asJSON.
! !

!ParticipantsView class methodsFor: 'not yet classified'!

fixture
	^ self new initializeOn: ( DDFactory new participants )
! !

SmackboneView subclass: #ParticipantWidget
	instanceVariableNames: 'model deleteCallback plusCallback addParticipant addCallback'
	category: 'DDView'!

!ParticipantWidget methodsFor: 'not yet classified'!

renderOn: html
| addSelector addButton |

	html li with: [
          		html li class: 'ui-state-default'; with: [ 
        		html span class: 'ui-icon ui-icon-arrowthick-2-n-s sortable'; with: [ ].
          		( ParticipantView on: model ) renderOn: html. 
          		html with: ' '.
          		( html button with: 'x' ) asJQuery bind: 'click' do: [ deleteCallback value: model ].
          		html with: ' '.
          		addButton := ( html button with: '+' ) asJQuery.
                         
          		addButton click: [ 
                          	addButton hide. 
                          	( ParticipantAfterForm 
                                 	calledBy: model 
                                 	onAdd: addCallback 
                                 	onCancel: [ addSelector empty. addButton show. ]  ) appendToJQuery: addSelector ]]. 
			addSelector := ( html li class: 'ui-state-default' ) asJQuery.
        ].
!

initializeOn: aParticipant onDelete: aBlock onAdd: anotherBlock

	model := aParticipant.
	deleteCallback := aBlock.
	addCallback := anotherBlock.
! !

!ParticipantWidget class methodsFor: 'not yet classified'!

on: aParticipant onDelete: aBlock onAdd: anotherBlock

	^ self new initializeOn: aParticipant onDelete: aBlock onAdd: anotherBlock
! !

SmackboneRouter subclass: #DDRouter
	instanceVariableNames: 'initiativeTracker'
	category: 'DDView'!

!DDRouter methodsFor: 'not yet classified'!

initiativeTracker
	self domRoot empty append: initiativeTracker render el.
!

initialize
| persisted jsonObject initialList |

	persisted := ( window localStorage at: 'participants' ).
	( persisted isKindOf: String ) 
		ifTrue: [ jsonObject := Compiler new eval: '(', persisted, ')'. initialList := Participants fromJSON: jsonObject ]
		ifFalse: [ initialList := DDFactory new participants ].

	initiativeTracker := 
		InitiativeTracker 
			with: ( ParticipantsView on: initialList )
!

domRoot
	^ '#container' asJQuery
!

routes
	^ (Dictionary new)
		at: '' put: 'initiativeTracker';
		yourself.
! !

DDView subclass: #InitiativeTracker
	instanceVariableNames: 'participants'
	category: 'DDView'!

!InitiativeTracker methodsFor: 'not yet classified'!

initializeWith: aParticipants

	super initialize.
	participants := aParticipants	

	"TODO"
	"make name editable"
	"strange when adding when two inputs open"
	"add roll value? ( seperately editable from name )"
	"move buttons away from name"
!

renderOn: html
"	html button asJQuery click: [ participants refresh ]."
	html h2: 'Track Initiative'.
	participants renderOn: html
! !

!InitiativeTracker class methodsFor: 'not yet classified'!

with: aParticipants
	^ self new initializeWith: aParticipants
!

fetch
| persisted jsonObject initialList |

	persisted := ( window localStorage at: 'participants' ).
	( persisted isKindOf: String ) 
		ifTrue: [  jsonObject := Compiler new eval: '(', persisted, ')'. 
                             initialList := Participants fromJSON: jsonObject ]
		ifFalse: [ initialList := DDFactory new participants ].

	^ self with: ( ParticipantsView on: initialList )
! !

DDView subclass: #AddParticipantWidget
	instanceVariableNames: 'addAction'
	category: 'DDView'!

!AddParticipantWidget methodsFor: 'not yet classified'!

renderOn: html
| input addButton | 

	input := html input.
        addButton := ( html button with: '+' ).
        addButton asJQuery bind: 'click' do: [ addAction value: ( Participant named: input asJQuery val ). ].
!

initializeOnAdd: aBlock

	addAction := aBlock
! !

!AddParticipantWidget class methodsFor: 'not yet classified'!

initializeOnAdd: aBlock

	^ self new initializeOnAdd: aBlock
! !

SmackboneView subclass: #ParticipantAfterForm
	instanceVariableNames: 'callingParticipant addCallback cancelCallback'
	category: 'DDView'!

!ParticipantAfterForm methodsFor: 'not yet classified'!

renderOn: html
| input addButton cancelButton | 

	input := html input asJQuery.
	input focus.
        addButton := ( html button with: '+' ).
        addButton asJQuery bind: 'click' do: [ addCallback value: ( Participant named: input val ) value: callingParticipant ]. 
        cancelButton := ( html button with: 'x' ).
        cancelButton asJQuery bind: 'click' do: [ cancelCallback value ].
!

initializeCalledBy: aParticipant onAdd: aBlock onCancel: anotherBlock

	callingParticipant := aParticipant.
	addCallback := aBlock.
	cancelCallback := anotherBlock.
! !

!ParticipantAfterForm class methodsFor: 'not yet classified'!

calledBy: aParticipant onAdd: aBlock onCancel: anotherBlock

	^ self new initializeCalledBy: aParticipant onAdd: aBlock onCancel: anotherBlock
! !

SmackboneView subclass: #ParticipantForm
	instanceVariableNames: 'callingParticipant addCallback cancelCallback'
	category: 'DDView'!

!ParticipantForm methodsFor: 'not yet classified'!

initializeOnAdd: aBlock

	addCallback := aBlock
!

renderOn: html
| input addButton |
	input := html input.
        addButton := ( html button with: '+' ).
        addButton asJQuery bind: 'click' do: [ addCallback value: ( Participant named: input asJQuery val ) ].
! !

!ParticipantForm class methodsFor: 'not yet classified'!

onAdd: aBlock

	^ self new initializeOnAdd: aBlock
! !

