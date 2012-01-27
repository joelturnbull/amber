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
!

fromJSON: aJSONObject

	^ self named: 'stub'
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

	html p 
		with: [ 
			html h5: self recipe name
		]
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
	html ul
		with: [
			self ingredients do: [ :anIngredient | ( IngredientView on: anIngredient ) renderOn: html ]
		];
		yourself.
! !

ModelView subclass: #IngredientView
	instanceVariableNames: ''
	category: 'Grocery'!

!IngredientView methodsFor: 'not yet classified'!

renderOn: html

	html li with: self ingredient name
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

	input := html input class: 'input-text'.
	html p with: [ 
		button := html button with: 'Add Ingredient'; class: 'small radius blue button'; yourself.
	].

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
	instanceVariableNames: 'recipes library collection'
	category: 'Grocery'!

!RecipeLibrary methodsFor: 'not yet classified'!

initializeFromJSON: aJSONObject

	collection := Array new add:  'a'; yourself.
!

xdoesNotUnderstand: aMessage

	^ collection 
		perform: aMessage selector
		withArguments: aMessage arguments
!

doesNotUnderstand: aMessage

	^ collection 
		perform: aMessage selector
		withArguments: aMessage arguments
! !

!RecipeLibrary class methodsFor: 'not yet classified'!

fromJSON: aJSONObject

	^ self new initializeFromJSON: aJSONObject
! !

Object subclass: #SmackbonePersisted
	instanceVariableNames: 'uri class json'
	category: 'Grocery'!

!SmackbonePersisted methodsFor: 'not yet classified'!

initializeOn: aClass at: aURI

	class := aClass.
	uri := aURI.
	json := JSObjectProxy on: ( Compiler new eval: '({})' ).
!

uri

	^ uri
!

xdoesNotUnderstand: aMessage
window alert: aMessage selector.

	^ self model 
		perform: aMessage selector
		withArguments: aMessage arguments
!

fetchOnSuccessDo: aBlock

  jQuery
    ajax: self uri
    options: #{
        'type' -> 'GET'.
        'dataType' -> 'jsonp'.
        'success' -> [ :jsonp | json := jsonp. aBlock value ].
        'error' -> [window alert: 'error']
    }
!

model

	^ class fromJSON: json
!

doesNotUnderstand: aMessage
window alert: aMessage selector.

	^ self model 
		perform: aMessage selector
		withArguments: aMessage arguments
! !

!SmackbonePersisted class methodsFor: 'not yet classified'!

on: aClass at: aURI

	^ self new initializeOn: aClass at: aURI
! !

SmackbonePersisted subclass: #SmackboneModel
	instanceVariableNames: ''
	category: 'Grocery'!

!SmackboneModel methodsFor: 'not yet classified'!

name

	^ self model name
! !

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

Object subclass: #GroceryUtil
	instanceVariableNames: ''
	category: 'Grocery'!

!GroceryUtil methodsFor: 'not yet classified'!

reset
| router history | 
     router := GroceryRouter new.
     history := SmackboneHistorian new.
     history addRoute: router.
     window onhashchange: [ history handleHashChanged ].
     history start.
! !

!GroceryUtil class methodsFor: 'not yet classified'!

reset
| router history | 
     router := GroceryRouter new.
     history := SmackboneHistorian new.
     history addRoute: router.
     window onhashchange: [ history handleHashChanged ].
     history start.
! !

SmackbonePersisted subclass: #SmackboneCollection
	instanceVariableNames: 'class json'
	category: 'Grocery'!

!SmackboneCollection methodsFor: 'not yet classified'!

loadLibraryOn: jsonp

	jsonp rows do: [ :aRow | 
		( self model ) add: aRow id.
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

	^ self model isEmpty
!

notEmpty

	^ self model notEmpty
! !

!SmackboneCollection class methodsFor: 'not yet classified'!

on: aClass at: aURI

	^ self new initializeOn: aClass at: aURI
!

at: aURI

	^ self on: Array new at: aURI
! !

