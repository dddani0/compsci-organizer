@echo off
echo Starting CompSci Organizer Application...
echo.

REM Change to project root directory
cd /d "D:\GithubRepository\compsci-organizer"

echo Starting Spring Boot backend...
start "Spring Boot Backend" cmd /c "mvn spring-boot:run"

REM Wait 10 seconds for Spring Boot to start
echo Waiting for backend to start...
timeout /t 10 /nobreak >nul

echo Starting React frontend...
cd "src\main\frontend\cno"
start "React Frontend" cmd /c "npm run dev"

echo.
echo Both applications are starting...
echo Backend: http://localhost:8080
echo Frontend: http://localhost:3000
echo.
echo Press any key to exit...
pause >nul