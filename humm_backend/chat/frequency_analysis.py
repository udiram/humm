import pandas as pd
from nltk import tokenize
import os

import nltk
nltk.download('punkt')

def get_highest_frequency(dic_element):
    result = [key for key, value in dic_element.items() if value == max(dic_element.values())]
#   list comprehension to find highest frequency disorders predicted
    return result

def main_analysis(text):
#   load data from csv
    path = os.path.join(os.path.dirname(__file__), 'data/' + 'mental_health_keywords.csv')
    df = pd.read_csv(path)
#   sort by monograms (single letter identifiers)
    df_monogram = df[df.n <= 1]
#   take input text, and tokenize it (split paragraphs and sentences into smaller units that can be more easily assigned meaning)
    total_words = tokenize.word_tokenize(text)
#   filter out and tokenized values from the array that aren't words (brute force method)
#   i, am cool! --> ['i', 'am', 'cool']
    total_words_filter = list(filter(lambda x: x != ','
                                               and x != '.'
                                               and x != '!'
                                               and x != '?', total_words))

    tf = {}
#   create dict of monograms and respective disorders
    monograms = dict(zip(df_monogram['ngram'], df_monogram['disorder']))
#   looping through our array of words
    for word in total_words_filter:
#       check for presence of words in our text and words from dataframe
        if word in monograms:
#           assign to a certain key within the dict (key = word, in monogram dict)
            disordersText = monograms[word]
            separated_disorders = disordersText.split('-')
#           some disorders look like [x-y], we want to return [x,y]
            for disorder in separated_disorders:
#               checking for overlap with the split disorders
#               good way of initializing then adding to that key in tf dict
                if disorder in tf:
                    tf[disorder] += 1
                else:
                    tf[disorder] = 1

    diagnosis = get_highest_frequency(tf)
    
    if (diagnosis == ['general']):
#       if general is most prevalent, ignore it, and check second highest element
        tf.pop("general")
        diagnosis = get_highest_frequency(tf)

    if len(diagnosis) == 0:
#       if we don't find anything, return general
        diagnosis.append('general')
    return diagnosis
