# 📈 Personal-Website

## Project Description

Website: https://joyal-paul.onrender.com </br>
This is my personal website I created using the Django framework in Python, and I used Render.com to deploy it.  
***    

## GUI Design

[![Watch the video](![Thumbnail_for_website](https://github.com/user-attachments/assets/a162c0c4-3f66-4154-80d4-bc89043199e2)
)]([https://www.youtube.com/watch?v=VIDEO_ID](https://www.youtube.com/watch?v=VZun4DXvJtU))

### How to Use

1. ***You must already have a Finnhub account and have an api key. If not, use: https://finnhub.io/register
2. Open your preferred code editor and navigate down using `cd Stock API Sorter\stocks` to enter directory
3. Activate the virtual environment by running: `venv/scripts/activate` (If not working, use: `Unblock-File -Path ".\venv\Scripts\Activate.ps1"`)
5. Install the required libraries by running: `pip install -r requirements.txt`
6. Go into branch that contains code files using `cd code_files`
7. Download "https://marketplace.visualstudio.com/items/?itemName=GrapeCity.gc-excelviewer" extension to see XLSX as CSV file
8. Run Steps  
   - Step 1: `py .\Step_1-api.py` (Gets stock data)  
   - Step 2: `py .\Step_2-spreadsheets.py` (Puts data into chart)  
   - Step 3: `py .\Step_3-stocks.xlsx` (Makes xlsx file, **look at point 5 to view file**)  
   - Step 4: `py .\Step_4-data_chart.py` (Makes histogram of profits/loss)

### Libraries Used

Finnhub, Pandas, Openpyxl, Numpy, Matplotlib, Yfinance

### Extra

If needed, go into range.txt under my_texts folder. The top number is the minimum and the bottom number is the maximum for the companies sorted through so far. I recommend keeping the values at most 60 apart or else the API call limit for Finhubb free tier will be reached, and a error code will be returned. 

