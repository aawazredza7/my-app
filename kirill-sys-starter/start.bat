@echo off
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:4173
  py server.py
) else (
  echo Python не найден. Установи Python 3.
  pause
)
