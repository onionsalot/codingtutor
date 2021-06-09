from django.core.management.base import BaseCommand, CommandError
import requests 
from bs4 import BeautifulSoup


class Command(BaseCommand):
    def handle(self,*args,**options):
        print ('scrape test')
        URL = 'https://en.wikipedia.org/wiki/List_of_programming_languages'
        page = requests.get(URL)
        soup = BeautifulSoup(page.content,"html.parser")

        results = soup.find(class_= "mw-parser-output")
        div_cols = results.find_all("div", class_="div-col")

        for div_col in div_cols:
            elements = div_col.find_all("li")
            # print (elements)
            for element in elements:
                print (element.a.text)

        # print (div_cols)