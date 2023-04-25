from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.decorators import login_required
from rest_framework import generics, permissions

from .models import Sample
from .serializers import SampleListSerializers, SampleCreateSerializers


#class SampleListView(APIView):
#    """"Вывод списка проб"""
#
#    def get(self, request):
#        samples = Sample.objects.all()
#        serializer = SampleListSerializers(samples, many=True)
#        return Response(serializer.data)
#
#
#
#class SampleCreateView(APIView):
#    """Добавление образца"""
#
#    def post(self, request):
#        sample = SampleCreateSerializers(data=request.data)
#        #request.data['user'] = request.user.id
#        if sample.is_valid():
#            print("Валид")
#            sample.save()
#        return Response(status=201)

class SampleListView(generics.ListCreateAPIView):
    queryset = Sample.objects.all()
    serializer_class = SampleListSerializers
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class SampleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sample.objects.all()
    serializer_class = SampleListSerializers
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
