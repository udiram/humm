import json
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import TextSerializer
from .models import Text
from chat import frequency_analysis

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
        return_list = frequency_analysis.main_analysis(text)
        return_list_json = json.dumps(return_list)
        return HttpResponse(return_list_json)