Smalltalk current createPackage: 'Grocery' properties: a Array ()!
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

ModelView subclass: #IngredientsView
	instanceVariableNames: ''
	category: 'Grocery'!

!IngredientsView methodsFor: 'not yet classified'!

ingredients

	^ model
!

renderOn: html

	self ingredients do: [ :anIngredient | 
        	( IngredientView on: anIngredient ) renderOn: html ]
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

SmackboneView subclass: #GroceryWidget
	instanceVariableNames: ''
	category: 'Grocery'!

!GroceryWidget methodsFor: 'not yet classified'!

renderOn: html

	self components do: [ :aComponent | aComponent renderOn: html ]
!

text

	^ el text
! !

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
! !

!RecipeWidget class methodsFor: 'not yet classified'!

on: aModel

	^ self new initializeOn: aModel
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
! !

!IngredientsWidget class methodsFor: 'not yet classified'!

on: aModel onClick: aBlock

	^ self new initializeOn: aModel onClick: aBlock
! !

Object subclass: #RecipeLibrary
	instanceVariableNames: 'recipes library'
	category: 'Grocery'!

!RecipeLibrary methodsFor: 'not yet classified'!

initialize

	library := Array new.
!

add: anObject

	library add: anObject
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
| library |

library := RecipeLibrary new.

jsonp rows do: [ :aRow | 
	collection  inspect.
	collection add: aRow id
"  jQuery
    ajax: 'http://localhost/couchdb/recipes/', aRow id
    options: #{
        'type' -> 'GET'.
        'dataType' -> 'jsonp'.
        'success' -> [ :jsonp | collection add: aRow id ].
        'error' -> [window alert: 'error']
    }
"
]
!

isEmpty

	^ collection isEmpty
!

uri

	^ uri
!

notEmpty
window alert: 'h'.
collection inspect.
	^ collection notEmpty
!

fetchOnSuccessDo: aBlock

  jQuery
    ajax: self uri
    options: #{
        'type' -> 'GET'.
        'dataType' -> 'jsonp'.
        'success' -> [ :jsonp | self loadLibraryOn: jsonp. aBlock value ].
        'error' -> [window alert: 'error']
    }
! !

!CouchDB class methodsFor: 'not yet classified'!

on: aCollection at: aURI

	^ self new initializeOn: aCollection at: aURI
!

at: aURI

	^ self on: Array new at: aURI
! !

Object subclass: #SmackbonePersisted
	instanceVariableNames: 'uri model'
	category: 'Grocery'!

!SmackbonePersisted methodsFor: 'not yet classified'!

doesNotUnderstand: aMessage
window alert: aMessage selector.
	^ model 
		perform: aMessage selector
		withArguments: aMessage arguments
!

initializeFrom: aJSONObject
!

initializeOn: aModel at: aURI

	model := aModel.
	uri := aURI.
! !

SmackbonePersisted subclass: #SmackboneCollection
	instanceVariableNames: ''
	category: 'Grocery'!

!SmackboneCollection methodsFor: 'not yet classified'!

fetch

  jQuery
    ajax: uri
    options: #{
        'type' -> 'GET'.
        'dataType' -> 'jsonp'.
        'success' -> [ :jsonp | self initializeFrom: jsonp ].
        'error' -> [window alert: 'error']
    }
!

initializeFrom: aJSONObject
!

doesNotUnderstand: aMessage

	^ model 
		perform: aMessage selector
		withArguments: aMessage arguments
! !

!SmackboneCollection class methodsFor: 'not yet classified'!

on: aCollection at: aURI

	^ self new initializeOn: aCollection at: aURI
!

at: aURI

	^ self on: Array new at: aURI
! !

SmackbonePersisted subclass: #SmackboneModel
	instanceVariableNames: ''
	category: 'Grocery'!

SmackboneRouter subclass: #GroceryRouter
	instanceVariableNames: 'grocery'
	category: 'Grocery'!

!GroceryRouter methodsFor: 'not yet classified'!

initialize
	grocery := RecipeWidget on: ( GroceryTestObjects new blts )
!

grocery
	self domRoot empty append: grocery render el.
!

domRoot
	^ '#smackbone-welcome' asJQuery
!

routes
	^ (Dictionary new)
		at: '' put: 'grocery';
		yourself.
! !

