import json
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TextSerializer
from .models import Text
# from chat import chatbot
from chat import ml_inference

# chatterbot = ChatBot(**settings.CHATTERBOT)
class TextViewSet(viewsets.ModelViewSet):
    queryset = Text.objects.all().order_by('-text_date')
    serializer_class = TextSerializer

@csrf_exempt
def TextRecieved(request):
    if request.method == "POST":
        body_unicode = request.body.decode('utf-8')
        json_data = json.loads(body_unicode)
        text = json_data['text_contents']
        user_id = json_data['text_author']
        return HttpResponse("you submitted {}!".format(text))

@csrf_exempt
def BotResponse(request):
    if request.method == "POST":
        body_unicode = request.body.decode('utf-8')
        json_data = json.loads(body_unicode)
        text = json_data['text_contents']
        user_id = json_data['text_author']

        # return_text = chatbot.sentiment_analysis(text)
        # return_text = chatbot.if_else(text)
        # return_text = chatbot.ai_chat(text)
        return_text = ml_inference.predict_from_text(text)
        return HttpResponse(return_text)