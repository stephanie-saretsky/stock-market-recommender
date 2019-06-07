To approach this challenge, I started by writing out all of the necessary requirements on paper, and drew out an mockup of how I wanted the app to look.

I know very little of the stock market, so I started by researching the terminology and math behind it. I decided to create a basic form that allows the user to select which stock they want, the social network, and the time span between 5-10 days in the past. The form also has labels to make it accessible to e-readers.

Once the backend is set up, the form will be able to call a stock API to get the real numbers through the onChange and onSubmit functions, as well as the social network APIs.

I then created the recommendation based on the average price over the time span the user selected compared with the amount of social media posts in that same time span. I used my newfound stock research on risk ratio to make an educated guess at what this recommendation should be. The user will also be able to see the daily amount in the time span so they can assess their own personal risk ratio against the app's recommendation. This was then stored in the Redux store to be shared with the Table Component, so that it renders the correct information.

I also had a bit of fun with creating a logo and colour scheme for the app!
