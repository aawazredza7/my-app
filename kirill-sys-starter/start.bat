@echo off
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:4173
  py -m http.server 4173
) else (
  echo Python не найден. Установи Python 3 или запусти локальный сервер другим способом.
  pause
)
