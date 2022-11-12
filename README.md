# HUMM

[![Netlify Status](https://api.netlify.com/api/v1/badges/39b578bb-c060-4593-88fe-ae3d103ace31/deploy-status)](https://app.netlify.com/sites/hummbiotech/deploys)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/udiram/humm/tree/backend-release.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/udiram/humm/tree/backend-release)
![Known Vulnerabilities](https://snyk.io/test/github/udiram/humm/badge.svg)


[![Dependency Review](https://github.com/udiram/humm/actions/workflows/dependency-review.yml/badge.svg)](https://github.com/udiram/humm/actions/workflows/dependency-review.yml)
[![Django CI](https://github.com/udiram/humm/actions/workflows/django.yml/badge.svg)](https://github.com/udiram/humm/actions/workflows/django.yml)
[![Python application](https://github.com/udiram/humm/actions/workflows/python-app.yml/badge.svg)](https://github.com/udiram/humm/actions/workflows/python-app.yml)


![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/udiram/humm)
![GitHub repo size](https://img.shields.io/github/repo-size/udiram/humm?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/udiram/humm?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/udiram/humm?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/udiram/humm?color=red&style=plastic)


[![Backend Status](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://humm-biotech.herokuapp.com/)


[![Npm package version](https://badgen.net/npm/v/express)](https://npmjs.com/package/express)
[![Minimum node.js version](https://badgen.net/npm/node/express)](https://npmjs.com/package/express)


[![forthebadge made-with-python](http://ForTheBadge.com/images/badges/made-with-python.svg)](https://www.python.org/)

![Logo](https://hummbiotech.netlify.app/static/media/humm_logo@2x.fb77c8efa2edb3440189.png)


# HUMM

HUMM is a smart chatbot that provides cognitive behavioural therapy, resources, and other proven therapeutic techniques to help users improve their mental health. HUMM provides short term and long term support by chatting with users to help them deal with daily troubles. HUMM stands out by being programmed to assist a wide variety of struggles while still following guidelines set by the American Psychological Association. HUMM’s mission is to create a resource that provides every user with support, guidance, and someone to talk to whenever they need it. 

# Features
- Smart diagnosis tool supporting a wide variety of struggles classifed in DSM-5
- Intelligent chatbot providing coping techniques, therapeutic solutions and calming strategies
- Personalized resources provided including extra information and hotlines specific to situation and location 


## Screenshots

![App Screenshot](https://i.imgur.com/tfO8Xi0.png)

<!--- 
## API Reference

(0) Getting Bearer Authentication Token ~ GET request
- endpoint:  http://127.0.0.1:8000/api/users/token/

- json Body input:
{
    "username": "admin_11",
    "password": "123456"
}
- this is the format of what you input, and it can be any registered user's credentials

*** You will need an authorization token for all other api calls, and the format of how to input it will be shown in (1). The token isn't user specific, if it's any authentication token it'll work
*** Furthermore, the json you'll receive has 2 tokens, 1 REFRESH, 1 ACCESS. Use the access one for everything below, we aren't incorporating the Refresh token.


(1) GetAllConversations: ~ GET req
- api call which retrieves all conversations in DB regardless of user
- Requires a bearer token to Access (can be any user's authentication token)
- endpoint: http://127.0.0.1:8000/api/GetAllConversations/
- Header:
Key: Authorization , Value: Bearer ~PUT TOKEN HERE~
Ex: Key: Authorization , Value: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyNTI3MzU5MzMxLCJpYXQiOjE2NjMzNTkzMzEsImp0aSI6ImM3OGEwZDM3NzhlYTQ5ZWU5NmNjMWUwYTA3MmNmMTU5IiwidXNlcl9pZCI6MX0.Kn0vor2sRbgR2hBSNHwdBbuihuW88d0iNox1oROAZa8

(2) GetUsers: ~ GET req
- endpoint: http://127.0.0.1:8000/api/GetUsers/
- same authorization input as shown in (1)
- no other input needed, it just shows all user information. I believe superusers have their password encrypted though, so you'll have to remember those ones.

(3) UsersConversations: ~ GET req
- get's a list of the user's conversations given the user_id. 
- You can find a user's Id by using 'GetUsers' and finding the specific user information
- endpoint: http://127.0.0.1:8000/api/UsersConversations/~PUT USER ID HERE~ (user id will be a digit of some sort)
Example call: http://127.0.0.1:8000/api/UsersConversations/1
- Same Authorization input required as (1)

(4) CreateConversation: ~ PUT req
- endpoint: http://127.0.0.1:8000/api/CreateConversation/
- Same authorization as (1) required
- example of JSON Body text you'll need to input:
    {
        "conversation_array": [
            "dance_time_user",
            "text2_time_bot"
        ],
        "owner": 2
    }

- Input whatever user id you want to connect it to
- Notice the format of the conversation array, commas are used to split up individual texts, and each text contains 3 pieces of information which is separated by whatever special symbol you guys wish for. The info is 1) Actual Text Input 2) Time it was inputted 3) Whether the user sent it, or the bot.

(5) DeleteConversation: ~ DELETE req
= endpoint: http://127.0.0.1:8000/api/DeleteConversation/~PUT CONVERSATION ID HERE~/
- same auth as (1)

(6) CreateUser: ~PUT REQUEST
- same auth as (1)
- endpoint: http://127.0.0.1:8000/api/CreateUser/
- json Body input: 
    {
        "password": "romeoandjulietsss",
        "username": "ramussss",
        "first_name": "udibhav",
        "last_name": "ramu",
        "email": "babayo@as.com"
    }
- Notice no need to input an id when creating either a user or a conversation (no conversation id). This is cuz Django handles the ID side of things on it's own


(6) DeleteUser: ~ DELETE req
- same auth as (1)
- endpoint: http://127.0.0.1:8000/api/DeleteUser/~PUT USER ID HERE~/

--->
## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Orange | ![#f3933d](https://placehold.co/15x15/f3933d/f3933d.png) #f3933d |
| Dark Grey | ![#6c757d](https://placehold.co/15x15/6c757d/6c757d.png) #6c757d |
| Grey | ![#f8f9fa](https://placehold.co/15x15/f8f9fa/f8f9fa.png) #f8f9fa |
| White | ![#ffffff](https://placehold.co/15x15/ffffff/ffffff.png) #ffffff |


## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

# Support
For support, reach out to hummbiotech@gmail.com
