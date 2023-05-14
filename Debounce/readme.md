# Debouncing

 ## Flipcart (e-commercer website search box) 

In input box if user search samsung then 7 api calls will be made which is optimal in that case we should optimised our code with debounce method.

*Debouncing hepls in to make api calls only if difference bettween 2 key press events is greater than certain delay.*

<pre>
API calls -> | | | | | | | | | | 
             s a m s u n g ***300ms  phones
                           Api call
</pre>


### difference bettween 2 key press events is greater than certain delay


# Throttling


It says that if lot of events happening then. suppose if the user is typing s a m s u n g _ P h o n e . 
Then only make the api call after certain limit of time.
Egnore all the api calls occurs bettween them.


### Deffrence between 2 api calls is 300ms


It is something like calling an api call after a certain interval of time.


<pre>
API calls -> | | | | | | | | | | | | | |
             s a m s u n g   p h o n e s
             *             *                *

             Api call      Api call         Api call
</pre>


------
Example:- Throttling makes more sense 


In case of pistol


 A shooting game -> where a button is clicked multiple times can freeze the application in that senario debouncing makes sense where a function is called only when there is delay of 2 clicks events is 500ms then only make a function call. Then again make a function call if the difference between events is greater than 500ms. 



In case of Machine Gun


 In throttling if the player is cicking a button again and agian then 

 ## Question 

 - What is better debouncing or throttling ?

 
 Ans : There is nothing like that its totally depends on use case. If in that case the debouncing makes more sense then use it. If in that case the throttling makes more sense then use it.





