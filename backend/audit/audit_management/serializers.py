from rest_framework import serializers
from .models import studentInfo

class AuditManagementSerializer(serializers.ModelSerializer):
    class Meta:
        model = studentInfo
        fields = ('name', 'gender', 'dob', 'age', 'bloodGroup', 'studentClass', 'rollNo', 'section', 'studentAdmNum', 'schoolHouse', 'address', 'phoneNo', 'fathersName', 'mothersName', 'emailId')