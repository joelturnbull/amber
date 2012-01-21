Smalltalk current createPackage: 'Grocery' properties: a Array ()!
GroceryWidget subclass: #RecipeWidget
	instanceVariableNames: 'view ingredientsWidget'
	category: 'Grocery'!

!RecipeWidget methodsFor: 'not yet classified'!

initializeOn: aRecipe

	view := RecipeView on: aRecipe.
	ingredientsWidget := IngredientsWidget on: aRecipe ingredients onClick: [ self render ].
!

val: aValue

	^ ingredientsWidget val: aValue
!

components

	^ Array 
		with: view
		with: ingredientsWidget
!

click

	^ ingredientsWidget click
!

text

	^ view el text
! !

!RecipeWidget class methodsFor: 'not yet classified'!

on: aModel

	^ self new initializeOn: aModel
! !

Object subclass: #GroceryUtil
	instanceVariableNames: ''
	category: 'Grocery'!

!GroceryUtil methodsFor: 'not yet classified'!

reset

	(( RecipeWidget on: ( GroceryTestObjects new blts )) render ) appendToJQuery: (( '#container' asJQuery ) empty )
! !

GroceryWidget subclass: #IngredientsWidget
	instanceVariableNames: 'view ingredientForm clickAction'
	category: 'Grocery'!

!IngredientsWidget methodsFor: 'not yet classified'!

val: aValue

	^ ingredientForm val: aValue
!

components

	^ Array 
		with: view
		with: ingredientForm
!

click

	^ ingredientForm click
!

initializeOn: anArray onClick: aBlock

	view := IngredientsView on: anArray.
	clickAction := aBlock.
	ingredientForm := 
		IngredientForm onClick: [ :anIngredient | 
			anArray add: anIngredient.
                        self render.
                        clickAction value. ]
!

text

	^ view el text
! !

!IngredientsWidget class methodsFor: 'not yet classified'!

on: aModel onClick: aBlock

	^ self new initializeOn: aModel onClick: aBlock
! !

Object subclass: #Recipe
	instanceVariableNames: 'ingredients'
	category: 'Grocery'!

!Recipe methodsFor: 'not yet classified'!

add: anIngredient

	ingredients add: anIngredient
!

includes: anIngredient

	^ ingredients includes: anIngredient
!

ingredients

	^ ingredients
!

name

	^  name
!

initializeNamed: aName ingredients: anArray

	name := aName.
	ingredients := anArray.
! !

!Recipe class methodsFor: 'not yet classified'!

named: aName

	^ self named: aName  ingredients: Array new
!

named: aName ingredients: anArray

	^ self new initializeNamed: aName ingredients: anArray
!

from: aJSONObject
| ingredients |

	ingredients := aJSONObject ingredients collect: [ :anIngredientJSON | Ingredient fromJSON: anIngredientJSON ].
	^ self named: aJSONObject name ingredients: ingredients.
! !

Object subclass: #RecipeLibrary
	instanceVariableNames: 'recipes'
	category: 'Grocery'!

!RecipeLibrary methodsFor: 'not yet classified'!

initializeOn: aCollection

	recipes := aCollection.
!

isEmpty

	^ recipes isEmpty
! !

!RecipeLibrary class methodsFor: 'not yet classified'!

recipeCollectionFrom: aJSONObject

	^ ( aJSONObject at: 'rows' ) collect: [ :aJSONRowObject | SmackboneModel from: aJSONRowObject ].
!

from: aJSONObject
| collection |

	collection := self recipeCollectionFrom: aJSONObject.
"	^ self on: collection"
	^ self new initializeOn: collection.
!

on: aCollection
| collection |

	^ self new initializeOn: aCollection
! !

SmackboneView subclass: #ModelView
	instanceVariableNames: 'model'
	category: 'Grocery'!

!ModelView methodsFor: 'not yet classified'!

initializeOn: aModel

	super initialize.
	model := aModel
!

model

	^ model
! !

!ModelView class methodsFor: 'not yet classified'!

on: aModel

	^ self new initializeOn: aModel
! !

Object subclass: #CouchDB
	instanceVariableNames: 'collection uri'
	category: 'Grocery'!

!CouchDB methodsFor: 'not yet classified'!

initializeOn: aCollection at: aURI

	collection := aCollection.
	uri := aURI.
!

doesNotUnderstand: aMessage
window alert: aMessage selector.
	^ collection 
		perform: aMessage selector
		withArguments: aMessage arguments
!

fetch

  jQuery
    ajax: self uri
    options: #{
        'type' -> 'GET'.
        'dataType' -> 'jsonp'.
        'success' -> [ :jsonp | self loadLibraryOn: jsonp ].
        'error' -> [window alert: 'error']
    }
!

launchViewOn: aJSONObject
| recipe recipeView |

  recipe := CouchDoc
      on: ( RecipeLibrary fromJSON: aJSONObject ).
"      id: ( aJSONObject at: '_id' )"
"      revision: ( aJSONObject at: '_rev' )."
  recipeView := RecipeView on: recipe.
  recipeView appendToJQuery: ( '#recipe' asJQuery ).
!

loadLibraryOn: jsonp

"  jQuery
    ajax: 'http://localhost/couchdb/recipes/', anId
    options: #{
        'type' -> 'GET'.
        'dataType' -> 'jsonp'.
        'success' -> [ :jsonp | self launchViewOn: jsonp ].
        'error' -> [window alert: 'error']
    }"
! !

!CouchDB class methodsFor: 'not yet classified'!

on: aCollection at: aURI

	^ self new initializeOn: aCollection at: aURI
!

at: aURI

	^ self on: Array new at: aURI
! !

ModelView subclass: #TextView
	instanceVariableNames: ''
	category: 'Grocery'!

!TextView methodsFor: 'not yet classified'!

renderOn: html

	html div with: self text.
!

text

	^ model
! !

Object subclass: #SmackbonePersisted
	instanceVariableNames: 'uri model'
	category: 'Grocery'!

!SmackbonePersisted methodsFor: 'not yet classified'!

doesNotUnderstand: aMessage
"window alert: aMessage selector."
	^ model 
		perform: aMessage selector
		withArguments: aMessage arguments
!

uri

	^ uri
! !

ModelView subclass: #IngredientView
	instanceVariableNames: ''
	category: 'Grocery'!

!IngredientView methodsFor: 'not yet classified'!

renderOn: html

	( TextView on: self ingredient name ) renderOn: html.
!

ingredient

	^ model
! !

Widget subclass: #GroceryWidget
	instanceVariableNames: ''
	category: 'Grocery'!

!GroceryWidget methodsFor: 'not yet classified'!

render

	self components do: [ :aComponent | aComponent render ]
!

renderOn: html

	self components do: [ :aComponent | aComponent renderOn: html ]
! !

SmackboneRouter subclass: #GroceryRouter
	instanceVariableNames: 'blts'
	category: 'Grocery'!

!GroceryRouter methodsFor: 'not yet classified'!

blts
window alert: self domRoot.
	self domRoot empty append: blts render el.
!

domRoot
	^ '#container' asJQuery
!

initialize
	blts := RecipeWidget on: GroceryTestObjects new blts
!

routes
	^ (Dictionary new)
		at: '' put: 'blts';
		yourself.
! !

Object subclass: #SmackboneCollection
	instanceVariableNames: 'model uri'
	category: 'Grocery'!

!SmackboneCollection methodsFor: 'not yet classified'!

fetchOnSuccessDo: aBlock

  jQuery
    ajax: uri
    options: #{
        'type' -> 'GET'.
        'dataType' -> 'jsonp'.
        'success' -> [ :aJSONObject | self initializeFromJSON: aJSONObject. aBlock value ].
        'error' -> [window alert: 'error']
    }
!

initializeFromJSON: aJSONObject

    model := RecipeLibrary from: aJSONObject.
!

initializeAt: aURI on: aCollection

	uri := aURI.
	model := aCollection.
!

uri

	^ uri
!

model

	^ model
!

isEmptyx

	^ model isEmpty
!

doesNotUnderstandx: aMessage
window alert: aMessage selector.

	^ model
		perform: aMessage selector
		withArguments: aMessage arguments
!

isEmpty

	^ model isEmpty
! !

!SmackboneCollection class methodsFor: 'not yet classified'!

at: aURI

	^ self at: aURI on: Array new.
!

at: aURI on: aCollection

	^ self new initializeAt: aURI on: aCollection
! !

Object subclass: #NameOfSubclass
	instanceVariableNames: ''
	category: 'Grocery'!

Object subclass: #SmackboneModel
	instanceVariableNames: 'id revision'
	category: 'Grocery'!

!SmackboneModel methodsFor: 'not yet classified'!

initializeId: anId revision: aRevision
	id := anId.
	revision := aRevision.
!

fetch

	jQuery 
		ajax: 'http://localhost/couchdb/recipes/', id
		options: #{
				'type' -> 'GET'.
				'dataType' -> 'jsonp'.
				'success' -> [ :aJSONObject | model := Recipe from: aJSONObject ].
				'error' -> [window alert: 'error']
		}.
!

doesNotUnderstand: aMessage

	^ model 
		perform: aMessage selector
		withArguments: aMessage arguments
! !

!SmackboneModel class methodsFor: 'not yet classified'!

from: aJSONObject

	self new initializeId: ( aJSONObject at: '_id' ) revision: ( aJSONObject at: '_rev' )
! !

Object subclass: #Ingredient
	instanceVariableNames: 'name'
	category: 'Grocery'!

!Ingredient methodsFor: 'not yet classified'!

initializeNamed: aName

	name := aName.
!

name

	^  name
!

= anIngredient

	^ ( anIngredient isKindOf: self class ) and: [ anIngredient name = self name ]
! !

!Ingredient class methodsFor: 'not yet classified'!

named: aName

	^ self new initializeNamed: aName
! !

ModelView subclass: #IngredientForm
	instanceVariableNames: 'name clickAction button input'
	category: 'Grocery'!

!IngredientForm methodsFor: 'not yet classified'!

initializeOnClick: aBlock

	clickAction := aBlock.
!

renderOn: html

	input := html input.
	button := html button with: 'Add Ingredient'.

	button asJQuery click: [ 
            clickAction value: ( Ingredient named: input asJQuery val ).
        ]
"
	button asJQuery click: [ 
          	self recipe add: ( Ingredient named: input asJQuery val ).
          	self recipe save.
          	self refresh.
        ]
"
!

click

	button asJQuery click
!

val: aString

	input asJQuery val: aString.
! !

!IngredientForm class methodsFor: 'not yet classified'!

onClick: aBlock

	^ self new initializeOnClick: aBlock
! !

ModelView subclass: #IngredientsView
	instanceVariableNames: ''
	category: 'Grocery'!

!IngredientsView methodsFor: 'not yet classified'!

ingredients

	^ model
!

renderOn: html
	window alert: 'renderOn:'.
	window alert: el text.
	window alert: '#container' asJQuery text.

	self ingredients do: [ :anIngredient |
"        	( IngredientView on: anIngredient ) renderOn: html ]."
        	( IngredientView on: anIngredient ) render ].

	window alert: 'renderOn:'.
	window alert: el text.
	window alert: '#container' asJQuery text.
!

render

	window alert: 'render'.
	window alert: self el text.
	window alert: '#container' asJQuery text.
	super render
! !

ModelView subclass: #RecipeView
	instanceVariableNames: ''
	category: 'Grocery'!

!RecipeView methodsFor: 'not yet classified'!

renderOn: html

	( TextView on: self recipe name ) renderOn: html.
"	( IngredientsView on: self recipe ingredients ) renderOn: html.
	self renderIngredientAdderOn: html."
!

recipe

	^ model
!

renderIngredientAdderOn: html
| input button |

	input := html input.
        button := html button with: 'Add Ingredient'.
	
"	button asJQuery click: [ 
          	self recipe add: ( Ingredient named: input asJQuery val ).
          	self recipe save.
          	self refresh.
        ]
"
! !

!RecipeView class methodsFor: 'not yet classified'!

on: aRecipe

	^ self new initializeOn: aRecipe
! !

