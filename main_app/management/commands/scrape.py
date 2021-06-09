from django.core.management.base import BaseCommand, CommandError
import requests
from bs4 import BeautifulSoup
from main_app.choicesfile import choices_var
class Command(BaseCommand):
    def handle(self,*args,**options):
        print ('/====== Scraping Wikipedia for LIST OF PROGRAMMING LANGUAGES ======/')
        URL = 'https://en.wikipedia.org/wiki/List_of_programming_languages'
        page = requests.get(URL, timeout=10)
        soup = BeautifulSoup(page.content,"html.parser")
        results = soup.find(class_= "mw-parser-output")
        div_cols = results.find_all("div", class_="div-col")
        language_list = []
        language_diff = []

        for c in choices_var:
            language_diff.append(c[1]) # create list of just element 2 of each tuple in choices_var for easy if comparison later

        for div_col in div_cols:
            elements = div_col.find_all("li")
            # print (elements)
            for element in elements:
                # check if element in choices_var. If it is, remove it to show changes...
                if (element.a.text in language_diff):
                    language_diff.remove(element.a.text)
                else:
                    language_diff.append(element.a.text)
                # turns each li into a tuple of ITSELF and itself to be stored in choicesfile.py
                language_list.append((str(element.a.text).replace(" ", "").upper(), str(element.a.text)))
        converted_list = tuple(language_list)

        print(f'''
        Comparing....
            Old data = {len(choices_var)}
            New data = {len(converted_list)}
        ''')


        if(len(choices_var) == len(converted_list)):
            print('It seems there were no changes since the last time scrape was ran...')
            self.stdout.write(self.style.ERROR('Exit without making any changes.'))
        else:
            print('New data was detected! Please pick an option:')
            user = input('replace= y  ||  do nothing= n  ||  check changes= c : ').lower()
            while True:
                if user == 'y':
                    with open("main_app/choicesfile.py","w") as choices:
                        choices.write(f"choices_var = {converted_list}")
                        self.stdout.write(self.style.SUCCESS('Write successful! Remember to migrate changes.'))
                    break
                elif user == 'c':
                    if(len(choices_var) > len(converted_list)):
                        print("\nWikipedia has REMOVED the following items from their list of programming languages:")
                        print(language_diff)
                    if(len(choices_var) < len(converted_list)):
                        print("\nWikipedia has ADDED the following items to their list of programming languages:")
                        print(language_diff)
                elif user == 'n':
                    self.stdout.write(self.style.ERROR('Exit without making any changes.'))
                    break

                user = input('\nreplace: y  ||  do nothing: n  ||  check changes: c :').lower()
