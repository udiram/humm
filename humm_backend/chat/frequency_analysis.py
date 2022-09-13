import pandas as pd
from nltk import tokenize
import os

def get_highest_frequency(dic_element):
    result = [key for key, value in dic_element.items() if value == max(dic_element.values())]
    return result

def main_analysis(text):
    print(text)
    path = os.path.join(os.path.dirname(__file__), 'data/' + 'mental_health_keywords.csv')
    df = pd.read_csv(path)

    df_monogram = df[df.n <= 1]

    total_words = tokenize.word_tokenize(text)
    total_words_filter = list(filter(lambda x: x != ','
                                               and x != '.'
                                               and x != '!'
                                               and x != '?', total_words))

    tf = {}
    monograms = dict(zip(df_monogram['ngram'], df_monogram['disorder']))

    for word in total_words_filter:
        if word in monograms:
            disorder = monograms[word]
            if disorder in tf:
                tf[disorder] += 1
            else:
                tf[disorder] = 1

    diagnosis = get_highest_frequency(tf)
    disorder_list = []

    for disorders in diagnosis:
        separated_disorders = disorders.split('-')
        for disorder in separated_disorders:
            if disorder not in disorder_list:
                disorder_list.append(disorder)

    if len(disorder_list) == 0:
        disorder_list.append('general')
    return disorder_list