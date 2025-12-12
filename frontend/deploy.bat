@echo off
echo.
echo ========================================
echo   RateMaster Frontend Deployment
echo ========================================
echo.

REM Check if vercel CLI is installed
where vercel >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Installing Vercel CLI...
    npm install -g vercel
)

REM Check if .env exists
if not exist .env (
    echo Creating .env file...
    echo VITE_API_URL=https://store-rating-system-rose.vercel.app/api > .env
)

REM Install dependencies
echo.
echo Installing dependencies...
call npm install

REM Build the project
echo.
echo Building project...
call npm run build

if %ERRORLEVEL% EQU 0 (
    echo.
    echo Build successful!
    echo.
    echo Deploying to Vercel...
    echo.
    
    REM Deploy to Vercel
    call vercel --prod
    
    echo.
    echo ========================================
    echo   Deployment Complete!
    echo ========================================
    echo.
    echo Next steps:
    echo 1. Copy your frontend URL from above
    echo 2. Add it to backend CORS in backend/src/server.js
    echo 3. Redeploy backend: cd ..\backend ^&^& vercel --prod
    echo.
) else (
    echo.
    echo Build failed. Please fix errors and try again.
    pause
    exit /b 1
)

pause
