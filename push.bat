@echo off
setlocal enabledelayedexpansion

REM SerebrumAI — stage, commit, and push to GitHub.
REM Vercel auto-deploys from the main branch.

cd /d "%~dp0"

echo.
echo ============================================
echo  Pushing SerebrumAI to GitHub
echo ============================================
echo.

REM Show what's changed
echo === Changes to be committed ===
git status --short
echo.

REM Check if there's anything to commit
git diff --cached --quiet
set staged=%errorlevel%
git diff --quiet
set unstaged=%errorlevel%

if %staged% equ 0 if %unstaged% equ 0 (
    echo Working tree is clean. Nothing to commit.
    echo.
    pause
    exit /b 0
)

REM Prompt for commit message
set "msg="
set /p "msg=Commit message (blank = 'Update site'): "
if "!msg!"=="" set "msg=Update site"

echo.
echo === Staging all changes ===
git add .
if errorlevel 1 (
    echo.
    echo ERROR: git add failed.
    pause
    exit /b 1
)

echo.
echo === Committing ===
git commit -m "!msg!"
if errorlevel 1 (
    echo.
    echo ERROR: git commit failed.
    pause
    exit /b 1
)

echo.
echo === Pushing to GitHub ===
git push origin main
if errorlevel 1 (
    echo.
    echo ERROR: git push failed. Check your network and GitHub credentials.
    pause
    exit /b 1
)

echo.
echo ============================================
echo  Success. Vercel will auto-deploy from main.
echo  Watch: https://vercel.com/dashboard
echo ============================================
echo.
pause
