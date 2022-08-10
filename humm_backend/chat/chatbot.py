import nltk
# nltk.download()
from chatterbot import ChatBot  # import the chatbot
from chatterbot.trainers import ChatterBotCorpusTrainer
import os
print(os.getcwd())
bot = ChatBot('ramu')
trainer = ChatterBotCorpusTrainer(bot)

corpus_path = os.path.join(os.path.dirname(__file__), 'corpus_english/')

for file in os.listdir(corpus_path):
    trainer.train(corpus_path + file)

from nltk.sentiment import SentimentIntensityAnalyzer
sia = SentimentIntensityAnalyzer()
def sentiment_analysis(input_text):
    response = sia.polarity_scores(input_text)
    if response['compound'] > 0.5:
        return "I am happy to hear that!"
    elif response['compound'] < -0.5:
        return "I am sorry to hear that!"
    else:
        return "I am neutral on that."
def if_else(input_text):
    if input_text == "how are you":
        return "I am fine, thank you!"
    elif input_text == "what is your name":
        return "My name is Humm, and I am a chatbot."
    elif input_text == "what is your favorite color":
        return "My favorite color is blue."
    elif input_text == "what is your favorite food":
        return "My favorite food is pizza."
    elif input_text == "what is your favorite movie":
        return "My favorite movie is Star Wars."
    elif input_text == "what is your favorite song":
        return "My favorite song is The Sign by Ace of Base."
    elif input_text == "what is your favorite sport":
        return "My favorite sport is basketball."
    elif input_text == "what is your favorite animal":
        return "My favorite animal is a cat."
    elif input_text == "help" or "HELP":
        return help_text()
    else:
        return "I do not understand, please type HELP for a list of commands."

def help_text():
    return "I can answer questions about your life. Here are some examples: \n\n" + \
           "How are you? \n\n" + \
           "What is your name? \n\n" + \
           "What is your favorite color? \n\n" + \
           "What is your favorite food? \n\n" + \
           "What is your favorite movie? \n\n" + \
           "What is your favorite song? \n\n" + \
           "What is your favorite sport? \n\n" + \
           "What is your favorite animal? \n\n" + \
           "If you want to know more about me, type HELP."

def ai_chat(input_text):
    reply = bot.get_response(input_text)
    return reply
