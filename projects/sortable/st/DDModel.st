Smalltalk current createPackage: 'DDModel' properties: #{'methods'->[object Object]. 'inheritedMethods'->[object Object]. 'klass'->Array. '_size'->a BlockClosure. '_at_put_'->a BlockClosure}!
Object subclass: #Participant
	instanceVariableNames: 'name'
	category: 'DDModel'!

!Participant methodsFor: 'not yet classified'!

initializeNamed: aName
	name := aName
!

name
	^ name
!

= aModel

	^ ( aModel isKindOf: self class ) 
		and: [ aModel name = self name ]
! !

!Participant class methodsFor: 'not yet classified'!

named: aName

	^ self new initializeNamed: aName
!

fromJSON: aJSONObject

	^ self named: aJSONObject name
! !

Object subclass: #Participants
	instanceVariableNames: 'collection'
	category: 'DDModel'!

!Participants methodsFor: 'not yet classified'!

initializeWith: aCollection

	collection := aCollection
!

do: aBlock

	^ collection do: aBlock
!

first 
	^ collection first
!

second 
	^ collection second
!

add: anElement
	collection add: anElement
!

participants

	^ collection
!

last
	^ collection last
!

move: movingElement to: bumpedElement                                                                 
| newCollection targetIndex |                                                                         

    targetIndex := collection indexOf: bumpedElement.                                             
    (( bumpedElement = collection last ) and: [ movingElement = ( collection at: ( collection size - 1 ) ) ]) 
    	ifTrue: [ self switchLastTwoElements ]                                                            
    	ifFalse: [                                                                                        
                  self move: movingElement toIndex: targetIndex ]
!

move: movingElement toIndex: targetIndex                                                              
| newCollection |                                                                                     

newCollection := Array new.
collection remove: movingElement.
collection
  withIndexDo: [ :anElement :anIndex |
                      ( anIndex = targetIndex ) ifTrue: [ newCollection add: movingElement ].
                      newCollection add: anElement ].
collection := newCollection.
!

switchLastTwoElements
| lastElement nextLastElement |

  lastElement := collection last.
  collection remove: lastElement.
  nextLastElement := collection last.
  collection remove: nextLastElement.
  collection add: lastElement.
  collection add: nextLastElement.
!

third 
	^ collection third
!

withIndexDo: aBlock

	^ collection withIndexDo: aBlock
!

remove: anElement
	collection remove: anElement
!

insert: newElement after: anElement                                                                 
| targetIndex | 

( anElement = collection last ) 
	ifTrue: [ self add: newElement ]
	ifFalse: [
    		targetIndex := ( collection indexOf: anElement ) + 1.
    		self add: newElement.                                   
    		self move: newElement toIndex: targetIndex. ]
!

move: movingElement after: anElement                                                     
| targetIndex |
    targetIndex := ( collection indexOf: anElement ).
    self move: movingElement toIndex: targetIndex.
!

indexOf: anElement

	^ collection indexOf: anElement
!

isEmpty 
	^ collection isEmpty
! !

!Participants class methodsFor: 'not yet classified'!

with: aCollection

	^ self basicNew initializeWith: aCollection
!

new

	^ self with: Array new.
!

fromJSON: aJSONObject
| collection |

	collection := aJSONObject collection collect: [ :aParticipantJSON | Participant fromJSON: aParticipantJSON ].
	^ self with: collection.
! !

