
from setuptools import setup
from pymongo import MongoClient




class MongoCord:
    def __init__(self,*,connection_string:str,**options):
        self.url = connection_string
    
    @classmethod
    def connect(cls,connection_string:str):
        return (MongoClient(connect=connection_string))
class Test:
    def __init__(self,**op):
        self.name = op.get('name')
        self.cla = op.get('cla')
    
    def printdet(self):
        print(f"Name is {self.name} details is {self.cla}")
    



hel = Test()
hel.printdet()
    
    
    