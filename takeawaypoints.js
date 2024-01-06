/*

-------------------------------------------------------------------------
DAY 1

A react variable can store tag
we can implement javascript operation inside tag using {}

There must be only one wrapper in return
that means euta function le euta thing matra return garxa so euta return vitra euta matra wrapper rakhne


Anything that is written inside return will display in browser

ELEMENT (2 types)
------------------
-Block element
---------------
It takes 100% width
It always starts from new line

-Inline element
----------------
It takes required width

IMAGE
-----
- Always place images or files at public folder.
- Dot(.) at src images refers to public folder

CSS
----
Inline CSS
-------------
-Obj is used for styling purpose
-You must use Camel Case Convention

External CSS
--------------
-It is a three step process: 
    define
    import 
    use


In react, result of console appears at developer panel

-----------------------------------------------------------------------------------------------------------

DAY 2

COMPONENT
---------
It is a function whose first letter is capital.
We call component as calling HTML tag.
Hence it can be called as a custom tag


props=>component ma value pass garne
if props is other then string always wrap it with curly braces
eg: age={29}

Inbuilt HTML props are ony supported by inbuilt HTML tags. It is not supported by custom tags.

------------------------------------------------------------------------------------------------------------

DAY 3

.jsx=> It is an extension that is combination of JS and HTML. Can be pronounced as javascript extension or Javascript XML

Limitation of Curly Braces
--------------------------
It returns only one value
-> eg: if we try to print {a,name} it wil throw error.But we ca call like {a},{name}.
It doesn't support if-else,while,do-while
we cannot define variables inside curly braces


Limitation of Ternary Operator
------------------------------
Else part(:) is compulsory if we are using if-else statement.

Effect of different data inside html tag
----------------------------------------
Boolean are not shown in browser. For this we have to add some logics.
Don't call object inside HTML tag children. It will show error.

-------------------------------------------

Why first letter of component is capital
->To differentiate it from inbuilt HTML tags

Make a component Location , pass props as (country, province, district, exactLocation)

Make a component Info pass a pros as 
name in string
age in number
fatherDetail in object {fname:"...", fage:...}
favFood in array ["mutton", "chicken", "spinach"]

Difference between function and component
=>We call component as HTML tag but function with parenthesis()


What is props
=>props is passing value in component

Make a component with name Images
This component must display 3 images form public

Explain the cases where  you must used {} Inside children In a props

Explain why double curly braces is used style props
=>if props is other then string always wrap it with curly braces



Using ternary operator solve this
age<18 print He canenter bar
age>=18 print He cannot enter bar


Use State: 
A page is changed if state variable is changed that is value change huda hunxa natra page naya render hunna

When state variable is changed 
A component gets render such that the state variable which is changed holds changed values
where as other state variable holds previous value

----------------------------------------------------------------------------------

USE EFFECT HOOK
_______________

Rendering pages
------------------
-> A page (browser) will render if State variable is changed.
When a state variable changes, A component gets rendered such that,
the state variable which is changed holds changed values where as the other state variable holds the previous value.
use State Effect
----------------
 
-> It is asynchronous function.
-> Use effect hook function is executed on first render but not after that.
-> Use effect function will run for 1st render but from second render the execution of function depends on its dependency.

___________________________________________________________________________________________________________________________

Before working with React router dom, you have to wrap APp Component by BrowserRouter
_____________________________________________________________________________________________________________________________


IN HTML Form, in input field, whatever you place in a value, it will display in the input field of the form in the browser.
*/  