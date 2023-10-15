from django.contrib import admin
from .models import studentInfo

class AuditManagementAdmin(admin.ModelAdmin):
    list_display = ('name', 'gender', 'dob', 'age', 'bloodGroup', 'studentClass', 'rollNo', 'section', 'studentAdmNum', 'schoolHouse', 'address', 'phoneNo', 'fathersName', 'mothersName', 'emailId')

# Register your models here.

admin.site.register(studentInfo, AuditManagementAdmin)
