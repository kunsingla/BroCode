from django.db import models

class studentInfo(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('Other', 'Other'),
    ]
    name = models.CharField(max_length=120, null=True)
    gender = models.CharField(max_length=5, choices=GENDER_CHOICES)
    dob = models.CharField(max_length=20, null=True)
    age = models.CharField(max_length=2, null=True)
    bloodGroup = models.CharField(max_length=3, null=True)
    studentClass = models.CharField(max_length=20, null=True)
    rollNo = models.CharField(max_length=20, null=True)
    section = models.CharField(max_length=20, null=True)
    studentAdmNum = models.CharField(max_length=20, null=True)
    schoolHouse = models.CharField(max_length=20, null=True)
    address = models.CharField(max_length=20, null=True)
    phoneNo = models.CharField(max_length=20, null=True)
    fathersName = models.CharField(max_length=20, null=True)
    mothersName = models.CharField(max_length=20, null=True)
    emailId = models.CharField(max_length=20, null=True)

    def __str__(self):
        return f"{self}"

# class SchoolInfo(models.Model):
#     name = models.CharField(max_length=120)
#     gender = models.CharField(max_length=1)
#     dob = models.CharField(max_length=20)
#     Age = models.CharField(max_length=2)
