from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AuditManagementSerializer
from .models import studentInfo

class AuditView(viewsets.ModelViewSet):
    
    serializer_class = AuditManagementSerializer
    queryset = studentInfo.objects.all()

