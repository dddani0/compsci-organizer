@echo off
echo Starting CompSci Organizer Application...
echo.

REM Change to project root directory
cd /d "D:\GithubRepository\compsci-organizer"

echo Starting React frontend...
cd "src\main\frontend\cno"
start "React Frontend" cmd /c "npm run dev"

echo.
echo Frontend application is starting...
echo Frontend: http://localhost:3000
echo.
echo Press any key to exit...
pause >nul