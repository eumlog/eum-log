@echo off
cls
echo [STEP 1] Starting Install Script...
echo Please close VS Code.
pause

echo.
echo [STEP 2] Cleaning old files...
rmdir /s /q node_modules >nul 2>&1
del /f /q package-lock.json >nul 2>&1

echo.
echo [STEP 3] Installing tools...
call npm install
if errorlevel 1 goto error

echo.
echo [STEP 4] Building website...
call npm run build
if errorlevel 1 goto error

echo.
echo [SUCCESS] Opening dist folder...
start dist
pause
exit

:error
echo.
echo [ERROR] Something went wrong.
echo 1. Close VS Code.
echo 2. Try again.
pause