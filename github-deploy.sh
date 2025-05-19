#!/bin/bash

# This script provides the commands to push your portfolio website to GitHub
# Replace Hisokratch101 with your actual GitHub username

# Navigate to your project directory
cd /home/ubuntu/portfolio-website

# Initialize Git repository (if not already initialized)
git init

# Add all files to Git
git add .

# Commit the files
git commit -m "Initial commit of portfolio website"

# Add the GitHub repository as remote
# Replace Hisokratch101 with your actual GitHub username
git remote add origin https://github.com/Hisokratch101/portfolio-website.git

# Push to GitHub
git push -u origin main

# If the above command fails with "error: src refspec main does not match any"
# Try using "master" instead:
# git push -u origin master

# After pushing successfully, deploy to GitHub Pages
pnpm run deploy

echo "Your code has been pushed to GitHub and deployed to GitHub Pages!"
echo "Your site should be available at: https://Hisokratch101.github.io/portfolio-website"
echo "Note: It might take a few minutes for the site to be published."
