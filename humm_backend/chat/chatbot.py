import nltk
# nltk.download()
from nltk.sentiment import SentimentIntensityAnalyzer
sia = SentimentIntensityAnalyzer()
def analyze_response(input_text):

    response = sia.polarity_scores(input_text)
    if response['compound'] > 0.5:
        return "I am happy to hear that!"
    elif response['compound'] < -0.5:
        return "I am sorry to hear that!"
    else:
        return "I am neutral on that."

    # if input_text == "how are you":
    #     return "I am fine, thank you!"
    # elif input_text == "what is your name":
    #     return "My name is Humm, and I am a chatbot."
    # elif input_text == "what is your favorite color":
    #     return "My favorite color is blue."
    # elif input_text == "what is your favorite food":
    #     return "My favorite food is pizza."
    # elif input_text == "what is your favorite movie":
    #     return "My favorite movie is Star Wars."
    # elif input_text == "what is your favorite song":
    #     return "My favorite song is The Sign by Ace of Base."
    # elif input_text == "what is your favorite sport":
    #     return "My favorite sport is basketball."
    # elif input_text == "what is your favorite animal":
    #     return "My favorite animal is a cat."
    # elif input_text == "what is your favorite book":
    #     return "My favorite book is The Hobbit by J.R.R. Tolkien."
    # elif input_text == "what is your favorite game":
    #     return "My favorite game is League of Legends."
    # elif input_text == "what is your favorite movie":
    #     return "My favorite movie is Star Wars."
    # else:
    #     return "I do not understand."